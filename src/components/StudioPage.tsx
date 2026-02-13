import { Plus, Bot, Settings as SettingsIcon, Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FormField } from './shared';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';

interface StudioPageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function StudioPage({ colorTheme, fontStyle }: StudioPageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  return (
    <div className={`flex-1 flex flex-col ${theme.mainBg} ${font.base}`}>
      {/* Header */}
      <div className={`flex items-center gap-2 p-4 border-b ${theme.header}`}>
        <h1 className={theme.title + ' ' + font.title}>Create Your Assistant</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${theme.userAvatar}`}>
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className={`text-xs ${theme.chatItemText} ${font.title}`}>Assistant Studio</h2>
                <p className={`${theme.navItem} opacity-70 text-xs`}>
                  Design and configure your custom AI assistant
                </p>
              </div>
            </div>
          </div>

          {/* Create Assistant Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xs">Create New Assistant</CardTitle>
              <CardDescription className="text-xs">
                Give your assistant a name and describe what it does
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Assistant Name */}
              <FormField label="Assistant Name" htmlFor="assistant-name" labelClassName="text-xs">
                <Input
                  id="assistant-name"
                  placeholder="e.g., Marketing Expert, Code Reviewer, Transcribe Workspace..."
                  className={`text-xs ${theme.inputBorder} ${font.input}`}
                />
              </FormField>

              {/* Description */}
              <FormField label="Description" htmlFor="description" labelClassName="text-xs">
                <Textarea
                  id="description"
                  placeholder="Describe what your assistant does and how it helps users..."
                  className={`${theme.inputBorder} ${font.input} min-h-[120px] text-xs`}
                />
              </FormField>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className={`${theme.sendButton} text-xs`}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Assistant
                </Button>
                <Button variant="outline" className="text-xs">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xs">
                <Bot className="w-5 h-5" />
                Tips for Creating Great Assistants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className={`${theme.navItem} text-xs`}>
                <strong>Be Specific:</strong> Give your assistant a clear, descriptive name
              </div>
              <div className={`${theme.navItem} text-xs`}>
                <strong>Clear Description:</strong> Explain what your assistant does and who it's for
              </div>
              <div className={`${theme.navItem} text-xs`}>
                <strong>Focus on Purpose:</strong> Think about the specific tasks your assistant will help with
              </div>
              <div className={`${theme.navItem} text-xs`}>
                <strong>Keep it Simple:</strong> Start with a clear concept, you can always refine it later
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}