import { Brain, Search, Database, Globe, FileText, CheckCircle2, Loader2, ChevronDown, ChevronUp, Filter, TrendingUp, FileSearch } from 'lucide-react';
import { useState } from 'react';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses } from '../lib/theme-utils';
import { Button } from './ui/button';

export interface AgentStep {
  id: string;
  type: 'reasoning' | 'planning' | 'querying' | 'synthesis' | 'filtering' | 'scoring' | 'analysis' | 'drafting';
  title: string;
  content: string;
  source?: string;
  status: 'pending' | 'active' | 'complete' | 'in-progress';
  icon?: 'sharepoint' | 'internet' | 'database' | 'document' | 'workday' | 'hansard' | 'web' | 'gebiz';
}

interface AgentProcessProps {
  steps: AgentStep[];
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  title?: string;
  isLatest?: boolean;
}

export function AgentProcess({ steps, colorTheme, fontStyle, title, isLatest = true }: AgentProcessProps) {
  const theme = getThemeClasses(colorTheme);
  const [isBoxCollapsed, setIsBoxCollapsed] = useState(!isLatest);

  const getStepIcon = (step: AgentStep) => {
    if (step.type === 'reasoning') {
      return <Brain className="w-3.5 h-3.5" />;
    } else if (step.type === 'planning') {
      return <FileText className="w-3.5 h-3.5" />;
    } else if (step.type === 'synthesis') {
      return <FileSearch className="w-3.5 h-3.5" />;
    } else if (step.type === 'filtering') {
      return <Filter className="w-3.5 h-3.5" />;
    } else if (step.type === 'scoring') {
      return <TrendingUp className="w-3.5 h-3.5" />;
    } else if (step.type === 'analysis') {
      return <Search className="w-3.5 h-3.5" />;
    } else if (step.type === 'drafting') {
      return <FileText className="w-3.5 h-3.5" />;
    } else if (step.type === 'querying') {
      if (step.icon === 'sharepoint') return <Database className="w-3.5 h-3.5" />;
      if (step.icon === 'internet') return <Globe className="w-3.5 h-3.5" />;
      if (step.icon === 'database') return <Database className="w-3.5 h-3.5" />;
      if (step.icon === 'document') return <FileText className="w-3.5 h-3.5" />;
      if (step.icon === 'workday') return <Database className="w-3.5 h-3.5" />;
      if (step.icon === 'hansard') return <FileText className="w-3.5 h-3.5" />;
      if (step.icon === 'web') return <Globe className="w-3.5 h-3.5" />;
      if (step.icon === 'gebiz') return <Database className="w-3.5 h-3.5" />;
      return <Search className="w-3.5 h-3.5" />;
    }
    return <Search className="w-3.5 h-3.5" />;
  };

  const getIconColor = (step: AgentStep) => {
    if (step.type === 'reasoning') return 'text-purple-600 dark:text-purple-400';
    if (step.type === 'planning') return 'text-blue-600 dark:text-blue-400';
    if (step.type === 'querying') return 'text-blue-600 dark:text-blue-400';
    if (step.type === 'synthesis') return 'text-green-600 dark:text-green-400';
    if (step.type === 'filtering') return 'text-orange-600 dark:text-orange-400';
    if (step.type === 'scoring') return 'text-green-600 dark:text-green-400';
    if (step.type === 'analysis') return 'text-green-600 dark:text-green-400';
    if (step.type === 'drafting') return 'text-amber-600 dark:text-amber-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getSourceBadgeColor = (icon?: string) => {
    if (icon === 'sharepoint') return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
    if (icon === 'internet') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    if (icon === 'database') return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
    if (icon === 'document') return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    if (icon === 'workday') return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
    if (icon === 'hansard') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    if (icon === 'web') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
    if (icon === 'gebiz') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    return 'bg-gray-100 text-gray-700';
  };

  const [expandedSteps, setExpandedSteps] = useState<string[]>([]);

  const toggleStep = (id: string) => {
    setExpandedSteps((prev) => {
      if (prev.includes(id)) {
        return prev.filter((stepId) => stepId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  if (steps.length === 0) return null;

  // Calculate stats for summary
  const completedSteps = steps.filter(s => s.status === 'complete' || s.status === 'in-progress').length;
  const uniqueSources = [...new Set(steps.filter(s => s.source).map(s => s.source))];

  return (
    <div className={`border rounded-lg ${theme.separator} bg-gray-50/50 dark:bg-gray-900/20`}>
      {/* Collapsible Header */}
      <button
        onClick={() => setIsBoxCollapsed(!isBoxCollapsed)}
        className="w-full flex items-center justify-between gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            <span className={`text-[10px] ${theme.navItem}`}>
              {completedSteps} steps completed
            </span>
          </div>
          {uniqueSources.length > 0 && (
            <>
              <span className={`text-[10px] ${theme.navItem}`}>•</span>
              <span className={`text-[10px] ${theme.navItem}`}>
                {uniqueSources.length} source{uniqueSources.length > 1 ? 's' : ''} queried
              </span>
            </>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 ${theme.navItem} transition-transform ${isBoxCollapsed ? '' : 'rotate-180'}`} />
      </button>

      {/* Expandable Content */}
      {!isBoxCollapsed && (
        <div className="px-3 pb-3 pt-0 border-t border-gray-200 dark:border-gray-700">
          {/* Compact Timeline */}
          <div className="space-y-1 mt-3">
            {steps.map((step, index) => {
              const isExpanded = expandedSteps.includes(step.id);
              const isLastStep = index === steps.length - 1;
              
              return (
                <div key={step.id} className="relative">
                  {/* Timeline connector line */}
                  {!isLastStep && (
                    <div className={`absolute left-[7px] top-[18px] w-[1px] h-[calc(100%+4px)] bg-gray-300 dark:bg-gray-700`} />
                  )}
                  
                  {/* Step row */}
                  <button
                    onClick={() => toggleStep(step.id)}
                    className={`relative w-full flex items-start gap-2 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-left group`}
                  >
                    {/* Icon with background */}
                    <div className={`flex-shrink-0 relative z-10 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 flex items-center justify-center ${getIconColor(step)}`}>
                      {step.status === 'complete' ? (
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      ) : step.status === 'active' || step.status === 'in-progress' ? (
                        <Loader2 className="w-2.5 h-2.5 animate-spin" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 min-w-0 pt-[1px]">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[10px] ${getIconColor(step)}`}>
                          {getStepIcon(step)}
                        </span>
                        <h4 className={`text-[10px] ${theme.title} leading-tight`}>
                          {step.title}
                        </h4>
                        {step.source && (
                          <span className={`text-[8px] px-1 py-0.5 rounded ${getSourceBadgeColor(step.icon)}`}>
                            {step.source}
                          </span>
                        )}
                        <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''} opacity-0 group-hover:opacity-100`} />
                      </div>
                      
                      {/* Expanded content */}
                      {isExpanded && (
                        <p className={`text-[9px] ${theme.navItem} leading-relaxed mt-1.5 pl-0`}>
                          {step.content}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}