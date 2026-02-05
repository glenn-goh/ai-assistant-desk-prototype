import { Mic, Presentation, FileText, Mail, BarChart3, Briefcase, Share2, CheckCircle, BookOpen, Microscope, Users, TrendingUp, MessageSquare, PieChart, Lightbulb, Calendar, ClipboardList, Newspaper, GraduationCap, Scale, Globe } from 'lucide-react';

export interface Assistant {
  id: string;
  name: string;
  description: string;
  owner: string;
  tags: string[];
  icon: any; // React component
  uses: string;
  classification: string;
  type: 'Official' | 'Community' | 'Developer';
  assistantType: string; // Used for routing/chat creation
}

// Define all assistants
const allAssistants = {
  // Essential/Universal Tools
  emailDrafter: {
    id: 'email-drafter',
    name: 'Email Drafter',
    description: 'Draft professional emails with customizable tone and structure.',
    owner: 'Jennifer Lee',
    tags: ['Communication', 'Email'],
    icon: Mail,
    uses: '13.5k',
    classification: 'R/SN',
    type: 'Community' as const,
    assistantType: 'email-drafter',
  },
  queryGov: {
    id: 'query-gov',
    name: 'Query@Gov',
    description: 'Ask questions and get answers.',
    owner: 'Ministry of Manpower (MOM)',
    tags: ['Q&A'],
    icon: FileText,
    uses: '15.2k',
    classification: 'C(CE)/SN',
    type: 'Developer' as const,
    assistantType: 'query',
  },
  transcribe: {
    id: 'transcribe',
    name: 'Transcribe Workspace',
    description: 'Creating meeting minutes from your audio file.',
    owner: 'AI Assistant Team',
    tags: ['Meeting', 'Audio'],
    icon: Mic,
    uses: '8.3k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'transcribe',
  },
  deepResearch: {
    id: 'deep-research',
    name: 'Deep Research Assistant',
    description: 'Conduct comprehensive research across multiple sources and synthesize findings.',
    owner: 'AI Assistant Team',
    tags: ['Research', 'Analysis'],
    icon: Microscope,
    uses: '9.8k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'deep-research-ai',
  },
  powerpoint: {
    id: 'powerpoint',
    name: 'Powerpoint Slide Image Generator',
    description: 'Create icons and pictures for your powerpoint slides.',
    owner: 'Suresh',
    tags: ['Slides', 'Design'],
    icon: Presentation,
    uses: '12.7k',
    classification: 'R/SN',
    type: 'Community' as const,
    assistantType: 'powerpoint',
  },
  parliamentaryDrafter: {
    id: 'parliamentary-drafter',
    name: 'Parliamentary Question Drafter',
    description: 'Prepare PQ responses and talking points for Ministers.',
    owner: 'AI Assistant Team',
    tags: ['Parliamentary', 'Writing'],
    icon: FileText,
    uses: '11.4k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'parliamentary',
  },
  interAgencyMemo: {
    id: 'inter-agency-memo',
    name: 'Inter-Agency Memo Writer',
    description: 'Draft correspondence for whole-of-government initiatives.',
    owner: 'AI Assistant Team',
    tags: ['Communication', 'Inter-Agency'],
    icon: Share2,
    uses: '10.3k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'memo',
  },

  // Marketing Role
  socialMediaCampaign: {
    id: 'social-media-campaign',
    name: 'Social Media Campaign Planner',
    description: 'Plan and optimize social media campaigns for government communications.',
    owner: 'AI Assistant Team',
    tags: ['Marketing', 'Social Media'],
    icon: Share2,
    uses: '6.2k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'social-media-campaign',
  },
  contentCalendar: {
    id: 'content-calendar',
    name: 'Content Calendar Manager',
    description: 'Organize and schedule content across multiple channels.',
    owner: 'Communications Team',
    tags: ['Marketing', 'Planning'],
    icon: BarChart3,
    uses: '5.8k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'content-calendar',
  },
  brandGuidelines: {
    id: 'brand-guidelines',
    name: 'Brand Guidelines Assistant',
    description: 'Ensure consistency with government branding and messaging standards.',
    owner: 'AI Assistant Team',
    tags: ['Marketing', 'Branding'],
    icon: CheckCircle,
    uses: '4.9k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'brand-guidelines',
  },
  marketResearch: {
    id: 'market-research',
    name: 'Market Research Analyzer',
    description: 'Analyze market trends and public sentiment for strategic planning.',
    owner: 'Strategic Planning Unit',
    tags: ['Marketing', 'Research'],
    icon: TrendingUp,
    uses: '7.1k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'market-research',
  },

  // HR Role
  workdayShortlister: {
    id: 'workday-shortlister',
    name: 'HR Recruitment Assistant',
    description: 'Analyzes multiple candidate profiles from Workday against job requirements to identify and shortlist the best-fit candidates for open positions.',
    owner: 'AI Assistant Team',
    tags: ['HR', 'Recruitment'],
    icon: Users,
    uses: '8.4k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'workday-shortlister',
  },
  interviewQuestions: {
    id: 'interview-questions',
    name: 'Interview Question Generator',
    description: 'Generate relevant interview questions based on job requirements.',
    owner: 'Human Resources Division',
    tags: ['HR', 'Recruitment'],
    icon: FileText,
    uses: '6.7k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'interview-questions',
  },
  onboardingGuide: {
    id: 'onboarding-guide',
    name: 'Employee Onboarding Guide',
    description: 'Create personalized onboarding plans for new hires.',
    owner: 'People Operations',
    tags: ['HR', 'Onboarding'],
    icon: BookOpen,
    uses: '5.3k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'onboarding-guide',
  },
  performanceReview: {
    id: 'performance-review',
    name: 'Performance Review Assistant',
    description: 'Draft performance reviews and development plans for team members.',
    owner: 'AI Assistant Team',
    tags: ['HR', 'Performance'],
    icon: BarChart3,
    uses: '7.9k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'performance-review',
  },

  // Project Manager Role
  budgetPlanning: {
    id: 'budget-planning',
    name: 'Budget Planning Assistant',
    description: 'Calculate budget allocations and prepare financial reports.',
    owner: 'Ministry of Digital Development and Information (MDDI)',
    tags: ['Finance', 'Budget'],
    icon: BarChart3,
    uses: '7.9k',
    classification: 'C(CE)/SN',
    type: 'Developer' as const,
    assistantType: 'budget',
  },
  parliamentaryQA: {
    id: 'parliamentary-qa',
    name: 'Parliamentary Question Assistant',
    description: 'Helps draft responses to parliamentary questions with proper formatting, research from official sources, and talking points for Ministers.',
    owner: 'AI Assistant Team',
    tags: ['Parliamentary', 'Research'],
    icon: BookOpen,
    uses: '7.3k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'parliamentary-question',
  },
  policyBrief: {
    id: 'policy-brief',
    name: 'Policy Brief Writer',
    description: 'Draft policy papers and cabinet memos with proper structure.',
    owner: 'AI Assistant Team',
    tags: ['Policy', 'Writing'],
    icon: FileText,
    uses: '6.8k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'policy',
  },
  procurementHelper: {
    id: 'procurement-helper',
    name: 'Procurement Document Helper',
    description: 'Generate tender documents and evaluation matrices.',
    owner: 'Priya Muthu',
    tags: ['Procurement', 'Documents'],
    icon: Briefcase,
    uses: '5.6k',
    classification: 'R/SN',
    type: 'Community' as const,
    assistantType: 'procurement',
  },
  correctThyEnglish: {
    id: 'correct-thy-english',
    name: 'Correct Thy English',
    description: 'Review and improve grammar, spelling, and writing style in your documents.',
    owner: 'Language Team',
    tags: ['Writing', 'Grammar'],
    icon: MessageSquare,
    uses: '9.2k',
    classification: 'R/SN',
    type: 'Community' as const,
    assistantType: 'grammar-checker',
  },
  surveyAnalysis: {
    id: 'survey-analysis',
    name: 'Survey Results Analysis',
    description: 'Analyze survey data and generate insights with visualizations.',
    owner: 'Data Analytics Team',
    tags: ['Analytics', 'Survey'],
    icon: PieChart,
    uses: '6.5k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'survey-analysis',
  },
  talkingPointGenerator: {
    id: 'talking-point-generator',
    name: 'Talking Point Generator',
    description: 'Create key talking points and messaging for presentations and meetings.',
    owner: 'Communications Division',
    tags: ['Communication', 'Meeting'],
    icon: Lightbulb,
    uses: '8.7k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'talking-points',
  },
  meetingAgenda: {
    id: 'meeting-agenda',
    name: 'Meeting Agenda Builder',
    description: 'Structure and organize meeting agendas with time allocations.',
    owner: 'AI Assistant Team',
    tags: ['Meeting', 'Planning'],
    icon: Calendar,
    uses: '7.4k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'meeting-agenda',
  },
  reportWriter: {
    id: 'report-writer',
    name: 'Report Writer',
    description: 'Draft comprehensive reports with proper structure and formatting.',
    owner: 'Documentation Team',
    tags: ['Writing', 'Reports'],
    icon: ClipboardList,
    uses: '10.1k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'report-writer',
  },
  pressRelease: {
    id: 'press-release',
    name: 'Press Release Drafter',
    description: 'Create press releases and media statements for public announcements.',
    owner: 'Media Relations',
    tags: ['Communication', 'Media'],
    icon: Newspaper,
    uses: '5.9k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'press-release',
  },
  trainingMaterial: {
    id: 'training-material',
    name: 'Training Material Creator',
    description: 'Develop training materials and workshop content for teams.',
    owner: 'Learning & Development',
    tags: ['Training', 'Education'],
    icon: GraduationCap,
    uses: '6.3k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'training-material',
  },
  legalReview: {
    id: 'legal-review',
    name: 'Legal Review Assistant',
    description: 'Review documents for legal compliance and flag potential issues.',
    owner: 'Legal Department',
    tags: ['Legal', 'Compliance'],
    icon: Scale,
    uses: '4.7k',
    classification: 'C(CE)/SN',
    type: 'Official' as const,
    assistantType: 'legal-review',
  },
  translationHelper: {
    id: 'translation-helper',
    name: 'Translation Helper',
    description: 'Translate documents between English and other official languages.',
    owner: 'AI Assistant Team',
    tags: ['Translation', 'Language'],
    icon: Globe,
    uses: '8.1k',
    classification: 'R/SN',
    type: 'Official' as const,
    assistantType: 'translation',
  },
  interviewAssistant: {
    id: 'interview-assistant',
    name: 'Interview Assistant',
    description: 'Prepare for interviews with practice questions and feedback.',
    owner: 'HR Development',
    tags: ['HR', 'Interview'],
    icon: Users,
    uses: '7.6k',
    classification: 'R/SN',
    type: 'Community' as const,
    assistantType: 'interview-assistant',
  },
};

