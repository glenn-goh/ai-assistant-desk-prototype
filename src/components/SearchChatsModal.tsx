import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Modal, Stack, Text } from '@mantine/core';
import { SearchInput } from './shared';
import type { Chat } from '../App';
import classes from './SearchChatsModal.module.css';

// Demo simulations that can be searched
const demoSimulations = [
  { id: 'marketing-software-aor', title: 'Marketing Software AOR' },
  { id: 'hr-candidate-shortlisting', title: 'HR Candidate Shortlisting' },
  { id: 'pq-response-mnd-v2', title: 'PQ Response - MND Housing' },
  { id: 'feature-overview', title: 'Feature Overview' },
  { id: 'customer-support', title: 'Customer Support' },
  { id: 'feedback-collection', title: 'Feedback Collection' },
  { id: 'procurement-rfq', title: 'Procurement RFQ to AOR' },
];

interface SearchChatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  chats: Chat[];
  onSelectChat: (chatId: string) => void;
  onSelectSimulation: (simulationId: string) => void;
}

export function SearchChatsModal({
  open,
  onOpenChange,
  chats,
  onSelectChat,
  onSelectSimulation,
}: SearchChatsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSimulations = demoSimulations.filter(sim =>
    sim.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectChat = (chatId: string) => {
    onSelectChat(chatId);
    onOpenChange(false);
    setSearchQuery('');
  };

  const handleSelectSimulation = (simulationId: string) => {
    onSelectSimulation(simulationId);
    onOpenChange(false);
    setSearchQuery('');
  };

  return (
    <Modal opened={open} onClose={() => onOpenChange(false)} title="Search Chats" size="lg">
      <Stack gap="lg">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search chats..."
          autoFocus
        />

        <div className={classes.results}>
          {/* Simulations */}
          {filteredSimulations.map((simulation) => (
            <button
              key={simulation.id}
              onClick={() => handleSelectSimulation(simulation.id)}
              className={classes.resultItem}
            >
              <MessageSquare size={16} color="var(--mantine-color-gray-5)" style={{ flexShrink: 0 }} />
              <Text size="sm" c="gray.9" lineClamp={1}>{simulation.title}</Text>
            </button>
          ))}

          {/* Regular Chats */}
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleSelectChat(chat.id)}
              className={classes.resultItem}
            >
              <MessageSquare size={16} color="var(--mantine-color-gray-5)" style={{ flexShrink: 0 }} />
              <Text size="sm" c="gray.9" lineClamp={1}>{chat.title}</Text>
            </button>
          ))}

          {/* Empty State */}
          {filteredChats.length === 0 && filteredSimulations.length === 0 && searchQuery && (
            <Text size="sm" c="gray.5" ta="center" py="xl">
              No chats found matching "{searchQuery}"
            </Text>
          )}
        </div>
      </Stack>
    </Modal>
  );
}
