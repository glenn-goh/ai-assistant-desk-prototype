import { useState } from 'react';
import { Info } from 'lucide-react';
import { Modal, TextInput, Button, Stack, Group, Text } from '@mantine/core';
import { FormField } from './shared';
import classes from './CreateProjectDialog.module.css';

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateProject: (name: string) => void;
}

export function CreateProjectDialog({
  open,
  onOpenChange,
  onCreateProject,
}: CreateProjectDialogProps) {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectName.trim()) {
      onCreateProject(projectName.trim());
      setProjectName('');
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    setProjectName('');
    onOpenChange(false);
  };

  return (
    <Modal opened={open} onClose={handleClose} title="Create New Project" size="md">
      <form onSubmit={handleSubmit}>
        <Stack gap="lg">
          <FormField label="Project Name" htmlFor="project-name">
            <TextInput
              id="project-name"
              placeholder="Enter project name..."
              value={projectName}
              onChange={(e) => setProjectName(e.currentTarget.value)}
              autoFocus
            />
          </FormField>

          {/* Project scope info */}
          <div className={classes.infoBox}>
            <Info size={16} color="var(--mantine-color-gray-7)" style={{ marginTop: 2, flexShrink: 0 }} />
            <Text size="xs" c="gray.9">
              Chats within this project will only reference files, custom instructions,
              and memories from within this project by default. You can change this in
              project settings after creation.
            </Text>
          </div>
        </Stack>

        <Group justify="flex-end" mt="xl" gap="sm">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={!projectName.trim()}>
            Create Project
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
