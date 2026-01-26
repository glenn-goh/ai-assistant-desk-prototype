export const customerSupportData = {
  id: "customer-support",
  title: "Customer Support Demo",
  description: "Handling customer inquiries and troubleshooting",
  colorScheme: "indigo" as const,
  messages: [
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Hello! I'm your Customer Support Assistant. I'm here to help you with any issues or questions you may have. How can I assist you today?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "I'm having trouble logging into my account"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Identifying the issue...",
            "Checking common login problems...",
            "Preparing troubleshooting steps..."
          ],
          timingMs: 1500
        },
        {
          type: "text" as const,
          content: "I understand you're having trouble logging in. Let me help you resolve this quickly."
        },
        {
          type: "text" as const,
          content: "Here are some common solutions:\n\n1. Check if Caps Lock is on\n2. Try resetting your password\n3. Clear your browser cache\n4. Try a different browser",
          delayMs: 1000
        },
        {
          type: "artifact" as const,
          title: "Login Troubleshooting Guide",
          fileType: "document",
          description: "Step-by-step troubleshooting instructions",
          interactive: false,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-indigo-900">Login Troubleshooting</h1>
  <p class="text-gray-600 mb-4">Follow these steps to resolve common login issues:</p>
  
  <div class="space-y-3">
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 1: Verify Credentials</h3>
      <p class="text-sm text-gray-700 mt-1">Double-check your email address and password. Make sure Caps Lock is off.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 2: Reset Password</h3>
      <p class="text-sm text-gray-700 mt-1">Click "Forgot Password" on the login page and follow the email instructions.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 3: Clear Browser Cache</h3>
      <p class="text-sm text-gray-700 mt-1">Clear your browser's cache and cookies, then try logging in again.</p>
    </div>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
      <h3 class="font-semibold text-indigo-900">Step 4: Try Different Browser</h3>
      <p class="text-sm text-gray-700 mt-1">If the issue persists, try using a different browser or incognito mode.</p>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <p class="text-sm text-blue-900"><strong>Still having issues?</strong> Contact our support team at support@example.com</p>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "I tried those but still can't log in"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "assistantSwitch" as const,
          message: "Technical Support Assistant"
        },
        {
          type: "text" as const,
          content: "I see. Let me escalate this to our technical team. Please fill out this support ticket form so we can investigate your account and resolve this issue quickly."
        },
        {
          type: "artifact" as const,
          title: "Support Ticket Form",
          fileType: "form",
          description: "Help us resolve your login issue",
          interactive: true,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-indigo-900">Support Ticket</h1>
  <p class="text-gray-600 mb-6">Please provide the following information so our team can assist you.</p>
  
  <form id="supportForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="your.email@example.com">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Account Username</label>
      <input type="text" name="username" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="Your username">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">When did this issue start?</label>
      <input type="date" name="issue_date" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Browser You're Using</label>
      <select name="browser" required 
              class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select browser</option>
        <option value="chrome">Chrome</option>
        <option value="firefox">Firefox</option>
        <option value="safari">Safari</option>
        <option value="edge">Edge</option>
        <option value="other">Other</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Error Message (if any)</label>
      <textarea name="error_message" rows="3" 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Paste any error messages you see..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
      <textarea name="details" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Any other information that might help us..."></textarea>
    </div>
    
    <button type="submit" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">
      Submit Ticket
    </button>
  </form>
</div>`
        }
      ]
    }
  ]
};