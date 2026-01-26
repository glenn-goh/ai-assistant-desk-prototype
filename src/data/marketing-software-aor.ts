export const marketingSoftwareAorData = {
  id: "marketing-software-aor",
  title: "Marketing Software AOR Demo",
  description: "AI-assisted AOR drafting for marketing automation software procurement",
  colorScheme: "blue" as const,
  messages: [
    {
      role: "user" as const,
      content: {
        text: "I need help drafting an AOR (Approval of Requirement) to procure marketing software for my 15-person team. Our budget is $30,000-$35,000. We need software to create marketing materials for campaigns.\n\nI'm considering these 5 options:\n1. HubSpot Marketing Hub\n2. Adobe Creative Cloud for Teams\n3. Canva for Teams\n4. Monday.com Marketing\n5. Semrush\n\nPlease compare these options based on features, pricing, team collaboration capabilities, and suitability for our needs. Then shortlist the top 3 options and help me draft a comprehensive AOR.",
        autoSend: true
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! I'll help you compare all 5 options and shortlist the top 3 for your AOR. Let me do comprehensive research on each option - I'll analyze pricing for 15 users, features, team collaboration capabilities, and how well they fit your marketing materials creation needs. This will take a few minutes."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Searching vendor databases for current pricing...",
            "Analyzing HubSpot Marketing Hub for 15 users...",
            "Researching Adobe Creative Cloud Teams pricing...",
            "Evaluating Canva for Teams capabilities...",
            "Assessing Monday.com Marketing features...",
            "Analyzing Semrush pricing and marketing tools...",
            "Comparing feature sets across all 5 vendors...",
            "Evaluating team collaboration capabilities...",
            "Calculating total cost of ownership...",
            "Reviewing government/enterprise pricing models...",
            "Analyzing suitability for marketing materials creation..."
          ],
          timingMs: 1000
        },
        {
          type: "assistantSwitch" as const,
          message: "Deep Research Assistant"
        },
        {
          type: "text" as const,
          content: "I've completed the research on all 5 options. I found some interesting insights - the options vary significantly in their focus and pricing. Let me show you the comprehensive comparison:"
        },
        {
          type: "artifact" as const,
          title: "Vendor Comparison Summary",
          fileType: "document",
          description: "Marketing Automation Software Comparison",
          interactive: false,
          content: `<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-blue-900">Comprehensive Vendor Comparison</h1>
  <p class="text-gray-600 mb-6">All 5 Options Analyzed for 15 Users</p>
  
  <div class="overflow-x-auto mb-6">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-blue-100">
          <th class="text-left p-3 border border-blue-200 font-semibold">Criteria</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">HubSpot</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Adobe Creative Cloud</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Canva for Teams</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Monday.com</th>
          <th class="text-center p-3 border border-blue-200 font-semibold">Semrush</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Annual Cost (15 users)</td>
          <td class="p-3 border border-gray-200 text-center">~$55,000</td>
          <td class="p-3 border border-gray-200 text-center">~$45,000</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50 font-semibold">~$32,000</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">~$28,000</td>
          <td class="p-3 border border-gray-200 text-center">~$20,000</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Budget Fit ($30-35K)</td>
          <td class="p-3 border border-gray-200 text-center">No - 65% over</td>
          <td class="p-3 border border-gray-200 text-center">No - 35% over</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Yes - Within</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Yes - Within</td>
          <td class="p-3 border border-gray-200 text-center">Yes - Under</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Marketing Materials Creation</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Email Marketing</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Campaign Management</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Team Collaboration</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Excellent</td>
          <td class="p-3 border border-gray-200 text-center">Basic</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Analytics & Reporting</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Advanced</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Social Media Management</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Full suite</td>
          <td class="p-3 border border-gray-200 text-center">None</td>
          <td class="p-3 border border-gray-200 text-center bg-green-50">Good</td>
          <td class="p-3 border border-gray-200 text-center">Good</td>
          <td class="p-3 border border-gray-200 text-center">Limited</td>
        </tr>
        <tr>
          <td class="p-3 border border-gray-200 font-medium">Primary Strength</td>
          <td class="p-3 border border-gray-200 text-center text-xs">All-in-one marketing</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Professional design</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Easy design + marketing</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Project workflows</td>
          <td class="p-3 border border-gray-200 text-center text-xs">SEO & analytics</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 border border-gray-200 font-medium">Primary Weakness</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Very expensive</td>
          <td class="p-3 border border-gray-200 text-center text-xs">No campaign tools</td>
          <td class="p-3 border border-gray-200 text-center text-xs">-</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Weak design tools</td>
          <td class="p-3 border border-gray-200 text-center text-xs">Not for materials creation</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-sm text-gray-700">This comparison shows all 5 vendors you requested. Would you like me to shortlist the top 3 options for your AOR based on your budget and requirements?</p>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Can you shortlist the best 3 for me?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Absolutely! Based on your budget ($30-35K) and need to create marketing materials for campaigns, let me analyze and shortlist the top 3 options."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Eliminating HubSpot - 65% over budget at $55K",
            "Eliminating Semrush - not suitable for materials creation",
            "Evaluating Canva for Teams - excellent design + within budget",
            "Evaluating Monday.com - strong workflows + under budget",
            "Evaluating Adobe CC - premium design but over budget",
            "Ranking based on requirements fit and budget alignment"
          ],
          timingMs: 800
        },
        {
          type: "artifact" as const,
          title: "Top 3 Shortlist for AOR",
          fileType: "document",
          description: "Recommended vendors for procurement",
          interactive: false,
          content: `<div class="p-6 bg-white">
  <h1 class="text-2xl font-bold mb-4 text-blue-900">Top 3 Shortlist for AOR</h1>
  <p class="text-gray-600 mb-6">Based on Budget ($30-35K) & Requirements (Marketing Materials Creation)</p>
  
  <div class="mb-6 p-4 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
    <h3 class="font-bold text-yellow-900 mb-3">SHORTLISTED: TOP 3 OPTIONS</h3>
    <p class="text-sm text-gray-700 mb-4">Based on your needs (marketing materials creation + $30-35K budget), here are my top 3 recommendations:</p>
    
    <div class="space-y-3">
      <div class="p-3 bg-white rounded border-2 border-green-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
          <div class="flex-1">
            <h4 class="font-bold text-green-900 mb-1">Canva for Teams - $32,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #1:</strong> Perfect balance of excellent design tools + marketing features (email, social, campaigns) + team collaboration. Fits budget perfectly.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Creating marketing materials (graphics, videos, presentations) + running campaigns
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-3 bg-white rounded border-2 border-blue-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
          <div class="flex-1">
            <h4 class="font-bold text-blue-900 mb-1">Monday.com Marketing - $28,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #2:</strong> Strong campaign management, email marketing, and team collaboration. Under budget. But weaker on design/content creation.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Campaign workflows + email marketing + team coordination
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-3 bg-white rounded border-2 border-purple-500">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
          <div class="flex-1">
            <h4 class="font-bold text-purple-900 mb-1">Adobe Creative Cloud for Teams - $45,000/year</h4>
            <p class="text-sm text-gray-700 mb-2"><strong>Why it's #3:</strong> Industry-leading professional design tools, excellent collaboration. BUT 35% over budget and lacks campaign management features.</p>
            <div class="text-xs text-gray-600">
              <strong>Best for:</strong> Professional-grade design work (if budget can be increased)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
    <h3 class="font-bold text-red-900 mb-2">Not Shortlisted:</h3>
    <ul class="text-sm text-gray-700 space-y-1">
      <li><strong>HubSpot:</strong> Excellent marketing platform but 65% over budget ($55K vs $30-35K) + weak on design/content creation</li>
      <li><strong>Semrush:</strong> Great for SEO/analytics but NOT suitable for creating marketing materials - it's a research tool, not a creation platform</li>
    </ul>
  </div>
  
  <div class="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
    <h3 class="font-bold text-green-900 mb-2">My Recommendation: Canva for Teams</h3>
    <p class="text-sm text-gray-700">For your specific need to "create marketing materials for campaigns" with a 15-person team, Canva for Teams offers the best overall package - excellent design tools + solid campaign management + perfect budget fit.</p>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "These are your top 3 options that will be presented in the AOR. Based on your specific needs:\n\n**#1 Canva for Teams** - Best overall value (materials creation + campaigns + budget fit)\n**#2 Monday.com Marketing** - Strong alternative (campaign workflows + under budget, but weaker design)\n**#3 Adobe Creative Cloud** - Premium option (professional design, but over budget + no campaign tools)\n\nWhich option would you like to proceed with for the AOR?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Let's go with Canva for Teams."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Great choice! Now I need a bit more info to draft your AOR:\n\n- What's the campaign/project name?\n- What's your cost center code?\n- When do you need the software to start?\n- What's the main reason you need this software?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Project is called \"HealthierSG Awareness Campaign 2025\". Cost center is GVT_CC0845. Need it by April 1st. We need it because right now we're using like 4 different tools for email, social media, analytics etc and it's a mess. Really inefficient."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect, that's excellent justification. One more thing - who are the 15 users? Just need roles, not names."
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "3 marketing managers, 6 marketing executives, 4 content creators, 2 social media people."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Excellent! I have everything I need. Let me draft your AOR now - this will take about a minute."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Loading current AOR template (GovTech 2024)",
            "Structuring document sections",
            "Populating Aim and Background",
            "Generating justification with efficiency rationale",
            "Adding technical specifications",
            "Creating cost breakdown",
            "Drafting vendor selection justification",
            "Including team composition table",
            "Adding compliance declarations",
            "Formatting to GovTech standards"
          ],
          timingMs: 1000
        },
        {
          type: "text" as const,
          content: "Your AOR draft is ready! Here's what I've created:"
        },
        {
          type: "artifact" as const,
          title: "Approval of Requirement (AOR) - Draft",
          fileType: "document",
          description: "Marketing Software Procurement AOR",
          interactive: false,
          content: `<div class="p-8 bg-white max-w-5xl mx-auto">
  <div class="border-b-2 border-blue-600 pb-4 mb-6">
    <h1 class="text-3xl font-bold text-blue-900">APPROVAL OF REQUIREMENT (AOR)</h1>
    <p class="text-sm text-gray-600 mt-2">Marketing Automation Software Procurement</p>
  </div>
  
  <div class="mb-6 p-4 bg-blue-50 rounded-lg">
    <h2 class="text-sm font-bold text-blue-900 mb-2">EMAIL TITLE</h2>
    <p class="text-sm">[For Approval] AOR to Procure Marketing Automation Software Licenses for HealthierSG Awareness Campaign 2025</p>
  </div>
  
  <div class="space-y-6">
    <!-- AIM -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">AIM</h2>
      <p class="text-sm text-gray-700">
        This submission seeks approval to procure 15 annual licenses for Canva for Teams marketing automation software at an estimated cost of <strong>SGD $32,000</strong> (excluding GST) for the period from 1 April 2025 to 31 March 2026.
      </p>
    </div>
    
    <!-- BACKGROUND -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">BACKGROUND</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>
          <strong>2.1</strong> The Public Communications & Outreach department is launching the HealthierSG Awareness Campaign 2025, a major public health initiative requiring coordinated marketing efforts across multiple channels.
        </p>
        <p>
          <strong>2.2</strong> Currently, the team operates with fragmented tools across platforms:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Email marketing: Basic email client</li>
          <li>Social media: Manual posting without scheduling</li>
          <li>Analytics: Separate tools per channel</li>
          <li>Content creation: Third-party tools with no integration</li>
        </ul>
        <p>
          This fragmentation results in inefficient workflows, duplicated efforts, inconsistent messaging, and inability to track campaign performance holistically.
        </p>
      </div>
    </div>
    
    <!-- JUSTIFICATION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">JUSTIFICATION FOR PROCUREMENT</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Consolidates 4-5 separate tools into unified platform</li>
            <li>Reduces manual tasks through automation</li>
            <li>Enables management of multiple campaigns from single interface</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Enhanced Campaign Effectiveness</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Advanced email personalization and segmentation</li>
            <li>A/B testing capabilities to optimize performance</li>
            <li>Unified analytics for comprehensive insights</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-2">Cost-Effectiveness</h3>
          <ul class="list-disc list-inside ml-2 space-y-1 text-sm text-gray-700">
            <li>Replaces multiple subscriptions with single solution</li>
            <li>Estimated savings: ~$8,000/year from tool consolidation</li>
            <li>Improves ROI through better targeting</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- TECHNICAL SPECIFICATIONS -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">TECHNICAL SPECIFICATIONS</h2>
      <div class="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <span class="font-semibold">Software:</span> Canva for Teams
          </div>
          <div>
            <span class="font-semibold">License Type:</span> Annual Subscription (SaaS)
          </div>
          <div>
            <span class="font-semibold">Number of Licenses:</span> 15 users
          </div>
          <div>
            <span class="font-semibold">Deployment:</span> Cloud-based
          </div>
        </div>
        
        <div class="mt-4">
          <p class="font-semibold mb-2">Key Features:</p>
          <ul class="list-disc list-inside ml-2 space-y-1 text-gray-700">
            <li>Email Marketing: Unlimited sends, automation, personalization</li>
            <li>Landing Pages: Unlimited with drag-and-drop builder</li>
            <li>Social Media: Scheduling for major platforms</li>
            <li>CRM: Built-in contact management</li>
            <li>Analytics: Custom dashboards and performance metrics</li>
            <li>Security: SOC 2 Type II certified, GDPR compliant</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- FUNDING SOURCE -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">FUNDING SOURCE AND COST</h2>
      <div class="space-y-3 text-sm">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-blue-100">
              <th class="text-left p-2 border border-blue-200">Cost Center</th>
              <th class="text-left p-2 border border-blue-200">FY/Period</th>
              <th class="text-right p-2 border border-blue-200">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border border-gray-200">GVT_CC0845</td>
              <td class="p-2 border border-gray-200">FY2025 (Apr 2025 - Mar 2026)</td>
              <td class="p-2 border border-gray-200 text-right font-semibold">SGD $32,000</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold mb-2">Cost Breakdown:</p>
          <ul class="space-y-1">
            <li>Canva for Teams (15 licenses): SGD $32,000/year</li>
            <li>GST (9%): SGD $2,880</li>
            <li class="font-bold pt-2 border-t border-blue-200">Total (including GST): SGD $34,880</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- VENDOR SELECTION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">VENDOR SELECTION</h2>
      <div class="space-y-3 text-sm text-gray-700">
        <p>
          <strong>6.1</strong> The project team conducted comprehensive market analysis and shortlisted three vendors for evaluation:
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>Canva for Teams (~SGD $32,000/year)</li>
          <li>Monday.com Marketing (~SGD $28,000/year)</li>
          <li>Adobe Creative Cloud for Teams (~SGD $45,000/year)</li>
        </ul>
        
        <p>
          <strong>6.2</strong> Canva for Teams was selected based on:
        </p>
        
        <div class="ml-4 space-y-2">
          <div>
            <p class="font-semibold">Best Fit for Requirements</p>
            <p class="ml-4">Excellent design tools for creating marketing materials + solid campaign management features</p>
          </div>
          <div>
            <p class="font-semibold">Price-to-Value Ratio</p>
            <p class="ml-4">Comprehensive features at optimal price point within budget</p>
          </div>
          <div>
            <p class="font-semibold">Team Collaboration</p>
            <p class="ml-4">Superior collaboration capabilities for 15-person marketing team</p>
          </div>
          <div>
            <p class="font-semibold">Budget Alignment</p>
            <p class="ml-4">Fits within allocated budget of $30,000-35,000</p>
          </div>
        </div>
        
        <p class="mt-3">
          <strong>6.3</strong> Comparison of shortlisted vendors:
        </p>
        
        <div class="ml-4 mt-2">
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-blue-50">
                <th class="text-left p-2 border border-gray-300">Vendor</th>
                <th class="text-center p-2 border border-gray-300">Cost</th>
                <th class="text-center p-2 border border-gray-300">Budget Fit</th>
                <th class="text-left p-2 border border-gray-300">Key Strengths</th>
                <th class="text-left p-2 border border-gray-300">Considerations</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-green-50">
                <td class="p-2 border border-gray-300 font-semibold">Canva for Teams</td>
                <td class="p-2 border border-gray-300 text-center">$32,000</td>
                <td class="p-2 border border-gray-300 text-center">Yes - Perfect</td>
                <td class="p-2 border border-gray-300">Excellent design + campaign tools, easy adoption</td>
                <td class="p-2 border border-gray-300">Analytics less advanced</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 font-semibold">Monday.com</td>
                <td class="p-2 border border-gray-300 text-center">$28,000</td>
                <td class="p-2 border border-gray-300 text-center">Yes - Under</td>
                <td class="p-2 border border-gray-300">Strong workflows, advanced analytics</td>
                <td class="p-2 border border-gray-300">Weak design capabilities</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 font-semibold">Adobe CC</td>
                <td class="p-2 border border-gray-300 text-center">$45,000</td>
                <td class="p-2 border border-gray-300 text-center">No - Over</td>
                <td class="p-2 border border-gray-300">Professional-grade design tools</td>
                <td class="p-2 border border-gray-300">35% over budget, no campaign tools</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- TEAM COMPOSITION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">TEAM COMPOSITION</h2>
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-blue-100">
            <th class="text-left p-2 border border-blue-200">Role</th>
            <th class="text-center p-2 border border-blue-200">Number</th>
            <th class="text-left p-2 border border-blue-200">Primary Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border border-gray-200">Marketing Managers</td>
            <td class="p-2 border border-gray-200 text-center">3</td>
            <td class="p-2 border border-gray-200">Campaign strategy, oversight, reporting</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="p-2 border border-gray-200">Marketing Executives</td>
            <td class="p-2 border border-gray-200 text-center">6</td>
            <td class="p-2 border border-gray-200">Campaign execution, email creation</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-200">Content Creators</td>
            <td class="p-2 border border-gray-200 text-center">4</td>
            <td class="p-2 border border-gray-200">Digital collateral design, landing pages</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="p-2 border border-gray-200">Social Media Coordinators</td>
            <td class="p-2 border border-gray-200 text-center">2</td>
            <td class="p-2 border border-gray-200">Social scheduling, engagement, analytics</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- DECLARATION -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-3">DECLARATION OF CONFLICT OF INTEREST</h2>
      <div class="space-y-2 text-sm text-gray-700">
        <p>
          <strong>8.1</strong> This project team has conducted due diligence and declares no conflict of interest.
        </p>
        <p>
          <strong>8.2</strong> There is no prior relationship between the project team and Canva or its resellers.
        </p>
      </div>
    </div>
    
    <!-- APPROVAL -->
    <div class="bg-blue-50 border-2 border-blue-500 p-4 rounded-lg">
      <h2 class="text-lg font-bold text-blue-900 mb-3">APPROVAL</h2>
      <p class="text-sm text-gray-700">For approval for para 1, please.</p>
    </div>
  </div>
  
  <div class="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-500">
    <p>Document generated by AI Assistant on 25 November 2025</p>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Looks good"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Your AOR is ready for submission! I can help you with:\n\n1. **Send via email** - I can email the AOR directly to your approving officer with all annexes\n2. **Download package** - Get all documents to review and send yourself\n\nWhich would you prefer?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Can you send it via email for me?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Absolutely! Who should I send this to? I'll need:\n- Your approving officer's name and email\n- Your supervisor's email (if you'd like to CC them)"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Send it to Sarah Chen, she's my Assistant Director. Her email is sarah.chen@tech.gov.sg. CC my immediate supervisor Mike Lim at mike.lim@tech.gov.sg."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! Let me draft the submission email for your approval before sending."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Structuring professional email format",
            "Summarizing key AOR points",
            "Attaching all required documents",
            "Setting up CC recipients"
          ],
          timingMs: 1000
        },
        {
          type: "artifact" as const,
          title: "Email Draft for Approval",
          fileType: "document",
          description: "Submission email to approving officer",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <h2 class="text-sm font-bold text-blue-900 mb-3">EMAIL DRAFT FOR YOUR REVIEW</h2>
    <div class="space-y-2 text-sm">
      <div><strong>To:</strong> Sarah Chen (sarah.chen@tech.gov.sg)</div>
      <div><strong>CC:</strong> Mike Lim (mike.lim@tech.gov.sg)</div>
      <div><strong>Subject:</strong> [For Approval] AOR to Procure Marketing Automation Software for HealthierSG Campaign 2025</div>
    </div>
  </div>
  
  <div class="space-y-4 text-sm text-gray-800">
    <p>Dear Sarah,</p>
    
    <p>I am writing to seek your approval for the procurement of marketing automation software licenses to support the HealthierSG Awareness Campaign 2025.</p>
    
    <div class="my-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-bold text-gray-900 mb-3">Summary:</h3>
      <ul class="space-y-2">
        <li><strong>What:</strong> 15 annual licenses for Canva for Teams marketing automation platform</li>
        <li><strong>Cost:</strong> SGD $32,000 (excluding GST) | SGD $34,880 (including GST)</li>
        <li><strong>Duration:</strong> 1 April 2025 to 31 March 2026</li>
        <li><strong>Funding:</strong> Cost Center GVT_CC0845 (FY2025 budget)</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Key Justifications:</h3>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li><strong>Operational Efficiency:</strong> Consolidates 4-5 fragmented tools into one unified platform, reducing campaign setup time by 40%</li>
        <li><strong>Enhanced Campaign Effectiveness:</strong> Advanced automation, personalization, and analytics capabilities to improve citizen engagement</li>
        <li><strong>Cost Savings:</strong> Estimated SGD $8,000/year savings from tool consolidation</li>
        <li><strong>Budget Alignment:</strong> Selected vendor (Canva for Teams) offers best value at 42% lower cost than enterprise alternatives while meeting all requirements</li>
      </ul>
    </div>
    
    <div class="my-4">
      <h3 class="font-bold text-gray-900 mb-2">Vendor Selection:</h3>
      <p>After comprehensive market analysis of 3 shortlisted vendors (Canva for Teams, Monday.com Marketing, Adobe Creative Cloud), Canva for Teams was selected based on optimal price-to-value ratio, complete feature set matching our requirements, scalability for future needs, and budget alignment.</p>
    </div>
    
    <p>The detailed AOR with vendor comparison, technical specifications, and implementation plan is attached for your review.</p>
    
    <p class="font-semibold">For your approval, please.</p>
    
    <p>Should you have any questions or require additional information, I am happy to provide clarification.</p>
    
    <p>Thank you for your consideration.</p>
    
    <div class="mt-4 pt-4 border-t border-gray-300">
      <p>Best regards,</p>
      <p class="font-semibold">Jayden Tan</p>
      <p>Marketing Officer</p>
      <p>Public Communications & Outreach Department</p>
      <p>Government Technology Agency</p>
      <p>jayden.tan@tech.gov.sg | +65 6211 2345</p>
    </div>
    
    <div class="mt-6 p-3 bg-gray-100 rounded">
      <h3 class="font-bold text-gray-900 mb-2">Attachments:</h3>
      <ul class="text-xs space-y-1">
        <li>AOR_Marketing_Software_HealthierSG_2025.docx</li>
        <li>Annex_A_Vendor_Comparison.pdf</li>
        <li>Annex_B_Technical_Specifications.pdf</li>
        <li>Annex_C_Team_Allocation.pdf</li>
        <li>Annex_D_Implementation_Timeline.pdf</li>
      </ul>
    </div>
  </div>
</div>`
        },
        {
          type: "text" as const,
          content: "Does this email look good? I can make any changes before sending."
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes looks good, please send it."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Sending now..."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Attaching all 5 documents (2.4 MB total)",
            "Verifying recipients: sarah.chen@tech.gov.sg, mike.lim@tech.gov.sg",
            "Sending email..."
          ],
          timingMs: 1000
        },
        {
          type: "text" as const,
          content: "**Email sent successfully!**\n\nYour AOR has been sent to:\n- **Sarah Chen** (sarah.chen@tech.gov.sg) - Approving Officer\n- **Mike Lim** (mike.lim@tech.gov.sg) - CC'd\n\nAll 5 attachments included (2.4 MB total)\n\nI'll monitor the status and notify you when there's a response. You can also download a copy of all documents for your records if you'd like."
        },
        {
          type: "artifact" as const,
          title: "Session Summary",
          fileType: "document",
          description: "AOR Drafting Summary",
          interactive: false,
          content: `<div class="p-6 bg-white max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-blue-900">SESSION SUMMARY</h1>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="text-3xl font-bold text-blue-700 mb-1">~6 hours</div>
      <div class="text-sm text-gray-600">Time Saved vs manual drafting</div>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="text-3xl font-bold text-green-700 mb-1">6 docs</div>
      <div class="text-sm text-gray-600">Documents Generated</div>
    </div>
    
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div class="text-3xl font-bold text-purple-700 mb-1">5 vendors</div>
      <div class="text-sm text-gray-600">Analyzed & Shortlisted</div>
    </div>
    
    <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <div class="text-3xl font-bold text-emerald-700 mb-1">100%</div>
      <div class="text-sm text-gray-600">Compliance Status</div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="p-4 bg-gray-50 rounded-lg">
      <h2 class="font-bold text-gray-900 mb-3">Status: Submitted to Sarah Chen for approval</h2>
      <div class="space-y-2 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>Market research completed (HubSpot, Mailchimp, Canva)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>AOR document drafted with full compliance</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>All annexes generated (vendor comparison, technical specs, team allocation, timeline)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600 font-bold">Done</span>
          <span>Email sent to approving officer with all attachments</span>
        </div>
      </div>
    </div>
    
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 class="font-bold text-blue-900 mb-2">Next Steps:</h3>
      <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
        <li>Await approval from Sarah Chen (typically 3-5 business days)</li>
        <li>Receive notification when AOR is approved</li>
        <li>Proceed with procurement of Canva for Teams licenses</li>
        <li>Expected software delivery: 2 business days after approval</li>
      </ul>
    </div>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This was so much easier than I expected. Thanks!"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "You're welcome! Good luck with the approval - I'll be here if you need help with future procurements."
        }
      ]
    }
  ]
};