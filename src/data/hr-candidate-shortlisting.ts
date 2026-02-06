export const hrCandidateShortlistingData = {
  id: "hr-candidate-shortlisting",
  title: "HR Candidate Shortlisting Demo",
  assistantName: "HR Recruitment Assistant",
  description: "AI-assisted candidate screening and shortlisting for government recruitment with system integrations",
  colorScheme: "indigo" as const,
  messages: [
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Hello! I'm the Workday Candidate Shortlister Assistant. I can help you efficiently screen and shortlist candidates from your Workday HCM system using AI-powered analysis. What can I do for you today?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Hi! I just received 127 applications for our Senior Software Engineer position (Req ID: GTA-2024-SE-089). I need to shortlist about 10 candidates by end of day tomorrow. Can you help me get started?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Analyzing job requisition GTA-2024-SE-089...",
            "Connecting to Workday HCM system...",
            "Using the Workday Recruiting API tool...",
            "Retrieving candidate applications...",
            "Using the CV Parser tool...",
            "Using the Candidate Scoring Agent assistant (Tool)...",
            "Preparing shortlisting workflow..."
          ],
          reasoning: [
            { text: "Analyzing job requisition GTA-2024-SE-089...", icon: "search", description: "Parsing the requisition details to extract role requirements, qualifications, and screening criteria." },
            { text: "Connecting to Workday HCM system...", icon: "database", description: "Establishing a secure connection and retrieving all 127 candidate profiles submitted for this requisition." },
            { text: "Using the Workday Recruiting API tool...", icon: "wrench", description: "Invoking the Workday Recruiting API to fetch all 127 candidate records, application metadata, and submission timestamps." },
            { text: "Retrieving candidate applications...", icon: "database", description: "Downloading resumes and cover letters attached to each candidate application." },
            { text: "Using the CV Parser tool...", icon: "wrench", description: "Extracting structured data from uploaded resumes — skills, experience, qualifications, and certifications — into standardized candidate profiles." },
            { text: "Using the Candidate Scoring Agent assistant (Tool)...", icon: "wrench", description: "Custom agent is pre-screening candidate profiles for data completeness and flagging any missing required fields." },
            { text: "Preparing shortlisting workflow...", icon: "search", description: "Setting up the evaluation pipeline with weighted scoring based on the role's must-have and nice-to-have criteria." }
          ],
          timingMs: 8000,
          doneSummary: "Analyzed requisition and retrieved 127 candidates",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Good morning, Michelle! I'd be happy to help you with this shortlisting. Let me pull up the candidate data from Workday."
        },
        {
          type: "artifact" as const,
          title: "Workday System Integration - Data Retrieval",
          fileType: "document",
          description: "Connecting to Workday HCM to retrieve candidate profiles",
          interactive: false,
          content: `<div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
  <h2 class="text-xl font-bold text-blue-900 mb-4">🔄 System Status: Workday HCM Integration</h2>
  
  <div class="space-y-3">
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Connected to Workday HCM</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Retrieving Job Requisition: GTA-2024-SE-089</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Fetching candidate applications...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Downloading 127 candidate profiles and CVs</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Extracting structured data from resumes</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Loading job description and requirements</span>
    </div>
  </div>
  
  <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
    <div class="mb-2">
      <div class="text-sm text-gray-600 mb-1">Progress</div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-green-600 h-3 rounded-full" style="width: 100%"></div>
      </div>
    </div>
    <p class="text-sm font-semibold text-green-700 mt-2">Status: ✅ Successfully retrieved 127 candidate profiles from Workday</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Perfect! I've successfully retrieved all **127 applications** for **Job Requisition GTA-2024-SE-089** (Senior Software Engineer) from Workday.\n\nHere's what I have:\n- ✅ 127 candidate profiles with full CVs\n- ✅ Job description and requirements\n- ✅ Application timestamps and candidate details\n- ✅ Current workflow status for each application",
          delayMs: 1000
        },
        {
          type: "text" as const,
          content: "To get us started efficiently, I have a few questions:\n\n1. **Do you want me to use the standard criteria from the job description**, or would you like to adjust any requirements?\n2. **Are there any must-have qualifications** that are non-negotiable for this role?\n3. **Should I apply any of your previous preferences** from similar software engineering roles you've screened?\n\nOnce you confirm, I'll leverage our AI Platform's Recommendations API to analyze all candidates and have an initial ranked list ready in about 3-5 minutes.",
          delayMs: 500
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes, please use the standard job description criteria. The must-haves are: minimum 5 years of software development experience, strong backend development skills, and experience with cloud platforms. Also, yes - apply my previous preferences if they're relevant!"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Processing job description criteria...",
            "Extracting must-have requirements...",
            "Loading saved user preferences...",
            "Using the AI Recommendations API tool...",
            "Using the Skills Taxonomy Matcher tool...",
            "Using the Candidate Scoring Agent assistant (Tool)...",
            "Running intelligent matching algorithms...",
            "Calculating match scores..."
          ],
          reasoning: [
            { text: "Processing job description criteria...", icon: "search", description: "Breaking down the Senior Software Engineer role into weighted scoring dimensions." },
            { text: "Extracting must-have requirements...", icon: "search", description: "Identifying the three non-negotiable qualifications: 5+ years experience, backend skills, and cloud platform expertise." },
            { text: "Loading saved user preferences...", icon: "database", description: "Loading Michelle's saved screening preferences from past software engineering shortlists." },
            { text: "Using the AI Recommendations API tool...", icon: "wrench", description: "Sending 127 candidate profiles to the AI-powered matching service for multi-dimensional skill and experience analysis." },
            { text: "Using the Skills Taxonomy Matcher tool...", icon: "wrench", description: "Mapping candidate skills to the government's standardized skills taxonomy to ensure consistent evaluation across all profiles." },
            { text: "Using the Candidate Scoring Agent assistant (Tool)...", icon: "wrench", description: "Custom agent is running the multi-criteria evaluation, weighing technical skills, cloud proficiency, and government sector experience." },
            { text: "Running intelligent matching algorithms...", icon: "search", description: "Evaluating 127 candidates across technical skills, cloud proficiency, and government exposure." },
            { text: "Calculating match scores...", icon: "search", description: "Ranking all candidates by overall suitability and identifying the top 10 shortlist." }
          ],
          timingMs: 14000,
          doneSummary: "Processed 127 candidates with AI matching",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Perfect! Let me process all 127 applications using our AI-powered analysis system."
        },
        {
          type: "artifact" as const,
          title: "AI Platform Integration - Candidate Analysis",
          fileType: "document",
          description: "AI-powered candidate matching and ranking using Recommendations API",
          interactive: false,
          content: `<div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
  <h2 class="text-xl font-bold text-purple-900 mb-4">🤖 AI Analysis in Progress</h2>
  
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <p class="text-sm font-semibold text-gray-700 mb-3">Criteria Configured:</p>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>✓ Standard Job Description Requirements</li>
      <li>✓ Must-have Qualifications</li>
      <li>✓ User's Saved Preferences</li>
    </ul>
  </div>
  
  <div class="space-y-3">
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Connecting to AI Platform's Recommendations API...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Uploading candidate data for analysis...</span>
    </div>
    
    <div class="flex items-center space-x-3">
      <span class="text-green-600 text-2xl">✓</span>
      <span class="text-gray-800">Running intelligent matching algorithms...</span>
    </div>
  </div>
  
  <div class="mt-4 bg-purple-100 p-4 rounded-lg">
    <p class="text-sm font-semibold text-purple-900 mb-2">Analysis Tasks:</p>
    <ul class="text-xs text-purple-800 space-y-1">
      <li>→ Analyzing technical skills and experience levels</li>
      <li>→ Evaluating backend development expertise</li>
      <li>→ Assessing cloud platform proficiency (AWS/Azure/GCP)</li>
      <li>→ Matching against microservices architecture experience</li>
      <li>→ Scoring programming language proficiency</li>
      <li>→ Evaluating government sector exposure</li>
      <li>→ Analyzing leadership and mentoring capabilities</li>
      <li>→ Applying Michelle's saved preferences</li>
      <li>→ Calculating composite match scores</li>
      <li>→ Ranking candidates by fit score</li>
    </ul>
  </div>
  
  <div class="mt-6 bg-white p-4 rounded-lg shadow-md">
    <div class="mb-2">
      <div class="text-sm text-gray-600 mb-1">Analysis Progress</div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-purple-600 h-3 rounded-full" style="width: 100%"></div>
      </div>
    </div>
    <p class="text-sm font-semibold text-purple-700 mt-2">Status: ✅ AI analysis complete - 127 candidates ranked</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Excellent! The AI Platform's Recommendations API has completed the analysis. Here's what I'm working with:\n\n**Must-Have Requirements (High Priority):**\n- ✓ Minimum 5 years software development experience\n- ✓ Backend development expertise\n- ✓ Cloud platform experience (AWS/Azure/GCP)\n\n**Additional Criteria from Job Description:**\n- Bachelor's degree in Computer Science or related field\n- Experience with microservices architecture\n- Proficiency in Java, Python, or Go\n- Database management skills (SQL/NoSQL)\n- Agile/Scrum experience\n\n**Your Saved Preferences Applied:**\n- Prioritizing candidates with public sector or government experience\n- Valuing continuous learning (certifications, recent courses)\n- Considering internal mobility candidates favorably",
          delayMs: 1000
        },
        {
          type: "text" as const,
          content: "✅ **Analysis Complete!**\n\nHere's your overview:\n\n📊 **Candidate Distribution:**\n- **Highly Qualified (90%+ match):** 12 candidates\n- **Well Qualified (75-89% match):** 28 candidates  \n- **Moderately Qualified (60-74% match):** 45 candidates\n- **Below Threshold (<60% match):** 42 candidates\n\n🎯 **Recommended Shortlist:** I've identified **10 top candidates** who best match your criteria.\n\nWould you like to:\n1. **Review the top 10 shortlist** with detailed insights\n2. **Adjust the criteria** and re-rank\n3. **See candidates by specific strengths** (e.g., strongest cloud experience)",
          delayMs: 1500
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Let me review the top 10 shortlist with insights, please!"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Excellent! Here are your **Top 10 Shortlisted Candidates** with AI-generated insights:"
        },
        {
          type: "artifact" as const,
          title: "Top 10 Shortlisted Candidates - Detailed Analysis",
          fileType: "document",
          description: "Comprehensive candidate profiles with match scores and recommendations",
          interactive: false,
          content: `<div class="p-6 space-y-6">
  <h1 class="text-3xl font-bold mb-6 text-indigo-900">Top 10 Shortlisted Candidates</h1>
  
  <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg border-2 border-yellow-400 shadow-md">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-2xl font-bold text-yellow-900">🥇 Rank 1: David Chen</h2>
      <span class="bg-yellow-600 text-white px-4 py-2 rounded-full font-bold text-lg">96% Match</span>
    </div>
    <div class="space-y-3">
      <div>
        <h3 class="font-semibold text-yellow-900 mb-2">Key Strengths:</h3>
        <ul class="list-disc list-inside text-gray-800 space-y-1">
          <li>8 years backend development (Java, Python, Node.js)</li>
          <li>4 years AWS experience with Solutions Architect certification</li>
          <li>Currently at Government Digital Services - internal candidate advantage</li>
          <li>Led migration of 3 legacy systems to microservices architecture</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="bg-indigo-50 p-5 rounded-lg border border-indigo-300">
    <h2 class="text-xl font-bold text-indigo-900 mb-4">Ranks 2-10: Strong Contenders</h2>
    <div class="space-y-4">
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 2: Sarah Tan (94%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Fintech | Azure expert</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 3: Raj Kumar (93%)</h3>
        <p class="text-sm text-gray-700">6 years exp | Multi-cloud | MOE contractor</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 4: Emily Wong (91%)</h3>
        <p class="text-sm text-gray-700">9 years exp | MOH cluster | Healthcare compliance</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 5: Marcus Lim (90%)</h3>
        <p class="text-sm text-gray-700">6 years exp | E-commerce | High-performance systems</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 6: Priya Sharma (89%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Ex-LTA | Continuous learner</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 7: Jonathan Ng (88%)</h3>
        <p class="text-sm text-gray-700">5 years exp | GovTech | Culture fit</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 8: Linda Koh (87%)</h3>
        <p class="text-sm text-gray-700">8 years exp | Telecom | Legacy systems expert</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 9: Kevin Tan (86%)</h3>
        <p class="text-sm text-gray-700">6 years exp | Ex-IRAS intern | Modern stack</p>
      </div>
      <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
        <h3 class="font-bold text-indigo-900">Rank 10: Amanda Lee (85%)</h3>
        <p class="text-sm text-gray-700">7 years exp | Insurance | Leadership experience</p>
      </div>
    </div>
  </div>
  
  <div class="bg-green-50 p-5 rounded-lg border border-green-300">
    <h2 class="text-xl font-bold text-green-900 mb-3">📊 Quick Statistics</h2>
    <ul class="space-y-2 text-gray-800">
      <li>✓ Average years of experience: 6.8 years</li>
      <li>✓ Government/public sector background: 5 out of 10</li>
      <li>✓ All meet must-have requirements: Yes</li>
      <li>✓ Cloud certifications: 7 out of 10</li>
      <li>✓ Leadership/mentoring experience: 6 out of 10</li>
    </ul>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "**Would you like me to:**\n1. **Export this shortlist** to send to your hiring manager\n2. **Dive deeper into any specific candidate**\n3. **Compare two candidates** side-by-side\n4. **Adjust criteria** and see how rankings change\n5. **Draft interview invitation emails** for these candidates",
          delayMs: 1000
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This is really helpful! Can you help me draft an email to my hiring manager explaining this shortlist?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Drafting professional email for hiring manager...",
            "Using the Email Template Engine tool...",
            "Structuring shortlist summary...",
            "Including key statistics and recommendations...",
            "Using the Report Generator tool...",
            "Using the Candidate Scoring Agent assistant (Tool)...",
            "Formatting with government communication standards..."
          ],
          reasoning: [
            { text: "Drafting professional email for hiring manager...", icon: "file-text", description: "Composing a formal email addressed to James Wong summarizing the shortlisting outcome." },
            { text: "Using the Email Template Engine tool...", icon: "wrench", description: "Loading the government's standard email templates for professional shortlisting communications." },
            { text: "Structuring shortlist summary...", icon: "file-text", description: "Organizing the top-10 candidate overview with match scores and key qualifications." },
            { text: "Including key statistics and recommendations...", icon: "file-text", description: "Creating a formatted report with detailed candidate profiles, match scores, and key strengths." },
            { text: "Using the Report Generator tool...", icon: "wrench", description: "Creating the formatted shortlist report attachment with candidate profiles and match scores." },
            { text: "Using the Candidate Scoring Agent assistant (Tool)...", icon: "wrench", description: "Custom agent is verifying candidate data accuracy and match scores referenced in the email summary." },
            { text: "Formatting with government communication standards...", icon: "search", description: "Applying GovTech email formatting guidelines and professional tone conventions." }
          ],
          timingMs: 8000,
          doneSummary: "Drafted hiring manager email with shortlist summary",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Absolutely! I'll draft a professional summary email for your hiring manager."
        },
        {
          type: "artifact" as const,
          title: "Email Draft to Hiring Manager",
          fileType: "document",
          description: "Professional shortlist summary for James Wong",
          interactive: false,
          content: `<div class="p-6 bg-white">
  <div class="border-b-2 border-indigo-600 pb-4 mb-4">
    <h1 class="text-2xl font-bold text-indigo-900">📧 DRAFT EMAIL</h1>
  </div>
  
  <div class="space-y-3 mb-6">
    <div class="flex"><span class="font-semibold w-20">To:</span><span>James Wong (Hiring Manager - Engineering)</span></div>
    <div class="flex"><span class="font-semibold w-20">From:</span><span>Michelle Lim (HR Officer - Recruitment)</span></div>
    <div class="flex"><span class="font-semibold w-20">Subject:</span><span>Shortlisted Candidates for Senior Software Engineer Role (GTA-2024-SE-089)</span></div>
  </div>
  
  <div class="space-y-4 text-gray-800">
    <p>Dear James,</p>
    
    <p>I've completed the initial screening for the Senior Software Engineer position (Req ID: GTA-2024-SE-089). From 127 applications received, I've shortlisted 10 highly qualified candidates who meet all must-have requirements and align well with our team needs.</p>
    
    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 my-4">
      <h3 class="font-bold text-indigo-900 mb-2">Shortlisting Criteria Applied:</h3>
      <ul class="list-disc list-inside text-sm">
        <li>Minimum 5 years software development experience</li>
        <li>Strong backend development skills</li>
        <li>Cloud platform experience (AWS/Azure/GCP)</li>
        <li>Government/public sector exposure (preferred)</li>
      </ul>
    </div>
    
    <div class="bg-green-50 p-4 rounded-lg border border-green-200 my-4">
      <h3 class="font-bold text-green-900 mb-2">Shortlist Overview:</h3>
      <ul class="text-sm space-y-1">
        <li>Match Scores: 85% - 96%</li>
        <li>Average Experience: 6.8 years</li>
        <li>Government Background: 5 out of 10 candidates</li>
        <li>Cloud Certifications: 7 out of 10 candidates</li>
      </ul>
    </div>
    
    <p>Please review the attached detailed candidate profiles. I'm confident this shortlist represents strong talent aligned with our requirements.</p>
    
    <p class="mt-4">Best regards,<br>Michelle Lim<br>HR Officer (Recruitment)</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "I've drafted a comprehensive email that summarizes your methodology professionally. **Would you like me to send this email with all attachments to James?**",
          delayMs: 1000
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes, please go ahead and send everything to James! This looks great."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thoughts: [
            "Preparing email package for sending...",
            "Generating PDF documents...",
            "Using the Gov Email Gateway tool...",
            "Sending email to james.wong@tech.gov.sg...",
            "Using the Workday Status API tool...",
            "Updating Workday with shortlist status...",
            "Using the Candidate Scoring Agent assistant (Tool)...",
            "Recording audit trail..."
          ],
          reasoning: [
            { text: "Preparing email package for sending...", icon: "file-text", description: "Bundling the email body with three attachments: shortlist report, candidate profiles, and statistics." },
            { text: "Using the Gov Email Gateway tool...", icon: "wrench", description: "Connecting to the secure government mail gateway to deliver the email with all attachments." },
            { text: "Sending email to james.wong@tech.gov.sg...", icon: "database", description: "Delivering the complete package via the government mail gateway." },
            { text: "Using the Workday Status API tool...", icon: "wrench", description: "Calling the Workday Status API to batch-update all 10 shortlisted candidate records." },
            { text: "Updating Workday with shortlist status...", icon: "database", description: "Marking all shortlisted candidates and advancing the requisition to Manager Review stage." },
            { text: "Using the Candidate Scoring Agent assistant (Tool)...", icon: "wrench", description: "Custom agent is performing a final validation of the shortlist data before recording the audit trail." },
            { text: "Recording audit trail...", icon: "search", description: "Logging each action taken during this session for HR compliance and governance records." }
          ],
          timingMs: 12000,
          doneSummary: "Sent email and updated Workday",
          tags: ["3 tools used"]
        },
        {
          type: "text" as const,
          content: "Perfect! I'll send the email now with all the attachments and update Workday."
        },
        {
          type: "artifact" as const,
          title: "Email & System Updates - Processing",
          fileType: "document",
          description: "Sending email and updating candidate statuses in Workday",
          interactive: false,
          content: `<div class="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-400">
  <h2 class="text-xl font-bold text-green-900 mb-4">🔄 System Operations in Progress</h2>
  
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 class="font-bold text-gray-900 mb-3">Email Delivery:</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-3">
        <span class="text-green-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Email delivered successfully</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-green-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">3 attachments sent (11.5 MB total)</span>
      </div>
    </div>
  </div>
  
  <div class="bg-blue-100 p-4 rounded-lg shadow-md">
    <h3 class="font-bold text-blue-900 mb-3">Workday HCM Integration:</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">10 candidates marked as Shortlisted</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Requisition status updated to Manager Review</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-blue-600 text-xl">✓</span>
        <span class="text-sm text-gray-800">Audit trail recorded for compliance</span>
      </div>
    </div>
  </div>
</div>`
        },
        {
          type: "artifact" as const,
          title: "Email Delivery Confirmation",
          fileType: "document",
          description: "Successful email delivery with tracking details",
          interactive: false,
          content: `<div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-400 shadow-lg">
  <div class="flex items-center mb-4">
    <div class="bg-green-500 rounded-full p-3 mr-4">
      <span class="text-white text-2xl">✓</span>
    </div>
    <h1 class="text-2xl font-bold text-green-900">Email Sent Successfully!</h1>
  </div>
  
  <div class="bg-white p-5 rounded-lg shadow-md mb-4">
    <h2 class="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Delivery Confirmation</h2>
    <div class="space-y-2 text-sm">
      <div class="flex">
        <span class="font-semibold w-32 text-gray-700">To:</span>
        <span class="text-gray-900">James Wong</span>
      </div>
      <div class="flex">
        <span class="font-semibold w-32 text-gray-700">Status:</span>
        <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Delivered</span>
      </div>
    </div>
  </div>
  
  <div class="bg-blue-50 p-5 rounded-lg shadow-md">
    <h3 class="font-bold text-blue-900 mb-3">Workday Integration Summary:</h3>
    <ul class="space-y-2 text-sm text-gray-800">
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>10 candidates marked as Shortlisted in Workday</span>
      </li>
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>Requisition status updated to Manager Review</span>
      </li>
      <li class="flex items-center">
        <span class="text-blue-600 mr-2">✓</span>
        <span>Audit trail recorded for compliance tracking</span>
      </li>
    </ul>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "All done! I've successfully:\n\n1. ✅ Sent email with all attachments to James\n2. ✅ Updated Workday - All 10 shortlisted candidates now have Shortlisted status\n3. ✅ Advanced workflow - Requisition moved to Manager Review stage\n4. ✅ Maintained compliance - Full audit trail recorded in Workday",
          delayMs: 800
        },
        {
          type: "text" as const,
          content: "**Session Summary:**\n- ⏱️ Time taken: ~15 minutes (vs. 6-7 hours manually)\n- 📊 Candidates processed: 127 applications from Workday\n- 🤖 AI analysis: Powered by AI Platform's Recommendations API\n- 🎯 Shortlist generated: 10 top candidates (85-96% match)\n- 📧 Communication: Email sent with 3 professional attachments\n- 💼 System integration: Workday updated with shortlist status\n- ✅ End-to-end workflow: Complete from data retrieval to status updates",
          delayMs: 1000
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This is amazing! You've saved me probably 6-7 hours of work and handled everything end-to-end, including the Workday updates! Thank you so much!"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "You're very welcome, Michelle! 😊"
        },
        {
          type: "text" as const,
          content: "I'm thrilled I could streamline your entire shortlisting process - from pulling data from Workday, analyzing 127 applications with AI, to delivering a professional package to James and updating all candidate statuses back in Workday. That's exactly what I'm here for!",
          delayMs: 500
        },
        {
          type: "artifact" as const,
          title: "What We Accomplished Together",
          fileType: "document",
          description: "Complete workflow recap",
          interactive: false,
          content: `<div class="p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 rounded-lg border-2 border-purple-300 shadow-lg">
  <div class="text-center mb-5">
    <h1 class="text-3xl font-bold text-purple-900 mb-2">Mission Accomplished!</h1>
    <p class="text-gray-700">Here's everything we achieved together</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
      <h3 class="font-bold text-blue-900 mb-2">Retrieved Data from Workday</h3>
      <p class="text-sm text-gray-700">127 candidate profiles and CVs pulled from Workday HCM</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
      <h3 class="font-bold text-purple-900 mb-2">AI-Powered Analysis</h3>
      <p class="text-sm text-gray-700">Leveraged AI Platform's Recommendations API for intelligent matching</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
      <h3 class="font-bold text-green-900 mb-2">Generated Candidate Insights</h3>
      <p class="text-sm text-gray-700">Detailed profiles with strengths and recommendations</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
      <h3 class="font-bold text-yellow-900 mb-2">Created Professional Documentation</h3>
      <p class="text-sm text-gray-700">Email summary and candidate profiles</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
      <h3 class="font-bold text-orange-900 mb-2">Sent Everything to Hiring Manager</h3>
      <p class="text-sm text-gray-700">Delivered complete package with attachments</p>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
      <h3 class="font-bold text-red-900 mb-2">Updated Workday System</h3>
      <p class="text-sm text-gray-700">10 candidates marked as Shortlisted with full audit trail</p>
    </div>
  </div>
  
  <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 rounded-lg shadow-lg text-center">
    <h2 class="text-2xl font-bold mb-2">Time Saved: 6-7 Hours</h2>
    <p class="text-sm">Completed in just 15 minutes with AI assistance</p>
  </div>
  
  <div class="mt-5 bg-blue-100 p-4 rounded-lg border border-blue-300">
    <h3 class="font-bold text-blue-900 mb-2">I'll Continue Monitoring:</h3>
    <ul class="space-y-1 text-sm text-gray-800">
      <li>James' response to your email</li>
      <li>Follow-up timing</li>
      <li>Next steps in the recruitment workflow</li>
    </ul>
  </div>
  
  <div class="mt-4 text-center">
    <p class="text-gray-700 italic">Feel free to focus on your other priorities!</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Have a productive day! 🎯",
          delayMs: 800
        }
      ]
    }
  ]
};