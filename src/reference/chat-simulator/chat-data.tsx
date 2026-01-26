// Chat Simulator Data Template
// Define multiple conversation scenarios that can be loaded into the simulator

export interface ChatSimulation {
  id: string;
  title: string;
  description?: string;
  messages: Message[];
}

export interface Message {
  role: "user" | "bot";
  content: UserMessage | BotResponse[];
}

export interface UserMessage {
  text: string;
}

export type BotResponse = 
  | ThinkingResponse 
  | AssistantSwitchResponse 
  | TextResponse 
  | ArtifactResponse;

export interface ThinkingResponse {
  type: "thinking";
  thoughts: string[];
  timingMs?: number;
}

export interface AssistantSwitchResponse {
  type: "assistantSwitch";
  message: string;
}

export interface TextResponse {
  type: "text";
  content: string;
  delayMs?: number;
}

export interface ArtifactResponse {
  type: "artifact";
  title: string;
  fileType: string;
  description: string;
  content: string;
  delayMs?: number;
  interactive?: boolean;
}

// ============================================
// CONVERSATION SCENARIOS
// ============================================

// Scenario 1: Feature Overview
export const featureOverviewDemo: ChatSimulation = {
  id: "feature-overview",
  title: "Feature Overview Demo",
  description: "Showcasing platform capabilities and documentation",
  messages: [
    {
      role: "user",
      content: {
        text: "What are the latest features in the platform?"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "thinking",
          thoughts: [
            "Analyzing your question...",
            "Checking latest updates...",
            "Preparing comprehensive overview..."
          ],
          timingMs: 1500
        },
        {
          type: "text",
          content: "I'll provide you with an overview of our latest features. Let me gather the most up-to-date information for you."
        },
        {
          type: "assistantSwitch",
          message: "Activating Documentation Assistant"
        },
        {
          type: "text",
          content: "Here's a detailed breakdown of our new capabilities:\n\n• Advanced Analytics: Real-time data processing\n• AI Integration: Enhanced natural language understanding\n• Collaboration Tools: Team workspace with live editing\n• Security Updates: End-to-end encryption"
        },
        {
          type: "artifact",
          title: "Feature Overview Document",
          fileType: "document",
          description: "Comprehensive feature list with details",
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">Latest Platform Features</h1>
  <div class="space-y-4">
    <div class="border-l-4 border-blue-500 pl-4">
      <h2 class="text-xl font-semibold">Advanced Analytics</h2>
      <p class="text-gray-700 mt-2">Real-time data processing with interactive visualizations.</p>
    </div>
    <div class="border-l-4 border-blue-500 pl-4">
      <h2 class="text-xl font-semibold">AI Integration</h2>
      <p class="text-gray-700 mt-2">Enhanced natural language understanding with context-aware responses.</p>
    </div>
  </div>
</div>`
        }
      ]
    }
  ]
};

// Scenario 2: Customer Support
export const customerSupportDemo: ChatSimulation = {
  id: "customer-support",
  title: "Customer Support Demo",
  description: "Handling customer inquiries and troubleshooting",
  messages: [
    {
      role: "user",
      content: {
        text: "I'm having trouble logging into my account"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "thinking",
          thoughts: [
            "Identifying the issue...",
            "Checking common login problems...",
            "Preparing troubleshooting steps..."
          ]
        },
        {
          type: "text",
          content: "I understand you're having trouble logging in. Let me help you resolve this quickly."
        },
        {
          type: "text",
          content: "Here are some common solutions:\n\n1. Check if Caps Lock is on\n2. Try resetting your password\n3. Clear your browser cache\n4. Try a different browser"
        },
        {
          type: "artifact",
          title: "Login Troubleshooting Guide",
          fileType: "document",
          description: "Step-by-step troubleshooting instructions",
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">Login Troubleshooting</h1>
  <div class="space-y-3">
    <div class="bg-blue-50 p-4 rounded">
      <h3 class="font-semibold">Step 1: Verify Credentials</h3>
      <p class="text-sm mt-1">Double-check your email and password</p>
    </div>
    <div class="bg-blue-50 p-4 rounded">
      <h3 class="font-semibold">Step 2: Reset Password</h3>
      <p class="text-sm mt-1">Click "Forgot Password" on the login page</p>
    </div>
    <div class="bg-blue-50 p-4 rounded">
      <h3 class="font-semibold">Step 3: Clear Cache</h3>
      <p class="text-sm mt-1">Clear browser data and try again</p>
    </div>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user",
      content: {
        text: "I tried those but still can't log in"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "text",
          content: "I see. Let me escalate this to our technical team. Please fill out this form so we can investigate further."
        },
        {
          type: "artifact",
          title: "Support Ticket Form",
          fileType: "form",
          description: "Help us resolve your issue",
          interactive: true,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">Support Ticket</h1>
  <form id="supportForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-2">Email Address</label>
      <input type="email" name="email" required class="w-full px-3 py-2 border rounded-md" placeholder="your.email@example.com">
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">Account Username</label>
      <input type="text" name="username" required class="w-full px-3 py-2 border rounded-md">
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">When did this start?</label>
      <input type="date" name="issue_date" required class="w-full px-3 py-2 border rounded-md">
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">Error Message (if any)</label>
      <textarea name="error_message" rows="3" class="w-full px-3 py-2 border rounded-md"></textarea>
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit Ticket</button>
  </form>
</div>`
        }
      ]
    }
  ]
};

