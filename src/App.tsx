import { useState, useEffect } from 'react';
import { ChatSidebar } from './components/ChatSidebar';
import { ExplorePage } from './components/ExplorePage';
import { StudioPage } from './components/StudioPage';
import { LibraryPage } from './components/LibraryPage';
import { ChatsPage } from './components/ChatsPage';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { OnboardingPage } from './components/OnboardingPage';
import { PersonalizationDialog } from './components/PersonalizationDialog';
import { ChatSimulatorView } from './components/ChatSimulatorView';
import { ProjectPage } from './components/ProjectPage';
import { WalkthroughTour } from './components/WalkthroughTour';
import { SwapBookmarkModal } from './components/SwapBookmarkModal';
import { Error404Page } from './components/Error404Page';
import { Error500Page } from './components/Error500Page';
import { MaintenancePage } from './components/MaintenancePage';
import { ColorTheme, FontStyle } from './components/PersonalizationDialog';
import type { Project } from './types/project';
import type { Assistant } from './data/assistants';
import { topRatedAssistants, essentialAssistants, roleBasedAssistants } from './data/assistants';
import { featureOverviewData } from './data/feature-overview';
import { customerSupportData } from './data/customer-support';
import { feedbackCollectionData } from './data/feedback-collection';
import { hrCandidateShortlistingData } from './data/hr-candidate-shortlisting';
import { procurementRfqData } from './data/procurement-rfq';
import { marketingSoftwareAorData } from './data/marketing-software-aor';
import { pqResponseDataV2 } from './data/pq-response-mnd-v2';
import { canvasDemoData } from './data/canvas-demo';
import { getWebSearchResponses } from './data/interactive-web-search';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  hasFile?: boolean;
  fileName?: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  assistantType?: string;
  assistantName?: string; // Display name of the custom assistant
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
  isIncognito?: boolean;
}

export type View = 'chat' | 'explore' | 'studio' | 'home' | 'library' | 'chats' | 'project';
export type Mode = 'desk' | 'studio';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  agency: string;
  profileDescription?: string;
  workFocus?: string;
  customInstructions?: string;
  traits?: string[];
  aiStyle?: string;
  workActivities?: string[];
  dataSources?: Array<{
    id: string;
    type: 'sharepoint' | 'local' | 'aws' | 'gdrive';
    path: string;
    enabled: boolean;
  }>;
}

