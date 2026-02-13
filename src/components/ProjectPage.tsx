import { useState } from 'react';
import { ArrowLeft, Folder as ProjectIcon, MessageSquare, MoreHorizontal, Trash2, SquarePen, Settings, Upload, FileText, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ListItemRow, EmptyState } from './shared';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Separator } from './ui/separator';
import type { Project } from '../types/project';
import type { Chat } from '../App';

interface ProjectPageProps {
  project: Project;
  chats: Chat[];
  onBack: () => void;
  onSelectChat: (chatId: string) => void;
  onDeleteProject: (projectId: string) => void;
  onRemoveChatFromProject: (projectId: string, chatId: string) => void;
  onStartNewChatInProject?: (projectId: string) => void;
  onUpdateProject?: (projectId: string, updates: Partial<Project>) => void;
}

export function ProjectPage({
  project,
  chats,
  onBack,
  onSelectChat,
  onDeleteProject,
  onRemoveChatFromProject,
  onStartNewChatInProject,
  onUpdateProject,
}: ProjectPageProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editInstructions, setEditInstructions] = useState(project.customInstructions || '');
  const [memoriesScope, setMemoriesScope] = useState<'project-only' | 'include-external'>(project.memoriesScope);

  const projectChats = chats.filter(chat => project.chatIds.includes(chat.id));

  const handleSaveSettings = () => {
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        name: editName.trim() || project.name,
        customInstructions: editInstructions.trim(),
        memoriesScope,
      });
    }
    setSettingsOpen(false);
  };

  const handleFileUpload = () => {
    // Simulated file upload - in real implementation would open file picker
    const mockFile = {
      id: Date.now().toString(),
      name: 'document.pdf',
      size: 1024 * 100,
      uploadedAt: new Date(),
    };
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        files: [...(project.files || []), mockFile],
      });
    }
  };

  const handleRemoveFile = (fileId: string) => {
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        files: (project.files || []).filter(f => f.id !== fileId),
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
        <button
          onClick={onBack}
          className="p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 flex-1">
          <ProjectIcon className="w-5 h-5 text-gray-600" />
          <h1 className="font-semibold text-gray-900" style={{ fontSize: '18px' }}>
            {project.name}
          </h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onStartNewChatInProject?.(project.id)}
          className="gap-2"
        >
          <SquarePen className="w-4 h-4" />
          New Chat
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
            <DropdownMenuItem
              onClick={() => setSettingsOpen(true)}
              className="hover:bg-gray-100"
            >
              <Settings className="w-4 h-4 mr-1" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDeleteProject(project.id)}
              className="text-red-500 hover:bg-gray-100"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content - Two Column Layout */}
      <div className="flex-1 overflow-auto flex">
        {/* Left Column - Chats */}
        <div className="flex-1 px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Project isolation info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                Chats within this project will only reference files, custom instructions, and memories from within this project.
              </p>
            </div>

            {projectChats.length > 0 ? (
              projectChats.map((chat) => (
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
                          onRemoveChatFromProject(project.id, chat.id);
                        }}
                        className="hover:bg-gray-100"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove from project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              />
            ))
          ) : (
            <EmptyState
              icon={ProjectIcon}
              title="This project is empty"
              description="Start a new chat or drag existing chats here to organize them"
              action={
                <Button onClick={() => onStartNewChatInProject?.(project.id)} className="gap-2">
                  <SquarePen className="w-4 h-4" />
                  Start New Chat
                </Button>
              }
            />
          )}
          </div>
        </div>

        {/* Right Column - Custom Instructions and Files */}
        <div className="w-80 border-l border-gray-200 bg-white px-4 py-8 space-y-6 overflow-y-auto">
          {/* Custom Instructions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Custom instructions</h3>
              <button
                onClick={() => setSettingsOpen(true)}
                className="text-xs text-gray-600 hover:text-gray-900 underline"
              >
                Edit
              </button>
            </div>
            {project.customInstructions ? (
              <button
                onClick={() => setSettingsOpen(true)}
                className="w-full text-left text-sm text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="line-clamp-3">
                  {project.customInstructions}
                </div>
              </button>
            ) : (
              <button
                onClick={() => setSettingsOpen(true)}
                className="w-full text-left text-sm text-gray-500 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                No custom instructions set. Click to add.
              </button>
            )}
          </div>

          <Separator />

          {/* Files */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">Files</h3>
            <div className="space-y-2">
              {(project.files || []).length > 0 ? (
                (project.files || []).map(file => (
                  <div key={file.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg group">
                    <FileText className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 flex-1 truncate">{file.name}</span>
                    <button
                      onClick={() => handleRemoveFile(file.id)}
                      className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No files uploaded</p>
              )}
              <Button variant="outline" size="sm" className="w-full gap-2 mt-2" onClick={handleFileUpload}>
                <Upload className="w-4 h-4" />
                Upload File
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-lg bg-white border-2 border-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Project Settings</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Project Name */}
            <div className="space-y-2">
              <Label htmlFor="project-name" className="text-gray-700">Project Name</Label>
              <Input
                id="project-name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="bg-white border-gray-300"
              />
            </div>

            {/* Custom Instructions */}
            <div className="space-y-2">
              <Label htmlFor="custom-instructions" className="text-gray-700">Custom Instructions</Label>
              <Textarea
                id="custom-instructions"
                placeholder="Add custom instructions for chats in this project..."
                value={editInstructions}
                onChange={(e) => setEditInstructions(e.target.value)}
                className="bg-white border-gray-300 min-h-[100px]"
              />
              <p className="text-xs text-gray-500">
                These instructions will apply to all chats within this project.
              </p>
            </div>

            {/* Files */}
            <div className="space-y-2">
              <Label className="text-gray-700">Files</Label>
              <div className="border border-gray-200 rounded-lg p-3 space-y-2">
                {(project.files || []).length > 0 ? (
                  (project.files || []).map(file => (
                    <div key={file.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700 flex-1 truncate">{file.name}</span>
                      <button
                        onClick={() => handleRemoveFile(file.id)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <X className="w-3 h-3 text-gray-500" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-2">No files uploaded</p>
                )}
                <Button variant="outline" size="sm" className="w-full gap-2" onClick={handleFileUpload}>
                  <Upload className="w-4 h-4" />
                  Upload File
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Files uploaded here will be referenced by chats in this project.
              </p>
            </div>

            {/* Memories Scope */}
            <div className="space-y-2">
              <Label className="text-gray-700">Memories Scope</Label>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="memories-scope"
                    checked={memoriesScope === 'project-only'}
                    onChange={() => setMemoriesScope('project-only')}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Project only</div>
                    <div className="text-xs text-gray-500">
                      Chats will only reference files and memories from within this project
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="memories-scope"
                    checked={memoriesScope === 'include-external'}
                    onChange={() => setMemoriesScope('include-external')}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Include external</div>
                    <div className="text-xs text-gray-500">
                      Chats can also reference memories and files from outside this project
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSettings}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
