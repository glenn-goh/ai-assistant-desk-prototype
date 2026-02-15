import {
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Search,
  Database,
  FileText,
  Bot,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import classes from './ReasoningBlock.module.css';

// ---------- Icon map (5 curated icons) ----------

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,       // analyze, evaluate, filter, plan
  database: Database,   // connect, retrieve, send, API calls
  'file-text': FileText, // draft, format, generate documents
  bot: Bot,             // assistant delegation
  wrench: Wrench,       // tool usage
};

// ---------- Public types ----------

export interface ThinkingStep {
  id: string;
  type: 'reasoning' | 'tool_call' | 'assistant_call';
  content: string;
  description?: string;
  icon?: string;
  toolName?: string;
  toolInput?: string;
  toolResult?: string;
  assistantName?: string;
  assistantId?: string;
  assistantTask?: string;
  assistantResult?: string;
  childSteps?: ThinkingStep[];
  timestamp?: number;
}

export type ReasoningItem = string | { text: string; icon: string; description?: string };

// ---------- Props ----------

interface ReasoningBlockProps {
  id: number;
  isExpanded: boolean;
  onToggle: (id: number) => void;
  reasoning?: ReasoningItem[];
  isLive?: boolean;
  liveLabel?: string;
  doneSummary?: string;
  summary?: string;
  status?: 'thinking' | 'done' | 'error';
  steps?: ThinkingStep[];
  tags?: string[];
}

// ---------- Helpers ----------

function resolveSteps(
  steps?: ThinkingStep[],
  reasoning?: ReasoningItem[],
): ThinkingStep[] {
  if (steps && steps.length > 0) return steps;
  if (reasoning && reasoning.length > 0) {
    return reasoning.map((item, i) => {
      if (typeof item === 'string') {
        return { id: `legacy-${i}`, type: 'reasoning' as const, content: item };
      }
      return {
        id: `legacy-${i}`,
        type: 'reasoning' as const,
        content: item.text,
        description: item.description,
        icon: item.icon,
      };
    });
  }
  return [];
}

function resolveSummary(
  doneSummary?: string,
  summary?: string,
  isLive?: boolean,
  liveLabel?: string,
  resolvedSteps?: ThinkingStep[],
): string {
  if (!isLive && doneSummary) return doneSummary;
  if (summary) return summary;
  if (isLive) {
    if (resolvedSteps && resolvedSteps.length > 0) {
      return resolvedSteps[resolvedSteps.length - 1].content;
    }
    return liveLabel || 'Processing...';
  }
  return 'Reasoning';
}

function resolveStatus(
  status?: 'thinking' | 'done' | 'error',
  isLive?: boolean,
): 'thinking' | 'done' | 'error' {
  if (status) return status;
  return isLive ? 'thinking' : 'done';
}

// ---------- Sub-components ----------

function StepIcon({ iconName }: { iconName?: string }) {
  const IconComponent = iconName ? ICON_MAP[iconName] : null;
  if (IconComponent) {
    return <IconComponent size={14} color="var(--mantine-color-gray-4)" style={{ flexShrink: 0 }} />;
  }
  return <span className={classes.bulletDot} />;
}

