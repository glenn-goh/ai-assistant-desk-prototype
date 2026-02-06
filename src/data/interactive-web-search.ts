// Rich response sequences for interactive web search triggered by keyword detection.
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

interface DecisionResponse {
  type: "decision";
  question: string;
  options: Array<{ label: string; value: string; variant?: 'primary' | 'secondary' }>;
}

type BotResponse = ThinkingResponse | TextResponse | DecisionResponse;

interface WebSearchResponses {
  preDecision: BotResponse[];
  onProceed: BotResponse[];
  onCancel: BotResponse[];
}

export function getWebSearchResponses(searchTerm: string): WebSearchResponses {
  return {
    preDecision: [
      {
        type: "thinking",
        thoughts: [],
        timingMs: 2000,
        reasoning: [
          { text: "Analyzing request...", icon: "search", description: `Parsing the user's message to identify the search intent and key terms for "${searchTerm}".` },
          { text: `Detected web search intent for "${searchTerm}"`, icon: "search", description: "Classifying the request as a web search query and extracting relevant keywords for optimal results." },
          { text: "Identifying relevant external sources to query", icon: "database", description: "Selecting the most appropriate external data sources and search endpoints to retrieve comprehensive results." },
          { text: "Requesting user confirmation to proceed...", icon: "search", description: "Web search requires querying external sources. Asking the user for approval before proceeding." },
        ],
        doneSummary: "Ready to search \u2014 awaiting confirmation",
      },
      {
        type: "decision",
        question: `I'd like to search the web for "${searchTerm}". This will query external sources. Would you like to proceed?`,
        options: [
          { label: "Proceed with search", value: "proceed", variant: "primary" },
          { label: "Cancel", value: "cancel", variant: "secondary" },
        ],
      },
    ],
    onProceed: [
      {
        type: "thinking",
        thoughts: [],
        timingMs: 3000,
        reasoning: [
          { text: "Web Search", icon: "search", description: `Using the web search tool to find results for "${searchTerm}"` },
          { text: "Retrieving results", icon: "database", description: "Fetching data from multiple external sources" },
          { text: "Analyzing results", icon: "search", description: "Evaluating relevance and reliability of each source" },
          { text: "Cross-referencing", icon: "file-text", description: "Verifying information across multiple sources" },
          { text: "Compiling findings", icon: "file-text", description: "Organizing results into a coherent summary" },
        ],
        doneSummary: "Web search complete",
        tags: ["1 tool"],
      },
      {
        type: "text",
        content: getSearchResultsContent(searchTerm),
        delayMs: 400,
      },
    ],
    onCancel: [
      {
        type: "text",
        content: "Search cancelled. Let me know if you'd like to try a different approach or if there's anything else I can help with.",
        delayMs: 300,
      },
    ],
  };
}

function getSearchResultsContent(searchTerm: string): string {
  return `Here's what I found about **"${searchTerm}"**:

**Key Findings:**

1. **Government Resources** — Official government portals provide comprehensive guides and eligibility criteria for ${searchTerm}. These are regularly updated and include application procedures.

2. **Recent Policy Updates** — Several policy changes were announced in the past quarter that may affect how ${searchTerm} is administered and who qualifies.

3. **Community Resources** — Local community organisations offer assistance programmes and advisory services related to ${searchTerm}.

4. **FAQs & Guides** — Multiple agencies have published step-by-step guides explaining the process, requirements, and timelines.

5. **Contact Points** — Dedicated helplines and service centres are available for further enquiries about ${searchTerm}.

Would you like me to go deeper into any of these areas?`;
}
