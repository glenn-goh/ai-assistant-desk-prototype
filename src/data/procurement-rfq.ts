export const procurementRfqData = {
  id: "procurement-rfq",
  title: "Procurement RFQ to AOR Demo",
  description: "Request for Quotation process leading to Approval of Requirement",
  colorScheme: "indigo" as const,
  messages: [
    {
      role: "user" as const,
      content: {
        text: "I want to create a RFQ for buying creative software for my team",
        autoSend: true
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Understanding procurement request...",
            "Preparing RFQ template...",
            "Checking procurement guidelines..."
          ],
          timingMs: 1200
        },
        {
          type: "text" as const,
          content: "I'll help you create a Request for Quotation (RFQ) for creative software. Let me prepare the RFQ form with the necessary details to obtain quotes from at least 3 vendors."
        },
        {
          type: "artifact" as const,
          title: "Request for Quotation (RFQ) Form",
          fileType: "form",
          description: "RFQ for Creative Software Purchase",
          interactive: true,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-2 text-emerald-900">Request for Quotation (RFQ)</h1>
  <p class="text-gray-600 mb-6">Please provide the following information to generate your RFQ.</p>
  
  <form id="rfqForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Department/Agency</label>
      <input type="text" name="department" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="e.g., Marketing Department">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Item Description</label>
      <textarea name="itemDescription" rows="3" required 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="e.g., Adobe Creative Cloud licenses for graphic design and video editing"></textarea>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
        <input type="number" name="quantity" required 
               class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
               placeholder="e.g., 15">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Unit of Measure</label>
        <select name="unit" required 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option value="">Select unit</option>
          <option value="license">License</option>
          <option value="unit">Unit</option>
          <option value="set">Set</option>
          <option value="package">Package</option>
        </select>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Estimated Budget (SGD)</label>
      <input type="number" name="budget" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="e.g., 8000">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Required Delivery Date</label>
      <input type="date" name="deliveryDate" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Special Requirements / Technical Specifications</label>
      <textarea name="specifications" rows="3" 
                class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="e.g., Must include cloud storage, multi-device access, annual subscription"></textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Evaluation Criteria</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="price" checked disabled
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Price (Required)</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="quality" checked
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Quality of Product/Service</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="delivery"
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">Delivery Timeline</span>
        </label>
        <label class="flex items-center">
          <input type="checkbox" name="criteria" value="support"
                 class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500">
          <span class="ml-2 text-sm text-gray-700">After-sales Support</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Requestor Name</label>
      <input type="text" name="requestorName" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="Your full name">
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
      <input type="email" name="email" required 
             class="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             placeholder="your.email@agency.gov.sg">
    </div>
    
    <button type="submit" 
            class="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors font-medium">
      Generate RFQ Document
    </button>
  </form>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        formSubmission: true
      },
      delayMs: 1300
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Processing RFQ details...",
            "Generating quotation requests...",
            "Contacting vendor database..."
          ],
          timingMs: 1500
        },
        {
          type: "text" as const,
          content: "Perfect! I've generated your RFQ and sent it to 3 qualified vendors. Here's the summary of quotes received:"
        },
        {
          type: "assistantSwitch" as const,
          message: "Procurement Officer Assistant"
        },
        {
          type: "artifact" as const,
          title: "Vendor Quotations Comparison",
          fileType: "document",
          description: "3 Quotes Received for Creative Software",
          interactive: false,
          content: `<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-emerald-900">Quotation Comparison</h1>
  <p class="text-gray-600 mb-6">RFQ Reference: RFQ-2025-0324-CS</p>
  
  <div class="space-y-4">
    <!-- Vendor 1 -->
    <div class="border-2 border-emerald-500 bg-emerald-50 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-emerald-900">Vendor A: CreativeSoft Solutions</h2>
          <p class="text-sm text-gray-600">Authorized Adobe Reseller</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-emerald-700">SGD $7,200</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $480/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">2 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">24/7 email & phone</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-white rounded border border-emerald-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 100GB cloud storage, Adobe Fonts, Adobe Portfolio</p>
      </div>
      <div class="mt-2">
        <span class="inline-block px-2 py-1 bg-emerald-600 text-white text-xs rounded">✓ RECOMMENDED</span>
        <span class="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded ml-2">Best Value</span>
      </div>
    </div>
    
    <!-- Vendor 2 -->
    <div class="border border-gray-300 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Vendor B: TechPro Supplies</h2>
          <p class="text-sm text-gray-600">Software Distributor</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-700">SGD $8,100</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $540/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">5 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">Business hours only</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-gray-50 rounded border border-gray-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 100GB cloud storage, Basic training session</p>
      </div>
    </div>
    
    <!-- Vendor 3 -->
    <div class="border border-gray-300 rounded-lg p-4">
      <div class="flex justify-between items-start mb-3">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Vendor C: Digital Media Hub</h2>
          <p class="text-sm text-gray-600">Creative Software Specialist</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-700">SGD $7,950</div>
          <div class="text-xs text-gray-500">Total for 15 licenses</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span class="font-medium text-gray-700">Unit Price:</span>
          <span class="ml-2">SGD $530/license</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Delivery:</span>
          <span class="ml-2">3 business days</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">License Type:</span>
          <span class="ml-2">Annual subscription</span>
        </div>
        <div>
          <span class="font-medium text-gray-700">Support:</span>
          <span class="ml-2">Email support 24/7</span>
        </div>
      </div>
      <div class="mt-3 p-2 bg-gray-50 rounded border border-gray-200">
        <p class="text-xs text-gray-600"><strong>Includes:</strong> Adobe Creative Cloud All Apps, 1TB cloud storage, Extended support</p>
      </div>
      <div class="mt-2">
        <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Best Storage</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
    <h3 class="font-bold text-emerald-900 mb-2">Procurement Recommendation</h3>
    <p class="text-sm text-gray-700">Based on the evaluation criteria (price, quality, delivery, support), <strong>Vendor A: CreativeSoft Solutions</strong> offers the best overall value at SGD $7,200, with the fastest delivery time and comprehensive 24/7 support.</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Would you like to proceed with Vendor A and generate the Approval of Requirement (AOR) document?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes, proceed with Vendor A and generate the AOR"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Preparing AOR document...",
            "Compiling procurement justification...",
            "Generating approval workflow..."
          ],
          timingMs: 1500
        },
        {
          type: "text" as const,
          content: "Excellent! I'm generating your Approval of Requirement (AOR) document with all the necessary justifications and supporting documentation."
        },
        {
          type: "artifact" as const,
          title: "Approval of Requirement (AOR)",
          fileType: "document",
          description: "Procurement Approval Document",
          interactive: false,
          content: `<div class="p-6">
  <div class="border-b-2 border-emerald-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-emerald-900">APPROVAL OF REQUIREMENT (AOR)</h1>
    <p class="text-sm text-gray-600 mt-1">Singapore Government Procurement</p>
  </div>
  
  <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
    <div>
      <span class="font-medium text-gray-700">AOR Reference:</span>
      <span class="ml-2">AOR-2025-0324-CS-001</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">Date:</span>
      <span class="ml-2">25 November 2025</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">Department:</span>
      <span class="ml-2">Marketing Department</span>
    </div>
    <div>
      <span class="font-medium text-gray-700">RFQ Reference:</span>
      <span class="ml-2">RFQ-2025-0324-CS</span>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">1. REQUIREMENT DETAILS</h2>
      <div class="space-y-2 text-sm">
        <div>
          <span class="font-medium">Item Description:</span>
          <p class="mt-1">Adobe Creative Cloud All Apps licenses for graphic design and video editing</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div>
            <span class="font-medium">Quantity:</span> 15 licenses
          </div>
          <div>
            <span class="font-medium">Unit of Measure:</span> License (Annual)
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">2. JUSTIFICATION</h2>
      <p class="text-sm text-gray-700">
        The Marketing Department requires Adobe Creative Cloud licenses to support ongoing digital marketing campaigns, content creation, and branding initiatives. The software suite is essential for producing high-quality graphics, videos, and multimedia content for government communications and public engagement.
      </p>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">3. QUOTATION SUMMARY</h2>
      <table class="w-full text-sm">
        <thead class="bg-emerald-100">
          <tr>
            <th class="text-left p-2 border border-emerald-200">Vendor</th>
            <th class="text-right p-2 border border-emerald-200">Unit Price (SGD)</th>
            <th class="text-right p-2 border border-emerald-200">Total (SGD)</th>
            <th class="text-center p-2 border border-emerald-200">Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-emerald-50">
            <td class="p-2 border border-gray-200 font-medium">CreativeSoft Solutions ✓</td>
            <td class="p-2 border border-gray-200 text-right">$480.00</td>
            <td class="p-2 border border-gray-200 text-right font-bold">$7,200.00</td>
            <td class="p-2 border border-gray-200 text-center">2 days</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">TechPro Supplies</td>
            <td class="p-2 border border-gray-200 text-right">$540.00</td>
            <td class="p-2 border border-gray-200 text-right">$8,100.00</td>
            <td class="p-2 border border-gray-200 text-center">5 days</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">Digital Media Hub</td>
            <td class="p-2 border border-gray-200 text-right">$530.00</td>
            <td class="p-2 border border-gray-200 text-right">$7,950.00</td>
            <td class="p-2 border border-gray-200 text-center">3 days</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">4. RECOMMENDED VENDOR</h2>
      <div class="bg-white border-2 border-emerald-500 rounded p-3">
        <div class="flex justify-between items-start">
          <div>
            <p class="font-bold text-emerald-900">CreativeSoft Solutions</p>
            <p class="text-sm text-gray-600 mt-1">Authorized Adobe Reseller</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-emerald-700">SGD $7,200.00</p>
            <p class="text-xs text-gray-500">Best Value for Money</p>
          </div>
        </div>
      </div>
      <div class="mt-3 text-sm">
        <p class="font-medium mb-2">Selection Criteria:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Lowest quoted price (12.5% below budget)</li>
          <li>Fastest delivery time (2 business days)</li>
          <li>Comprehensive 24/7 support included</li>
          <li>Authorized Adobe partner with proven track record</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-gray-900 mb-3">5. BUDGET ALLOCATION</h2>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span>Estimated Budget:</span>
          <span class="font-medium">SGD $8,000.00</span>
        </div>
        <div class="flex justify-between">
          <span>Actual Cost:</span>
          <span class="font-medium">SGD $7,200.00</span>
        </div>
        <div class="flex justify-between pt-2 border-t border-gray-300">
          <span class="font-bold">Budget Savings:</span>
          <span class="font-bold text-emerald-700">SGD $800.00 (10%)</span>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-300">
          <span class="font-medium">Cost Center:</span>
          <span class="ml-2">MAR-CC-2025-Q4</span>
        </div>
        <div>
          <span class="font-medium">GL Code:</span>
          <span class="ml-2">5210-SW-LIC</span>
        </div>
      </div>
    </div>
    
    <div class="bg-emerald-50 border-2 border-emerald-500 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-emerald-900 mb-3">6. APPROVAL STATUS</h2>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-2 bg-white rounded border border-emerald-200">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">✓</span>
            </div>
            <div>
              <p class="font-medium text-sm">Requestor</p>
              <p class="text-xs text-gray-600">John Doe - Product Manager</p>
            </div>
          </div>
          <span class="text-xs text-emerald-700 font-medium">Submitted</span>
        </div>
        
        <div class="flex items-center justify-between p-2 bg-white rounded border border-gray-300">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">⏳</span>
            </div>
            <div>
              <p class="font-medium text-sm">Department Head</p>
              <p class="text-xs text-gray-600">Pending Review</p>
            </div>
          </div>
          <span class="text-xs text-amber-700 font-medium">Pending</span>
        </div>
        
        <div class="flex items-center justify-between p-2 bg-white rounded border border-gray-300">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">○</span>
            </div>
            <div>
              <p class="font-medium text-sm">Finance Approver</p>
              <p class="text-xs text-gray-600">Awaiting Department Head</p>
            </div>
          </div>
          <span class="text-xs text-gray-500 font-medium">Awaiting</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mt-6 pt-6 border-t-2 border-gray-300">
    <p class="text-xs text-gray-500">
      This document was generated by AI Assistant Desk on 25 November 2025. 
      All information has been compiled from the RFQ process and vendor quotations.
    </p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Your Approval of Requirement (AOR) has been successfully generated! The document has been submitted to your Department Head for review. You'll receive a notification once it's approved. The procurement process typically takes 3-5 business days for final approval.\n\nKey highlights:\n• Total cost: SGD $7,200 (10% under budget)\n• Vendor: CreativeSoft Solutions\n• Expected delivery: 2 business days after approval\n• Current status: Pending Department Head review"
        }
      ]
    }
  ]
};