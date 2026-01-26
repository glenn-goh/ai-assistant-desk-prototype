import { User, Palette, Workflow } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your AI Assistant experience
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="personalisation" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personalisation" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="contextualisation" className="flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Contextualisation
            </TabsTrigger>
          </TabsList>

          {/* Theme Tab */}
          <TabsContent value="personalisation" className="space-y-6 mt-6">
            {/* Display & Interface */}
            <div className="space-y-4">
              <h3 className="font-semibold">Display & Interface</h3>
              
              <div className="space-y-2">
                <Label htmlFor="color-theme">Color Theme</Label>
                <Select value={colorTheme} onValueChange={(value) => onColorThemeChange(value as ColorTheme)}>
                  <SelectTrigger id="color-theme">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="singapore-red">Singapore Red</SelectItem>
                    <SelectItem value="pastel-pink">Pastel Pink</SelectItem>
                    <SelectItem value="army-green">Army Green</SelectItem>
                    <SelectItem value="rainbow">Rainbow</SelectItem>
                    <SelectItem value="national-day">National Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-style">Font Style</Label>
                <Select value={fontStyle} onValueChange={(value) => onFontStyleChange(value as FontStyle)}>
                  <SelectTrigger id="font-style">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="large">Large (For Seniors)</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language Preference</Label>
                <Select defaultValue="english">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="chinese">中文 (Chinese)</SelectItem>
                    <SelectItem value="malay">Bahasa Melayu (Malay)</SelectItem>
                    <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="display-density">Display Density</Label>
                <Select defaultValue="comfortable">
                  <SelectTrigger id="display-density">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Accessibility */}
            <div className="space-y-4">
              <h3 className="font-semibold">Accessibility</h3>
              
              <div className="flex items-center justify-between py-3">
                <div className="space-y-0.5">
                  <Label htmlFor="high-contrast" className="text-xs">High Contrast Mode</Label>
                  <p className="text-muted-foreground text-xs">Increase contrast for better visibility</p>
                </div>
                <Switch id="high-contrast" />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div className="space-y-0.5">
                  <Label htmlFor="screen-reader" className="text-xs">Screen Reader Support</Label>
                  <p className="text-muted-foreground text-xs">Optimize for screen readers</p>
                </div>
                <Switch id="screen-reader" />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div className="space-y-0.5">
                  <Label htmlFor="keyboard-shortcuts" className="text-xs">Keyboard Shortcuts</Label>
                  <p className="text-muted-foreground text-xs">Enable keyboard navigation</p>
                </div>
                <Switch id="keyboard-shortcuts" defaultChecked />
              </div>
            </div>
          </TabsContent>

          {/* Contextualisation Tab */}
          <TabsContent value="contextualisation" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="call-you">What should AI Assistant call you?</Label>
                <Input id="call-you" placeholder="e.g., Sarah, Mr. Tan, Dr. Lee" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agency">What is your agency?</Label>
                <Select defaultValue="">
                  <SelectTrigger id="agency">
                    <SelectValue placeholder="Select your agency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moe">Ministry of Education (MOE)</SelectItem>
                    <SelectItem value="mom">Ministry of Manpower (MOM)</SelectItem>
                    <SelectItem value="mti">Ministry of Trade and Industry (MTI)</SelectItem>
                    <SelectItem value="mha">Ministry of Home Affairs (MHA)</SelectItem>
                    <SelectItem value="mof">Ministry of Finance (MOF)</SelectItem>
                    <SelectItem value="moh">Ministry of Health (MOH)</SelectItem>
                    <SelectItem value="minlaw">Ministry of Law (MinLaw)</SelectItem>
                    <SelectItem value="mnd">Ministry of National Development (MND)</SelectItem>
                    <SelectItem value="mot">Ministry of Transport (MOT)</SelectItem>
                    <SelectItem value="pmo">Prime Minister's Office (PMO)</SelectItem>
                    <SelectItem value="msf">Ministry of Social and Family Development (MSF)</SelectItem>
                    <SelectItem value="mccy">Ministry of Culture, Community and Youth (MCCY)</SelectItem>
                    <SelectItem value="mewr">Ministry of Sustainability and the Environment (MSE)</SelectItem>
                    <SelectItem value="mindef">Ministry of Defence (MINDEF)</SelectItem>
                    <SelectItem value="mfa">Ministry of Foreign Affairs (MFA)</SelectItem>
                    <SelectItem value="mci">Ministry of Communications and Information (MCI)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-role">What is your job role?</Label>
                <Select 
                  value={userProfile.role} 
                  onValueChange={(value) => {
                    onUpdateProfile({
                      ...userProfile,
                      role: value
                    });
                  }}
                >
                  <SelectTrigger id="job-role">
                    <SelectValue placeholder="Select your job role" />
                  </SelectTrigger>
                  <SelectContent>
                    {JOB_ROLES.map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile">Describe your profile in a few words.</Label>
                <Textarea 
                  id="profile" 
                  placeholder="e.g., Experienced policy analyst focusing on education reforms with 8 years in public service..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="work-focus">What is your current work focus?</Label>
                <Textarea 
                  id="work-focus" 
                  placeholder="e.g., Developing digital transformation strategies for public healthcare services..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-3">
                <Label>What traits should AI Assistant have?</Label>
                <p className="text-sm text-muted-foreground">Select multiple traits</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-professional" />
                    <label
                      htmlFor="trait-professional"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Professional and formal
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-friendly" />
                    <label
                      htmlFor="trait-friendly"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Friendly and conversational
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-concise" />
                    <label
                      htmlFor="trait-concise"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Concise and to-the-point
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-detailed" />
                    <label
                      htmlFor="trait-detailed"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Detailed and thorough
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-creative" />
                    <label
                      htmlFor="trait-creative"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Creative and innovative
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-analytical" />
                    <label
                      htmlFor="trait-analytical"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Analytical and data-driven
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-empathetic" />
                    <label
                      htmlFor="trait-empathetic"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Empathetic and understanding
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="trait-proactive" />
                    <label
                      htmlFor="trait-proactive"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Proactive with suggestions
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="custom-instructions">Any custom instructions</Label>
                <Textarea 
                  id="custom-instructions" 
                  placeholder="e.g., Always provide sources, use Singapore English spelling, include relevant policy references..."
                  className="min-h-[100px]"
                  value={customInstructions}
                  onChange={(e) => setCustomInstructions(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button>Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}