function detectWebSearchKeyword(message: string): string | null {
  const patterns = [
    /search\s+the\s+web\s+for\s+([^.,!?]+)/i,
    /search\s+for\s+([^.,!?]+)\s+(?:on|in)\s+the\s+web/i,
    /search\s+([^.,!?]+)\s+(?:on|in)\s+the\s+web/i,
    /web\s+search\s+(?:for\s+)?([^.,!?]+)/i,
    /^search\s+for\s+([^.,!?]+)/i,
    /^search\s+([^.,!?]+)/i,
  ];
  for (const pattern of patterns) {
    const match = message.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
  return null;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash.slice(1) || '/');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@tech.gov.sg',
    role: 'Product Manager',
    agency: 'GovTech'
  });

  const [chats, setChats] = useState<Chat[]>([]);
  const [previewChat, setPreviewChat] = useState<Chat | null>(null);
  const [incognitoChat, setIncognitoChat] = useState<Chat | null>(null);
  const [activeChatId, setActiveChatId] = useState('new-rsn');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [colorTheme, setColorTheme] = useState<ColorTheme>('light');
  const [fontStyle, setFontStyle] = useState<FontStyle>('modern');
  const [activeView, setActiveView] = useState<View>('home');
  const [mode, setMode] = useState<Mode>('desk');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [homeResetKey, setHomeResetKey] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [bookmarkedAssistants, setBookmarkedAssistants] = useState<string[]>([]); // Store assistant IDs
  const [viewedSimulations, setViewedSimulations] = useState<string[]>([]); // Track viewed simulations (base IDs, for non-assistant simulation launches)
  const [simulationInstances, setSimulationInstances] = useState<Array<{ instanceId: string; simulationId: string }>>([]);  // Each simulation chat instance
  const [startedSimulations, setStartedSimulations] = useState<string[]>([]); // Track simulation instance IDs that have had first user message
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);
  const [swapBookmarkModalOpen, setSwapBookmarkModalOpen] = useState(false);
  const [pendingBookmarkAssistantId, setPendingBookmarkAssistantId] = useState<string | null>(null);
  const [pendingBotResponses, setPendingBotResponses] = useState<any[]>([]);
  const [pendingSearchTerm, setPendingSearchTerm] = useState<string>('');
  const [hasSeenWalkthrough, setHasSeenWalkthrough] = useState(() => {
    return localStorage.getItem('hasSeenWalkthrough') === 'true';
  });

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ⇧⌘O - New Chat
      if (e.shiftKey && e.metaKey && e.key === 'o') {
        e.preventDefault();
        handleNewChat();
      }
      // ⌘K - Search Chats
      if (e.metaKey && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle browser back button to return to login
  useEffect(() => {
    if (isAuthenticated) {
      // Push a new history state when authenticated
      window.history.pushState({ authenticated: true }, '');
    }

    const handlePopState = () => {
      // When browser back is pressed, sign out
      setIsAuthenticated(false);
      setHasOnboarded(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isAuthenticated]);

  // Derived active chat state handling draft chats, preview chats, and incognito chats
  const activeChat = incognitoChat && activeChatId === incognitoChat.id
    ? incognitoChat
    : previewChat && activeChatId === previewChat.id
    ? previewChat
    : activeChatId.startsWith('new-')
    ? {
        id: activeChatId,
        title: activeChatId === 'new-cce-sn' ? 'C(CE) Chat' : activeChatId === 'new-cce-sh' ? 'SH Chat' : 'New Chat',
        messages: [],
        createdAt: new Date(),
        classificationType: activeChatId === 'new-cce-sn' ? 'cce-sn' : activeChatId === 'new-cce-sh' ? 'cce-sh' : 'rsn',
      } as Chat
    : chats.find(chat => chat.id === activeChatId);

  // Hide sidebar when on home or chat view by default, show for other views
  const shouldShowSidebar = isSidebarOpen;

  const handleSendMessage = async (content: string) => {
    if (!activeChat) return;

    let currentChats = chats;
    let currentChatId = activeChatId;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    // If this is an incognito chat, update incognito state only
    if (incognitoChat && activeChatId === incognitoChat.id) {
      setIncognitoChat({
        ...incognitoChat,
        messages: [...incognitoChat.messages, userMessage],
      });
      // Don't update currentChats, keep using incognitoChat
    }
    // If this is a preview chat, convert it to a real chat
    else if (activeChatId.startsWith('preview-') && previewChat) {
      const newId = Date.now().toString();
      // Add starter message first, then user message
      const starterMessage: Message = {
        id: (Date.now() - 1).toString(),
        role: 'assistant',
        content: getAssistantStarterMessage(previewChat.assistantType || ''),
        timestamp: new Date(),
      };
      const newChat: Chat = {
        ...previewChat,
        id: newId,
        title: getAssistantMockTitle(previewChat.assistantType || '', content),
        messages: [starterMessage, userMessage],
        // Force R/SN classification for saved chats (CCE/SN cannot be saved)
        classificationType: 'rsn',
        assistantName: previewChat.assistantName, // Preserve assistant name
      };
      currentChats = [newChat, ...chats];
      setChats(currentChats);
      setPreviewChat(null); // Clear preview chat
      setActiveChatId(newId);
      currentChatId = newId;
    }
    // If creating a new chat
    else if (activeChatId.startsWith('new-')) {
      const newId = Date.now().toString();
      const newChat: Chat = {
        ...activeChat,
        id: newId,
        title: content.slice(0, 30),
        messages: [userMessage],
        // Preserve classification from activeChat
        classificationType: activeChat.classificationType,
      };
      // Only add to history if not CCE classification
      const isCCEClassification = activeChat.classificationType === 'cce-sn' || activeChat.classificationType === 'cce-sh';
      if (isCCEClassification) {
        // Don't add to chats array, this will be handled as incognito-like
        setIncognitoChat(newChat);
        currentChatId = newId;
        setActiveChatId(newId);
      } else {
        currentChats = [newChat, ...chats];
        setChats(currentChats);
        setActiveChatId(newId);
        currentChatId = newId;
      }
    } else {
      // Update existing chat with user message
      currentChats = chats.map(chat => {
        if (chat.id === activeChatId) {
          const updatedMessages = [...chat.messages, userMessage];
          return {
            ...chat,
            messages: updatedMessages,
            title: chat.messages.length === 0 ? content.slice(0, 30) : chat.title,
          };
        }
        return chat;
      });
      setChats(currentChats);
    }

    // Check for web search keywords — trigger rich response pipeline instead of mock response
    const searchTerm = detectWebSearchKeyword(content);
    if (searchTerm) {
      const responses = getWebSearchResponses(searchTerm);
      setPendingSearchTerm(searchTerm);
      setPendingBotResponses(responses.preDecision);
      return;
    }

    // Simulate AI response
    setTimeout(() => {
      // Check if this is an incognito chat or a regular chat
      const targetChat = incognitoChat && currentChatId === incognitoChat.id
        ? incognitoChat
        : currentChats.find(c => c.id === currentChatId);

      if (!targetChat) return;

      let responseContent = generateMockResponse(content, targetChat.assistantType, userProfile);
      let hasFile = false;
      let fileName = '';

      // Handle file upload for transcribe assistant
      if (targetChat.assistantType === 'transcribe' && content.includes('[Uploaded file:')) {
        responseContent = 'I\'ve transcribed your audio file and generated the meeting minutes.';
        hasFile = true;
        fileName = 'Meeting_Minutes_' + new Date().toLocaleDateString().replace(/\//g, '-') + '.doc';
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
        hasFile,
        fileName,
      };

      // Update incognito chat or regular chats
      if (incognitoChat && currentChatId === incognitoChat.id) {
        setIncognitoChat(prev => {
          if (prev) {
            return {
              ...prev,
              messages: [...prev.messages, aiMessage],
            };
          }
          return prev;
        });
      } else {
        setChats(prevChats =>
          prevChats.map(chat => {
            if (chat.id === currentChatId) {
              return {
                ...chat,
                messages: [...chat.messages, aiMessage],
              };
            }
            return chat;
          })
        );
      }
    }, 500);
  };

  const handleNewChat = () => {
    setPreviewChat(null); // Clear any preview chat
    setIncognitoChat(null); // Clear any incognito chat
    setPendingBotResponses([]);
    setPendingSearchTerm('');
    setActiveChatId('new-rsn');
    setActiveView('home');
    setHomeResetKey(prev => prev + 1);
  };

  const handleStartChatFromHome = (message: string, classificationType?: 'rsn' | 'cce-sn' | 'cce-sh', isIncognito?: boolean) => {
    // Check if message includes 'Generate' to trigger canvas simulation
    if (message.toLowerCase().includes('generate')) {
      handleSelectSimulation('canvas-demo');
      return;
    }

    // Otherwise create a regular chat with simple response
    const newId = Date.now().toString();
    const userMessage: Message = {
      id: newId,
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    const newChat: Chat = {
      id: newId,
      title: message.slice(0, 30),
      messages: [userMessage],
      createdAt: new Date(),
      classificationType: classificationType || 'rsn',
      isIncognito: isIncognito || false,
    };

    // If incognito OR CCE classification, use incognitoChat state; otherwise add to chat history
    // CCE/SN and CCE/SH chats cannot be saved to history
    const isCCEClassification = classificationType === 'cce-sn' || classificationType === 'cce-sh';
    if (isIncognito || isCCEClassification) {
      setIncognitoChat(newChat);
    } else {
      const newChats = [newChat, ...chats];
      setChats(newChats);
    }
    setActiveChatId(newId);
    setActiveView('chat');

    // Check for web search keywords — trigger rich response pipeline
    const searchTerm = detectWebSearchKeyword(message);
    if (searchTerm) {
      const responses = getWebSearchResponses(searchTerm);
      setPendingSearchTerm(searchTerm);
      setPendingBotResponses(responses.preDecision);
      return;
    }

    // Simulate simple AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a simulated response for demonstration purposes.',
        timestamp: new Date(),
      };

      if (isIncognito || isCCEClassification) {
        // Update incognito chat state
        setIncognitoChat(prev => {
          if (prev && prev.id === newId) {
            return {
              ...prev,
              messages: [...prev.messages, aiMessage],
            };
          }
          return prev;
        });
      } else {
        // Update regular chats
        setChats(prevChats =>
          prevChats.map(chat => {
            if (chat.id === newId) {
              return {
                ...chat,
                messages: [...chat.messages, aiMessage],
              };
            }
            return chat;
          })
        );
      }
    }, 500);
  };

  const handleNewCCESNChat = () => {
    setActiveChatId('new-cce-sn');
    setActiveView('chat');
  };

  const handleNewSHChat = () => {
    setActiveChatId('new-cce-sh');
    setActiveView('chat');
  };

  // Helper function to get a mock chat title when an assistant chat starts
  const getAssistantMockTitle = (assistantType: string, firstMessage: string): string => {
    const mockTitles: Record<string, string> = {
      'query': 'What are the policies on public housing grants?',
      'email-drafter': 'Draft follow-up email to stakeholders',
      'transcribe': 'Team standup meeting notes',
      'deep-research-ai': 'Research on digital transformation trends',
      'powerpoint': 'Generate icons for Q3 presentation',
      'parliamentary': 'PQ talking points on transport policy',
      'memo': 'Inter-agency memo on data sharing',
      'social-media-campaign': 'National Day social media campaign',
      'content-calendar': 'Q1 content schedule planning',
      'brand-guidelines': 'Brand compliance review for new campaign',
      'market-research': 'Public sentiment analysis on housing',
      'interview-questions': 'Senior engineer interview prep',
      'onboarding-guide': 'New hire onboarding plan',
      'performance-review': 'Mid-year performance review draft',
      'budget': 'FY2025 budget allocation review',
      'policy': 'Policy paper on AI governance',
      'procurement': 'RFQ for cloud services procurement',
    };
    return mockTitles[assistantType] || firstMessage.slice(0, 50);
  };

  // Helper function to get starter message for each assistant type
  const getAssistantStarterMessage = (assistantType: string): string => {
    const starterMessages: Record<string, string> = {
      'email-drafter': "I'll help you draft professional emails. What kind of email would you like to write?",
      'query': "Ask me anything! I can help you find information and answer your questions.",
      'transcribe': "Upload an audio file to generate meeting minutes.",
      'deep-research-ai': "I can conduct comprehensive research for you. What topic would you like me to explore?",
      'powerpoint': "I can help you create icons and pictures for your PowerPoint slides. What would you like me to generate?",
      'parliamentary': "I'll help you prepare PQ responses and talking points. What do you need assistance with?",
      'memo': "I can draft inter-agency correspondence for whole-of-government initiatives. What memo do you need?",
      'social-media-campaign': "I'll help you plan and optimize social media campaigns. What's your campaign about?",
      'content-calendar': "I can help you organize and schedule content across channels. What's your timeline?",
      'brand-guidelines': "I'll ensure your content aligns with government branding standards. What do you need to review?",
      'market-research': "I can analyze market trends and public sentiment. What would you like to research?",
      'interview-questions': "I'll generate relevant interview questions. What position are you hiring for?",
      'onboarding-guide': "I can create personalized onboarding plans. Tell me about your new hire.",
      'performance-review': "I'll help you draft performance reviews and development plans. Who are you reviewing?",
      'budget': "I can help with budget allocations and financial reports. What's your budget planning needs?",
      'policy': "I'll help you draft policy papers and cabinet memos. What policy document do you need?",
      'procurement': "I can generate tender documents and evaluation matrices. What procurement need do you have?",
    };
    return starterMessages[assistantType] || "Hello! How can I assist you today?";
  };

  // Map of assistant types to simulation IDs for assistants that use scripted demos
  const assistantSimulationMap: Record<string, string> = {
    'workday-shortlister': 'hr-candidate-shortlisting',
    'parliamentary-question': 'pq-response-mnd-v2',
  };

  const handleStartAssistantChat = (assistantName: string, assistantType: string) => {
    const simulationId = assistantSimulationMap[assistantType];
    if (simulationId) {
      // Create a new unique instance of this simulation
      const instanceId = `sim-${simulationId}-${Date.now()}`;
      setSimulationInstances(prev => [{ instanceId, simulationId }, ...prev]);
      setActiveChatId(instanceId);
      setActiveView('chat');
      return;
    }

    // Create preview chat with NO messages initially (starter message will be added when user sends first message)
    const previewChatId = `preview-${Date.now()}`;

    const newPreviewChat: Chat = {
      id: previewChatId,
      title: assistantName,
      messages: [],
      createdAt: new Date(),
      assistantType,
      assistantName, // Store the assistant name
    };

    setPreviewChat(newPreviewChat);
    setActiveChatId(previewChatId);
    setActiveView('chat');
  };

  const handleDeleteChat = (chatId: string) => {
    const filteredChats = chats.filter(chat => chat.id !== chatId);
    setChats(filteredChats);

    // Also remove from any projects
    setProjects(projects.map(f => ({
      ...f,
      chatIds: f.chatIds.filter(id => id !== chatId)
    })));

    if (activeChatId === chatId) {
      if (filteredChats.length > 0) {
        setActiveChatId(filteredChats[0].id);
      } else {
        handleNewChat();
      }
    }
  };

  const handleRenameChat = (chatId: string, newTitle: string) => {
    setChats(chats.map(chat => {
      if (chat.id === chatId) {
        return { ...chat, title: newTitle };
      }
      return chat;
    }));
  };

  const handleSelectChat = (chatId: string) => {
    // Don't clear preview chat if we're selecting the preview chat itself
    if (!previewChat || chatId !== previewChat.id) {
      setPreviewChat(null); // Clear any preview chat
    }
    setIncognitoChat(null); // Clear any incognito chat
    setPendingBotResponses([]);
    setPendingSearchTerm('');
    setActiveChatId(chatId);
    setActiveView('chat');
  };

  const handleDecisionMade = (value: string) => {
    if (!pendingSearchTerm) return;
    const responses = getWebSearchResponses(pendingSearchTerm);
    if (value === 'proceed') {
      setPendingBotResponses(responses.onProceed);
    } else {
      setPendingBotResponses(responses.onCancel);
    }
    setPendingSearchTerm('');
  };

  const handleRichResponseComplete = () => {
    setPendingBotResponses([]);
  };

  const handleCommitRichContent = (textContent: string) => {
    if (!activeChatId) return;
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: textContent,
      timestamp: new Date(),
    };

    if (incognitoChat && activeChatId === incognitoChat.id) {
      setIncognitoChat(prev => prev ? { ...prev, messages: [...prev.messages, aiMessage] } : prev);
    } else {
      setChats(prevChats =>
        prevChats.map(chat =>
          chat.id === activeChatId ? { ...chat, messages: [...chat.messages, aiMessage] } : chat
        )
      );
    }
  };

  const handleCompleteOnboarding = () => {
    setHasOnboarded(true);
    // Always start walkthrough after completing personalisation quiz
    setTimeout(() => {
      setIsWalkthroughOpen(true);
    }, 500); // Small delay for smooth transition
  };

  // Auto-start walkthrough when user logs in directly (skips onboarding)
  useEffect(() => {
    if (isAuthenticated && hasOnboarded && !isWalkthroughOpen) {
      // Only start if we haven't already started it from onboarding
      setTimeout(() => {
        setIsWalkthroughOpen(true);
      }, 500);
    }
  }, [isAuthenticated, hasOnboarded]);

  const handleSignOut = () => {
    // Reset authentication state
    setIsAuthenticated(false);
    setHasOnboarded(false);
    // Reset to default profile
    setUserProfile({
      name: 'John Doe',
      email: 'john.doe@tech.gov.sg',
      role: 'Product Manager',
      agency: 'GovTech'
    });
    // Clear chats
    setChats([]);
    // Reset view states
    setActiveView('home');
    setActiveChatId('new-rsn');
  };

  const handleLogin = (profile: UserProfile, skipOnboarding: boolean) => {
    setUserProfile(profile);
    setIsAuthenticated(true);
    if (skipOnboarding) {
      setHasOnboarded(true);
      // Start with empty chats for all users
      setChats([]);
    }
  };

  const handleSelectSimulation = (simulationId: string) => {
    // If it's already an instance ID (starts with sim-), use directly
    if (simulationId.startsWith('sim-')) {
      setActiveChatId(simulationId);
      setActiveView('chat');
      return;
    }
    // Legacy: track that this simulation has been viewed
    if (!viewedSimulations.includes(simulationId)) {
      setViewedSimulations([...viewedSimulations, simulationId]);
    }
    setActiveChatId(`sim-${simulationId}`);
    setActiveView('chat');
  };

  const handleCreateProject = (name: string) => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      createdAt: new Date(),
      chatIds: [],
      memoriesScope: 'project-only',
    };
    setProjects([...projects, newProject]);
    // Navigate to the newly created project
    setActiveProjectId(newProject.id);
    setActiveView('project');
  };

  const handleToggleBookmark = (assistantId: string) => {
    setBookmarkedAssistants(prev => {
      if (prev.includes(assistantId)) {
        // Unbookmark
        return prev.filter(id => id !== assistantId);
      } else {
        // Check if already at limit
        if (prev.length >= 3) {
          // Open swap modal
          setPendingBookmarkAssistantId(assistantId);
          setSwapBookmarkModalOpen(true);
          return prev; // Don't add yet
        }
        // Add bookmark
        return [...prev, assistantId];
      }
    });
  };

  const handleSwapBookmark = (oldAssistantId: string, newAssistantId: string) => {
    setBookmarkedAssistants(prev => {
      return prev.map(id => id === oldAssistantId ? newAssistantId : id);
    });
    setPendingBookmarkAssistantId(null);
  };

  const handleAddChatToProject = (chatId: string, projectId: string) => {
    setProjects(projects.map(f => {
      if (f.id === projectId && !f.chatIds.includes(chatId)) {
        return { ...f, chatIds: [...f.chatIds, chatId] };
      }
      return f;
    }));
  };

  const handleStartNewChatInProject = (projectId: string) => {
    const newId = Date.now().toString();
    const newChat: Chat = {
      id: newId,
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
    };
    setChats([newChat, ...chats]);
    // Add chat to project
    setProjects(projects.map(f => {
      if (f.id === projectId) {
        return { ...f, chatIds: [...f.chatIds, newId] };
      }
      return f;
    }));
    setActiveChatId(newId);
    setActiveView('chat');
  };

  const handleUpdateProject = (projectId: string, updates: Partial<Project>) => {
    setProjects(projects.map(f => {
      if (f.id === projectId) {
        return { ...f, ...updates };
      }
      return f;
    }));
  };

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setActiveView('project');
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter(f => f.id !== projectId));
    if (activeProjectId === projectId) {
      setActiveProjectId(null);
      setActiveView('home');
    }
  };

  const handleRemoveChatFromProject = (projectId: string, chatId: string) => {
    setProjects(projects.map(f => {
      if (f.id === projectId) {
        return { ...f, chatIds: f.chatIds.filter(id => id !== chatId) };
      }
      return f;
    }));
  };

  const activeProject = activeProjectId ? projects.find(f => f.id === activeProjectId) : null;

  // Show error/maintenance pages based on route
  if (currentRoute === '/404') {
    return <Error404Page onBackToLogin={() => window.location.hash = ''} />;
  }
  if (currentRoute === '/500') {
    return <Error500Page onBackToLogin={() => window.location.hash = ''} />;
  }
  if (currentRoute === '/maintenance') {
    return <MaintenancePage onBackToLogin={() => window.location.hash = ''} />;
  }

  // Check if current view is a simulation
  const isSimulation = activeChatId.startsWith('sim-');
  const simulationDataMap: Record<string, any> = {
    'feature-overview': featureOverviewData,
    'customer-support': customerSupportData,
    'feedback-collection': feedbackCollectionData,
    'hr-candidate-shortlisting': hrCandidateShortlistingData,
    'procurement-rfq': procurementRfqData,
    'marketing-software-aor': marketingSoftwareAorData,
    'pq-response-mnd-v2': pqResponseDataV2,
    'canvas-demo': canvasDemoData,
  };
  // Resolve simulation data: check instance-based IDs first, then legacy exact IDs
  const resolveSimulationData = () => {
    if (!isSimulation) return null;
    // Check if it's an instance ID (e.g., sim-hr-candidate-shortlisting-1738850000)
    const instance = simulationInstances.find(i => i.instanceId === activeChatId);
    if (instance) return simulationDataMap[instance.simulationId] || null;
    // Legacy: exact match (e.g., sim-hr-candidate-shortlisting)
    const legacyId = activeChatId.replace('sim-', '');
    return simulationDataMap[legacyId] || null;
  };
  const simulationData = resolveSimulationData();

  // Early return for login page
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Early return for onboarding page
  if (!hasOnboarded) {
    return (
      <OnboardingPage 
        userProfile={userProfile}
        onUpdateProfile={setUserProfile}
        onComplete={handleCompleteOnboarding}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
      <ChatSidebar
        isOpen={shouldShowSidebar}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onNewCCESNChat={handleNewCCESNChat}
        onNewSHChat={handleNewSHChat}
        onDeleteChat={handleDeleteChat}
        onRenameChat={handleRenameChat}
        colorTheme={colorTheme}
        fontStyle={fontStyle}
        onColorThemeChange={setColorTheme}
        onFontStyleChange={setFontStyle}
        onSettingsOpen={() => setIsSettingsOpen(true)}
        mode={mode}
        onModeChange={setMode}
        activeView={activeView}
        onExploreClick={() => {
          setActiveView('explore');
          setActiveChatId('new-rsn');
        }}
        onStudioClick={() => setActiveView('studio')}
        onHomeClick={() => {
          setActiveView('home');
          setActiveChatId('new-rsn');
        }}
        onViewChange={(view) => {
          setActiveView(view);
          if (view !== 'chat') {
            setActiveChatId('new-rsn');
          }
        }}
        userProfile={userProfile}
        onSignOut={handleSignOut}
        onSelectSimulation={handleSelectSimulation}
        projects={projects}
        onCreateProject={handleCreateProject}
        onSelectProject={handleSelectProject}
        onStartAssistantChat={handleStartAssistantChat}
        onAddChatToProject={handleAddChatToProject}
        searchModalOpen={searchModalOpen}
        onSearchModalChange={setSearchModalOpen}
        onWalkthroughStart={() => {
          if (activeView !== 'home') {
            setActiveView('home');
            setActiveChatId('new-rsn');
            setHomeResetKey(prev => prev + 1);
          }
          setIsWalkthroughOpen(true);
        }}
        viewedSimulations={viewedSimulations}
        simulationInstances={simulationInstances}
        startedSimulations={startedSimulations}
        bookmarkedAssistants={bookmarkedAssistants}
        previewChat={previewChat}
        onToggleBookmark={handleToggleBookmark}
      />

      {activeView === 'chat' ? (
        isSimulation && simulationData ? (
          <div className="flex-1 flex flex-col">
            <ChatSimulatorView
              key={activeChatId}
              mode="simulator"
              data={simulationData as any}
              onFirstUserMessage={() => {
                if (!startedSimulations.includes(activeChatId)) {
                  setStartedSimulations(prev => [...prev, activeChatId]);
                }
              }}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <ChatSimulatorView
              key={activeChatId}
              mode="interactive"
              title={activeChat?.title}
              classificationType={activeChat?.classificationType}
              interactiveMessages={activeChat?.messages || []}
              onSendMessage={handleSendMessage}
              chatId={activeChat?.id}
              onRenameChat={handleRenameChat}
              isNewChat={activeChatId.startsWith('new-')}
              isIncognito={activeChat?.isIncognito}
              projects={projects}
              onMoveToProject={handleAddChatToProject}
              bookmarkedAssistants={bookmarkedAssistants}
              assistantType={activeChat?.assistantType}
              assistantName={activeChat?.assistantName}
              pendingBotResponses={pendingBotResponses}
              onDecisionMade={handleDecisionMade}
              onRichResponseComplete={handleRichResponseComplete}
              onCommitRichContent={handleCommitRichContent}
            />
          </div>
        )
      ) : activeView === 'explore' ? (
        <ExplorePage
          colorTheme={colorTheme}
          fontStyle={fontStyle}
          onStartAssistantChat={handleStartAssistantChat}
          userRole={userProfile?.role}
          bookmarkedAssistants={bookmarkedAssistants}
          onToggleBookmark={handleToggleBookmark}
        />
      ) : activeView === 'studio' ? (
        <StudioPage
          colorTheme={colorTheme}
          fontStyle={fontStyle}
        />
      ) : activeView === 'library' ? (
        <LibraryPage
          colorTheme={colorTheme}
          fontStyle={fontStyle}
        />
      ) : activeView === 'chats' ? (
        <ChatsPage
          colorTheme={colorTheme}
          fontStyle={fontStyle}
          chats={chats}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
          onSelectSimulation={handleSelectSimulation}
        />
      ) : activeView === 'project' && activeProject ? (
        <ProjectPage
          project={activeProject}
          chats={chats}
          onBack={() => setActiveView('home')}
          onSelectChat={handleSelectChat}
          onDeleteProject={handleDeleteProject}
          onRemoveChatFromProject={handleRemoveChatFromProject}
          onStartNewChatInProject={handleStartNewChatInProject}
          onUpdateProject={handleUpdateProject}
        />
      ) : (
        <HomePage
          key={homeResetKey}
          colorTheme={colorTheme}
          fontStyle={fontStyle}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          onStartChat={handleStartChatFromHome}
          isSidebarOpen={isSidebarOpen}
          userProfile={userProfile}
          onSelectSimulation={handleSelectSimulation}
          bookmarkedAssistants={bookmarkedAssistants}
        />
      )}
      
      <PersonalizationDialog
        colorTheme={colorTheme}
        fontStyle={fontStyle}
        onColorThemeChange={setColorTheme}
        onFontStyleChange={setFontStyle}
        userProfile={userProfile}
        onUpdateProfile={setUserProfile}
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
      />

      <WalkthroughTour
        isOpen={isWalkthroughOpen}
        onClose={() => setIsWalkthroughOpen(false)}
      />

      <SwapBookmarkModal
        open={swapBookmarkModalOpen}
        onOpenChange={setSwapBookmarkModalOpen}
        newAssistant={(() => {
          if (!pendingBookmarkAssistantId) return null;
          const allRoleAssistants = Object.values(roleBasedAssistants).flat();
          const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];
          const uniqueAssistants = Array.from(
            new Map(allAvailableAssistants.map(a => [a.id, a])).values()
          );
          return uniqueAssistants.find(a => a.id === pendingBookmarkAssistantId) || null;
        })()}
        bookmarkedAssistants={(() => {
          const allRoleAssistants = Object.values(roleBasedAssistants).flat();
          const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];
          const uniqueAssistants = Array.from(
            new Map(allAvailableAssistants.map(a => [a.id, a])).values()
          );
          return bookmarkedAssistants
            .map(id => uniqueAssistants.find(a => a.id === id))
            .filter((a): a is Assistant => a !== undefined);
        })()}
        onSwap={handleSwapBookmark}
      />
    </div>
  );
}

