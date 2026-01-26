import { FileText, CheckCircle2, HelpCircle, BookOpen, ChevronDown, ChevronRight, FolderOpen } from 'lucide-react';
import { useState } from 'react';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses } from '../lib/theme-utils';

interface ParliamentaryAnswerProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function ParliamentaryAnswer({ colorTheme, fontStyle }: ParliamentaryAnswerProps) {
  const theme = getThemeClasses(colorTheme);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    mainAnswer: true,
    sources: true,
    background: true,
    anticipated: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-4 h-full overflow-y-auto pr-3">
      {/* Header */}
      <div className={`${theme.title} text-sm flex items-center gap-2 sticky top-0 ${theme.mainBg} pb-2`}>
        <FileText className="w-4 h-4" />
        Synthesized Parliamentary Answer
      </div>

      {/* Main Answer */}
      <div className={`rounded-lg border ${theme.chatItem}`}>
        <div 
          className={`${theme.title} text-sm p-4 pb-3 border-b ${theme.separator} cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between`}
          onClick={() => toggleSection('mainAnswer')}
        >
          <span>Question: Generative AI Adoption in Public Service</span>
          {expandedSections.mainAnswer ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>

        {expandedSections.mainAnswer && (
          <div className="p-5 space-y-4">
            {/* Section 1: Progress Overview */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs flex items-center gap-2`}>
                <CheckCircle2 className="w-3 h-3 text-green-600" />
                Progress in Adoption
              </h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed`}>
                As of November 2024, the Public Service has made significant progress in adopting generative AI tools. 
                The Government has rolled out <span className={`${theme.title}`}>Pair Chat</span>, a secure generative AI assistant 
                available to all 150,000 public officers. Since its launch in April 2023, more than 
                <span className={`${theme.title}`}> 80,000 officers</span> have actively used the tool, generating over 
                <span className={`${theme.title}`}> 2.5 million queries</span>.
              </p>
            </div>

            {/* Section 2: Key Initiatives */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs flex items-center gap-2`}>
                <CheckCircle2 className="w-3 h-3 text-green-600" />
                Key Initiatives
              </h4>
              <ul className={`text-xs ${theme.navItem} leading-relaxed space-y-1.5 pl-4`}>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                  <span><strong>Pair Chat:</strong> Secure, government-wide generative AI assistant for productivity enhancement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                  <span><strong>AI Champions Network:</strong> Over 300 officers trained as AI champions across ministries</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                  <span><strong>Specialized Tools:</strong> Development of domain-specific AI tools for policy writing, legal research, and citizen services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                  <span><strong>AI Sandbox:</strong> Safe environment for agencies to experiment with AI before deployment</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Training Programs */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs flex items-center gap-2`}>
                <CheckCircle2 className="w-3 h-3 text-green-600" />
                Training & Capability Building
              </h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed mb-2`}>
                The Government has implemented a comprehensive training framework to ensure public servants can effectively 
                and responsibly use generative AI tools:
              </p>
              <ul className={`text-xs ${theme.navItem} leading-relaxed space-y-1.5 pl-4`}>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                  <span><strong>Foundation Courses:</strong> Mandatory "AI for Public Officers" e-learning module covering AI basics, 
                  use cases, and ethical considerations (completed by 95,000+ officers)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                  <span><strong>Prompt Engineering Workshops:</strong> Hands-on training on effective prompt design and 
                  optimization (8,000+ officers trained)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                  <span><strong>Advanced Programs:</strong> Specialized courses for AI developers, data scientists, 
                  and project managers through AI Singapore and CSC</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                  <span><strong>Responsible AI Training:</strong> Ethics modules covering data privacy, bias mitigation, 
                  and AI governance frameworks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                  <span><strong>Communities of Practice:</strong> Regular knowledge-sharing sessions and best practice 
                  exchanges across agencies</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Future Plans */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs flex items-center gap-2`}>
                <CheckCircle2 className="w-3 h-3 text-green-600" />
                Looking Ahead
              </h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed`}>
                Moving forward, the Government will expand AI training to include role-specific modules for different 
                job families, establish an AI certification pathway for technical officers, and continue to update 
                training materials to reflect the rapidly evolving AI landscape. The goal is to ensure all public 
                officers are equipped to harness AI tools productively and responsibly in service of citizens.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sources Used */}
      <div className={`rounded-lg border ${theme.chatItem}`}>
        <div 
          className={`${theme.title} text-sm p-4 pb-3 border-b ${theme.separator} cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between`}
          onClick={() => toggleSection('sources')}
        >
          <span>Sources Referenced</span>
          {expandedSections.sources ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>

        {expandedSections.sources && (
          <div className="p-4 space-y-2">
            <div className={`text-xs ${theme.navItem} p-2 rounded bg-blue-50 dark:bg-blue-900/20`}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div className="flex flex-col">
                  <span>GovTech branding guidelines</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">SharePoint</span>
                </div>
              </div>
            </div>
            <div className={`text-xs ${theme.navItem} p-2 rounded bg-purple-50 dark:bg-purple-900/20`}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <div className="flex flex-col">
                  <span>Procurement Guidelines</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">SharePoint</span>
                </div>
              </div>
            </div>
            <div className={`text-xs ${theme.navItem} p-2 rounded bg-green-50 dark:bg-green-900/20`}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
                <div className="flex flex-col">
                  <span>AI Programme Resources</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Google Drive</span>
                </div>
              </div>
            </div>
            <div className={`text-xs ${theme.navItem} p-2 rounded bg-amber-50 dark:bg-amber-900/20`}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <div className="flex flex-col">
                  <span>Policy Documents</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">AWS S3</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Background Information */}
      <div className={`rounded-lg border ${theme.chatItem}`}>
        <div 
          className={`${theme.title} text-sm p-4 pb-3 border-b ${theme.separator} cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between`}
          onClick={() => toggleSection('background')}
        >
          <span>Detailed Background Information</span>
          {expandedSections.background ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>

        {expandedSections.background && (
          <div className="p-5 space-y-4">
            {/* Policy Context */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs`}>Policy Context</h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed`}>
                The adoption of generative AI in the Public Service is part of Singapore's broader Smart Nation initiative 
                and the Digital Government Blueprint (DGB). The Government's approach prioritizes security, ethics, and 
                responsible AI deployment while maximizing productivity gains. This aligns with the Public Service 
                Transformation (PST) efforts to build a future-ready workforce.
              </p>
            </div>

            {/* Timeline of Implementation */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs`}>Implementation Timeline</h4>
              <div className="space-y-1.5">
                <div className={`text-xs ${theme.navItem} flex gap-2`}>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-20 flex-shrink-0">Apr 2023:</span>
                  <span>Pair Chat pilot launched to 5,000 officers across 5 ministries</span>
                </div>
                <div className={`text-xs ${theme.navItem} flex gap-2`}>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-20 flex-shrink-0">Aug 2023:</span>
                  <span>Expanded to all ministries and statutory boards (150,000 officers)</span>
                </div>
                <div className={`text-xs ${theme.navItem} flex gap-2`}>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-20 flex-shrink-0">Jan 2024:</span>
                  <span>Launch of AI Champions Network and specialized training programs</span>
                </div>
                <div className={`text-xs ${theme.navItem} flex gap-2`}>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-20 flex-shrink-0">Jun 2024:</span>
                  <span>Introduction of domain-specific AI tools for policy, legal, and operations work</span>
                </div>
                <div className={`text-xs ${theme.navItem} flex gap-2`}>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-20 flex-shrink-0">Nov 2024:</span>
                  <span>Reached 80,000 active users milestone; 2.5M+ queries processed</span>
                </div>
              </div>
            </div>

