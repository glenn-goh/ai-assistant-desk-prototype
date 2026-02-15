import { useState } from 'react';
import { MessageSquare, MoreHorizontal, Trash2 } from 'lucide-react';
import { Title, Text, Box, Menu, ActionIcon } from '@mantine/core';
import { ListItemRow, SearchInput, EmptyState } from './shared';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import type { Chat } from '../App';
import { getFontClasses } from '../lib/theme-utils';
import cls from './ChatsPage.module.css';

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
    <Box className={cls.page} style={font.base}>
      {/* Header */}
      <Box className={cls.header}>
        <Title order={3} size="h4">Chats</Title>
      </Box>

      {/* Content */}
      <Box className={cls.scrollArea}>
        <Box className={cls.content}>
          {/* Search Bar */}
          <Box className={cls.searchWrapper}>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search chats..."
            />
          </Box>

          {/* Chat List */}
          <Box className={cls.chatList}>
            {/* Demo Simulations */}
            {filteredSimulations.map((simulation) => (
              <ListItemRow
                key={simulation.id}
                icon={MessageSquare}
                title={simulation.title}
                subtitle={simulation.preview}
                onClick={() => onSelectSimulation(simulation.id)}
                rightContent={<Text size="xs" c="gray.4" className={cls.dateLabel}>Demo</Text>}
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
                className={cls.rowHover}
                rightContent={
                  <Box className={cls.rightContent}>
                    <Text size="xs" c="gray.4" className={cls.dateLabel}>
                      {formatDate(chat.createdAt)}
                    </Text>
                    <Menu position="bottom-end" withinPortal>
                      <Menu.Target>
                        <ActionIcon
                          variant="subtle"
                          color="gray"
                          size="sm"
                          className={cls.menuButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal size={16} />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item
                          color="red"
                          leftSection={<Trash2 size={16} />}
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteChat(chat.id);
                          }}
                        >
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Box>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
