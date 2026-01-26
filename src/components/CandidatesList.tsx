import { Users, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses } from '../lib/theme-utils';
import { Badge } from './ui/badge';

interface Candidate {
  id: string;
  name: string;
  currentRole: string;
  experience: string;
  experienceYears: number;
  matchScore: number;
  keySkills: string[];
  reasons: string[];
  education: string;
  availability: string;
  availabilityDays: number;
}

interface CandidatesListProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  messageCount: number;
}

type SortField = 'name' | 'matchScore' | 'experienceYears' | 'availabilityDays';
type SortDirection = 'asc' | 'desc';

export function CandidatesList({ colorTheme, fontStyle, messageCount }: CandidatesListProps) {
  const theme = getThemeClasses(colorTheme);
  const [sortField, setSortField] = useState<SortField>('matchScore');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'matchScore' ? 'desc' : 'asc');
    }
  };

  const allCandidates: Candidate[] = [
    {
      id: '1',
      name: 'Dr. Rachel Lim',
      currentRole: 'Senior ML Engineer at AI Singapore',
      experience: '8 years',
      experienceYears: 8,
      matchScore: 96,
      education: 'PhD in Computer Science (NUS)',
      availability: 'Available in 1 month',
      availabilityDays: 30,
      keySkills: ['PyTorch', 'Transformers', 'LLMs', 'MLOps', 'Azure ML'],
      reasons: [
        'Extensive experience with LLM fine-tuning and deployment',
        'Led 3 government AI projects at AI Singapore',
        'Published research on multilingual NLP (relevant for SG context)',
        'Strong track record in responsible AI practices',
      ],
    },
    {
      id: '2',
      name: 'Marcus Tan Wei Jie',
      currentRole: 'AI Engineer at GovTech',
      experience: '6 years',
      experienceYears: 6,
      matchScore: 94,
      education: 'Masters in AI (NTU), BSc Computer Science',
      availability: 'Immediate',
      availabilityDays: 0,
      keySkills: ['TensorFlow', 'GPT APIs', 'Python', 'Docker', 'AWS'],
      reasons: [
        'Currently working in public sector - understands context',
        'Built chatbot for 3 government agencies',
        'Expertise in production ML systems and monitoring',
        'Certified AWS Machine Learning Specialist',
      ],
    },
    {
      id: '3',
      name: 'Priya Rajagopal',
      currentRole: 'Lead Data Scientist at DBS Bank',
      experience: '7 years',
      experienceYears: 7,
      matchScore: 91,
      education: 'Masters in Data Science (Imperial), BSc Statistics',
      availability: 'Available in 6 weeks',
      availabilityDays: 42,
      keySkills: ['Scikit-learn', 'XGBoost', 'NLP', 'Spark', 'Model Governance'],
      reasons: [
        'Deep expertise in model governance and explainability',
        'Experience with large-scale production systems',
        'Strong foundation in statistical methods',
        'Led team of 5 ML engineers at DBS',
      ],
    },
    {
      id: '4',
      name: 'Kevin Ng Kai Ming',
      currentRole: 'Research Scientist at A*STAR',
      experience: '5 years',
      experienceYears: 5,
      matchScore: 88,
      education: 'PhD in Machine Learning (Stanford)',
      availability: 'Available in 2 months',
      availabilityDays: 60,
      keySkills: ['PyTorch', 'Research', 'Deep Learning', 'Computer Vision', 'NLP'],
      reasons: [
        'Strong academic background with 12 published papers',
        'Experience in applied research for government projects',
        'Expertise in cutting-edge ML techniques',
        'Seeking transition from pure research to applied ML',
      ],
    },
    {
      id: '5',
      name: 'Sarah Chen Yi Ling',
      currentRole: 'Senior Software Engineer at Grab',
      experience: '9 years',
      experienceYears: 9,
      matchScore: 86,
      education: 'BSc Computer Engineering (NUS)',
      availability: 'Available in 1 month',
      availabilityDays: 30,
      keySkills: ['Python', 'Kubernetes', 'ML Pipeline', 'FastAPI', 'PostgreSQL'],
      reasons: [
        'Strong engineering background with ML integration',
        'Built scalable ML serving infrastructure at Grab',
        'Experience with real-time prediction systems',
        'Passionate about public service mission',
      ],
    },
    {
      id: '6',
      name: 'Ahmad Faris bin Rashid',
      currentRole: 'ML Engineer at Sea Group',
      experience: '4 years',
      experienceYears: 4,
      matchScore: 84,
      education: 'Masters in Computer Science (NTU)',
      availability: 'Immediate',
      availabilityDays: 0,
      keySkills: ['TensorFlow', 'Recommendation Systems', 'A/B Testing', 'Python', 'GCP'],
      reasons: [
        'Experience with recommendation systems and personalization',
        'Strong product-focused mindset',
        'Contributed to 2 open-source ML libraries',
        'Quick learner with diverse tech stack exposure',
      ],
    },
    {
      id: '7',
      name: 'Lisa Wong Hui Min',
      currentRole: 'Data Scientist at Ministry of Health',
      experience: '5 years',
      experienceYears: 5,
      matchScore: 82,
      education: 'Masters in Health Informatics (NUS)',
      availability: 'Available in 3 weeks',
      availabilityDays: 21,
      keySkills: ['R', 'Python', 'Healthcare ML', 'Data Privacy', 'Tableau'],
      reasons: [
        'Current public sector experience - understands workflows',
        'Specialized in healthcare AI applications',
        'Strong understanding of data privacy regulations',
        'Experience presenting to senior management',
      ],
    },
  ];

  const nlpCandidates: Candidate[] = [
    {
      id: '1',
      name: 'Dr. Rachel Lim',
      currentRole: 'Senior ML Engineer at AI Singapore',
      experience: '8 years',
      experienceYears: 8,
      matchScore: 98,
      education: 'PhD in Computer Science - NLP specialization (NUS)',
      availability: 'Available in 1 month',
      availabilityDays: 30,
      keySkills: ['NLP', 'Transformers', 'LLMs', 'BERT', 'Multilingual Models'],
      reasons: [
        'Published 8 research papers on multilingual NLP',
        'PhD dissertation on Southeast Asian language processing',
        'Led development of Singapore-specific language models',
        'Expert in transformer architectures and fine-tuning',
      ],
    },
    {
      id: '3',
      name: 'Priya Rajagopal',
      currentRole: 'Lead Data Scientist at DBS Bank',
      experience: '7 years',
      experienceYears: 7,
      matchScore: 93,
      education: 'Masters in Data Science (Imperial), BSc Statistics',
      availability: 'Available in 6 weeks',
      availabilityDays: 42,
      keySkills: ['NLP', 'Text Mining', 'Sentiment Analysis', 'Topic Modeling', 'spaCy'],
      reasons: [
        'Built NLP pipeline for customer feedback analysis at DBS',
        'Experience with sentiment analysis on 10M+ documents',
        'Expertise in entity recognition and text classification',
        'Led NLP team for chatbot development',
      ],
    },
    {
      id: '4',
      name: 'Kevin Ng Kai Ming',
      currentRole: 'Research Scientist at A*STAR',
      experience: '5 years',
      experienceYears: 5,
      matchScore: 95,
      education: 'PhD in Machine Learning - NLP track (Stanford)',
      availability: 'Available in 2 months',
      availabilityDays: 60,
      keySkills: ['NLP Research', 'Language Models', 'PyTorch', 'Attention Mechanisms', 'BERT'],
      reasons: [
        'Published 12 papers including 3 at top NLP conferences (ACL, EMNLP)',
        'Developed novel attention mechanisms for low-resource languages',
        'Expertise in cross-lingual transfer learning',
        'Strong theoretical foundation in linguistics and NLP',
      ],
    },
    {
      id: '2',
      name: 'Marcus Tan Wei Jie',
      currentRole: 'AI Engineer at GovTech',
      experience: '6 years',
      experienceYears: 6,
      matchScore: 91,
      education: 'Masters in AI (NTU), BSc Computer Science',
      availability: 'Immediate',
      availabilityDays: 0,
      keySkills: ['GPT APIs', 'Chatbots', 'NLP', 'Prompt Engineering', 'LangChain'],
      reasons: [
        'Built NLP-powered chatbots for 3 government agencies',
        'Expert in prompt engineering and LLM integration',
        'Experience deploying conversational AI at scale',
        'Understands government use cases for NLP',
      ],
    },
  ];

  // Filter candidates based on message count
  const baseCandidates = messageCount > 2 ? nlpCandidates : allCandidates;
  
  // Sort candidates
  const sortedCandidates = [...baseCandidates].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = (bValue as string).toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (score >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3 h-3 opacity-50" />;
    }
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-3 h-3 text-purple-600" /> : 
      <ArrowDown className="w-3 h-3 text-purple-600" />;
  };

  return (
    <div className="space-y-4 h-full overflow-y-auto pr-3">
      <div className={`${theme.title} text-sm flex items-center gap-2 sticky top-0 ${theme.mainBg} pb-2 z-10`}>
        <Users className="w-4 h-4" />
        Shortlisted Candidates ({sortedCandidates.length})
      </div>

      {/* Table */}
      <div className={`rounded-lg border ${theme.chatItem} overflow-hidden`}>
        {/* Table Header */}
        <div className={`grid grid-cols-12 gap-2 p-3 border-b ${theme.separator} bg-gray-50 dark:bg-gray-800/50 sticky top-8 z-10`}>
          <div 
            className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors"
            onClick={() => handleSort('name')}
          >
            <span className="text-xs font-semibold">Name</span>
            <SortIcon field="name" />
          </div>
          <div className="col-span-3 text-xs font-semibold">Role</div>
          <div 
            className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors justify-center"
            onClick={() => handleSort('matchScore')}
          >
            <span className="text-xs font-semibold">Match</span>
            <SortIcon field="matchScore" />
          </div>
          <div 
            className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors"
            onClick={() => handleSort('experienceYears')}
          >
            <span className="text-xs font-semibold">Experience</span>
            <SortIcon field="experienceYears" />
          </div>
          <div 
            className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors"
            onClick={() => handleSort('availabilityDays')}
          >
            <span className="text-xs font-semibold">Availability</span>
            <SortIcon field="availabilityDays" />
          </div>
        </div>

        {/* Table Body */}
        <div>
          {sortedCandidates.map((candidate, index) => (
            <div key={candidate.id}>
              {/* Main Row */}
              <div 
                className={`grid grid-cols-12 gap-2 p-3 border-b ${theme.separator} hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors`}
                onClick={() => toggleRow(candidate.id)}
              >
                <div className="col-span-3">
                  <div className={`${theme.title} text-xs`}>{candidate.name}</div>
                  <div className={`text-[10px] ${theme.navItem} opacity-70 mt-0.5`}>{candidate.education}</div>
                </div>
                <div className="col-span-3">
                  <div className={`text-xs ${theme.navItem}`}>{candidate.currentRole}</div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <div className={`text-xs px-2 py-1 rounded ${getScoreColor(candidate.matchScore)}`}>
                    {candidate.matchScore}%
                  </div>
                </div>
                <div className="col-span-2">
                  <div className={`text-xs ${theme.navItem}`}>{candidate.experience}</div>
                </div>
                <div className="col-span-2">
                  <div className={`text-xs ${theme.navItem}`}>{candidate.availability}</div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedRows.has(candidate.id) && (
                <div className={`p-4 border-b ${theme.separator} bg-gray-50/50 dark:bg-gray-800/30`}>
                  {/* Skills */}
                  <div className="mb-3">
                    <div className={`text-xs ${theme.title} mb-1.5`}>Key Skills:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {candidate.keySkills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[10px] px-2 py-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Reasons */}
                  <div>
                    <div className={`text-xs ${theme.title} mb-1.5`}>Why Shortlisted:</div>
                    <div className="space-y-1">
                      {candidate.reasons.map((reason, idx) => (
                        <div key={idx} className="flex gap-2 text-xs">
                          <span className="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
                          <span className={theme.navItem}>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}