// Rich response sequences for interactive leave application triggered by keyword detection.
// Returns BotResponse[] arrays compatible with ChatSimulatorView's processing pipeline.

interface ThinkingResponse {
  type: "thinking";
  thoughts: string[];
  timingMs?: number;
  reasoning?: Array<string | { text: string; icon: string; description?: string }>;
  doneSummary?: string;
  tags?: string[];
}

interface TextResponse {
  type: "text";
  content: string;
  delayMs?: number;
}

interface MultiDecisionResponse {
  type: "multiDecision";
  question: string;
  options: Array<{ label: string; value: string }>;
}

interface DecisionResponse {
  type: "decision";
  question: string;
  options: Array<{ label: string; value: string; variant?: 'primary' | 'secondary' }>;
}

type BotResponse = ThinkingResponse | TextResponse | MultiDecisionResponse | DecisionResponse;

interface LeaveApplyResponses {
  preDecision: BotResponse[];
  onLeaveTypeSelected: (leaveType: string, dateRange: string) => BotResponse[];
  onConfirm: (leaveType: string, dateRange: string) => BotResponse[];
  onCancel: BotResponse[];
}

const LEAVE_POOLS: Record<string, { label: string; total: number; used: number }> = {
  vacation: { label: 'Vacation Leave', total: 18, used: 5 },
  childcare: { label: 'Child Care Leave', total: 6, used: 1 },
  parentscare: { label: 'Parents Care Leave', total: 3, used: 0 },
};

export function getDefaultLeaveDateRange(): string {
  const start = new Date();
  start.setDate(start.getDate() + 2);
  const end = new Date();
  end.setDate(end.getDate() + 4);
  return `${formatDate(start)} to ${formatDate(end)}`;
}

function formatDate(date: Date): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = String(date.getDate()).padStart(2, '0');
  return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function countBusinessDays(dateRange: string): number {
  const parts = dateRange.split(' to ');
  if (parts.length !== 2) return 3;
  const parseDate = (s: string) => new Date(s);
  const start = parseDate(parts[0].trim());
  const end = parseDate(parts[1].trim());
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return 3;
  let count = 0;
  const current = new Date(start);
  while (current <= end) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) count++;
    current.setDate(current.getDate() + 1);
  }
  return count || 1;
}

export function getLeaveApplyResponses(dateRange?: string): LeaveApplyResponses {
  const resolvedDateRange = dateRange || getDefaultLeaveDateRange();

  return {
    preDecision: [
      {
        type: "text",
        content: `Sure, I'll help you apply for leave for **${resolvedDateRange}**. Let me check your leave balances.`,
        delayMs: 300,
      },
      {
        type: "thinking",
        thoughts: [],
        timingMs: 11250,
        reasoning: [
          { text: "Analyzing leave request...", icon: "search", description: `Parsing the user's message to extract leave details and date preferences.` },
          { text: "Identifying leave system for your organisation", icon: "search", description: "Determining the appropriate leave management system configured for your agency." },
          { text: "Connecting to Workday", icon: "database", description: "Establishing a secure connection to Workday HR system to retrieve your leave entitlements." },
          { text: "Checking whether there are available leave...", icon: "database", description: "Querying your leave balances and verifying eligibility for the requested dates." },
          { text: "Awaiting user response", icon: "search", description: "Leave balances retrieved successfully. Waiting for user to select the leave type." },
        ],
        doneSummary: "Leave balances retrieved — awaiting selection",
        tags: ["1 tool"],
      },
      {
        type: "multiDecision",
        question: `I've checked your leave balances. Please select which leave pool you'd like to use for ${resolvedDateRange}:`,
        options: [
          { label: `Vacation Leave (${LEAVE_POOLS.vacation.total - LEAVE_POOLS.vacation.used} days remaining)`, value: "vacation" },
          { label: `Child Care Leave (${LEAVE_POOLS.childcare.total - LEAVE_POOLS.childcare.used} days remaining)`, value: "childcare" },
          { label: `Parents Care Leave (${LEAVE_POOLS.parentscare.total - LEAVE_POOLS.parentscare.used} days remaining)`, value: "parentscare" },
        ],
      },
    ],

    onLeaveTypeSelected: (leaveType: string, dateRange: string) => {
      const pool = LEAVE_POOLS[leaveType] || LEAVE_POOLS.vacation;
      const days = countBusinessDays(dateRange);
      const remaining = pool.total - pool.used - days;

      return [
        {
          type: "text",
          content: `Applying **${pool.label}** from **${dateRange}** (${days} day${days > 1 ? 's' : ''}).\n\nYou currently have **${pool.total - pool.used} days** in your ${pool.label} pool. After this application, you will have **${remaining} day${remaining !== 1 ? 's' : ''}** remaining.`,
          delayMs: 400,
        },
        {
          type: "decision",
          question: "Would you like to proceed with this leave application?",
          options: [
            { label: "Yes, apply", value: "proceed", variant: "primary" as const },
            { label: "Cancel", value: "cancel", variant: "secondary" as const },
          ],
        },
      ];
    },

    onConfirm: (leaveType: string, dateRange: string) => {
      const pool = LEAVE_POOLS[leaveType] || LEAVE_POOLS.vacation;
      const days = countBusinessDays(dateRange);
      const remaining = pool.total - pool.used - days;

      return [
        {
          type: "text",
          content: `Your **${pool.label}** has been successfully applied for **${dateRange}** (${days} day${days > 1 ? 's' : ''}).\n\nYou now have **${remaining} day${remaining !== 1 ? 's' : ''}** remaining in your ${pool.label} pool. A confirmation has been sent to your email and your supervisor has been notified.`,
          delayMs: 400,
        },
      ];
    },

    onCancel: [
      {
        type: "text",
        content: "Leave application cancelled. Let me know if you'd like to apply for leave on different dates or if there's anything else I can help with.",
        delayMs: 300,
      },
    ],
  };
}
