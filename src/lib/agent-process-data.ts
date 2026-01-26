import type { AgentStep } from '../components/AgentProcess';

// Deep Research AI steps
export const researchSteps: AgentStep[] = [
  {
    id: '1',
    type: 'reasoning',
    title: 'Understanding the Query',
    content: 'Analyzing request for AI adoption in Singapore government. Identifying key areas: current initiatives, implementation challenges, policy frameworks, and impact metrics.',
    status: 'complete',
  },
  {
    id: '2',
    type: 'planning',
    title: 'Research Plan',
    content: 'Breaking down into sub-topics: (1) National AI strategy, (2) Agency-specific implementations, (3) Technical infrastructure, (4) Skills development, (5) Ethics & governance, (6) International comparisons.',
    status: 'complete',
  },
  {
    id: '3',
    type: 'querying',
    title: 'Querying GovTech SharePoint',
    content: 'Searching internal documents for AI implementation guidelines and case studies...',
    source: 'SharePoint',
    icon: 'sharepoint',
    status: 'complete',
  },
  {
    id: '4',
    type: 'querying',
    title: 'Searching Smart Nation Portal',
    content: 'Retrieving official AI strategy documents and national initiatives...',
    source: 'Internet',
    icon: 'internet',
    status: 'complete',
  },
  {
    id: '5',
    type: 'querying',
    title: 'Accessing Policy Database',
    content: 'Fetching AI governance frameworks and ethical guidelines from internal policy repository...',
    source: 'Database',
    icon: 'database',
    status: 'complete',
  },
  {
    id: '6',
    type: 'querying',
    title: 'Scanning Government Documentation',
    content: 'Analyzing ministry reports, parliamentary papers, and budget documents related to AI investments...',
    source: 'Documents',
    icon: 'document',
    status: 'complete',
  },
  {
    id: '7',
    type: 'reasoning',
    title: 'Synthesizing Information',
    content: 'Connecting findings across sources. Identifying patterns in AI adoption: high investment in infrastructure, focus on citizen-centric services, emphasis on ethics and governance.',
    status: 'complete',
  },
  {
    id: '8',
    type: 'planning',
    title: 'Structuring Report',
    content: 'Organizing findings into comprehensive report structure: Executive Summary → Strategy Overview → Key Initiatives → Challenges → Recommendations → Case Studies.',
    status: 'complete',
  },
];

