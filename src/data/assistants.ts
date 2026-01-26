import { Mic, Presentation, FileText, Mail, BarChart3, Briefcase, Share2, CheckCircle, BookOpen, Microscope, Users, TrendingUp } from 'lucide-react';

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
    classification: 'C(CE)/SH',
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
    name: 'Workday Candidate Shortlister',
    description: 'Analyze candidate profiles and shortlist top matches for open positions.',
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
    description: 'Research and synthesize answers to parliamentary questions from official sources.',
    owner: 'AI Assistant Team',
    tags: ['Parliamentary', 'Research'],
    icon: BookOpen,
    uses: '7.3k',
    classification: 'C(CE)/SH',
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
    classification: 'C(CE)/SH',
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
    'C(CE)/SH': 'Cloud Confidential, Sensitive: High',
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