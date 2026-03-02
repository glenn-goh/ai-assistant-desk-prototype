export function getAORResponses() {
  return [
    {
      type: "thinking" as const,
      thought: "Preparing comprehensive AOR document",
      reasoning: [
        {
          text: "Understanding procurement requirements for high-performance laptops...",
          icon: "search",
          description: "Analyzing the request for 5 units and confirming alignment with Research Team project development needs."
        },
        {
          text: "Reviewing budget allocation and cost center verification...",
          icon: "database",
          description: "Validating the $12,000 budget against cost center 9988-RES and ensuring sufficient funds are available for this procurement."
        },
        {
          text: "Determining appropriate technical specifications...",
          icon: "search",
          description: "Defining minimum requirements for processor, RAM, storage, and other components to meet high-performance computing needs for research activities."
        },
        {
          text: "Structuring justification based on team requirements...",
          icon: "file-text",
          description: "Building comprehensive justification around data analysis, software development, and project development work that requires advanced computing capabilities."
        },
        {
          text: "Identifying appropriate procurement method...",
          icon: "wrench",
          description: "Classifying as Small Value Purchase (SVP) under $70,000 threshold and confirming requirement for minimum 3 quotations from vendors."
        },
        {
          text: "Formatting AOR according to government guidelines...",
          icon: "file-text",
          description: "Organizing document sections including requirement details, technical specifications, justification, budgetary information, and approval signatures."
        },
        {
          text: "Preparing final AOR document for review...",
          icon: "file-text",
          description: "Compiling all sections into a comprehensive Authority for Requirement ready for stakeholder approval and vendor quotation process."
        }
      ],
      timingMs: 3000
    },
    {
      type: "text" as const,
      content: "I'll draft a comprehensive Authority for Requirement (AOR) for the 5 High-Performance Laptops. Let me structure this according to government procurement guidelines."
    },
    {
      type: "artifact" as const,
      title: "AOR - High-Performance Laptops",
      fileType: "document",
      description: "Authority for Requirement - Research Team Equipment",
      interactive: true,
      content: `<div class="p-8 bg-white max-w-4xl mx-auto">
  <div class="text-center mb-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">AUTHORITY FOR REQUIREMENT (AOR)</h1>
    <p class="text-sm text-gray-600">Request for Purchase of Equipment</p>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">1. REQUIREMENT DETAILS</h2>
    <table class="w-full text-sm">
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium text-gray-700 w-1/3">Item Description:</td>
        <td class="py-2 text-gray-900">High-Performance Laptops</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium text-gray-700">Quantity:</td>
        <td class="py-2 text-gray-900">5 units</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium text-gray-700">End User:</td>
        <td class="py-2 text-gray-900">Research Team</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium text-gray-700">Estimated Budget:</td>
        <td class="py-2 text-gray-900 font-semibold">$12,000.00</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium text-gray-700">Cost Center:</td>
        <td class="py-2 text-gray-900">9988-RES</td>
      </tr>
    </table>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">2. TECHNICAL SPECIFICATIONS</h2>
    <div class="bg-gray-50 p-4 rounded">
      <ul class="space-y-2 text-sm">
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Processor:</strong> Intel Core i7 (12th Gen) or equivalent</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>RAM:</strong> Minimum 16GB DDR4</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Storage:</strong> 512GB SSD (NVMe)</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Display:</strong> 14-inch Full HD (1920x1080)</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Graphics:</strong> Integrated or discrete GPU</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Operating System:</strong> Windows 11 Pro</span>
        </li>
        <li class="flex items-start">
          <span class="text-gray-600 mr-2">•</span>
          <span class="text-gray-900"><strong>Warranty:</strong> Minimum 3 years on-site warranty</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">3. JUSTIFICATION</h2>
    <div class="bg-blue-50 p-4 rounded">
      <p class="text-sm text-gray-900 leading-relaxed mb-3">
        The Research Team requires high-performance laptops to support critical project development work. Current equipment is outdated and insufficient for the following activities:
      </p>
      <ul class="space-y-2 text-sm mb-3">
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">✓</span>
          <span class="text-gray-900">Data analysis and computational modeling requiring significant processing power</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">✓</span>
          <span class="text-gray-900">Software development and testing for research applications</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">✓</span>
          <span class="text-gray-900">Running virtualization environments for development work</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">✓</span>
          <span class="text-gray-900">Multitasking across multiple resource-intensive applications</span>
        </li>
      </ul>
      <p class="text-sm text-gray-900 leading-relaxed">
        These laptops will significantly improve team productivity and enable timely delivery of project milestones.
      </p>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">4. BUDGETARY INFORMATION</h2>
    <table class="w-full text-sm">
      <tr class="bg-gray-100">
        <td class="py-2 px-3 font-medium text-gray-700">Cost Center</td>
        <td class="py-2 px-3 font-medium text-gray-700">Budget Line Item</td>
        <td class="py-2 px-3 font-medium text-gray-700 text-right">Amount</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 px-3 text-gray-900">9988-RES</td>
        <td class="py-2 px-3 text-gray-900">Equipment & IT Hardware</td>
        <td class="py-2 px-3 text-gray-900 text-right font-semibold">$12,000.00</td>
      </tr>
    </table>
    <p class="text-xs text-gray-600 mt-2 italic">Budget has been verified and sufficient funds are available for this procurement.</p>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">5. PROCUREMENT METHOD</h2>
    <p class="text-sm text-gray-900">Small Value Purchase (SVP) - Value under $70,000</p>
    <p class="text-xs text-gray-600 mt-1">Minimum 3 quotations to be obtained from approved vendors</p>
  </div>

  <div class="mt-8 pt-6 border-t-2 border-gray-300">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <p class="text-sm font-semibold text-gray-900 mb-1">Prepared By:</p>
        <div class="border-b border-gray-400 w-48 mb-1"></div>
        <p class="text-xs text-gray-600">Name & Signature</p>
        <p class="text-xs text-gray-600 mt-2">Date: _____________</p>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-900 mb-1">Approved By:</p>
        <div class="border-b border-gray-400 w-48 mb-1"></div>
        <p class="text-xs text-gray-600">Department Head</p>
        <p class="text-xs text-gray-600 mt-2">Date: _____________</p>
      </div>
    </div>
  </div>

  <div class="mt-6 text-center text-xs text-gray-500">
    <p>Document Reference: AOR-2025-RES-LAPTOPS-001</p>
    <p>Generated: ${new Date().toLocaleDateString()}</p>
  </div>
</div>`
    }
  ];
}