// Scenario 3: Data Analysis
export const dataAnalysisDemo: ChatSimulation = {
  id: "data-analysis",
  title: "Data Analysis Demo",
  description: "Analyzing data and generating insights",
  messages: [
    {
      role: "user",
      content: {
        text: "Can you analyze our Q3 sales performance?"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "thinking",
          thoughts: [
            "Loading Q3 sales data...",
            "Running statistical analysis...",
            "Identifying trends and patterns...",
            "Generating visualizations..."
          ],
          timingMs: 1200
        },
        {
          type: "assistantSwitch",
          message: "Activating Analytics Assistant"
        },
        {
          type: "text",
          content: "I've analyzed your Q3 sales data. Here are the key findings:\n\n• Total revenue increased by 23% compared to Q2\n• Top performing region: North America (45% of sales)\n• Product category growth leader: Software licenses\n• Customer acquisition cost decreased by 15%"
        },
        {
          type: "artifact",
          title: "Q3 Sales Dashboard",
          fileType: "chart",
          description: "Interactive sales performance metrics",
          content: `<div class="p-6 bg-gradient-to-br from-blue-50 to-white">
  <h1 class="text-2xl font-bold mb-6">Q3 Sales Performance</h1>
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="text-sm text-gray-600">Total Revenue</div>
      <div class="text-3xl font-bold text-blue-600">$2.4M</div>
      <div class="text-xs text-green-600">↑ 23% from Q2</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="text-sm text-gray-600">New Customers</div>
      <div class="text-3xl font-bold text-blue-600">847</div>
      <div class="text-xs text-green-600">↑ 18% from Q2</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="text-sm text-gray-600">Avg Deal Size</div>
      <div class="text-3xl font-bold text-blue-600">$2,834</div>
      <div class="text-xs text-green-600">↑ 12% from Q2</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="text-sm text-gray-600">Win Rate</div>
      <div class="text-3xl font-bold text-blue-600">68%</div>
      <div class="text-xs text-green-600">↑ 5% from Q2</div>
    </div>
  </div>
</div>`
        }
      ]
    }
  ]
};

