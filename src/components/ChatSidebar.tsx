import { Settings, Trash2, FolderOpen, Compass, MessageSquarePlus, MoreHorizontal, Users, Info } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { Chat, View } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import govtechLogo from 'figma:asset/4e2729d2a10d63bcdd1cf8140425fc9c5b89f532.png';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onNewCCESNChat: () => void;
  onNewSHChat: () => void;
  onDeleteChat: (id: string) => void;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onColorThemeChange: (theme: ColorTheme) => void;
  onFontStyleChange: (style: FontStyle) => void;
  onSettingsOpen: () => void;
  mode: 'desk' | 'studio';
  onModeChange: (mode: 'desk' | 'studio') => void;
  activeView: View;
  onExploreClick: () => void;
  onStudioClick: () => void;
  onHomeClick: () => void;
  onViewChange: (view: View) => void;
  userProfile: import('../App').UserProfile;
  onSignOut: () => void;
  onSelectSimulation?: (simulationId: string) => void;
}

export function ChatSidebar({
  isOpen,
  onClose,
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  onNewCCESNChat,
  onNewSHChat,
  onDeleteChat,
  colorTheme,
  fontStyle,
  onColorThemeChange,
  onFontStyleChange,
  onSettingsOpen,
  mode,
  onModeChange,
  activeView,
  onExploreClick,
  onStudioClick,
  onHomeClick,
  onViewChange,
  userProfile,
  onSignOut,
  onSelectSimulation,
}: ChatSidebarProps) {
  if (!isOpen) return null;

  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  return (
    <div className={`flex flex-col h-screen w-[280px] border-r ${theme.sidebar} ${font.base} flex-shrink-0`}>
      {/* App Title with Mode Switch */}
      <div className="p-3 space-y-2 flex-shrink-0">
        <div className="flex items-center">
          <h2 className={`${theme.title} text-lg font-bold tracking-tight`}>
            AI Assistant Desk
          </h2>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="px-2 pb-4">
            {mode === 'desk' ? (
              <>
                {/* New Chat Button - Links to Home (no highlight) */}
                <Button
                  className={`w-full justify-start gap-2 h-8 text-xs mb-1 ${theme.navItem} hover:bg-gray-100 dark:hover:bg-gray-800`}
                  variant="ghost"
                  onClick={onNewChat}
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  <span>New Chat</span>
                </Button>

                {/* Library Tab */}
                <Button
                  onClick={() => onViewChange('library')}
                  className={`w-full justify-start gap-2 h-8 text-xs mb-1 ${theme.navItem} hover:bg-gray-100 dark:hover:bg-gray-800 ${activeView === 'library' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''}`}
                  variant="ghost"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span className="flex-1 text-left">Library</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 h-7 text-xs ${theme.navItem} hover:bg-gray-100 dark:hover:bg-gray-800 ${activeView === 'explore' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''}`}
                  onClick={onExploreClick}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Explore All Assistants
                </Button>

                {/* Chats Section Header */}
                <div className="flex items-center justify-between px-2 py-1 mt-6">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-medium text-gray-500 dark:text-gray-400`}>Chats</span>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help opacity-70 hover:opacity-100 text-gray-500 dark:text-gray-400">
                            <Info className="w-3 h-3" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Chats are cleared after 90 days</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Chat List */}
                <div className="space-y-0.5 mt-1">
                  {/* Demo Simulations - Reordered */}
                  <button
                    onClick={() => onSelectSimulation?.('marketing-software-aor')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-marketing-software-aor' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">Marketing Software AOR</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('hr-candidate-shortlisting')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-hr-candidate-shortlisting' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">HR Candidate Shortlisting</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('pq-response-mnd')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-pq-response-mnd' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">PQ Response - MND Housing</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('feature-overview')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-feature-overview' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">Feature Overview</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('customer-support')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-customer-support' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">Customer Support</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('feedback-collection')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-feedback-collection' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">Feedback Collection</span>
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('procurement-rfq')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors ${theme.navItem} ${
                      activeChatId === 'sim-procurement-rfq' ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                    }`}
                  >
                    <span className="text-xs truncate">Procurement RFQ to AOR</span>
                  </button>

                  {/* Regular Chats */}
                  {chats.map(chat => {
                    const displayTitle = chat.title.length > 30 ? chat.title.substring(0, 30) + '...' : chat.title;
                    
                    return (
                      <div
                        key={chat.id}
                        className={`group flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${theme.chatItem} ${
                          chat.id === activeChatId
                            ? theme.chatItemActive
                            : ''
                        }`}
                        onClick={() => onSelectChat(chat.id)}
                        title={chat.title}
                      >
                        <div className={`flex-1 truncate text-xs ${theme.chatItemText}`}>
                          {displayTitle}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteChat(chat.id);
                              }}
                              className="text-red-600 dark:text-red-400"
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                {/* Studio Mode Sidebar */}
                <Button
                  onClick={onStudioClick}
                  className={`w-full justify-start gap-2 mb-1 ${theme.newChatBtn} ${activeView === 'studio' ? 'bg-purple-600 dark:bg-purple-700' : ''}`}
                  variant="outline"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  New Assistant
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${theme.navItem}`}
                >
                  <Users className="w-4 h-4" />
                  My Assistants
                </Button>
              </>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* User Profile Section at Bottom */}
      <div className={`p-2 border-t ${theme.separator} flex-shrink-0 flex items-center justify-between`}>
        <div className="flex items-center gap-2 p-1.5">
          <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-purple-400">
            <img 
              src="https://images.unsplash.com/photo-1605706275526-ded7b77e5e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2FydG9vbiUyMGNhdHxlbnwxfHx8fDE3NjM1MzQ1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cat Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left overflow-hidden">
            <div className={`text-xs ${theme.chatItemText}`}>{userProfile.name}</div>
            <div className={`text-[10px] ${theme.navItem} opacity-70`}>{userProfile.role}</div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={`p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400`}>
              <Settings size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={(e) => {
              e.stopPropagation();
              onSettingsOpen();
            }}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => {
              e.stopPropagation();
              onSignOut();
            }}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}