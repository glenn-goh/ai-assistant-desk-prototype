export const pqResponseDataV2 = {
  id: "pq-response-mnd-v2",
  title: "Draft PQ response on BTO flat waiting times ",
  assistantName: "Parliamentary Question Assistant",
  description: "Enhanced PQ response workflow with contextual assistance and form-based inputs",
  colorScheme: "purple" as const,
  messages: [
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Good morning! 👋\n\nWelcome to the PQ AI Assistant. I'm here to help you draft Parliamentary Question responses efficiently.\n\nDo you have the Q&A text ready, or would you like to start from scratch?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes, I have the PQ text ready."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thought: "Analyzing user's request and preparing PQ workflow...",
          reasoning: [
            { text: "Understanding user's confirmation that they have PQ text ready...", icon: "search", description: "Interpreting the user's intent and selecting the appropriate PQ drafting workflow." },
            { text: "Loading Parliamentary Question response templates...", icon: "file-text", description: "Retrieving the standard MND response templates with pre-approved formatting and structure." },
            { text: "Using the PQ Template Repository tool...", icon: "wrench", description: "Fetching the latest approved PQ response templates from the central ministry template repository." },
            { text: "Preparing PQ input form with required fields...", icon: "file-text", description: "Building an interactive form to capture the question text, ministry, classification, and due date." },
            { text: "Configuring workflow for MND ministry responses...", icon: "search", description: "Setting ministry-specific parameters including housing policy terminology and approval chains." },
            { text: "Using the MND Policy Database tool...", icon: "wrench", description: "Loading current MND housing policy positions and approved talking points for reference during drafting." },
            { text: "Setting up Hansard database connection for past PQ references...", icon: "database", description: "Connecting to the parliamentary Hansard records to enable cross-referencing with historical questions." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is validating the classification level and verifying the correct ministry workflow parameters." }
          ],
          timingMs: 10000,
          doneSummary: "Loaded PQ templates and connected to Hansard",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Great! Please paste your PQ text below, and I'll help you draft a comprehensive response."
        },
        {
          type: "artifact" as const,
          title: "PQ Input Form",
          fileType: "form",
          description: "Enter your Parliamentary Question details",
          interactive: true,
          content: `<div class="p-6">
  <h2 class="text-xl font-bold mb-4 text-purple-900">Parliamentary Question Input</h2>
  <form id="pqInputForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
      <textarea 
        name="questionText" 
        rows="6" 
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Paste the Parliamentary Question here...">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</textarea>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Ministry/Department</label>
      <select 
        name="ministry" 
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
        <option value="">Select ministry...</option>
        <option value="MND" selected>Ministry of National Development (MND)</option>
        <option value="MOH">Ministry of Health (MOH)</option>
        <option value="MOE">Ministry of Education (MOE)</option>
        <option value="MHA">Ministry of Home Affairs (MHA)</option>
        <option value="MTI">Ministry of Trade and Industry (MTI)</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Classification</label>
      <div class="space-y-2">
        <label class="flex items-center">
          <input type="radio" name="classification" value="SEC" class="mr-2">
          <span class="text-sm">SEC (Sensitive)</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="classification" value="NSC" class="mr-2">
          <span class="text-sm">NSC (Normal Sensitivity)</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="classification" value="UNCLASSIFIED" class="mr-2" checked>
          <span class="text-sm">Unclassified</span>
        </label>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
      <input 
        type="date" 
        name="dueDate" 
        value="2025-12-15"
        class="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
    </div>
    
    <button 
      type="submit" 
      class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
      Start Analysis
    </button>
  </form>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "[Form submitted with PQ details]"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! I've received your PQ. Let me analyze the question structure and identify what we need to address."
        },
        {
          type: "thinking" as const,
          thought: "Analyzing PQ structure and requirements...",
          reasoning: [
            { text: "Processing submitted Parliamentary Question details...", icon: "search", description: "Parsing the form submission to extract the question text, ministry, and classification level." },
            { text: "Using the Question Parser tool...", icon: "wrench", description: "Parsing the multi-part question structure and extracting the key data requirements for each sub-question." },
            { text: "Analyzing PQ format and identifying question components (a) and (b)...", icon: "search", description: "Breaking the question into part (a) on BTO waiting times and part (b) on policy measures." },
            { text: "Checking classification requirements and ministry alignment...", icon: "search", description: "Confirming the question is unclassified and falls under MND Housing Policy Division." },
            { text: "Using the Ministry Directory tool...", icon: "wrench", description: "Looking up the responsible division and assigned officers within MND for this housing policy question." },
            { text: "Determining research scope and data requirements...", icon: "search", description: "Identifying the need for statistical data on waiting times and details on current government initiatives." },
            { text: "Planning comprehensive search strategy across databases...", icon: "search", description: "Mapping out queries for the Hansard database, internal statistics repository, and policy document archives." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is verifying the classification level and confirming the question falls within MND's purview." }
          ],
          timingMs: 10000,
          doneSummary: "Analyzed PQ structure and planned research strategy",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "✅ **PQ Analysis Complete**\n\n**Question Type:** Two-part question\n- Part (a): Statistical data request (BTO waiting times by town)\n- Part (b): Policy measures inquiry\n\n**Classification:** Unclassified\n**Ministry:** MND - Housing Policy Division\n\nI'll now search for relevant data and past responses. Would you like me to:\n1. **Search for similar past PQs** (Recommended - helps maintain consistency)\n2. **Skip to data search** (Faster, but may miss important precedents)"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes, please search for similar past PQs first."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Excellent choice. Let me search our Hansard database and internal knowledge base for similar questions."
        },
        {
          type: "thinking" as const,
          thought: "Searching Hansard database for similar past PQs...",
          reasoning: [
            { text: "Querying Hansard database for BTO-related Parliamentary Questions...", icon: "database", description: "Searching the official parliamentary records for questions mentioning BTO flats and waiting times." },
            { text: "Using the Hansard Search API tool...", icon: "wrench", description: "Executing keyword and semantic searches against the parliamentary Hansard records for BTO-related questions." },
            { text: "Filtering results by ministry (MND) and topic (housing policy)...", icon: "search", description: "Narrowing results to MND-answered questions on housing supply and construction timelines." },
            { text: "Analyzing past ministerial responses and language patterns...", icon: "search", description: "Extracting tone, phrasing, and key talking points used in previous ministerial answers." },
            { text: "Cross-referencing with current policy positions...", icon: "search", description: "Verifying that past response themes are still aligned with the latest ministerial public statements." },
            { text: "Using the Policy Alignment Checker tool...", icon: "wrench", description: "Cross-checking retrieved past responses against the latest approved MND policy positions and public statements." },
            { text: "Identifying consistent response frameworks...", icon: "search", description: "Detecting recurring structures like empathetic opening, data provision, and policy measure listing." },
            { text: "Compiling relevant precedents and statistical data...", icon: "database", description: "Assembling the three most relevant past PQs and verified BTO statistics into a research brief." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is verifying that all compiled precedents are still consistent with current ministry policy." }
          ],
          timingMs: 12000,
          doneSummary: "Searched Hansard and compiled 3 past PQ precedents",
          tags: ["3 tools used"]
        },
        // {
        //   type: "assistantSwitch" as const,
        //   message: "Deep Research Assistant"
        // },
        {
          type: "thinking" as const,
          thoughts: [
            "Using the Deep Research Assistant (Tool)...",
            "Synthesizing research findings..."
          ],
          reasoning: [
            { text: "Using the Deep Research Assistant (Tool)...", icon: "wrench", description: "Delegating to the Deep Research Assistant to cross-reference Hansard records, policy documents, and statistical databases for a comprehensive research brief." },
            { text: "Synthesizing research findings...", icon: "search", description: "Consolidating all retrieved precedents, statistics, and policy positions into a structured analysis report." }
          ],
          timingMs: 6000,
          doneSummary: "Deep research complete with 3 precedents and verified data",
          tags: ["1 tool used"]
        },
        {
          type: "text" as const,
          content: "Research complete! I found relevant precedents and data. Here's what I discovered:"
        },
        {
          type: "artifact" as const,
          title: "Past PQ Analysis Report",
          fileType: "document",
          description: "Similar PQs and response patterns",
          interactive: false,
          content: `<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-purple-900">Past PQ Analysis Report</h1>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">📋 Similar PQs Found (Past 18 months)</h2>
    <div class="space-y-4">
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 2284 (August 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">High Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> BTO delivery timelines and construction delays</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Emphasized government efforts to accelerate construction</li>
          <li>Mentioned contractor capacity challenges post-COVID</li>
          <li>Used empathetic language for waiting time concerns</li>
        </ul>
      </div>
      
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 1856 (March 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">High Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> Housing supply for first-time buyers</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Referenced "3-4 year" typical waiting time</li>
          <li>Highlighted increased BTO supply plans</li>
          <li>Mentioned Prime Location Housing (PLH) model</li>
        </ul>
      </div>
      
      <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-purple-900">PQ 3102 (November 2024)</h3>
          <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Medium Relevance</span>
        </div>
        <p class="text-sm text-gray-700 mb-2"><strong>Question:</strong> Construction sector challenges</p>
        <p class="text-sm text-gray-600"><strong>Key Points:</strong></p>
        <ul class="text-sm text-gray-600 list-disc list-inside ml-2 space-y-1">
          <li>Acknowledged supply chain disruptions</li>
          <li>Mentioned partnerships with builders</li>
          <li>Discussed productivity improvements (DfMA)</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">📊 Statistical Data Available</h2>
    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-gray-900">Overall Average:</p>
          <p class="text-2xl font-bold text-purple-700">3.9 years</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Trend:</p>
          <p class="text-sm text-red-600">↑ from 3.6 years (2023)</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Mature Estates:</p>
          <p class="text-xl font-bold text-purple-700">4.2 years</p>
          <p class="text-xs text-gray-500">Queenstown, Kallang, Tiong Bahru</p>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Non-Mature Estates:</p>
          <p class="text-xl font-bold text-purple-700">3.8 years</p>
          <p class="text-xs text-gray-500">Tengah, Punggol, Woodlands</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-purple-800 mb-3">🎯 Recommended Response Strategy</h2>
    <div class="space-y-3">
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
        <div>
          <p class="font-semibold text-gray-900">Acknowledge with empathy</p>
          <p class="text-sm text-gray-600">Reference the waiting time concerns, consistent with PQ 2284</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
        <div>
          <p class="font-semibold text-gray-900">Provide specific data</p>
          <p class="text-sm text-gray-600">Use the 3.9 years average, with breakdown by estate maturity</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
        <div>
          <p class="font-semibold text-gray-900">Explain context</p>
          <p class="text-sm text-gray-600">Mention pandemic-related construction challenges (aligned with recent responses)</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
        <div>
          <p class="font-semibold text-gray-900">Highlight policy measures</p>
          <p class="text-sm text-gray-600">Reference the 100,000 flats plan, DfMA, PLH model (consistent with PQ 1856)</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
    <h3 class="font-semibold text-purple-900 mb-2">⚠️ Important Notes</h3>
    <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
      <li>Avoid specific future timeline commitments (per internal guidelines)</li>
      <li>Maintain consistency with Minister's recent public statements</li>
      <li>Use formal parliamentary tone throughout</li>
      <li>Ensure all statistics are from verified internal database</li>
    </ul>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Based on this research, would you like me to:\n\n**Option 1:** Draft a complete response following the recommended strategy\n**Option 2:** Let you select specific sections to focus on first\n**Option 3:** Search for additional data/evidence before drafting"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Option 1 - Please draft a complete response."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Excellent! I'll now draft your PQ response, incorporating all the research findings and following MND's standard format."
        },
        {
          type: "thinking" as const,
          thought: "Drafting comprehensive PQ response...",
          reasoning: [
            { text: "Loading MND Parliamentary Question response template...", icon: "file-text", description: "Retrieving the standard two-part PQ answer template used by the Housing Policy Division." },
            { text: "Structuring two-part answer format for parts (a) and (b)...", icon: "file-text", description: "Organizing the response with part (a) addressing waiting time data and part (b) outlining policy measures." },
            { text: "Incorporating verified statistics (3.9 years average waiting time)...", icon: "search", description: "Embedding the confirmed 3.9-year average along with mature (4.2) and non-mature (3.8) estate breakdowns." },
            { text: "Using the Statistics Verification tool...", icon: "wrench", description: "Cross-checking the BTO waiting time figures against the internal MND statistics database for accuracy." },
            { text: "Aligning language and tone with past ministerial responses...", icon: "search", description: "Matching phrasing to PQs 2284 and 1856 so the response maintains consistency across parliamentary sessions." },
            { text: "Using the Tone Analyzer tool...", icon: "wrench", description: "Analyzing the draft language against past ministerial response patterns to ensure consistent tone and phrasing." },
            { text: "Ensuring empathetic acknowledgment of waiting time concerns...", icon: "search", description: "Adding a compassionate opening that recognizes homebuyer frustrations, as done in previous answers." },
            { text: "Including all four policy measures with proper justification...", icon: "search", description: "Detailing the 100,000-flat supply plan, contractor expansion, DfMA construction, and PLH model." },
            { text: "Cross-checking content against internal MND guidelines...", icon: "search", description: "Validating that no future timeline commitments are made and all figures come from approved sources." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is running a final compliance check to ensure the draft meets all internal MND guidelines." },
            { text: "Formatting document for official parliamentary submission...", icon: "file-text", description: "Applying the formal parliamentary document layout, headers, and metadata fields." }
          ],
          timingMs: 16000,
          doneSummary: "Drafted PQ response with verified data and 4 policy measures",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Your draft PQ response is ready! I've created multiple versions for you to choose from:"
        },
        {
          type: "artifact" as const,
          title: "Draft PQ Response - Version 1 (Recommended)",
          fileType: "document",
          description: "Formal, concise parliamentary response",
          interactive: false,
          content: `<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-purple-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-purple-900">PARLIAMENTARY QUESTION RESPONSE</h1>
    <p class="text-sm text-gray-600 mt-2">Draft Version 1 (Recommended)</p>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 rounded-lg">
    <h2 class="text-sm font-semibold text-purple-900 mb-2">QUESTION</h2>
    <p class="text-sm text-gray-800">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</p>
  </div>
  
  <div class="space-y-6">
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(a) Average Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The average waiting time for BTO flats from application to key collection is approximately 3.9 years. This varies by location: mature estates average 4.2 years, while non-mature estates average 3.8 years.</p>
        
        <p>These timelines reflect construction sector challenges including supply chain disruptions and labour constraints post-pandemic.</p>
      </div>
    </div>
    
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(b) Measures to Reduce Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The Government has implemented several measures:</p>
        
        <p><strong>First,</strong> HDB will launch approximately 100,000 flats over the next five years to ensure adequate supply.</p>
        
        <p><strong>Second,</strong> we are expanding construction capacity by pre-qualifying more contractors and supporting adoption of advanced construction technologies.</p>
        
        <p><strong>Third,</strong> we are improving productivity through Design for Manufacturing and Assembly (DfMA), which enables off-site pre-fabrication to reduce construction time.</p>
        
        <p><strong>Fourth,</strong> the Prime Location Public Housing model provides additional options in sought-after locations while maintaining accessibility for first-time buyers.</p>
        
        <p>We remain committed to delivering quality homes within reasonable timeframes and will continue to monitor and adjust our approach as needed.</p>
      </div>
    </div>
  </div>
  
  <div class="mt-8 p-4 bg-green-50 border border-green-300 rounded-lg">
    <h3 class="font-semibold text-green-900 mb-2">✅ Quality Checks Passed</h3>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Formal parliamentary tone</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Addresses both parts clearly</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Uses verified statistics</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Consistent with past responses</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Includes 4 policy measures</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600">✓</span>
        <span>Empathetic language</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 p-4 bg-gray-50 rounded-lg">
    <h3 class="font-semibold text-gray-900 mb-2">📝 Metadata</h3>
    <div class="text-sm text-gray-600 space-y-1">
      <p><strong>Word Count:</strong> 156 words</p>
      <p><strong>Reading Time:</strong> ~45 seconds</p>
      <p><strong>Tone:</strong> Formal, Empathetic</p>
      <p><strong>Consistency Score:</strong> 98% (aligned with 3 past PQs)</p>
    </div>
  </div>
</div>`
        },
        {
          type: "artifact" as const,
          title: "Draft PQ Response - Version 2 (Detailed)",
          fileType: "document",
          description: "More detailed response with additional context",
          interactive: false,
          content: `<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-purple-600 pb-4 mb-6">
    <h1 class="text-2xl font-bold text-purple-900">PARLIAMENTARY QUESTION RESPONSE</h1>
    <p class="text-sm text-gray-600 mt-2">Draft Version 2 (Detailed)</p>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 rounded-lg">
    <h2 class="text-sm font-semibold text-purple-900 mb-2">QUESTION</h2>
    <p class="text-sm text-gray-800">To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.</p>
  </div>
  
  <div class="space-y-6">
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(a) Average Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The average waiting time for Build-To-Order (BTO) flats varies across towns depending on construction complexities, site conditions, and contractor capacity. Over the past year, the average waiting time from application to key collection has been approximately 3.9 years.</p>
        
        <p>For projects in mature estates such as Queenstown and Kallang, the average is 4.2 years. For non-mature estates such as Tengah and Punggol, it is 3.8 years.</p>
        
        <p>These waiting times reflect challenges in the construction sector, including supply chain disruptions and labour constraints in the post-pandemic period. The Government remains committed to addressing these challenges while ensuring the quality of public housing.</p>
      </div>
    </div>
    
    <div>
      <h2 class="text-lg font-bold text-purple-900 mb-3">(b) Measures to Reduce Waiting Times</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>The Government remains committed to ensuring Singaporeans can access quality public housing within a reasonable timeframe. Several measures have been implemented:</p>
        
        <p><strong>First,</strong> housing supply is being significantly increased. HDB will launch approximately 100,000 flats over the next five years, ensuring adequate supply to meet demand from Singaporean households.</p>
        
        <p><strong>Second,</strong> we are working with contractors to expand construction capacity through pre-qualification of more contractors and support for advanced construction technologies. This will help address the current capacity constraints in the construction sector.</p>
        
        <p><strong>Third,</strong> construction productivity is being improved through Design for Manufacturing and Assembly (DfMA), which allows components to be pre-fabricated off-site, reducing on-site construction time and improving efficiency.</p>
        
        <p><strong>Fourth,</strong> the Prime Location Public Housing (PLH) model has been introduced to provide housing options in sought-after areas while maintaining accessibility and affordability for first-time homebuyers through subsidies and resale conditions.</p>
        
        <p>The Government will continue to monitor the situation closely and make necessary adjustments to deliver quality homes within reasonable timeframes.</p>
      </div>
    </div>
  </div>
  
  <div class="mt-8 p-4 bg-amber-50 border border-amber-300 rounded-lg">
    <h3 class="font-semibold text-amber-900 mb-2">⚠️ Note on Detail Level</h3>
    <p class="text-sm text-gray-700">This version provides more context and explanation. Consider using Version 1 if brevity is preferred, or this version if more detailed justification is needed.</p>
  </div>
  
  <div class="mt-6 p-4 bg-gray-50 rounded-lg">
    <h3 class="font-semibold text-gray-900 mb-2">📝 Metadata</h3>
    <div class="text-sm text-gray-600 space-y-1">
      <p><strong>Word Count:</strong> 268 words</p>
      <p><strong>Reading Time:</strong> ~1 minute 20 seconds</p>
      <p><strong>Tone:</strong> Formal, Comprehensive</p>
      <p><strong>Detail Level:</strong> High</p>
    </div>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "I've prepared two versions for you:\n\n**Version 1 (Recommended):** Concise, formal, and directly addresses both parts. This follows the style of recent PQ responses.\n\n**Version 2 (Detailed):** More comprehensive with additional context and explanations. Use this if more justification is needed.\n\nWhich version would you like to proceed with, or would you like me to create a hybrid version?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Version 1 looks good. Can you now help me prepare the submission package?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Excellent choice! Let me prepare the complete submission package with all supporting documents."
        },
        {
          type: "thinking" as const,
          thought: "Preparing complete submission package...",
          reasoning: [
            { text: "Generating final PQ response document in .docx format...", icon: "file-text", description: "Converting the approved Version 1 draft into an official Word document with proper headers." },
            { text: "Using the Document Generator tool...", icon: "wrench", description: "Converting the approved draft into formatted .docx and .pdf files with proper ministry headers and metadata." },
            { text: "Creating professional cover note for director review...", icon: "file-text", description: "Writing a summary cover note highlighting key points and requesting director clearance." },
            { text: "Compiling Annex A: Past PQ references with Hansard database links...", icon: "file-text", description: "Assembling the three similar PQs with direct Hansard links and response excerpts." },
            { text: "Compiling Annex B: Statistical documentation with source verification...", icon: "file-text", description: "Documenting the BTO waiting time figures with their internal database sources and retrieval dates." },
            { text: "Creating Annex C: Policy alignment checklist for compliance...", icon: "file-text", description: "Building a verification matrix confirming alignment with ministerial statements and guidelines." },
            { text: "Formatting all documents according to MND standards...", icon: "file-text", description: "Applying ministry-standard fonts, margins, headers, and classification markings across all files." },
            { text: "Using the MND Format Checker tool...", icon: "wrench", description: "Validating all five documents against MND formatting standards including fonts, margins, and classification markings." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is running final quality checks across the entire submission package for completeness and accuracy." },
            { text: "Packaging all components into submission-ready bundle...", icon: "file-text", description: "Combining all five documents into a single 349 KB package ready for email attachment." }
          ],
          timingMs: 14000,
          doneSummary: "Generated 5 submission documents in MND format",
          tags: ["3 tools used"]
        },
        {
          type: "artifact" as const,
          title: "Complete Submission Package",
          fileType: "document",
          description: "Ready-to-submit PQ response package",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📦 Submission Package Ready</h1>
  
  <div class="mb-6 p-4 bg-purple-50 border border-purple-300 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">Package Contents</h2>
    <div class="space-y-2">
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📄</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">PQ_Response_BTO_Waiting_Times_FINAL.docx</p>
          <p class="text-xs text-gray-500">Main response document (Version 1)</p>
        </div>
        <span class="text-xs text-gray-500">42 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📄</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Cover_Note_to_Director.docx</p>
          <p class="text-xs text-gray-500">Submission cover note</p>
        </div>
        <span class="text-xs text-gray-500">28 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📊</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_A_Past_PQ_References.pdf</p>
          <p class="text-xs text-gray-500">3 similar PQs with analysis</p>
        </div>
        <span class="text-xs text-gray-500">156 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">📊</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_B_Statistics_Documentation.pdf</p>
          <p class="text-xs text-gray-500">Data sources and verification</p>
        </div>
        <span class="text-xs text-gray-500">89 KB</span>
      </div>
      
      <div class="flex items-center gap-3 p-2 bg-white rounded border border-purple-200">
        <span class="text-2xl">✅</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">Annex_C_Policy_Alignment_Checklist.pdf</p>
          <p class="text-xs text-gray-500">Consistency verification</p>
        </div>
        <span class="text-xs text-gray-500">34 KB</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg">
    <h2 class="font-bold text-green-900 mb-3">📊 Package Summary</h2>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <p class="text-gray-600">Total Documents</p>
        <p class="text-2xl font-bold text-green-700">5</p>
      </div>
      <div>
        <p class="text-gray-600">Package Size</p>
        <p class="text-2xl font-bold text-green-700">349 KB</p>
      </div>
      <div>
        <p class="text-gray-600">Time Saved</p>
        <p class="text-2xl font-bold text-green-700">~5 hours</p>
      </div>
      <div>
        <p class="text-gray-600">Quality Score</p>
        <p class="text-2xl font-bold text-green-700">98%</p>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 border border-blue-300 rounded-lg">
    <h2 class="font-bold text-blue-900 mb-3">📋 Cover Note Preview</h2>
    <div class="text-sm space-y-2 text-gray-700">
      <p><strong>To:</strong> Director, Housing Policy Division</p>
      <p><strong>From:</strong> [Your Name], Policy Officer</p>
      <p><strong>Subject:</strong> PQ Response - BTO Waiting Times</p>
      
      <div class="mt-3 p-3 bg-white rounded border border-blue-200">
        <p class="text-xs text-gray-600 mb-2"><strong>Key Points Highlighted:</strong></p>
        <ul class="text-xs text-gray-600 space-y-1 list-disc list-inside">
          <li>Two-part question on waiting times and policy measures</li>
          <li>Statistics verified: 3.9 years average (4.2 mature, 3.8 non-mature)</li>
          <li>Cross-referenced with 3 past PQs for consistency</li>
          <li>Aligned with recent ministerial statements</li>
          <li>Four concrete policy measures included</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-purple-50 border-2 border-purple-400 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">✅ Ready for Submission</h2>
    <p class="text-sm text-gray-700 mb-3">Your PQ response package is complete and ready to submit to your director for review.</p>
    
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>All quality checks passed</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Consistent with past responses (3 PQs analyzed)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Statistics verified from internal database</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Formatted to MND standards</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>All supporting annexes included</span>
      </div>
    </div>
  </div>
  
  <div class="mt-6 text-xs text-gray-500 text-center">
    <p>Document package generated on November 25, 2025</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Your complete submission package is ready! 🎉\n\nWould you like me to:\n1. **Send via email** to your director\n2. **Download** the package for your records\n3. **Make final edits** before submission"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Option 1 - Please send it via email to my director."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! Let me draft a professional email for your submission."
        },
        {
          type: "thinking" as const,
          thought: "Composing professional submission email...",
          reasoning: [
            { text: "Drafting professional email for director submission...", icon: "file-text", description: "Composing a formal cover email addressed to the director with a clear request for review and clearance." },
            { text: "Using the Email Template Engine tool...", icon: "wrench", description: "Loading the ministry's standard submission email template with pre-configured formatting and sign-off blocks." },
            { text: "Summarizing key PQ points and recommendations...", icon: "file-text", description: "Condensing the question type, statistics, and response strategy into a quick-read summary section." },
            { text: "Preparing attachment list with all supporting documents...", icon: "file-text", description: "Listing all five submission package files with sizes for the email attachment section." },
            { text: "Using the Directory Lookup tool...", icon: "wrench", description: "Looking up the director's full name, title, and email address from the ministry staff directory." },
            { text: "Formatting email according to ministry communication standards...", icon: "search", description: "Applying MND email conventions including proper sign-off, division name, and contact details." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is verifying the email content and attachments meet ministry submission protocol requirements." }
          ],
          timingMs: 8000,
          doneSummary: "Drafted submission email with 5 attachments",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "I've drafted your submission email. Please review it below:"
        },
        {
          type: "artifact" as const,
          title: "Email Drafted",
          fileType: "document",
          description: "Submission email to director",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
    <h2 class="text-sm font-bold text-purple-900 mb-3">📧 EMAIL DRAFT FOR YOUR REVIEW</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> [Director's Name]</div>
      <div><strong>CC:</strong> [Optional CC recipients]</div>
      <div><strong>Subject:</strong> [For Review] PQ Response - BTO Waiting Times</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear [Director's Name],</p>
    
    <p>I am writing to submit the Parliamentary Question response regarding BTO waiting times for your review.</p>
    
    <div class="my-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-bold text-gray-900 mb-3">Summary:</h3>
      <ul class="space-y-2">
        <li><strong>Question Type:</strong> Two-part question on BTO waiting times and policy measures</li>
        <li><strong>Classification:</strong> Unclassified</li>
        <li><strong>Ministry:</strong> MND - Housing Policy Division</li>
        <li><strong>Due Date:</strong> 15 December 2025</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Key Points:</h3>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li><strong>Statistics Verified:</strong> Average waiting time 3.9 years (4.2 years for mature estates, 3.8 years for non-mature)</li>
        <li><strong>Past PQ References:</strong> Cross-referenced with 3 similar PQs for consistency (PQ 2284, 1856, 3102)</li>
        <li><strong>Policy Measures:</strong> Four concrete measures included (100,000 flats plan, contractor expansion, DfMA, PLH model)</li>
        <li><strong>Quality Score:</strong> 98% consistency with past ministerial responses</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Response Strategy:</h3>
      <p>The draft follows the recommended approach of acknowledging concerns empathetically, providing specific verified data, explaining context (post-pandemic construction challenges), and highlighting four policy measures aligned with recent ministerial statements.</p>
    </div>
    
    <p>The complete submission package includes:</p>
    <ul class="list-disc list-inside ml-4 space-y-1">
      <li>Draft PQ Response (Version 1 - Recommended format)</li>
      <li>Past PQ Analysis Report with Hansard references</li>
      <li>Statistical documentation with data sources</li>
      <li>Policy alignment checklist</li>
      <li>Cover note</li>
    </ul>
    
    <p class="font-semibold mt-4">For your review and clearance, please.</p>
    
    <p>Please let me know if you require any revisions or additional information.</p>
    
    <p>Thank you for your consideration.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">[Your Name]</p>
      <p>Policy Officer</p>
      <p>Housing Policy Division</p>
      <p>Ministry of National Development</p>
      <p>📧 [your.email@mnd.gov.sg] | ☎️ [Your Contact]</p>
    </div>
    
    <div class="mt-6 p-3 bg-purple-50 rounded border border-purple-200">
      <h3 class="font-bold text-purple-900 mb-2">📎 Attachments (5 files, 349 KB total):</h3>
      <ul class="text-xs space-y-1">
        <li>📄 PQ_Response_BTO_Waiting_Times_FINAL.docx (42 KB)</li>
        <li>📄 Cover_Note_to_Director.docx (28 KB)</li>
        <li>📊 Annex_A_Past_PQ_References.pdf (156 KB)</li>
        <li>📊 Annex_B_Statistics_Documentation.pdf (89 KB)</li>
        <li>✅ Annex_C_Policy_Alignment_Checklist.pdf (34 KB)</li>
      </ul>
    </div>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "The email draft is ready! Would you like to review it before sending?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This email is too long. Can you just attach the documents instead and keep the email brief?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Great suggestion! Let me create a much shorter email that simply attaches the documents. The detailed information will be in the attached files."
        },
        {
          type: "thinking" as const,
          thought: "Revising to create concise email...",
          reasoning: [
            { text: "Analyzing user feedback to simplify email length...", icon: "search", description: "Reviewing the user's request and identifying which sections can be removed from the email body." },
            { text: "Drafting brief, professional cover email...", icon: "file-text", description: "Rewriting the email to a concise three-sentence format that lets the attachments speak for themselves." },
            { text: "Using the Email Template Engine tool...", icon: "wrench", description: "Switching to the ministry's concise email template optimized for brief submission cover emails." },
            { text: "Moving detailed information to attached documents...", icon: "file-text", description: "Ensuring all statistics, PQ references, and strategy details remain accessible in the cover note attachment." },
            { text: "Using the Content Optimizer tool...", icon: "wrench", description: "Reducing the email word count by 70% while preserving the due date and clearance request as key information." },
            { text: "Ensuring key points remain visible while reducing verbosity...", icon: "search", description: "Keeping the due date and clearance request prominent while cutting the overall word count by 70%." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is confirming the shortened email still meets ministry submission protocol requirements." }
          ],
          timingMs: 8000,
          doneSummary: "Revised email to concise format",
          tags: ["3 tools used"]
        },
        {
          type: "artifact" as const,
          title: "Revised Email (Brief Version)",
          fileType: "document",
          description: "Concise submission email with attachments",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
    <h2 class="text-sm font-bold text-purple-900 mb-3">📧 REVISED EMAIL DRAFT</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> [Director's Name]</div>
      <div><strong>CC:</strong> [Optional CC recipients]</div>
      <div><strong>Subject:</strong> [For Review] PQ Response - BTO Waiting Times</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear [Director's Name],</p>
    
    <p>Please find attached the PQ response regarding BTO waiting times for your review and clearance.</p>
    
    <p>The submission package includes the draft response, past PQ analysis, statistical documentation, and policy alignment checklist.</p>
    
    <p><strong>Due Date:</strong> 15 December 2025</p>
    
    <p class="font-semibold">For your review and clearance, please.</p>
    
    <p>Please let me know if you require any revisions or additional information.</p>
    
    <p>Thank you.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">[Your Name]</p>
      <p>Policy Officer, Housing Policy Division</p>
      <p>Ministry of National Development</p>
    </div>
    
    <div class="mt-6 p-3 bg-purple-50 rounded border border-purple-200">
      <h3 class="font-bold text-purple-900 mb-2">📎 Attachments (5 files, 349 KB total):</h3>
      <ul class="text-xs space-y-1">
        <li>📄 PQ_Response_BTO_Waiting_Times_FINAL.docx</li>
        <li>📄 Cover_Note_to_Director.docx</li>
        <li>📊 Annex_A_Past_PQ_References.pdf</li>
        <li>📊 Annex_B_Statistics_Documentation.pdf</li>
        <li>✅ Annex_C_Policy_Alignment_Checklist.pdf</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6 p-3 bg-green-50 rounded border border-green-200">
    <p class="text-sm text-green-900"><strong>✓ Much better!</strong> This brief email keeps it professional while letting the attached documents speak for themselves.</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Perfect! This revised email is much more concise. All the detailed information is in the attached cover note and supporting documents.\n\nPlease provide the recipient details to send:\n- Director's name and email\n- CC recipients (optional)"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Michael Tan, michael.tan@mnd.gov.sg, CC rachel.lim@mnd.gov.sg"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! Sending your PQ submission now..."
        },
        {
          type: "thinking" as const,
          thought: "Sending PQ submission email...",
          reasoning: [
            { text: "Attaching all 5 documents to email (349 KB total size)...", icon: "database", description: "Bundling the PQ response, cover note, and three annexes as email attachments." },
            { text: "Verifying recipient addresses: michael.tan@mnd.gov.sg, rachel.lim@mnd.gov.sg...", icon: "search", description: "Validating both email addresses against the ministry directory before sending." },
            { text: "Using the Address Verification tool...", icon: "wrench", description: "Validating both recipient email addresses against the ministry staff directory to confirm they are active." },
            { text: "Formatting professional email with proper ministry protocols...", icon: "search", description: "Applying the finalized concise email template with the director's name and correct sign-off." },
            { text: "Using the Gov Email Gateway tool...", icon: "wrench", description: "Submitting the email through the secure government mail gateway with delivery tracking and read receipts." },
            { text: "Processing email send request...", icon: "database", description: "Submitting the email through the secure government mail gateway with delivery tracking enabled." },
            { text: "Confirming successful delivery...", icon: "database", description: "Receiving delivery confirmation from the mail server for both recipients." },
            { text: "Using the PQ Compliance Checker assistant (Tool)...", icon: "wrench", description: "Custom agent is logging the submission action and confirming all compliance checks passed for audit records." }
          ],
          timingMs: 10000,
          doneSummary: "Sent email with 5 attachments to 2 recipients",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "✅ **Email sent successfully!**\n\nYour PQ submission has been sent to:\n- **Michael Tan** (michael.tan@mnd.gov.sg) - Director\n- **Rachel Lim** (rachel.lim@mnd.gov.sg) - CC'd\n\nAll 5 attachments included (349 KB total)"
        },
        {
          type: "artifact" as const,
          title: "Final Session Summary",
          fileType: "document",
          description: "Complete workflow summary",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-purple-900">📊 Session Summary</h1>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div class="text-3xl font-bold text-purple-700 mb-1">~5 hours</div>
      <div class="text-sm text-gray-600">Time Saved</div>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="text-3xl font-bold text-green-700 mb-1">5 docs</div>
      <div class="text-sm text-gray-600">Generated</div>
    </div>
    
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="text-3xl font-bold text-blue-700 mb-1">3 PQs</div>
      <div class="text-sm text-gray-600">Analyzed</div>
    </div>
    
    <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <div class="text-3xl font-bold text-emerald-700 mb-1">98%</div>
      <div class="text-sm text-gray-600">Quality Score</div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-gray-50 rounded-lg">
    <h2 class="font-bold text-gray-900 mb-3">What We Accomplished</h2>
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Analyzed PQ structure and classification</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Searched and analyzed 3 similar past PQs from Hansard</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Verified statistics from internal MND database</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Drafted formal response (2 versions)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Generated complete submission package (5 documents)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-green-600 font-bold">✓</span>
        <span>Sent professional email to director with all attachments</span>
      </div>
    </div>
  </div>
  
  <div class="mb-6 p-4 bg-purple-50 border border-purple-300 rounded-lg">
    <h2 class="font-bold text-purple-900 mb-3">📧 Email Sent To</h2>
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">MT</div>
        <div>
          <p class="font-semibold">Michael Tan</p>
          <p class="text-xs text-gray-500">michael.tan@mnd.gov.sg (Director)</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">RL</div>
        <div>
          <p class="font-semibold">Rachel Lim</p>
          <p class="text-xs text-gray-500">rachel.lim@mnd.gov.sg (CC'd)</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-blue-50 border border-blue-300 rounded-lg">
    <h2 class="font-bold text-blue-900 mb-3">📝 Next Steps</h2>
    <ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">
      <li>Director will review your submission (typically 1-2 business days)</li>
      <li>You may receive feedback or approval</li>
      <li>If approved, proceed with directorate clearance</li>
      <li>Final ministry clearance before parliamentary submission</li>
    </ol>
  </div>
  
  <div class="mt-6 text-center">
    <p class="text-sm text-gray-600">Thank you for using PQ AI Assistant! 🎉</p>
    <p class="text-xs text-gray-500 mt-2">Session completed on November 25, 2025</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "You're all set! Your PQ response has been submitted to your director. The typical review time is 1-2 business days.\n\nFeel free to come back anytime you need help with future PQs. Good luck! 😊"
        }
      ]
    }
  ]
};