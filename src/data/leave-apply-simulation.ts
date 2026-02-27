// Simulated chat for the Apply Leave assistant.
// Uses clickable decision/multiDecision cards — the simulator pauses at these
// and resumes when the user clicks an option.

import { getDefaultLeaveDateRange } from './interactive-leave-apply';

const LEAVE_POOLS = {
  vacation: { label: 'Vacation Leave', total: 18, used: 5 },
  childcare: { label: 'Child Care Leave', total: 6, used: 1 },
  parentscare: { label: 'Parents Care Leave', total: 3, used: 0 },
};

function countBusinessDays(dateRange: string): number {
  const parts = dateRange.split(' to ');
  if (parts.length !== 2) return 3;
  const start = new Date(parts[0].trim());
  const end = new Date(parts[1].trim());
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

export function getLeaveApplySimulationData() {
  const dateRange = getDefaultLeaveDateRange();
  const pool = LEAVE_POOLS.vacation;
  const days = countBusinessDays(dateRange);
  const remaining = pool.total - pool.used - days;

  return {
    id: "leave-apply-simulation",
    title: "Apply for leave",
    assistantName: "HR Assistant",
    description: "Apply for leave through Workday",
    colorScheme: "indigo" as const,
    messages: [
      // 1. Opening message from assistant
      {
        role: "bot" as const,
        content: [
          {
            type: "text" as const,
            content: "Hello! I'm the HR Assistant. I can help you apply for leave through Workday. Just let me know the dates you'd like to take off and I'll handle the rest.",
          },
        ],
      },
      // 2. Pre-filled user message
      {
        role: "user" as const,
        content: {
          text: `I'd like to apply for leave from ${dateRange}`,
        },
      },
      // 3. Bot reasoning + text + multiDecision
      {
        role: "bot" as const,
        content: [
          {
            type: "text" as const,
            content: `Sure, I'll help you apply for leave for **${dateRange}**. Let me check your leave balances.`,
            delayMs: 300,
          },
          {
            type: "thinking" as const,
            thoughts: [],
            timingMs: 11250,
            reasoning: [
              { text: "Analyzing leave request...", icon: "search", description: "Parsing the user's message to extract leave details and date preferences." },
              { text: "Identifying leave system for your organisation", icon: "search", description: "Determining the appropriate leave management system configured for your agency." },
              { text: "Connecting to Workday", icon: "database", description: "Establishing a secure connection to Workday HR system to retrieve your leave entitlements." },
              { text: "Checking whether there are available leave...", icon: "database", description: "Querying your leave balances and verifying eligibility for the requested dates." },
              { text: "Awaiting user response", icon: "search", description: "Leave balances retrieved successfully. Waiting for user to select the leave type." },
            ],
            doneSummary: "Leave balances retrieved — awaiting selection",
          },
          {
            type: "multiDecision" as const,
            question: `I've checked your leave balances. Please select which leave pool you'd like to use for ${dateRange}:`,
            options: [
              { label: `Vacation Leave (${pool.total - pool.used} days remaining)`, value: "vacation" },
              { label: `Child Care Leave (${LEAVE_POOLS.childcare.total - LEAVE_POOLS.childcare.used} days remaining)`, value: "childcare" },
              { label: `Parents Care Leave (${LEAVE_POOLS.parentscare.total - LEAVE_POOLS.parentscare.used} days remaining)`, value: "parentscare" },
            ],
          },
        ],
      },
      // 4. Bot confirmation text + decision card (shown after multiDecision selection)
      {
        role: "bot" as const,
        content: [
          {
            type: "text" as const,
            content: `Applying **${pool.label}** from **${dateRange}** (${days} day${days > 1 ? 's' : ''}).\n\nYou currently have **${pool.total - pool.used} days** in your ${pool.label} pool. After this application, you will have **${remaining} day${remaining !== 1 ? 's' : ''}** remaining.`,
            delayMs: 400,
          },
          {
            type: "decision" as const,
            question: "Would you like to proceed with this leave application?",
            options: [
              { label: "Yes, apply", value: "proceed", variant: "primary" as const },
              { label: "Cancel", value: "cancel", variant: "secondary" as const },
            ],
          },
        ],
      },
      // 5. Bot success message (shown after decision confirmation)
      {
        role: "bot" as const,
        content: [
          {
            type: "text" as const,
            content: `Your **${pool.label}** has been successfully applied for **${dateRange}** (${days} day${days > 1 ? 's' : ''}).\n\nYou now have **${remaining} day${remaining !== 1 ? 's' : ''}** remaining in your ${pool.label} pool. A confirmation has been sent to your email and your supervisor has been notified.`,
            delayMs: 400,
          },
        ],
      },
    ],
  };
}