// Essential tools for all roles
export const essentialAssistants: Assistant[] = [
  allAssistants.emailDrafter,
  allAssistants.queryGov,
  allAssistants.transcribe,
  // allAssistants.deepResearch, // Hidden per user request
];

// Top-rated assistants (sorted by usage)
export const topRatedAssistants: Assistant[] = [
  allAssistants.queryGov,
  allAssistants.emailDrafter,
  allAssistants.powerpoint,
  allAssistants.parliamentaryDrafter,
  allAssistants.interAgencyMemo,
  allAssistants.deepResearch,
  allAssistants.correctThyEnglish,
  allAssistants.surveyAnalysis,
  allAssistants.talkingPointGenerator,
  allAssistants.meetingAgenda,
  allAssistants.reportWriter,
  allAssistants.pressRelease,
  allAssistants.trainingMaterial,
  allAssistants.legalReview,
  allAssistants.translationHelper,
  allAssistants.interviewAssistant,
];

// Role-specific assistant mappings
export const roleBasedAssistants: Record<string, Assistant[]> = {
  'marketing': [
    allAssistants.socialMediaCampaign,
    allAssistants.contentCalendar,
    allAssistants.brandGuidelines,
    allAssistants.marketResearch,
  ],
  'hr': [
    allAssistants.workdayShortlister,
    allAssistants.interviewQuestions,
    allAssistants.onboardingGuide,
    allAssistants.performanceReview,
  ],
  'human resources': [
    allAssistants.workdayShortlister,
    allAssistants.interviewQuestions,
    allAssistants.onboardingGuide,
    allAssistants.performanceReview,
  ],
  'policy': [
    allAssistants.parliamentaryQA,
    allAssistants.policyBrief,
    // allAssistants.parliamentaryDrafter, // Removed per user request
    allAssistants.interAgencyMemo,
  ],
  'project manager': [
    allAssistants.budgetPlanning,
    // allAssistants.parliamentaryQA, // Hidden per user request
    allAssistants.policyBrief,
    allAssistants.procurementHelper,
  ],
  // Default fallback
  'default': [
    allAssistants.budgetPlanning,
    // allAssistants.parliamentaryQA, // Hidden per user request
    allAssistants.policyBrief,
    allAssistants.procurementHelper,
  ],
};