// Parliamentary Question Assistant steps
export const parliamentaryStepsInitial: AgentStep[] = [
  {
    id: '1',
    type: 'reasoning',
    title: 'Understanding Question',
    content: 'Analyzing parliamentary question structure. Two main components identified: (1) Progress in generative AI adoption, (2) Training programs for public servants. Requires comprehensive data from multiple authoritative sources.',
    status: 'complete',
  },
  {
    id: '2',
    type: 'querying',
    title: 'Querying Hansard Database',
    content: 'Searching Parliamentary Hansard archives for previous Q&A on AI adoption. Found relevant written answer from Minister Josephine Teo (Oct 2024) covering Pair Chat rollout, usage statistics, and adoption metrics.',
    source: 'Hansard',
    icon: 'hansard',
    status: 'complete',
  },
  {
    id: '3',
    type: 'reasoning',
    title: 'Extracting Key Statistics',
    content: 'Processing Hansard data to extract quantitative metrics: 150,000 total officers, 80,000 active users, 2.5 million queries generated. April 2023 launch date noted. Compiling numerical evidence for response.',
    status: 'complete',
  },
  {
    id: '4',
    type: 'querying',
    title: 'Accessing MDDI Supplementary DB',
    content: 'Connecting to Ministry of Digital Development and Information supplementary database. Retrieved detailed training program data: course completion rates, AI Champions Network statistics, specialized program enrollments.',
    source: 'MDDI Database',
    icon: 'database',
    status: 'complete',
  },
  {
    id: '5',
    type: 'reasoning',
    title: 'Analyzing Training Programs',
    content: 'Categorizing training initiatives into tiers: (1) Foundation courses (95,000+ officers), (2) Prompt engineering workshops (8,000+ officers), (3) Advanced programs, (4) Ethics/responsible AI modules, (5) Communities of practice.',
    status: 'complete',
  },
  {
    id: '6',
    type: 'querying',
    title: 'Web Search - Recent Updates',
    content: 'Performing targeted web search on gov.sg domains. Retrieved GovTech press releases (2023-2024), Smart Nation reports, and CSC training catalog updates. Cross-referencing with public announcements.',
    source: 'Web Search',
    icon: 'web',
    status: 'complete',
  },
  {
    id: '7',
    type: 'reasoning',
    title: 'Identifying AI Champions Initiative',
    content: 'Found reference to AI Champions Network across multiple sources. Confirmed 300+ officers trained as AI champions. Network serves as change agents and peer support within respective agencies.',
    status: 'complete',
  },
  {
    id: '8',
    type: 'querying',
    title: 'Retrieving Policy Context & Timeline',
    content: 'Accessing Smart Nation and Digital Government Blueprint documents. Extracted policy context linking AI adoption to PST efforts. Compiled implementation timeline from Apr 2023 pilot to Nov 2024 milestone. Retrieved budget data from finance systems.',
    source: 'SharePoint Documents',
    icon: 'database',
    status: 'complete',
  },
  {
    id: '9',
    type: 'reasoning',
    title: 'Building Background Information',
    content: 'Synthesizing detailed background covering: Policy context (Smart Nation, DGB alignment), Implementation timeline (5 key milestones), Technical infrastructure (sovereign cloud, IM8 compliance), Budget allocation (FY23-24: $15M, FY24-25: $22M), Cross-agency collaboration framework (SNDGO, GovTech, CSC roles).',
    status: 'complete',
  },
  {
    id: '10',
    type: 'reasoning',
    title: 'Anticipating Follow-up Questions',
    content: 'Analyzing question patterns from past parliamentary sessions. Identified 5 likely supplementary questions: (1) Ministry-level breakdown, (2) Data security measures, (3) Job displacement concerns, (4) Cost-benefit analysis, (5) Citizen-facing applications. Preparing detailed responses with specific data points.',
    status: 'complete',
  },
  {
    id: '11',
    type: 'querying',
    title: 'Gathering Supplementary Data',
    content: 'Retrieving ministry-specific usage statistics, ROI calculations from finance databases, security audit reports, and user satisfaction surveys. Collecting supporting evidence for anticipated questions: per-ministry numbers, productivity time savings data, compliance metrics.',
    source: 'Multiple Databases',
    icon: 'database',
    status: 'complete',
  },
  {
    id: '12',
    type: 'reasoning',
    title: 'Mapping to Question Components',
    content: 'Organizing findings to address both question parts: Progress section covers Pair Chat metrics, AI Champions, specialized tools, and sandbox. Training section covers 5-tier framework and future roadmap. Background and anticipated Q&As prepared for comprehensive briefing.',
    status: 'complete',
  },
  {
    id: '13',
    type: 'synthesis',
    title: 'Synthesizing Final Parliamentary Brief',
    content: 'Combining data from all sources into comprehensive parliamentary brief. Main answer with 4 sections, detailed background with 5 subsections, and 5 anticipated questions with prepared responses. Ensuring factual accuracy, citing specific numbers, maintaining formal tone suitable for parliamentary setting.',
    status: 'complete',
  },
];

