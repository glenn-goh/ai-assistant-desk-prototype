import { useState } from 'react';
import { ChatArea } from './components/ChatArea';
import { ChatSidebar } from './components/ChatSidebar';
import { ExplorePage } from './components/ExplorePage';
import { StudioPage } from './components/StudioPage';
import { LibraryPage } from './components/LibraryPage';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { OnboardingPage } from './components/OnboardingPage';
import { PersonalizationDialog } from './components/PersonalizationDialog';
import { ChatSimulatorView } from './components/ChatSimulatorView';
import { ColorTheme, FontStyle } from './components/PersonalizationDialog';
import { featureOverviewData } from './data/feature-overview';
import { customerSupportData } from './data/customer-support';
import { feedbackCollectionData } from './data/feedback-collection';
import { hrCandidateShortlistingData } from './data/hr-candidate-shortlisting';
import { procurementRfqData } from './data/procurement-rfq';
import { marketingSoftwareAorData } from './data/marketing-software-aor';
import { pqResponseData } from './data/pq-response-mnd';
import { pqResponseDataV2 } from './data/pq-response-mnd-v2';

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
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
}

export type View = 'chat' | 'explore' | 'studio' | 'home' | 'library';
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
  dataSources?: Array<{
    id: string;
    type: 'sharepoint' | 'local' | 'aws' | 'gdrive';
    path: string;
    enabled: boolean;
  }>;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Jayden Tan',
    email: 'jayden.tan@tech.gov.sg',
    role: 'Marketing Officer',
    agency: 'GovTech'
  });

  const [chats, setChats] = useState<Chat[]>([
    // Commented out to hide from sidebar per user request
    // {
    //   id: '2',
    //   type: 'assistant',
    //   classificationType: 'cce-sn',
    //   title: 'Deep Research AI - AI Ethics',
    //   messages: [
    //     {
    //       id: 'msg1',
    //       role: 'user',
    //       content: 'I need to research the latest developments in AI ethics frameworks for public sector use, particularly focusing on transparency and accountability.',
    //       timestamp: new Date(Date.now() - 3600000),
    //     },
    //     {
    //       id: 'msg2',
    //       role: 'assistant',
    //       content: 'I\'ll conduct comprehensive research on AI ethics frameworks for the public sector. Let me gather information from academic papers, government reports, and policy documents.',
    //       timestamp: new Date(Date.now() - 3500000),
    //     },
    //   ],
    //   createdAt: new Date(Date.now() - 3600000),
    //   assistantType: 'deep-research-ai',
    // },
    // {
    //   id: '3',
    //   type: 'assistant',
    //   classificationType: 'cce-sn',
    //   title: 'Parliamentary Question Assistant',
    //   messages: [
    //     {
    //       id: 'msg-pq1',
    //       role: 'user',
    //       content: 'What is the progress in the adoption of generative AI tools in the Public Service, and what training will be provided for public servants to use these tools?',
    //       timestamp: new Date(Date.now() - 18000000),
    //     },
    //     {
    //       id: 'msg-pq2',
    //       role: 'assistant',
    //       content: 'I\'ll help you find comprehensive information to answer this parliamentary question. Let me gather data from multiple authoritative sources.',
    //       timestamp: new Date(Date.now() - 17950000),
    //     },
    //   ],
    //   createdAt: new Date(Date.now() - 18000000),
    //   assistantType: 'parliamentary-qa',
    // },
  ]);
  const [activeChatId, setActiveChatId] = useState('new-rsn');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [colorTheme, setColorTheme] = useState<ColorTheme>('light');
  const [fontStyle, setFontStyle] = useState<FontStyle>('modern');
  const [activeView, setActiveView] = useState<View>('home');
  const [mode, setMode] = useState<Mode>('desk');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Derived active chat state handling draft chats
  const activeChat = activeChatId.startsWith('new-') 
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

    // If creating a new chat
    if (activeChatId.startsWith('new-')) {
      const newId = Date.now().toString();
      const newChat: Chat = {
        ...activeChat,
        id: newId,
        title: content.slice(0, 30),
        messages: [userMessage],
      };
      currentChats = [newChat, ...chats];
      setChats(currentChats);
      setActiveChatId(newId);
      currentChatId = newId;
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

    // Simulate AI response
    setTimeout(() => {
      // ... existing response logic needs access to the right chat object or type
      // Since we might have just created a new chat, we need to check the type from the *new* or *existing* chat
      const targetChat = currentChats.find(c => c.id === currentChatId);
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
    }, 500);
  };

  const handleNewChat = () => {
    setActiveChatId('new-rsn');
    setActiveView('chat');
  };

  const handleNewCCESNChat = () => {
    setActiveChatId('new-cce-sn');
    setActiveView('chat');
  };

  const handleNewSHChat = () => {
    setActiveChatId('new-cce-sh');
    setActiveView('chat');
  };

  const handleStartAssistantChat = (assistantName: string, assistantType: string) => {
    // Check if this is the Workday Shortlister - trigger simulation instead
    if (assistantType === 'workday-shortlister') {
      handleSelectSimulation('hr-candidate-shortlisting');
      return;
    }

    // Check if this is the Parliamentary Question Assistant - trigger simulation instead
    if (assistantType === 'parliamentary-question') {
      handleSelectSimulation('pq-response-mnd');
      return;
    }

    const newChat: Chat = {
      id: Date.now().toString(),
      title: assistantName,
      messages: [],
      createdAt: new Date(),
      assistantType,
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
    setActiveView('chat');

    // Add initial assistant message based on type
    setTimeout(() => {
      let initialMessage = '';
      if (assistantType === 'transcribe') {
        initialMessage = 'Upload an audio to generate a minutes.';
      } else if (assistantType === 'powerpoint') {
        initialMessage = 'I can help you create icons and pictures for your PowerPoint slides. What would you like me to generate?';
      }

      if (initialMessage) {
        const aiMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: initialMessage,
          timestamp: new Date(),
        };

        setChats(prevChats =>
          prevChats.map(chat => {
            if (chat.id === newChat.id) {
              return {
                ...chat,
                messages: [aiMessage],
              };
            }
            return chat;
          })
        );
      }
    }, 300);
  };

  const handleDeleteChat = (chatId: string) => {
    const filteredChats = chats.filter(chat => chat.id !== chatId);
    setChats(filteredChats);
    
    if (activeChatId === chatId) {
      if (filteredChats.length > 0) {
        setActiveChatId(filteredChats[0].id);
      } else {
        handleNewChat();
      }
    }
  };

  const handleSelectChat = (chatId: string) => {
    setActiveChatId(chatId);
    setActiveView('chat');
  };

  const handleCompleteOnboarding = () => {
    setHasOnboarded(true);
  };

  const handleSignOut = () => {
    // Reset authentication state
    setIsAuthenticated(false);
    setHasOnboarded(false);
    // Reset to default profile
    setUserProfile({
      name: 'Jayden Tan',
      email: 'jayden.tan@tech.gov.sg',
      role: 'Marketing Officer',
      agency: 'GovTech'
    });
    // Clear chats
    setChats([
      {
        id: '2',
        type: 'assistant',
        classificationType: 'cce-sn',
        title: 'Deep Research AI - AI Ethics',
        messages: [
          {
            id: 'msg1',
            role: 'user',
            content: 'I need to research the latest developments in AI ethics frameworks for public sector use, particularly focusing on transparency and accountability.',
            timestamp: new Date(Date.now() - 3600000),
          },
          {
            id: 'msg2',
            role: 'assistant',
            content: 'I\'ll conduct comprehensive research on AI ethics frameworks for the public sector. Let me gather information from academic papers, government reports, and policy documents.',
            timestamp: new Date(Date.now() - 3500000),
          },
        ],
        createdAt: new Date(Date.now() - 3600000),
        assistantType: 'deep-research-ai',
      },
      {
        id: '3',
        type: 'assistant',
        classificationType: 'cce-sn',
        title: 'Parliamentary Question Assistant',
        messages: [
          {
            id: 'msg-pq1',
            role: 'user',
            content: 'What is the progress in the adoption of generative AI tools in the Public Service, and what training will be provided for public servants to use these tools?',
            timestamp: new Date(Date.now() - 18000000),
          },
          {
            id: 'msg-pq2',
            role: 'assistant',
            content: 'I\'ll help you find comprehensive information to answer this parliamentary question. Let me gather data from multiple authoritative sources.',
            timestamp: new Date(Date.now() - 17950000),
          },
        ],
        createdAt: new Date(Date.now() - 18000000),
        assistantType: 'parliamentary-qa',
      },
    ]);
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
    setActiveChatId(`sim-${simulationId}`);
    setActiveView('chat');
  };

  // Check if current view is a simulation
  const isSimulation = activeChatId.startsWith('sim-');
  const simulationData = isSimulation 
    ? activeChatId === 'sim-feature-overview' 
      ? featureOverviewData 
      : activeChatId === 'sim-customer-support'
      ? customerSupportData
      : activeChatId === 'sim-feedback-collection'
      ? feedbackCollectionData
      : activeChatId === 'sim-hr-candidate-shortlisting'
      ? hrCandidateShortlistingData
      : activeChatId === 'sim-procurement-rfq'
      ? procurementRfqData
      : activeChatId === 'sim-marketing-software-aor'
      ? marketingSoftwareAorData
      : activeChatId === 'sim-pq-response-mnd'
      ? pqResponseData
      : activeChatId === 'sim-pq-response-mnd-v2'
      ? pqResponseDataV2
      : null
    : null;

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
        onClose={() => setIsSidebarOpen(false)}
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onNewCCESNChat={handleNewCCESNChat}
        onNewSHChat={handleNewSHChat}
        onDeleteChat={handleDeleteChat}
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
      />
      {activeView === 'chat' ? (
        isSimulation && simulationData ? (
          <div className="flex-1 flex flex-col">
            <ChatSimulatorView 
              key={activeChatId} 
              data={simulationData as any}
              onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
        ) : (
          <ChatArea
            chat={activeChat}
            onSendMessage={handleSendMessage}
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            colorTheme={colorTheme}
            fontStyle={fontStyle}
            userProfile={userProfile}
          />
        )
      ) : activeView === 'explore' ? (
        <ExplorePage
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          colorTheme={colorTheme}
          fontStyle={fontStyle}
          onStartAssistantChat={handleStartAssistantChat}
          userRole={userProfile?.role}
        />
      ) : activeView === 'studio' ? (
        <StudioPage
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          colorTheme={colorTheme}
          fontStyle={fontStyle}
        />
      ) : activeView === 'library' ? (
        <LibraryPage
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          colorTheme={colorTheme}
          fontStyle={fontStyle}
        />
      ) : (
        <HomePage
          colorTheme={colorTheme}
          fontStyle={fontStyle}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          userProfile={userProfile}
          onSelectSimulation={handleSelectSimulation}
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