// Scenario 4: Code Generation
export const codeGenerationDemo: ChatSimulation = {
  id: "code-generation",
  title: "Code Generation Demo",
  description: "Generating code snippets and solutions",
  messages: [
    {
      role: "user",
      content: {
        text: "Can you create a React component for a user profile card?"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "thinking",
          thoughts: [
            "Analyzing requirements...",
            "Designing component structure...",
            "Writing React code..."
          ]
        },
        {
          type: "assistantSwitch",
          message: "Activating Code Assistant"
        },
        {
          type: "text",
          content: "I'll create a React user profile card component with props for customization. Here's a clean, modern implementation:"
        },
        {
          type: "artifact",
          title: "UserProfileCard.jsx",
          fileType: "code",
          description: "Reusable React profile card component",
          content: `<div class="p-6 bg-gray-900 text-white rounded-lg">
  <pre class="text-sm overflow-x-auto"><code>import React from 'react';

const UserProfileCard = ({ user }) => {
  return (
    &lt;div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"&gt;
      &lt;div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"&gt;&lt;/div&gt;
      &lt;div className="relative px-6 pb-6"&gt;
        &lt;img 
          src={user.avatar} 
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-white -mt-12"
        /&gt;
        &lt;h2 className="mt-4 text-2xl font-bold text-gray-800"&gt;
          {user.name}
        &lt;/h2&gt;
        &lt;p className="text-gray-600"&gt;{user.title}&lt;/p&gt;
        &lt;p className="mt-2 text-gray-700"&gt;{user.bio}&lt;/p&gt;
        &lt;div className="mt-4 flex gap-2"&gt;
          &lt;button className="flex-1 bg-blue-600 text-white py-2 rounded"&gt;
            Follow
          &lt;/button&gt;
          &lt;button className="flex-1 border border-gray-300 py-2 rounded"&gt;
            Message
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default UserProfileCard;</code></pre>
</div>`
        }
      ]
    }
  ]
};

// Scenario 5: Feedback Collection
export const feedbackCollectionDemo: ChatSimulation = {
  id: "feedback-collection",
  title: "Feedback Collection Demo",
  description: "Gathering user feedback and suggestions",
  messages: [
    {
      role: "user",
      content: {
        text: "I'd like to provide feedback about the platform"
      }
    },
    {
      role: "bot",
      content: [
        {
          type: "text",
          content: "Thank you for wanting to share your feedback! Your input is invaluable in helping us improve. Please fill out this quick survey."
        },
        {
          type: "artifact",
          title: "User Feedback Survey",
          fileType: "form",
          description: "Share your experience and suggestions",
          interactive: true,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">We Value Your Feedback</h1>
  <form id="feedbackForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-2">Overall Experience</label>
      <select name="experience" required class="w-full px-3 py-2 border rounded-md">
        <option value="">Select rating</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="poor">Poor</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">What do you like most?</label>
      <textarea name="likes" rows="3" required class="w-full px-3 py-2 border rounded-md"></textarea>
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">What could be improved?</label>
      <textarea name="improvements" rows="3" required class="w-full px-3 py-2 border rounded-md"></textarea>
    </div>
    <div>
      <label class="block text-sm font-medium mb-2">Would you recommend us?</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="radio" name="recommend" value="yes" required class="mr-2">
          <span>Yes, definitely</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="maybe" required class="mr-2">
          <span>Maybe</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="no" required class="mr-2">
          <span>No</span>
        </label>
      </div>
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit Feedback</button>
  </form>
</div>`
        }
      ]
    }
  ]
};

// Export all scenarios as a collection
export const conversationScenarios = {
  featureOverview: featureOverviewDemo,
  customerSupport: customerSupportDemo,
  dataAnalysis: dataAnalysisDemo,
  codeGeneration: codeGenerationDemo,
  feedbackCollection: feedbackCollectionDemo
};

// Helper function to get scenario by ID
export const getScenarioById = (id: string): ChatSimulation | undefined => {
  return Object.values(conversationScenarios).find(scenario => scenario.id === id);
};

// Helper function to list all available scenarios
export const listScenarios = () => {
  return Object.values(conversationScenarios).map(scenario => ({
    id: scenario.id,
    title: scenario.title,
    description: scenario.description
  }));
};
