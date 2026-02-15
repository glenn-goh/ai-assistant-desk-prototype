import { Heart, ExternalLink, MoreHorizontal, Share2 } from 'lucide-react';
import { Card, Button, Tooltip, Menu } from '@mantine/core';
import { IconContainer, ClassificationBadge } from './shared';
import type { Assistant } from '../data/assistants';
import classes from './AssistantCard.module.css';

interface AssistantCardProps {
  assistant: Assistant;
  isFavorited: boolean;
  onToggleFavorite: (assistantId: string) => void;
  onStartChat: (assistantName: string, assistantType: string) => void;
  viewOnly?: boolean;
  isInTools?: boolean;
  onToggleTools?: (assistantId: string) => void;
}

export function AssistantCard({ assistant, isFavorited, onToggleFavorite, onStartChat, viewOnly, isInTools, onToggleTools }: AssistantCardProps) {
  const IconComponent = assistant.icon;
  const hasToolsButton = !!onToggleTools;

  return (
    <Card
      key={assistant.id}
      className={`${classes.card} ${hasToolsButton ? classes.cardWithTools : ''}`}
      padding="xl"
    >
      <div className={hasToolsButton ? classes.contentWithTools : undefined}>
        {/* Top Right: Classification Pill, Heart Icon, and Ellipsis Menu */}
        <div className={classes.topRight}>
          <ClassificationBadge classification={assistant.classification} />

          <Tooltip label={isFavorited ? 'Unfavourite' : 'Favourite'} openDelay={300}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(assistant.id);
              }}
              className={classes.iconButton}
            >
              <Heart
                size={20}
                fill={isFavorited ? 'var(--mantine-color-gray-9)' : 'none'}
                color={isFavorited ? 'var(--mantine-color-gray-9)' : 'var(--mantine-color-gray-4)'}
              />
            </button>
          </Tooltip>

          <Menu position="bottom-end">
            <Menu.Target>
              <button
                onClick={(e) => e.stopPropagation()}
                className={classes.iconButton}
              >
                <MoreHorizontal size={20} color="var(--mantine-color-gray-4)" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                disabled
                onClick={(e) => e.stopPropagation()}
                leftSection={<Share2 size={16} />}
                rightSection={<span style={{ fontSize: 'var(--mantine-font-size-xs)', color: 'var(--mantine-color-gray-4)' }}>Coming soon</span>}
              >
                Share
              </Menu.Item>
              {assistant.canEdit && (
                <Menu.Item
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  leftSection={<ExternalLink size={16} />}
                >
                  Edit on Studio
                </Menu.Item>
              )}
            </Menu.Dropdown>
          </Menu>
        </div>

        {/* Icon Container */}
        <IconContainer icon={IconComponent} size="lg" className={undefined} />

        {/* Content */}
        <div
          className={hasToolsButton ? classes.bodyWithTools : classes.body}
          onClick={viewOnly ? undefined : () => onStartChat(assistant.name, assistant.assistantType)}
          style={{ marginTop: 'var(--mantine-spacing-lg)' }}
        >
          <h3 className={classes.title}>{assistant.name}</h3>
          <p className={classes.description}>{assistant.description}</p>
        </div>

        {/* Add to tools button */}
        {onToggleTools && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onToggleTools(assistant.id);
            }}
            variant={isInTools ? 'filled' : 'outline'}
            color={isInTools ? 'gray.9' : 'gray'}
            size="xs"
            mt="lg"
          >
            {isInTools ? 'Remove from tools' : 'Add to tools'}
          </Button>
        )}
      </div>
    </Card>
  );
}