export const parliamentaryStepsProductListing: AgentStep[] = [
  {
    id: 'pl1',
    type: 'reasoning',
    title: 'Analyzing Document Request',
    content: 'User attached "Product Listing.pdf" and asked about percentage of tools for public servants. Need to parse document, identify all listed products, categorize by user type, and calculate percentage.',
    status: 'complete',
  },
  {
    id: 'pl2',
    type: 'querying',
    title: 'Extracting Document Content',
    content: 'Processing Product Listing PDF using OCR and text extraction. Document contains 47 AI tools across various categories: productivity, research, content creation, data analysis, and specialized applications.',
    source: 'Documents',
    icon: 'document',
    status: 'complete',
  },
  {
    id: 'pl3',
    type: 'reasoning',
    title: 'Categorizing Tools by User Type',
    content: 'Analyzing each tool description to determine target users. Categories: Public servants only (28 tools), Citizens only (11 tools), Both (8 tools). Cross-referencing with access control policies.',
    status: 'complete',
  },
  {
    id: 'pl4',
    type: 'querying',
    title: 'Validating Against User Database',
    content: 'Cross-checking tool accessibility by querying authentication systems. Confirming which tools require gov.sg credentials (public servants) vs. open access (citizens). Verifying license allocation data.',
    source: 'Access Control DB',
    icon: 'database',
    status: 'complete',
  },
  {
    id: 'pl5',
    type: 'analysis',
    title: 'Calculating Percentages',
    content: 'Computing statistics: 28 tools exclusively for public servants (59.6%), 11 for citizens only (23.4%), 8 for both (17.0%). Total: 36 tools accessible to public servants (76.6% of all tools).',
    status: 'complete',
  },
  {
    id: 'pl6',
    type: 'synthesis',
    title: 'Synthesizing Analysis',
    content: 'Preparing detailed breakdown with tool names, categories, and user access levels. Including key findings: majority of AI tools prioritize public servant productivity and internal government operations.',
    status: 'complete',
  },
];

export const parliamentaryStepsMinistry: AgentStep[] = [
  {
    id: 'min1',
    type: 'reasoning',
    title: 'Understanding Ministry Breakdown Request',
    content: 'User requesting ministry-level adoption data. Need to retrieve usage statistics by agency, identify leaders and laggards, analyze adoption patterns, and understand factors driving differences.',
    status: 'complete',
  },
  {
    id: 'min2',
    type: 'querying',
    title: 'Extracting Ministry Usage Data',
    content: 'Querying Pair Chat analytics database for ministry-level metrics. Retrieved: active user counts, query volumes, engagement rates, and adoption velocity for all 16 ministries (Q3 2024 data).',
    source: 'Analytics DB',
    icon: 'database',
    status: 'complete',
  },
  {
    id: 'min3',
    type: 'reasoning',
    title: 'Calculating Adoption Rates',
    content: 'Computing adoption rate = active users / total officers. Top 5: MOH (85%), MOM (78%), MOE (76%), MTI (74%), MDDI (72%). Bottom 3: MFA (48%), MINDEF (52%), MHA (58%). Average: 67%.',
    status: 'complete',
  },
  {
    id: 'min4',
    type: 'querying',
    title: 'Analyzing Adoption Factors',
    content: 'Cross-referencing with ministry profiles: workforce demographics, digital maturity scores, change management initiatives. Identifying correlations between adoption success and organizational factors.',
    source: 'HR & Digital Maturity Data',
    icon: 'database',
    status: 'complete',
  },
  {
    id: 'min5',
    type: 'reasoning',
    title: 'Identifying Success Patterns',
    content: 'High adopters share: strong leadership buy-in, active champions network, regular training sessions, showcase events, and integration with existing workflows. Lower adopters face: security concerns, legacy systems, resistance to change.',
    status: 'complete',
  },
  {
    id: 'min6',
    type: 'synthesis',
    title: 'Synthesizing Ministry Breakdown Report',
    content: 'Compiling comprehensive breakdown: full table with 16 ministries (adoption %, active users, total queries), trend analysis, success factors, recommendations for lagging ministries. Ready for parliamentary briefing.',
    status: 'complete',
  },
];