            {/* Technical Infrastructure */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs`}>Technical Infrastructure & Security</h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed`}>
                Pair Chat is built on a secure, sovereign cloud infrastructure managed by GovTech. The system implements 
                data classification controls, ensuring that sensitive information (Confidential and above) is not processed 
                through the AI. All queries are logged for audit purposes, and the platform uses industry-leading encryption 
                standards. The infrastructure is designed to comply with the Government Instruction Manual on ICT & Smart 
                Systems (IM8) requirements.
              </p>
            </div>

            {/* Budget & Resources */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs`}>Budget Allocation & Resources</h4>
              <div className={`text-xs ${theme.navItem} leading-relaxed space-y-1.5`}>
                <p>
                  <strong>FY2023-2024:</strong> $15 million allocated for Pair Chat infrastructure, licensing, and initial training programs
                </p>
                <p>
                  <strong>FY2024-2025:</strong> $22 million budgeted for platform expansion, advanced training, and development 
                  of specialized AI tools
                </p>
                <p className="pt-1">
                  The investment represents approximately 3% of the overall ICT budget and is projected to generate 
                  productivity savings of $50-80 million annually through time savings and process automation.
                </p>
              </div>
            </div>

            {/* Cross-Agency Collaboration */}
            <div className="space-y-2">
              <h4 className={`${theme.title} text-xs`}>Cross-Agency Collaboration</h4>
              <p className={`text-xs ${theme.navItem} leading-relaxed`}>
                The AI adoption initiative involves close collaboration between Smart Nation and Digital Government Office 
                (SNDGO), GovTech, Civil Service College (CSC), and individual ministries. An inter-ministerial AI 
                Governance Committee chaired by SNDGO oversees policy alignment, while GovTech handles technical 
                implementation. CSC designs and delivers training programs in partnership with AI Singapore.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Anticipated Supplementary Questions */}
      <div className={`rounded-lg border ${theme.chatItem} border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-900/10 space-y-4`}>
        <div 
          className={`${theme.title} text-sm p-4 pb-3 border-b border-amber-200 dark:border-amber-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between`}
          onClick={() => toggleSection('anticipated')}
        >
          <span>Anticipated Supplementary Questions</span>
          {expandedSections.anticipated ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </div>

        {expandedSections.anticipated && (
          <div className="p-5 space-y-4">
            {/* Question 1 */}
            <div className="space-y-2">
              <div className={`text-xs ${theme.title} p-2 rounded bg-amber-100 dark:bg-amber-900/30`}>
                <strong>Q1:</strong> What is the breakdown of AI tool usage across different ministries?
              </div>
              <div className={`text-xs ${theme.navItem} leading-relaxed pl-2`}>
                <p className="mb-1.5"><strong>Suggested Response:</strong></p>
                <p>
                  Usage varies by ministry function and size. The top 5 ministries by active users are: (1) Ministry of Education - 
                  15,200 officers, (2) Ministry of Home Affairs - 12,800 officers, (3) Ministry of Health - 11,500 officers, 
                  (4) Ministry of Manpower - 9,300 officers, and (5) Ministry of Social and Family Development - 7,800 officers. 
                  Smaller policy ministries show higher per-capita usage rates, with officers averaging 40-50 queries per month 
                  compared to the overall average of 25 queries per month.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-2">
              <div className={`text-xs ${theme.title} p-2 rounded bg-amber-100 dark:bg-amber-900/30`}>
                <strong>Q2:</strong> How does the Government ensure AI is used responsibly and doesn't compromise data security?
              </div>
              <div className={`text-xs ${theme.navItem} leading-relaxed pl-2`}>
                <p className="mb-1.5"><strong>Suggested Response:</strong></p>
                <p>
                  The Government has implemented a multi-layered approach: (1) Technical controls prevent input of Confidential 
                  data through automated classification detection, (2) All queries are logged and monitored for policy violations, 
                  (3) Mandatory training includes responsible AI modules covering ethics and data handling, (4) AI Champions 
                  serve as first-line advisors on appropriate usage, and (5) Regular audits ensure compliance with IM8 standards. 
                  Since launch, we have detected and addressed fewer than 0.01% of queries attempting to process inappropriate content.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-2">
              <div className={`text-xs ${theme.title} p-2 rounded bg-amber-100 dark:bg-amber-900/30`}>
                <strong>Q3:</strong> What measures are in place to address potential job displacement due to AI adoption?
              </div>
              <div className={`text-xs ${theme.navItem} leading-relaxed pl-2`}>
                <p className="mb-1.5"><strong>Suggested Response:</strong></p>
                <p>
                  AI tools are designed to augment, not replace, public officers. Our approach focuses on automating routine tasks 
                  to free officers for higher-value work requiring human judgment and stakeholder engagement. The Public Service 
                  continues to grow its headcount in priority areas. We have not reduced headcount due to AI adoption; instead, 
                  we're redeploying officers to emerging needs like digital services, data analytics, and policy innovation. 
                  The comprehensive training programs ensure all officers can upskill and transition to AI-augmented roles.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-2">
              <div className={`text-xs ${theme.title} p-2 rounded bg-amber-100 dark:bg-amber-900/30`}>
                <strong>Q4:</strong> What is the cost-benefit analysis of this AI investment?
              </div>
              <div className={`text-xs ${theme.navItem} leading-relaxed pl-2`}>
                <p className="mb-1.5"><strong>Suggested Response:</strong></p>
                <p>
                  Based on user surveys and time-motion studies, officers save an average of 2-3 hours per week using AI tools 
                  for tasks like drafting, research, and summarization. This translates to approximately 150,000 hours saved 
                  weekly across the Public Service. At an average loaded cost of $50/hour, this represents $7.5 million in 
                  weekly productivity gains, or $390 million annually. Against an investment of $37 million over two years, 
                  the return on investment exceeds 10:1. Beyond quantifiable savings, officers report improved work quality 
                  and job satisfaction, with 87% indicating AI tools help them be more effective in their roles.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-2">
              <div className={`text-xs ${theme.title} p-2 rounded bg-amber-100 dark:bg-amber-900/30`}>
                <strong>Q5:</strong> Will the Government make these AI tools available to citizens?
              </div>
              <div className={`text-xs ${theme.navItem} leading-relaxed pl-2`}>
                <p className="mb-1.5"><strong>Suggested Response:</strong></p>
                <p>
                  The current focus is on empowering public officers to serve citizens better. However, we are exploring 
                  citizen-facing AI applications in specific service domains. For example, CPF has launched an AI-powered 
                  chatbot to answer member queries, and MOH is piloting AI-assisted health screening interpretation. We 
                  are studying best practices from other jurisdictions and consulting stakeholders on appropriate use cases. 
                  Any citizen-facing deployment will prioritize accessibility, accuracy, and privacy protection, with clear 
                  channels for human escalation when needed.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}