function StepItem({
  step,
  isLastLive,
  showConnector,
}: {
  step: ThinkingStep;
  isLastLive?: boolean;
  showConnector?: boolean;
}) {
  const shimmerClass = isLastLive ? classes.shimmerText : '';

  const iconCol = (iconName?: string) => (
    <div className={classes.iconCol}>
      <StepIcon iconName={iconName} />
      {showConnector && <div className={classes.connector} />}
    </div>
  );

  if (step.type === 'tool_call') {
    return (
      <div className={classes.stepRow}>
        {iconCol(step.icon || 'database')}
        <div className={`${classes.stepContent} ${classes.stepRowText}`}>
          <span className={classes.stepBold}>{step.toolName || 'Tool'}</span>
          {step.content && <span style={{ marginLeft: 4 }}>{step.content}</span>}
          {step.description && (
            <p className={classes.stepDescription}>{step.description}</p>
          )}
          {step.toolResult && (
            <div className={classes.stepResult}>{step.toolResult}</div>
          )}
        </div>
      </div>
    );
  }

  if (step.type === 'assistant_call') {
    return (
      <div className={classes.stepRow}>
        {iconCol('bot')}
        <div className={`${classes.stepContent} ${classes.stepRowText}`}>
          <span className={classes.stepBold}>{step.assistantName || 'Assistant'}</span>
          {step.assistantTask && <span style={{ marginLeft: 4 }}>— {step.assistantTask}</span>}
          {step.description && (
            <p className={classes.stepDescription}>{step.description}</p>
          )}
          {step.assistantResult && (
            <div className={classes.stepResult}>{step.assistantResult}</div>
          )}
          {step.childSteps && step.childSteps.length > 0 && (
            <div className={classes.childSteps}>
              {step.childSteps.map((child, ci) => (
                <StepItem
                  key={child.id}
                  step={child}
                  showConnector={ci < step.childSteps!.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // reasoning step
  return (
    <div className={`${classes.stepRow} ${classes.stepRowText}`}>
      {iconCol(step.icon)}
      <div className={classes.stepContent}>
        <span className={`${classes.stepBold} ${shimmerClass}`}>{step.content}</span>
        {step.description && (
          <p className={classes.stepDescription}>{step.description}</p>
        )}
      </div>
    </div>
  );
}

// ---------- Main component ----------

export function ReasoningBlock({
  id,
  isExpanded,
  onToggle,
  reasoning,
  isLive = false,
  liveLabel,
  doneSummary,
  summary,
  status,
  steps,
  tags,
}: ReasoningBlockProps) {
  const resolvedSteps = resolveSteps(steps, reasoning);
  const resolvedStatus = resolveStatus(status, isLive);
  const resolvedSummary = resolveSummary(doneSummary, summary, isLive, liveLabel, resolvedSteps);
  const isThinking = resolvedStatus === 'thinking';

  return (
    <div className={classes.wrapper}>
      {/* Summary Bar — plain text + arrow when collapsed */}
      <button
        onClick={() => onToggle(id)}
        aria-expanded={isExpanded}
        className={classes.summaryButton}
      >
        {/* Tags */}
        {!isThinking && tags && tags.length > 0 && (
          <span className={classes.tagsGroup}>
            {tags.map((tag, i) => (
              <span key={i} className={classes.tag}>{tag}</span>
            ))}
          </span>
        )}

        {/* Summary text — shimmer when thinking */}
        <span className={`${classes.summaryText} ${isThinking ? classes.shimmerText : ''}`}>
          {resolvedSummary}{!isThinking && resolvedSteps.length > 0 ? ` (${resolvedSteps.length} steps)` : ''}
        </span>

        {/* Chevron */}
        <span className={classes.chevron} style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          <ChevronRight size={16} />
        </span>

      </button>

      {/* Detail Panel — animated accordion */}
      <div
        role="region"
        aria-hidden={!isExpanded}
        className={`${classes.detailPanel} ${isExpanded ? classes.detailPanelOpen : classes.detailPanelClosed}`}
      >
        <div className={classes.detailPanelInner}>
          <div className={classes.detailContent}>
            {resolvedSteps.length > 0 && (
              <div>
                {resolvedSteps.map((step, i) => (
                  <StepItem
                    key={step.id}
                    step={step}
                    isLastLive={isLive && i === resolvedSteps.length - 1}
                    showConnector={i < resolvedSteps.length - 1 || resolvedStatus !== 'thinking'}
                  />
                ))}
              </div>
            )}

            {/* Final status step — "Done" or "Failed" as last timeline item */}
            <div className={classes.statusRow} aria-live="polite">
              {isThinking ? (
                <span className={`${classes.statusThinking} ${classes.shimmerText}`}>Thinking...</span>
              ) : resolvedStatus === 'done' ? (
                <>
                  <div className={classes.statusIconCol}>
                    <CheckCircle2 size={14} color="var(--mantine-color-gray-4)" />
                  </div>
                  <span className={classes.statusDone}>Done</span>
                </>
              ) : (
                <>
                  <div className={classes.statusIconCol}>
                    <AlertTriangle size={14} color="var(--mantine-color-red-5)" />
                  </div>
                  <span className={classes.statusError}>Failed</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
