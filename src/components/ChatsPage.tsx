import { useState } from 'react';
import { Search, MessageSquare, MoreHorizontal, Trash2 } from 'lucide-react';
import { Input } from './ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import type { Chat } from '../App';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';

interface ChatsPageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  chats: Chat[];
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onSelectSimulation: (simulationId: string) => void;
}

// Demo simulations that appear in the chat list
const demoSimulations = [
  { id: 'marketing-software-aor', title: 'Marketing Software AOR', preview: 'Draft an approval paper for procurement...' },
  { id: 'hr-candidate-shortlisting', title: 'HR Candidate Shortlisting', preview: 'Help me shortlist candidates from Workday...' },
  { id: 'pq-response-mnd', title: 'PQ Response - MND Housing', preview: 'Draft a parliamentary question response...' },
  { id: 'feature-overview', title: 'Feature Overview', preview: 'Show me what this AI assistant can do...' },
  { id: 'customer-support', title: 'Customer Support', preview: 'Help with customer inquiries...' },
  { id: 'feedback-collection', title: 'Feedback Collection', preview: 'Collect and analyze feedback...' },
  { id: 'procurement-rfq', title: 'Procurement RFQ to AOR', preview: 'Help with procurement workflow...' },
];

export function ChatsPage({
  colorTheme,
  fontStyle,
  chats,
  onSelectChat,
  onDeleteChat,
  onSelectSimulation,
}: ChatsPageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chats based on search query
  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter simulations based on search query
  const filteredSimulations = demoSimulations.filter(sim =>
    sim.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className={`flex-1 flex flex-col bg-gray-100 ${font.base}`}>
      {/* Header */}
      <div className="flex items-center gap-2 p-4 bg-gray-100">
        <h1 className="font-semibold text-gray-900" style={{ fontSize: '18px' }}>Chats</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 text-sm py-6 rounded-xl ${theme.inputBorder} ${font.input} bg-white shadow-sm`}
            />
          </div>

          {/* Chat List */}
          <div className="space-y-2">
            {/* Demo Simulations */}
            {filteredSimulations.map((simulation) => (
              <div
                key={simulation.id}
                onClick={() => onSelectSimulation(simulation.id)}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-gray-900 truncate">
                    {simulation.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {simulation.preview}
                  </p>
                </div>
                <div className="text-xs text-gray-400 flex-shrink-0">
                  Demo
                </div>
              </div>
            ))}

            {/* Regular Chats */}
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-gray-900 truncate">
                    {chat.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.messages.length > 0
                      ? chat.messages[chat.messages.length - 1].content.slice(0, 60) + '...'
                      : 'No messages yet'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 flex-shrink-0">
                    {formatDate(chat.createdAt)}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0"
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
              </div>
            ))}

            {/* Empty State */}
            {filteredChats.length === 0 && filteredSimulations.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No chats found</h3>
                <p className="text-sm text-gray-500">
                  {searchQuery ? 'Try a different search term' : 'Start a new chat to get started'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