export const parliamentaryStepsConcise: AgentStep[] = [
  {
    id: 'conc1',
    type: 'reasoning',
    title: 'Understanding Conciseness Request',
    content: 'User wants report condensed. Need to identify essential information, remove redundancies, prioritize key findings, and streamline presentation while maintaining factual accuracy and completeness.',
    status: 'complete',
  },
  {
    id: 'conc2',
    type: 'analysis',
    title: 'Analyzing Report Structure',
    content: 'Current report has: Executive summary, 4 progress sections, 5 training sections, 5-part background, 5 anticipated Q&As. Total length: 2,800 words. Identifying redundant details and verbose explanations.',
    status: 'complete',
  },
  {
    id: 'conc3',
    type: 'reasoning',
    title: 'Prioritizing Critical Information',
    content: 'Core facts to retain: Key adoption metrics (150K officers, 80K users), main training tiers, ministry breakdown highlights (top 5), essential background context. Remove: Detailed methodology, lengthy explanations, minor data points.',
    status: 'complete',
  },
  {
    id: 'conc4',
    type: 'synthesis',
    title: 'Restructuring Report',
    content: 'Condensing to streamlined format: 1-paragraph executive summary, bullet-point progress highlights (5 items), bullet-point training overview (3 tiers), simplified ministry table (top 5 only), consolidated background (3 key points), reduced Q&As (3 most likely).',
    status: 'complete',
  },
  {
    id: 'conc5',
    type: 'synthesis',
    title: 'Finalizing Concise Version',
    content: 'Reduced report to 1,200 words (57% reduction). Maintained all critical statistics and findings. Enhanced readability with tighter prose, bullet points, and tables. Ready for parliamentary briefing.',
    status: 'complete',
  },
];

// Recruitment Assistant steps
export const recruitmentStepsInitial: AgentStep[] = [
  {
    id: '1',
    type: 'reasoning',
    title: 'Understanding Requirements',
    content: 'Analyzing job requisition for AI Engineer role. Key requirements: Machine Learning expertise, Python proficiency, experience with LLMs, Singapore public sector knowledge preferred.',
    status: 'complete',
  },
  {
    id: '2',
    type: 'querying',
    title: 'Connecting to Workday',
    content: 'Accessing Workday recruitment database. Retrieved 142 applications for AI Engineer position (Req ID: GVT-AI-2024-087).',
    source: 'Workday',
    icon: 'workday',
    status: 'complete',
  },
  {
    id: '3',
    type: 'querying',
    title: 'Extracting Job Description',
    content: 'Parsing job posting details: Required skills (ML frameworks, NLP, cloud platforms), preferred qualifications (PhD/Masters, 5+ years), team structure (AI Centre of Excellence).',
    source: 'Database',
    icon: 'database',
    status: 'complete',
  },
  {
    id: '4',
    type: 'reasoning',
    title: 'Building Evaluation Criteria',
    content: 'Defining scoring rubric: Technical skills (40%), Relevant experience (30%), Education & certifications (15%), Cultural fit (15%). Additional weightage for public sector experience.',
    status: 'complete',
  },
  {
    id: '5',
    type: 'filtering',
    title: 'Initial Screening',
    content: 'Filtering candidates based on minimum requirements. Eliminated 89 candidates not meeting basic criteria. 53 candidates advanced to detailed evaluation.',
    source: 'System',
    status: 'complete',
  },
  {
    id: '6',
    type: 'querying',
    title: 'Scanning Resumes',
    content: 'Processing resumes using NLP. Extracting skills, experience, projects, publications. Cross-referencing with LinkedIn profiles for validation.',
    source: 'Documents',
    icon: 'document',
    status: 'complete',
  },
  {
    id: '7',
    type: 'scoring',
    title: 'Candidate Scoring',
    content: 'Applying ML-based scoring model. Evaluating technical depth, project complexity, leadership indicators, and domain relevance. Generating match scores (0-100).',
    status: 'complete',
  },
  {
    id: '8',
    type: 'filtering',
    title: 'Final Shortlisting',
    content: 'Ranking top candidates by composite score. Selected 7 highest-scoring candidates (score ≥ 82). Ensuring diversity in backgrounds and experience levels.',
    source: 'System',
    status: 'complete',
  },
];

