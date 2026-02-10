// Rich response sequences for interactive diagram/flowchart triggered by keyword detection.
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

interface MermaidResponse {
  type: "mermaid";
  chart: string;
  delayMs?: number;
}

interface ArtifactResponse {
  type: "artifact";
  title: string;
  fileType: string;
  description: string;
  content: string;
  delayMs?: number;
  interactive?: boolean;
}

type BotResponse = ThinkingResponse | TextResponse | MermaidResponse | ArtifactResponse;

const mermaidChart = `flowchart TD
    A[Job Posting] --> B[Applications Received]
    B --> C{Meets Minimum Qualifications?}
    C -- No --> D[Rejected]
    C -- Yes --> E[Background Check]
    E --> F{Passed?}
    F -- No --> D
    F -- Yes --> G[Interview]
    G --> H{Selected?}
    H -- No --> D
    H -- Yes --> I[Offer & Onboarding]`;

export function getDiagramInChatResponses(): BotResponse[] {
  return [
    {
      type: "thinking",
      thoughts: [],
      timingMs: 2500,
      reasoning: [
        { text: "Analyzing request for diagram...", icon: "search", description: "Parsing the user's message to identify the type of diagram or flowchart needed." },
        { text: "Identified flowchart request", icon: "search", description: "The user is asking for a process flow diagram related to HR screening and recruitment." },
        { text: "Using the Flowchart & Diagram tool...", icon: "wrench", description: "Generating a visual flowchart using the diagram rendering engine." },
        { text: "Rendering diagram inline", icon: "file-text", description: "Preparing the flowchart for inline display within the chat." },
      ],
      doneSummary: "Diagram generated",
      tags: ["1 tool"],
    },
    {
      type: "text",
      content: "Here's a flowchart showing the HR screening and recruitment process:",
      delayMs: 400,
    },
    {
      type: "mermaid",
      chart: mermaidChart,
      delayMs: 300,
    },
    {
      type: "text",
      content: "This flowchart outlines the standard HR screening workflow. It starts with the job posting and receiving applications, then checks if candidates meet minimum qualifications. Qualified candidates proceed through a background check and interview stage, with each step having a pass/fail decision point. Successful candidates receive an offer and proceed to onboarding.",
      delayMs: 300,
    },
  ];
}

export function getDiagramInCanvasResponses(): BotResponse[] {
  return [
    {
      type: "thinking",
      thoughts: [],
      timingMs: 2500,
      reasoning: [
        { text: "Analyzing request for diagram...", icon: "search", description: "Parsing the user's message to identify the type of diagram or flowchart needed." },
        { text: "Identified flowchart request", icon: "search", description: "The user is asking for a process flow diagram related to HR screening and recruitment." },
        { text: "Using the Flowchart & Diagram tool...", icon: "wrench", description: "Generating a visual flowchart using the diagram rendering engine." },
        { text: "Preparing canvas artifact", icon: "file-text", description: "Packaging the diagram as an artifact for display in the canvas panel." },
      ],
      doneSummary: "Diagram generated",
      tags: ["1 tool"],
    },
    {
      type: "text",
      content: "I've generated a flowchart showing the HR screening and recruitment process. You can view and interact with it in the canvas panel on the right.",
      delayMs: 400,
    },
    {
      type: "artifact" as const,
      title: "HR Screening Process",
      fileType: "chart",
      description: "HR screening and recruitment flowchart",
      content: mermaidChart,
      delayMs: 300,
    },
  ];
}
