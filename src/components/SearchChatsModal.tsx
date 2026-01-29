import { useState } from 'react';
import { Search, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import type { Chat } from '../App';

// Demo simulations that can be searched
const demoSimulations = [
  { id: 'marketing-software-aor', title: 'Marketing Software AOR' },
  { id: 'hr-candidate-shortlisting', title: 'HR Candidate Shortlisting' },
  { id: 'pq-response-mnd', title: 'PQ Response - MND Housing' },
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-2 border-gray-900">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Search Chats</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-300"
              autoFocus
            />
          </div>

          {/* Results */}
          <div className="max-h-[300px] overflow-y-auto space-y-1">
            {/* Simulations */}
            {filteredSimulations.map((simulation) => (
              <button
                key={simulation.id}
                onClick={() => handleSelectSimulation(simulation.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-900 truncate">{simulation.title}</span>
              </button>
            ))}

            {/* Regular Chats */}
            {filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => handleSelectChat(chat.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-900 truncate">{chat.title}</span>
              </button>
            ))}

            {/* Empty State */}
            {filteredChats.length === 0 && filteredSimulations.length === 0 && searchQuery && (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">No chats found matching "{searchQuery}"</p>
              </div>
            )}

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
