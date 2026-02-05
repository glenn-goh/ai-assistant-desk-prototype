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

function StepIcon({ iconName, className }: { iconName?: string; className?: string }) {
  const IconComponent = iconName ? ICON_MAP[iconName] : null;
  if (IconComponent) {
    return <IconComponent className={className || 'w-3.5 h-3.5 text-gray-400 shrink-0'} />;
  }
  return <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 mt-1.5" />;
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
  const shimmerClass = isLastLive ? 'shimmer-text' : '';

  const iconCol = (iconName?: string) => (
    <div className="flex flex-col items-center w-5 shrink-0 pt-1">
      <StepIcon iconName={iconName} className="w-3.5 h-3.5 text-gray-400 shrink-0" />
      {showConnector && <div className="flex-1 w-px bg-gray-200 mt-1" />}
    </div>
  );

  if (step.type === 'tool_call') {
    return (
      <div className="flex items-stretch gap-2">
        {iconCol(step.icon || 'database')}
        <div className="text-sm text-gray-500 pt-0.5">
          <span className="font-semibold">{step.toolName || 'Tool'}</span>
          {step.content && <span className="ml-1">{step.content}</span>}
          {step.description && (
            <p className="text-sm text-gray-500 mt-0.5 pb-5 leading-relaxed">{step.description}</p>
          )}
          {step.toolResult && (
            <div className="mt-1 text-xs text-gray-400 line-clamp-2">{step.toolResult}</div>
          )}
        </div>
      </div>
    );
  }

  if (step.type === 'assistant_call') {
    return (
      <div className="flex items-stretch gap-2">
        {iconCol('bot')}
        <div className="text-sm text-gray-500 pt-0.5">
          <span className="font-semibold">{step.assistantName || 'Assistant'}</span>
          {step.assistantTask && <span className="ml-1">— {step.assistantTask}</span>}
          {step.description && (
            <p className="text-sm text-gray-500 mt-0.5 pb-5 leading-relaxed">{step.description}</p>
          )}
          {step.assistantResult && (
            <div className="mt-1 text-xs text-gray-400 line-clamp-2">{step.assistantResult}</div>
          )}
          {step.childSteps && step.childSteps.length > 0 && (
            <div className="mt-1 ml-2 border-l-2 border-gray-200 pl-3 space-y-1">
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
    <div className="flex items-stretch gap-2 text-sm text-gray-500">
      {iconCol(step.icon)}
      <div className="pt-0.5">
        <span className={`font-semibold ${shimmerClass}`}>{step.content}</span>
        {step.description && (
          <p className="text-sm text-gray-500 mt-0.5 pb-5 leading-relaxed">{step.description}</p>
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
    <div className="flex flex-col mb-4">
      {/* Summary Bar — plain text + arrow when collapsed */}
      <button
        onClick={() => onToggle(id)}
        aria-expanded={isExpanded}
        className="flex items-center gap-2 w-full py-1 text-left hover:opacity-80 transition-opacity"
      >
        {/* Tags */}
        {!isThinking && tags && tags.length > 0 && (
          <span className="flex items-center gap-1.5 shrink-0">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium text-gray-500 bg-gray-100 border border-gray-300 rounded-full px-2.5 py-0.5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </span>
        )}

        {/* Summary text — shimmer when thinking */}
        <span className={`text-base font-medium italic text-gray-500 truncate min-w-0 ${isThinking ? 'shimmer-text' : ''}`}>
          {resolvedSummary}{!isThinking && resolvedSteps.length > 0 ? ` (${resolvedSteps.length} steps)` : ''}
        </span>

        {/* Chevron */}
        <span className="shrink-0 text-gray-400 transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          <ChevronRight className="w-4 h-4" />
        </span>

      </button>

      {/* Detail Panel — animated accordion */}
      <div
        role="region"
        aria-hidden={!isExpanded}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-2 p-5 bg-white rounded-lg border border-gray-300">
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
            <div className="flex items-center gap-2" aria-live="polite">
              {isThinking ? (
                <span className="text-sm text-gray-400 shimmer-text ml-7">Thinking...</span>
              ) : resolvedStatus === 'done' ? (
                <>
                  <div className="flex items-center justify-center w-5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Done</span>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center w-5 shrink-0">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  </div>
                  <span className="text-sm text-red-500 font-medium">Failed</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