export function getITQResponses() {
  return [
    {
      type: "thinking" as const,
      thought: "Drafting Invitation to Quote document",
      reasoning: [
        {
          text: "Extracting technical specifications from approved AOR...",
          icon: "database",
          description: "Retrieving the detailed laptop specifications including processor, RAM, storage, and warranty requirements from the Authority for Requirement document."
        },
        {
          text: "Structuring ITQ format for vendor quote submissions...",
          icon: "file-text",
          description: "Organizing the document to include requirement summary, technical specifications table, and clear submission instructions for vendors."
        },
        {
          text: "Defining evaluation criteria and weightings...",
          icon: "search",
          description: "Setting up weighted criteria: Price (40%), Technical compliance (30%), Warranty/support (20%), and Delivery timeline (10%) for objective vendor assessment."
        },
        {
          text: "Calculating and setting quotation deadline...",
          icon: "wrench",
          description: "Establishing a 14-day submission window to allow vendors adequate time to prepare competitive quotations while maintaining procurement timeline."
        },
        {
          text: "Preparing vendor quotation requirements...",
          icon: "file-text",
          description: "Listing all required documentation including pricing breakdown, technical datasheets, warranty terms, delivery timeline, and company certifications."
        },
        {
          text: "Finalizing ITQ document with terms and conditions...",
          icon: "file-text",
          description: "Adding standard procurement terms, validity period (60 days), and clarifying that award will be based on best value, not necessarily lowest price."
        }
      ],
      timingMs: 2500
    },
    {
      type: "text" as const,
      content: "I'll draft an Invitation to Quote (ITQ) based on the AOR requirements. This will be sent to vendors to obtain quotations for the laptops."
    },
    {
      type: "artifact" as const,
      title: "ITQ - High-Performance Laptops",
      fileType: "document",
      description: "Invitation to Quote - Vendor Quotation Request",
      interactive: true,
      content: `<div class="p-8 bg-white max-w-4xl mx-auto">
  <div class="text-center mb-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">INVITATION TO QUOTE (ITQ)</h1>
    <p class="text-sm text-gray-600">Procurement of High-Performance Laptops</p>
    <p class="text-xs text-gray-500 mt-1">Reference: ITQ-2025-RES-LAPTOPS-001</p>
  </div>

  <div class="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <p class="text-sm font-semibold text-gray-900 mb-1">Quotation Deadline:</p>
    <p class="text-sm text-gray-900">${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-SG', { day: '2-digit', month: 'long', year: 'numeric' })} at 5:00 PM</p>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">1. REQUIREMENT SUMMARY</h2>
    <p class="text-sm text-gray-900 mb-3">
      The Research Team is seeking quotations for the supply of <strong>5 units of High-Performance Laptops</strong> to support project development activities.
    </p>
    <table class="w-full text-sm border border-gray-300">
      <tr class="bg-gray-100">
        <td class="py-2 px-3 font-medium text-gray-700 border-r border-gray-300">Item</td>
        <td class="py-2 px-3 font-medium text-gray-700 border-r border-gray-300">Quantity</td>
        <td class="py-2 px-3 font-medium text-gray-700">Estimated Budget</td>
      </tr>
      <tr>
        <td class="py-2 px-3 text-gray-900 border-r border-gray-300">High-Performance Laptops</td>
        <td class="py-2 px-3 text-gray-900 border-r border-gray-300">5 units</td>
        <td class="py-2 px-3 text-gray-900 font-semibold">$12,000.00</td>
      </tr>
    </table>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">2. TECHNICAL SPECIFICATIONS (Minimum Requirements)</h2>
    <div class="border border-gray-300 rounded">
      <table class="w-full text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-3 text-left font-medium text-gray-700 border-b border-gray-300">Component</th>
            <th class="py-2 px-3 text-left font-medium text-gray-700 border-b border-gray-300">Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Processor</td>
            <td class="py-2 px-3 text-gray-900">Intel Core i7 (12th Gen) or AMD Ryzen 7 equivalent</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Memory (RAM)</td>
            <td class="py-2 px-3 text-gray-900">Minimum 16GB DDR4 (upgradeable to 32GB)</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Storage</td>
            <td class="py-2 px-3 text-gray-900">512GB SSD (NVMe, PCIe Gen 3 or higher)</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Display</td>
            <td class="py-2 px-3 text-gray-900">14-inch Full HD (1920x1080), IPS panel</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Graphics</td>
            <td class="py-2 px-3 text-gray-900">Integrated Intel Iris Xe or discrete GPU</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Operating System</td>
            <td class="py-2 px-3 text-gray-900">Windows 11 Pro (pre-installed, licensed)</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-700 font-medium">Connectivity</td>
            <td class="py-2 px-3 text-gray-900">WiFi 6, Bluetooth 5.0, USB-C ports</td>
          </tr>
          <tr>
            <td class="py-2 px-3 text-gray-700 font-medium">Warranty</td>
            <td class="py-2 px-3 text-gray-900">Minimum 3 years on-site warranty with next-business-day response</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">3. EVALUATION CRITERIA</h2>
    <p class="text-sm text-gray-900 mb-3">Quotations will be evaluated based on the following weighted criteria:</p>
    <div class="border border-gray-300 rounded">
      <table class="w-full text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-3 text-left font-medium text-gray-700 border-b border-gray-300">Criteria</th>
            <th class="py-2 px-3 text-center font-medium text-gray-700 border-b border-gray-300">Weighting</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-900">Price (total cost including delivery)</td>
            <td class="py-2 px-3 text-center font-semibold text-gray-900">40%</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-900">Technical specifications compliance</td>
            <td class="py-2 px-3 text-center font-semibold text-gray-900">30%</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-2 px-3 text-gray-900">Warranty and after-sales support</td>
            <td class="py-2 px-3 text-center font-semibold text-gray-900">20%</td>
          </tr>
          <tr>
            <td class="py-2 px-3 text-gray-900">Delivery timeline</td>
            <td class="py-2 px-3 text-center font-semibold text-gray-900">10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">4. QUOTATION REQUIREMENTS</h2>
    <p class="text-sm text-gray-900 mb-2">Vendors must provide the following in their quotation:</p>
    <ul class="space-y-1 text-sm ml-6">
      <li class="text-gray-900">☑ Unit price and total price (inclusive of GST)</li>
      <li class="text-gray-900">☑ Detailed technical specifications for proposed model</li>
      <li class="text-gray-900">☑ Warranty terms and service level agreement (SLA)</li>
      <li class="text-gray-900">☑ Delivery timeline from order confirmation</li>
      <li class="text-gray-900">☑ Payment terms</li>
      <li class="text-gray-900">☑ Product brochure or datasheet</li>
      <li class="text-gray-900">☑ Company profile and relevant certifications</li>
    </ul>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2">5. SUBMISSION INSTRUCTIONS</h2>
    <div class="bg-blue-50 p-4 rounded text-sm">
      <p class="text-gray-900 mb-2"><strong>Submit to:</strong> procurement@research.gov.sg</p>
      <p class="text-gray-900 mb-2"><strong>Subject Line:</strong> ITQ Response - ITQ-2025-RES-LAPTOPS-001</p>
      <p class="text-gray-900 mb-2"><strong>Format:</strong> PDF format</p>
      <p class="text-gray-900"><strong>Deadline:</strong> ${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-SG', { day: '2-digit', month: 'long', year: 'numeric' })} by 5:00 PM</p>
    </div>
  </div>

  <div class="mb-6 bg-gray-50 p-4 rounded text-sm">
    <p class="font-semibold text-gray-900 mb-2">Terms & Conditions:</p>
    <ul class="space-y-1 text-xs text-gray-700 ml-4">
      <li>• Quotations submitted after the deadline will not be considered</li>
      <li>• The organization reserves the right to accept or reject any quotation</li>
      <li>• Quotations are valid for 60 days from submission date</li>
      <li>• Award will be based on best value, not necessarily lowest price</li>
    </ul>
  </div>

  <div class="mt-8 text-sm">
    <p class="text-gray-900 mb-1"><strong>Contact Person:</strong> Procurement Office</p>
    <p class="text-gray-600">For queries, please email: procurement@research.gov.sg</p>
  </div>

  <div class="mt-6 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
    <p>Document Reference: ITQ-2025-RES-LAPTOPS-001</p>
    <p>Issued: ${new Date().toLocaleDateString()}</p>
  </div>
</div>`
    }
  ];
}
