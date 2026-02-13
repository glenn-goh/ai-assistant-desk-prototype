import { useState } from 'react';
import { MessageSquare, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { ListItemRow, SearchInput, EmptyState } from './shared';
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
  { id: 'pq-response-mnd-v2', title: 'PQ Response - MND Housing', preview: 'Draft a parliamentary question response...' },
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
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search chats..."
            className="max-w-2xl mx-auto w-full"
            inputClassName={`text-sm py-6 rounded-xl ${theme.inputBorder} ${font.input} shadow-sm`}
          />

          {/* Chat List */}
          <div className="space-y-2">
            {/* Demo Simulations */}
            {filteredSimulations.map((simulation) => (
              <ListItemRow
                key={simulation.id}
                icon={MessageSquare}
                title={simulation.title}
                subtitle={simulation.preview}
                onClick={() => onSelectSimulation(simulation.id)}
                rightContent={<div className="text-xs text-gray-400 flex-shrink-0">Demo</div>}
              />
            ))}

            {/* Regular Chats */}
            {filteredChats.map((chat) => (
              <ListItemRow
                key={chat.id}
                icon={MessageSquare}
                title={chat.title}
                subtitle={
                  chat.messages.length > 0
                    ? chat.messages[chat.messages.length - 1].content.slice(0, 60) + '...'
                    : 'No messages yet'
                }
                onClick={() => onSelectChat(chat.id)}
                className="group"
                rightContent={
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
                }
              />
            ))}

            {/* Empty State */}
            {filteredChats.length === 0 && filteredSimulations.length === 0 && (
              <EmptyState
                icon={MessageSquare}
                title="No chats found"
                description={searchQuery ? 'Try a different search term' : 'Start a new chat to get started'}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
