import { X, FileText, Calendar, AlertTriangle } from 'lucide-react';
import { MessageInput } from './MessageInput';
import { DashboardWidgets } from './DashboardWidgets';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';

interface HomePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  userProfile: import('../App').UserProfile;
  onSelectSimulation?: (simulationId: string) => void;
}

export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, onToggleSidebar, isSidebarOpen, userProfile, onSelectSimulation }: HomePageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  const today = new Date();

  // Recommended tasks based on user role
  const recommendedTasks = userProfile.role === 'HR Officer' ? [
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Draft Job Description',
      description: 'Create a comprehensive job description for the new Senior Developer position, including key responsibilities, requirements, and benefits.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />,
      title: 'Schedule Interviews',
      description: 'Organize interview sessions for 5 shortlisted candidates for the Product Manager role next week.'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      title: 'Review Leave Policies',
      description: 'Update the annual leave policy documentation to reflect the new flexible work arrangements and remote work guidelines.'
    }
  ] : userProfile.role === 'Policy Officer' ? [
    {
      icon: <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />,
      title: 'Draft Response to Parliamentary Questions (PQ)',
      description: 'Analyze and prepare responses for upcoming parliamentary questions on government digital services and cybersecurity measures.',
      onClick: () => onSelectSimulation?.('pq-response-mnd')
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Draft Policy Brief',
      description: 'Prepare a comprehensive policy brief on the digital transformation initiative, including stakeholder analysis and implementation roadmap.',
      onClick: undefined
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      title: 'Policy Impact Assessment',
      description: 'Conduct impact analysis for the proposed regulatory changes and prepare recommendations for inter-agency consultation.',
      onClick: undefined
    }
  ] : userProfile.role === 'Marketing Officer' ? [
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Create Campaign Brief',
      description: 'Develop a comprehensive marketing campaign brief for the upcoming digital transformation awareness initiative targeting government agencies.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />,
      title: 'Plan Social Media Content',
      description: 'Schedule and draft social media posts for the next month across LinkedIn, Facebook, and Twitter to promote new government services.'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      title: 'Analyze Campaign Performance',
      description: 'Review last quarter\'s marketing metrics and prepare insights report highlighting engagement rates, reach, and conversion statistics.'
    }
  ] : [
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Draft Project Charter',
      description: 'Create a comprehensive project charter for the new digital transformation initiative, outlining objectives, scope, and key stakeholders.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />,
      title: 'Schedule Team Standup',
      description: 'Set up recurring daily standup meetings for the development team to track progress and address blockers.'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      title: 'Analyze Project Risks',
      description: 'Conduct a comprehensive risk assessment for the upcoming product launch, identifying potential issues and mitigation strategies.'
    }
  ];

  return (
    <div className={`h-full flex flex-col ${font.base}`}>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="h-full flex flex-col">
          {/* Welcome Header */}
          <div className="pt-8 pb-8 px-6">
            <h1 className={`text-2xl mb-1 tracking-tight font-semibold ${theme.title} ${font.title}`} style={{ fontSize: '2rem' }}>
              Good {today.getHours() < 12 ? 'Morning' : today.getHours() < 18 ? 'Afternoon' : 'Evening'}, {userProfile.name.split(' ')[0]}
            </h1>
            <p className={`text-xs opacity-70`} style={{ color: 'inherit' }}>
              {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content Area - Fills width and vertically centers */}
          <div className="flex-1 px-[120px] pb-8 flex items-center">
            <div className="w-full flex flex-col gap-12">
              {/* Recommended Tasks Section */}
              <div className="mt-[40px]">
                <h2 className={`text-lg mb-4 ${theme.title} ${font.title}`}>
                  Recommended Tasks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(() => {
                    let displayTasks = recommendedTasks;
                    if (userProfile.role === 'HR Officer' && recommendedTasks.length >= 3) {
                      const tasks = [...recommendedTasks];
                      const first = tasks[0];
                      const third = tasks[2];
                      
                      // Swap 1st and 3rd, and update the new 1st task (originally Review Leave Policies)
                      tasks[0] = {
                        ...third,
                        title: 'Shortlist Candidates',
                        description: 'Review and shortlist candidates for the Senior Developer role using Workday AI assistance.',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600 dark:text-blue-400">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        )
                      };
                      tasks[2] = first;
                      
                      displayTasks = tasks;
                    }

                    return displayTasks.map((task, index) => {
                      const getAssistantName = (title: string) => {
                        switch (title) {
                          case 'Draft Job Description': return 'Recruitment Assistant';
                          case 'Schedule Interviews': return 'Scheduling Assistant';
                          case 'Review Leave Policies': return 'Policy Assistant';
                          case 'Shortlist Candidates': return 'Workday Candidate Shortlister Assistant';
                          case 'Draft Policy Brief': return 'Policy Research Assistant';
                          case 'Draft Response to Parliamentary Questions (PQ)': return 'Parliamentary Question Assistant';
                          case 'Policy Impact Assessment': return 'Analysis Assistant';
                          case 'Create Campaign Brief': return 'Marketing Strategy Assistant';
                          case 'Plan Social Media Content': return 'Social Media Assistant';
                          case 'Analyze Campaign Performance': return 'Data Analytics Assistant';
                          case 'Draft Project Charter': return 'Project Management Assistant';
                          case 'Schedule Team Standup': return 'Team Coordination Assistant';
                          case 'Analyze Project Risks': return 'Risk Management Assistant';
                          default: return 'General Assistant';
                        }
                      };
                      const assistantName = getAssistantName(task.title);

                      return (
                        <button
                          key={index}
                          className={`${theme.outputPanel} border ${theme.separator} rounded-lg p-4 text-left transition-all hover:scale-[1.02] hover:shadow-md group`}
                          onClick={task.title === 'Shortlist Candidates' ? () => onSelectSimulation?.('hr-candidate-shortlisting') : task.onClick}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              {task.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 mb-2 ring-1 ring-inset ring-blue-700/10">
                                {assistantName}
                              </span>
                              <h3 className={`text-base mb-1 ${font.title}`} style={{ color: 'inherit' }}>
                                {task.title}
                              </h3>
                              <p className={`text-sm opacity-70 line-clamp-3`} style={{ color: 'inherit' }}>
                                {task.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Quick Chat - Full Width with white background */}
              <div>
                <h2 className={`text-xl mb-4 ${theme.title} ${font.title}`}>
                  What do you want to do?
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <MessageInput 
                    onSend={(message) => {
                      // For Jayden (Marketing Officer), redirect to Marketing Software AOR simulation
                      if (userProfile.role === 'Marketing Officer') {
                        onSelectSimulation?.('marketing-software-aor');
                      } else {
                        // Handle quick chat message send for other users
                        console.log('Quick chat message:', message);
                      }
                    }} 
                    colorTheme={colorTheme} 
                    fontStyle={fontStyle}
                    showFileUpload={true}
                    autoTypeText={userProfile.role === 'Marketing Officer' ? 'I need help drafting an AOR (Approval of Requirement) to procure marketing software for my 15-person team. Our budget is $30,000-$35,000. We need software to create marketing materials for campaigns.\n\nI\'m considering these 5 options:\n1. HubSpot Marketing Hub\n2. Adobe Creative Cloud for Teams\n3. Canva for Teams\n4. Monday.com Marketing\n5. Semrush\n\nPlease compare these options based on features, pricing, team collaboration capabilities, and suitability for our needs. Then shortlist the top 3 options and help me draft a comprehensive AOR.' : undefined}
                  />
                </div>
                {/* Helper text for Jayden's typing mode */}
                {userProfile.role === 'Marketing Officer' && (
                  <p className="text-xs text-gray-500 mt-2 text-center">Press any key to type, Enter to send</p>
                )}
              </div>

              {/* Dashboard Widgets */}
              <div className="mt-5">
                <DashboardWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}