export const recruitmentStepsFiltered: AgentStep[] = [
  {
    id: '9',
    type: 'reasoning',
    title: 'Analyzing Filter Request',
    content: 'User requested filtering to NLP background only. Understanding requirement: Need candidates with strong Natural Language Processing expertise, research/publications in NLP, or significant NLP project experience.',
    status: 'complete',
  },
  {
    id: '10',
    type: 'querying',
    title: 'Re-scanning Candidate Profiles',
    content: 'Re-analyzing the 7 shortlisted candidates. Searching resumes and profiles for NLP-related keywords: "Natural Language Processing", "NLP", "text mining", "language models", "linguistics", "transformers", "BERT", "GPT".',
    source: 'Documents',
    icon: 'document',
    status: 'complete',
  },
  {
    id: '11',
    type: 'scoring',
    title: 'NLP Expertise Scoring',
    content: 'Applying NLP-specific scoring criteria: NLP publications (30%), NLP project experience (40%), NLP-related certifications (15%), Language model expertise (15%). Recalculating match scores.',
    status: 'complete',
  },
  {
    id: '12',
    type: 'filtering',
    title: 'Applying NLP Filter',
    content: 'Filtering candidates based on NLP background. Criteria: Must have explicit NLP experience in current/past roles, OR published NLP research, OR demonstrated expertise in language models. 4 candidates meet criteria.',
    source: 'System',
    status: 'complete',
  },
];

// Procurement Assistant steps
export const procurementStepsTender: AgentStep[] = [
  {
    id: 't1',
    type: 'reasoning',
    title: 'Analyzing Requirements',
    content: 'User requirements: 25 pax, $15-20 per head, Asian cuisine (Chinese/Thai), halal + vegetarian options, next Friday. Total budget: $375-500. Need GeBiz approved vendor.',
    status: 'complete',
  },
  {
    id: 't2',
    type: 'querying',
    title: 'Searching GeBiz Bulk Tender Database',
    content: 'Querying GeBiz for Standing Offer Arrangement (SOA) caterers. Search filters: Category = Catering Services, Cuisine = Asian, Dietary = Halal/Vegetarian, Min Order = 20-30 pax. Found 12 approved vendors.',
    source: 'GeBiz Database',
    icon: 'gebiz',
    status: 'complete',
  },
  {
    id: 't3',
    type: 'analysis',
    title: 'Filtering by Budget & Availability',
    content: 'Narrowing by price range $15-20/pax and availability for next Friday. 7 vendors meet criteria. Cross-referencing with past procurement reviews and ratings from other agencies.',
    status: 'complete',
  },
  {
    id: 't4',
    type: 'querying',
    title: 'Retrieving Vendor Performance Data',
    content: 'Accessing historical procurement data: delivery timeliness, food quality ratings, compliance record, customer feedback. Pulling data from past 12 months of government catering orders.',
    source: 'Procurement Analytics',
    icon: 'database',
    status: 'complete',
  },
  {
    id: 't5',
    type: 'analysis',
    title: 'Creating Shortlist',
    content: 'Ranked top 3 vendors: (1) Asia Delights Catering - $16/pax, 4.8★, 98% on-time, (2) Golden Wok Catering - $18/pax, 4.7★, 95% on-time, (3) Thai Spice Express - $17/pax, 4.6★, 92% on-time. All have strong halal certifications.',
    status: 'complete',
  },
];

export const procurementStepsAOR: AgentStep[] = [
  {
    id: 'a1',
    type: 'reasoning',
    title: 'Preparing AOR Structure',
    content: 'User selected Golden Wok Catering ($18/pax × 25 = $450 total). Need to draft Authority for Request following IM guidelines. Document requires: justification, vendor details, cost breakdown, compliance checks.',
    status: 'complete',
  },
  {
    id: 'a2',
    type: 'querying',
    title: 'Retrieving Vendor Details',
    content: 'Pulling complete vendor information from GeBiz: Golden Wok Catering Pte Ltd, UEN: 201234567G, SOA Contract #GBT-2024-CAT-089, Valid until Dec 2025. Halal cert: MUIS-HC-2024-1234.',
    source: 'GeBiz Database',
    icon: 'gebiz',
    status: 'complete',
  },
  {
    id: 'a3',
    type: 'analysis',
    title: 'Checking Procurement Compliance',
    content: 'Verifying: Amount $450 < $3,000 (no quotation needed), vendor is on approved SOA list, within budget allocation, no conflict of interest. All compliance checks passed.',
    status: 'complete',
  },
  {
    id: 'a4',
    type: 'querying',
    title: 'Accessing Budget Code',
    content: 'Retrieving department budget allocation. Found: Cost Center 5200-HR-TeamBldg, Budget Code: 52001-TRAIN-WELFARE, Available balance: $2,450. Sufficient funds available.',
    source: 'Finance System',
    icon: 'database',
    status: 'complete',
  },
  {
    id: 'a5',
    type: 'drafting',
    title: 'Drafting AOR Document',
    content: 'Generating formal AOR with sections: Purpose & Justification, Vendor Selection Rationale, Cost Breakdown, Compliance Statement, Budget Allocation, Approval Request. Including all supporting vendor details and tender reference.',
    source: 'Document Template',
    icon: 'document',
    status: 'complete',
  },
];