function generateMockResponse(userMessage: string, assistantType?: string, userProfile?: UserProfile): string {
  // Handle transcribe assistant
  if (assistantType === 'transcribe') {
    if (userMessage.toLowerCase().includes('what was the follow up') || 
        userMessage.toLowerCase().includes('follow-up') ||
        userMessage.toLowerCase().includes('action')) {
      return `Based on the meeting minutes, here are the follow-up actions:

1. **John** - Prepare Q3 budget proposal by Friday
2. **Sarah** - Schedule follow-up meeting with design team
3. **Mike** - Review and approve the marketing materials by EOW
4. **Team** - Complete customer feedback survey analysis by next Monday
5. **Lisa** - Send out meeting notes to all stakeholders

All action items have been assigned with clear deadlines.`;
    }
  }

  // Add personalization with user's name
  const greeting = userProfile ? `Hi ${userProfile.name}! ` : '';
  const roleContext = userProfile?.role ? ` As a ${userProfile.role}, ` : '';

  const responses = [
    `${greeting}I'm a demo AI assistant. In a real implementation, this would connect to an AI API like OpenAI's GPT model to generate responses.${roleContext}you might find this helpful for your work.`,
    `${greeting}This is a mock response. To get real AI responses, you would need to integrate with an AI service.`,
    `${greeting}I understand you said: "` + userMessage + `". This is a simulated response for demonstration purposes.`,
    `Thanks for your message${userProfile ? ', ' + userProfile.name : ''}! This interface mimics ChatGPT, but the responses are pre-generated for demo purposes.`,
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}