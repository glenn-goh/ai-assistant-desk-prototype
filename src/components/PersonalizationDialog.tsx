import { User, Brain, Bell, ArrowLeft, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { FormField } from './shared';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import type { UserProfile } from '../App';
import { useState } from 'react';

export type ColorTheme = 'dark' | 'light' | 'minimal' | 'singapore-red' | 'pastel-pink' | 'army-green' | 'rainbow' | 'national-day';
export type FontStyle = 'modern' | 'large' | 'compact';

const JOB_ROLES = [
  "Marketing Officer",
  "HR Officer",
  "Product Manager",
  "Software Engineer",
  "Data Scientist",
  "UX Designer",
  "Policy Officer",
  "Solution Architect",
  "DevOps Engineer",
  "Cyber Security Specialist",
];

interface PersonalizationDialogProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onColorThemeChange: (theme: ColorTheme) => void;
  onFontStyleChange: (style: FontStyle) => void;
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PersonalizationDialog({
  colorTheme,
  fontStyle,
  onColorThemeChange,
  onFontStyleChange,
  userProfile,
  onUpdateProfile,
  open,
  onOpenChange,
}: PersonalizationDialogProps) {
  const [customInstructions, setCustomInstructions] = useState(userProfile.customInstructions || '');
  const [aiStyle, setAiStyle] = useState(userProfile.aiStyle || 'Concise');
  const [otherAiStyle, setOtherAiStyle] = useState('');
  const [callMeName, setCallMeName] = useState(userProfile.name || '');
  const [jobRole, setJobRole] = useState(userProfile.role || '');
  const [otherJobRole, setOtherJobRole] = useState('');
  const [workActivities, setWorkActivities] = useState<string[]>(userProfile.workActivities || []);
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [showMemoriesModal, setShowMemoriesModal] = useState(false);

  return (
    <>
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) {
        setShowMemoriesModal(false);
      }
      onOpenChange?.(isOpen);
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {showMemoriesModal ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMemoriesModal(false)}
                  className="p-1 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <DialogTitle>Saved Memories</DialogTitle>
              </div>
              <DialogDescription>
                Things AI Assistant has learned about you
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mt-4">
              {/* Sample memories */}
              {[
                { id: '1', text: 'Works at GovTech as a Marketing Officer', date: 'Jan 15, 2026' },
                { id: '2', text: 'Prefers concise, bullet-point responses', date: 'Jan 18, 2026' },
                { id: '3', text: 'Often works on marketing campaigns and content', date: 'Jan 20, 2026' },
              ].map((memory) => (
                <div key={memory.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{memory.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{memory.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                      <DropdownMenuItem
                        onClick={() => {
                          // Delete memory logic would go here
                        }}
                        className="text-red-500 hover:bg-gray-100"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove memory
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Customize your AI Assistant experience
              </DialogDescription>
            </DialogHeader>

        <Tabs defaultValue="accounts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="accounts" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Accounts
            </TabsTrigger>
            <TabsTrigger value="memories" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Personalisation
            </TabsTrigger>
          </TabsList>

          {/* Accounts Tab */}
          <TabsContent value="accounts" className="space-y-6 mt-6">
            {/* Profile Information */}
            <div className="space-y-4">
              <h3 className="font-semibold">Profile Information</h3>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{userProfile.name}</h4>
                  <p className="text-sm text-gray-500">{userProfile.email}</p>
                </div>
              </div>

              <FormField label="Name" htmlFor="name">
                <Input
                  id="name"
                  value={callMeName}
                  onChange={(e) => setCallMeName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-white"
                />
              </FormField>

              <FormField label="Email" htmlFor="email">
                <Input id="email" value={userProfile.email} disabled className="bg-gray-100 cursor-not-allowed" />
              </FormField>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => {
                // Save changes logic - update name
                onUpdateProfile({
                  ...userProfile,
                  name: callMeName.trim() || userProfile.name,
                });
                onOpenChange?.(false);
              }}>Save Changes</Button>
            </div>
          </TabsContent>

          {/* Personalisation Tab */}
          <TabsContent value="memories" className="space-y-6 mt-6">
            {/* AI Personalisation Header */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI personalisation</h3>
            </div>

            {/* Preferred AI Style and Tone */}
            <FormField
              label="Preferred AI style and tone"
              htmlFor="ai-style"
              helperText="Set the style and tone of how your AI Assistant responds to you."
            >
              <Select value={aiStyle} onValueChange={setAiStyle}>
                <SelectTrigger id="ai-style">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Concise">Concise</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Creative">Creative</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
              {aiStyle === 'Others' && (
                <Input
                  placeholder="Describe your preferred style..."
                  value={otherAiStyle}
                  onChange={(e) => setOtherAiStyle(e.target.value)}
                  className="mt-2"
                />
              )}
            </FormField>

            {/* Custom Instructions */}
            <FormField label="Custom Instructions" htmlFor="custom-instructions">
              <Textarea
                id="custom-instructions"
                placeholder="e.g., Always provide sources, use Singapore English spelling, include relevant policy references..."
                className="min-h-[100px]"
                value={customInstructions}
                onChange={(e) => setCustomInstructions(e.target.value)}
              />
            </FormField>

            <Separator />

            {/* Memories Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Memories</h3>
                <Button variant="outline" size="sm" onClick={() => setShowMemoriesModal(true)}>
                  Manage
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Reference saved memories</p>
                  <p className="text-xs text-gray-500">AI Assistant save and use memories when responding.</p>
                </div>
                <Switch checked={memoryEnabled} onCheckedChange={setMemoryEnabled} />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => {
                // Save personalisation changes
                onUpdateProfile({
                  ...userProfile,
                  customInstructions: customInstructions,
                  name: callMeName,
                  aiStyle: aiStyle === 'Others' ? otherAiStyle : aiStyle,
                  workActivities: workActivities,
                });
                onOpenChange?.(false);
              }}>Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
          </>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
}