// Helper functions to get steps based on assistant type and message context
export function getAgentSteps(assistantType: string, messageIndex: number): AgentStep[] {
  switch (assistantType) {
    case 'deep-research-ai':
      return researchSteps;
    
    case 'parliamentary-question':
      if (messageIndex === 1) return parliamentaryStepsInitial;
      if (messageIndex === 3) return parliamentaryStepsProductListing;
      if (messageIndex === 5) return parliamentaryStepsMinistry;
      // No process for messageIndex === 7 (concise request - just summarization)
      return [];
    
    case 'recruitment-assistant':
      if (messageIndex > 2) return [...recruitmentStepsInitial, ...recruitmentStepsFiltered];
      return recruitmentStepsInitial;
    
    case 'procurement-assistant':
      if (messageIndex === 3) return procurementStepsTender;
      if (messageIndex === 5) return procurementStepsAOR;
      return [];
    
    default:
      return [];
  }
}

// Helper function to get action summary for each assistant type and message context
export function getAgentSummary(assistantType: string, messageIndex: number): string {
  switch (assistantType) {
    case 'deep-research-ai':
      return 'I analyzed your query by searching GovTech SharePoint, Smart Nation Portal, policy databases, and government documentation across 8 steps to compile this comprehensive research report on AI adoption in Singapore government.';
    
    case 'parliamentary-question':
      if (messageIndex === 1) return 'I researched the parliamentary question by querying Hansard archives, MDDI databases, and policy documents across 13 steps to prepare a comprehensive brief with background context and anticipated follow-up questions.';
      if (messageIndex === 3) return 'I analyzed the Product Listing document by extracting content, categorizing tools by user type, and validating against access control systems across 6 steps to determine that 76.6% of AI tools are accessible to public servants.';
      if (messageIndex === 5) return 'I compiled ministry-level adoption data by querying analytics databases and analyzing organizational factors across 6 steps to identify MOH (85%), MOM (78%), and MOE (76%) as the leading ministries in AI adoption.';
      if (messageIndex === 7) return 'I condensed the report by focusing on key metrics and streamlining the presentation while maintaining all critical statistics.';
      return '';
    
    case 'recruitment-assistant':
      if (messageIndex > 2) return 'I re-analyzed the shortlisted candidates by scanning profiles for NLP expertise and applying specialized scoring criteria across 4 additional steps to filter candidates with strong Natural Language Processing backgrounds.';
      return 'I analyzed the AI Engineer role by connecting to Workday, scanning 142 applications, and applying ML-based scoring across 8 steps to shortlist 7 top candidates with relevant expertise.';
    
    case 'procurement-assistant':
      if (messageIndex === 3) return 'I searched for catering vendors by querying GeBiz database, filtering by budget and availability, and analyzing vendor performance across 5 steps to create a shortlist of 3 highly-rated caterers.';
      if (messageIndex === 5) return 'I prepared the Authority for Request by retrieving vendor details from GeBiz, checking compliance, and accessing budget codes across 5 steps to draft a complete AOR document for approval.';
      return '';
    
    default:
      return '';
  }
}