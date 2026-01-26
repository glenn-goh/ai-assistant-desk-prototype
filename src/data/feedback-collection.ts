export const feedbackCollectionData = {
  id: "feedback-collection",
  title: "Feedback Collection Demo",
  description: "Gathering user feedback and suggestions",
  colorScheme: "indigo" as const,
  messages: [
    {
      role: "user" as const,
      content: {
        text: "I'd like to provide feedback about the platform"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Great! Preparing feedback form...",
            "Setting up survey questions..."
          ],
          timingMs: 1200
        },
        {
          type: "text" as const,
          content: "Thank you for wanting to share your feedback! Your input is invaluable in helping us improve our platform. Please take a moment to fill out this survey."
        },
        {
          type: "artifact" as const,
          title: "User Feedback Survey",
          fileType: "form",
          description: "Share your experience and suggestions",
          interactive: true,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-indigo-900">We Value Your Feedback</h1>
  <p class="text-gray-600 mb-6">Help us serve you better by sharing your thoughts.</p>
  
  <form id="feedbackForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
      <input type="text" name="name" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="John Doe">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
             placeholder="your.email@example.com">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Overall Experience</label>
      <select name="experience" required 
              class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select your rating</option>
        <option value="excellent">Excellent - Exceeded expectations</option>
        <option value="good">Good - Met expectations</option>
        <option value="average">Average - Room for improvement</option>
        <option value="poor">Poor - Below expectations</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">What do you like most about our platform?</label>
      <textarea name="likes" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Tell us what you love..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">What could we improve?</label>
      <textarea name="improvements" rows="3" required 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Share your suggestions..."></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Would you recommend us to others?</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="radio" name="recommend" value="yes" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">Yes, definitely</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="maybe" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">Maybe</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="recommend" value="no" required 
                 class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          <span class="ml-2 text-sm text-gray-700">No</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
      <textarea name="comments" rows="3" 
                class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Anything else you'd like to share..."></textarea>
    </div>
    
    <div class="border-t pt-4">
      <label class="flex items-center">
        <input type="checkbox" name="newsletter" 
               class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
        <span class="ml-2 text-sm text-gray-700">Send me updates and newsletters</span>
      </label>
    </div>
    
    <button type="submit" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">
      Submit Feedback
    </button>
  </form>
</div>`
        }
      ]
    }
  ]
};