// Helper function to get assistants for a specific role
export const getAssistantsForRole = (role?: string): Assistant[] => {
  if (!role) return roleBasedAssistants.default;
  
  const normalizedRole = role.toLowerCase();
  
  // Check for exact or partial matches
  for (const [key, assistants] of Object.entries(roleBasedAssistants)) {
    if (normalizedRole.includes(key)) {
      return assistants;
    }
  }
  
  return roleBasedAssistants.default;
};

// Helper function to map classification codes to full text
export const getClassificationText = (code: string): string => {
  const classificationMap: Record<string, string> = {
    'R/SN': 'Restricted, Sensitive: Normal',
    'C(CE)/SN': 'Cloud Confidential, Sensitive: Normal',
    'CCE/SN': 'Cloud Confidential, Sensitive: Normal',
  };
  return classificationMap[code] || code;
};

// Helper to get type badge styles (lo-fi grayscale)
export const getTypeBadgeStyles = (type: string): string => {
  const styleMap: Record<string, string> = {
    'Official': 'bg-gray-100 text-gray-700 border-gray-300',
    'Community': 'bg-gray-100 text-gray-700 border-gray-300',
    'Developer': 'bg-gray-100 text-gray-700 border-gray-300',
  };
  return styleMap[type] || 'bg-gray-100 text-gray-700 border-gray-300';
};