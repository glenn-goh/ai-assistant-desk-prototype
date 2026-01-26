export const featureOverviewData = {
  id: "feature-overview",
  title: "Feature Overview Demo",
  description: "Showcasing platform capabilities and documentation",
  colorScheme: "indigo" as const,
  messages: [
    {
      role: "user" as const,
      content: {
        text: "What are the latest features in the platform?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Analyzing your question...",
            "Checking latest updates...",
            "Preparing comprehensive overview..."
          ],
          timingMs: 1500
        },
        {
          type: "text" as const,
          content: "I'll provide you with an overview of our latest features. Let me gather the most up-to-date information for you."
        },
        {
          type: "assistantSwitch" as const,
          message: "Documentation Assistant"
        },
        {
          type: "text" as const,
          content: "Here's a detailed breakdown of our new capabilities:\n\n• Advanced Analytics: Real-time data processing\n• AI Integration: Enhanced natural language understanding\n• Collaboration Tools: Team workspace with live editing\n• Security Updates: End-to-end encryption"
        },
        {
          type: "artifact" as const,
          title: "Feature Overview Document",
          fileType: "document",
          description: "Comprehensive feature list with details",
          interactive: false,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-indigo-900">Latest Platform Features</h1>
  
  <div class="space-y-4">
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">Advanced Analytics</h2>
      <p class="text-gray-700 mt-2">Real-time data processing with interactive visualizations. Track metrics, generate reports, and gain insights instantly.</p>
    </div>
    
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">AI Integration</h2>
      <p class="text-gray-700 mt-2">Enhanced natural language understanding with context-aware responses and intelligent automation.</p>
    </div>
    
    <div class="border-l-4 border-indigo-500 pl-4">
      <h2 class="text-xl font-semibold text-indigo-800">Collaboration Tools</h2>
      <p class="text-gray-700 mt-2">Team workspace with live editing, comments, and version control for seamless collaboration.</p>
    </div>
  </div>
</div>`
        }
      ]
    }
  ]
};