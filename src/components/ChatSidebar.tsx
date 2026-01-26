import { Settings, Trash2, FolderOpen, Compass, Plus, MessageSquare, MoreHorizontal, Users, Info } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { Chat, View } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';

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

  return (
    <div className="flex flex-col h-screen w-[280px] border-r border-gray-300 bg-gray-100 flex-shrink-0">
      {/* App Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">
          AI Assistant Desk
        </h2>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="px-3 py-4">
            {mode === 'desk' ? (
              <>
                {/* New Chat Button */}
                <Button
                  className="w-full justify-start gap-2 mb-1 px-2 text-base"
                  variant="ghost"
                  onClick={onNewChat}
                >
                  <Plus className="w-5 h-5" />
                  <span>New Chat</span>
                </Button>

                {/* Chats Link */}
                <Button
                  onClick={() => onViewChange('chats')}
                  className={`w-full justify-start gap-2 mb-1 px-2 text-base ${activeView === 'chats' ? 'bg-gray-200' : ''}`}
                  variant="ghost"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chats</span>
                </Button>

                {/* Library Tab */}
                <Button
                  onClick={() => onViewChange('library')}
                  className={`w-full justify-start gap-2 mb-1 px-2 text-base ${activeView === 'library' ? 'bg-gray-200' : ''}`}
                  variant="ghost"
                >
                  <FolderOpen className="w-5 h-5" />
                  <span className="flex-1 text-left">Library</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 px-2 text-base ${activeView === 'explore' ? 'bg-gray-200' : ''}`}
                  onClick={onExploreClick}
                >
                  <Compass className="w-5 h-5" />
                  Explore Assistants
                </Button>

                {/* Chats Section Header */}
                <div className="flex items-center justify-between px-2 py-2 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Chats</span>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help text-gray-500 hover:text-gray-700">
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
                  {/* Demo Simulations */}
                  <button
                    onClick={() => onSelectSimulation?.('marketing-software-aor')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-marketing-software-aor' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    Marketing Software AOR
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('hr-candidate-shortlisting')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-hr-candidate-shortlisting' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    HR Candidate Shortlisting
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('pq-response-mnd')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-pq-response-mnd' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    PQ Response - MND Housing
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('feature-overview')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-feature-overview' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    Feature Overview
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('customer-support')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-customer-support' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    Customer Support
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('feedback-collection')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-feedback-collection' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    Feedback Collection
                  </button>

                  <button
                    onClick={() => onSelectSimulation?.('procurement-rfq')}
                    className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors text-base font-normal ${
                      activeChatId === 'sim-procurement-rfq' ? 'bg-gray-200' : 'hover:bg-gray-200'
                    }`}
                  >
                    Procurement RFQ to AOR
                  </button>

                  {/* Regular Chats */}
                  {chats.map(chat => {
                    const displayTitle = chat.title.length > 30 ? chat.title.substring(0, 30) + '...' : chat.title;

                    return (
                      <div
                        key={chat.id}
                        className={`group flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors text-base font-normal ${
                          chat.id === activeChatId
                            ? 'bg-gray-200'
                            : 'hover:bg-gray-200'
                        }`}
                        onClick={() => onSelectChat(chat.id)}
                        title={chat.title}
                      >
                        <div className="flex-1 truncate text-gray-900">
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
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteChat(chat.id);
                              }}
                              className="text-red-500 hover:bg-gray-100"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
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
                  className={`w-full justify-start gap-2 mb-1 px-2 text-base ${activeView === 'studio' ? 'bg-gray-700' : ''}`}
                  variant="outline"
                >
                  <Plus className="w-5 h-5" />
                  New Assistant
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 px-2 text-base"
                >
                  <Users className="w-5 h-5" />
                  My Assistants
                </Button>
              </>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* User Profile Section at Bottom */}
      <div className="p-3 border-t border-gray-300 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-900">
            <img
              src="https://images.unsplash.com/photo-1605706275526-ded7b77e5e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2FydG9vbiUyMGNhdHxlbnwxfHx8fDE3NjM1MzQ1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left overflow-hidden">
            <div className="text-sm font-medium text-gray-900">{userProfile.name}</div>
            <div className="text-xs text-gray-500">{userProfile.role}</div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
              <Settings size={18} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white border-2 border-gray-900 rounded-lg">
            <DropdownMenuItem onClick={(e) => {
              e.stopPropagation();
              onSettingsOpen();
            }} className="hover:bg-gray-100">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => {
              e.stopPropagation();
              onSignOut();
            }} className="hover:bg-gray-100">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
