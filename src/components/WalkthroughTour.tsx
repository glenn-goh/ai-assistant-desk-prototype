import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

interface TourStep {
  target: string; // CSS selector for the element to highlight
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    target: '[data-tour="new-chat"]',
    title: 'Start a New Chat',
    content: 'Click here to start a fresh conversation with your personal assistant.',
    position: 'right',
  },
  {
    target: '[data-tour="custom-assistants"]',
    title: 'Custom Assistants',
    content: 'Access specialised assistants tailored for specific tasks like PQ responses, procurement, and HR recruitment.',
    position: 'right',
  },
  {
    target: '[data-tour="folders"]',
    title: 'Organize with Folders',
    content: 'Create folders to organize your chats by project or topic.',
    position: 'right',
  },
  {
    target: '[data-tour="recent-chats"]',
    title: 'Recent Chats',
    content: 'Quickly access your chat history and continue where you left off.',
    position: 'right',
  },
  {
    target: '[data-tour="chat-interface"]',
    title: 'Chat Interface',
    content: 'This is where you interact with your personal assistant — ask questions, upload files, and use tools.',
    position: 'left',
  },
  {
    target: '[data-tour="settings"]',
    title: 'Access Walkthrough Anytime',
    content: 'You can access this walkthrough tour anytime by clicking the settings icon and selecting "Walkthrough Tour".',
    position: 'top',
  },
];

interface WalkthroughTourProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalkthroughTour({ isOpen, onClose }: WalkthroughTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleClose = () => {
    localStorage.setItem('hasSeenWalkthrough', 'true');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      return;
    }

    const step = tourSteps[currentStep];
    const element = document.querySelector(step.target) as HTMLElement;

    if (element) {
      setTargetElement(element);

      // Calculate tooltip position
      const rect = element.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (step.position) {
        case 'right':
          top = rect.top + rect.height / 2 - 80;
          left = rect.right + 20;
          break;
        case 'left':
          top = rect.top + rect.height / 2 - 80;
          left = rect.left - 320 - 20;
          break;
        case 'top':
          top = rect.top - 250; // Increased offset to ensure tooltip is above
          left = rect.left + rect.width / 2 - 160;
          break;
        case 'bottom':
          top = rect.bottom + 20;
          left = rect.left + rect.width / 2 - 160;
          break;
      }

      setTooltipPosition({ top, left });

      // Scroll element into view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep, isOpen]);

  if (!isOpen) return null;

  const step = tourSteps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tourSteps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      handleClose();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {/* Highlight for target element with cutout overlay effect */}
      {targetElement && (
        <>
          {/* Click handler overlay */}
          <div className="fixed inset-0 z-[9998]" onClick={handleClose} />

          {/* Spotlight effect - creates overlay with cutout */}
          <div
            className="fixed z-[9999] pointer-events-none"
            style={{
              top: targetElement.getBoundingClientRect().top - 4,
              left: targetElement.getBoundingClientRect().left - 4,
              width: targetElement.getBoundingClientRect().width + 8,
              height: targetElement.getBoundingClientRect().height + 8,
              border: '3px solid white',
              borderRadius: '8px',
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
            }}
          />
        </>
      )}

      {/* Tooltip */}
      <div
        className="fixed z-[10000] bg-white border-2 border-gray-900 rounded-lg shadow-xl p-6 w-80"
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">
              Step {currentStep + 1} of {tourSteps.length}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-6">{step.content}</p>

        <div className="flex items-center justify-end gap-2">
          {!isFirstStep && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
          )}

          <Button
            size="sm"
            onClick={handleNext}
            className="bg-gray-900 hover:bg-gray-800 text-white gap-1"
          >
            {isLastStep ? 'Finish' : 'Next'}
            {!isLastStep && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </>
  );
}
