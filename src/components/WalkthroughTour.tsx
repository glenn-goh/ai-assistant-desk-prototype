import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@mantine/core';
import classes from './WalkthroughTour.module.css';

interface TourStep {
  target: string; // CSS selector for the element to highlight
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    target: '[data-tour="new-chat"]',
    title: 'New Chat',
    content: 'Click here to start a fresh conversation with your personal assistant.',
    position: 'right',
  },
  {
    target: '[data-tour="new-project"]',
    title: 'Organize with Projects',
    content: 'Create projects to organize your chats by topic or work stream. Drag and drop chats into projects to keep them organized.',
    position: 'right',
  },
  {
    target: '[data-tour="explore-assistants"]',
    title: 'Explore Assistants',
    content: 'Browse and discover specialized assistants tailored for specific tasks like PQ responses, procurement, and HR recruitment.',
    position: 'right',
  },
  {
    target: '[data-tour="recent-chats"]',
    title: 'Recent Chats',
    content: 'Quickly access your chat history and continue where you left off. Your chats are automatically organized here.',
    position: 'right',
  },
  {
    target: '[data-tour="chat-interface"]',
    title: 'Your Personal AI Assistant',
    content: 'This is where you interact with your personal assistant — ask questions, upload files, and use specialized tools.',
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
          top = rect.top - 250;
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
          <div className={classes.clickOverlay} onClick={handleClose} />

          {/* Spotlight effect - creates overlay with cutout */}
          <div
            className={classes.spotlight}
            style={{
              top: targetElement.getBoundingClientRect().top - 4,
              left: targetElement.getBoundingClientRect().left - 4,
              width: targetElement.getBoundingClientRect().width + 8,
              height: targetElement.getBoundingClientRect().height + 8,
            }}
          />
        </>
      )}

      {/* Tooltip */}
      <div
        className={classes.tooltip}
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
        }}
      >
        <div className={classes.tooltipHeader}>
          <div className={classes.tooltipHeaderContent}>
            <div className={classes.stepIndicator}>
              Step {currentStep + 1} of {tourSteps.length}
            </div>
            <h3 className={classes.tooltipTitle}>{step.title}</h3>
          </div>
          <button onClick={handleClose} className={classes.closeButton}>
            <X size={16} color="var(--mantine-color-gray-5)" />
          </button>
        </div>

        <p className={classes.tooltipBody}>{step.content}</p>

        <div className={classes.tooltipActions}>
          {!isFirstStep && (
            <Button
              variant="subtle"
              color="gray"
              size="xs"
              onClick={handlePrev}
              leftSection={<ChevronLeft size={16} />}
            >
              Previous
            </Button>
          )}

          <Button
            size="xs"
            onClick={handleNext}
            rightSection={!isLastStep ? <ChevronRight size={16} /> : undefined}
          >
            {isLastStep ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </>
  );
}
