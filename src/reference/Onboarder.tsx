import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, Folder, Cloud, Database, HardDrive, Trash2, Check, ChevronsUpDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from './ui/utils';

interface DataSource {
  id: string;
  type: 'sharepoint' | 'local' | 'aws' | 'gdrive';
  path: string;
  enabled: boolean;
}

interface OnboardingPageProps {
  onComplete: () => void;
}

const JOB_ROLES = [
  "Product Manager",
  "Software Engineer",
  "Data Scientist",
  "UX Designer",
  "Policy Officer",
  "Solution Architect",
  "DevOps Engineer",
  "Cyber Security Specialist",
  "Business Analyst",
  "Project Manager",
  "Cloud Engineer",
  "QA Engineer"
];

const STEPS = [
  { number: 1, label: 'Profile & Work' },
  { number: 2, label: 'Communication Style' },
  { number: 3, label: 'Data Sources' }
];

export function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // User Details
  const [name, setName] = useState('Jayden Tan');
  const [email] = useState('user@tech.gov.sg');
  const [agency] = useState('GovTech');

  // Work Context
  const [jobRole, setJobRole] = useState('Product Manager');
  const [openJobRole, setOpenJobRole] = useState(false);
  const [profileDescription, setProfileDescription] = useState('');
  const [workFocus, setWorkFocus] = useState('');

  // Communication Style
  const [customInstructions, setCustomInstructions] = useState('');
  const [traits, setTraits] = useState<string[]>([]);

  // Data Sources
  const [dataSources, setDataSources] = useState<DataSource[]>([
    { id: '1', type: 'sharepoint', path: '', enabled: true }
  ]);

  const handleTraitToggle = (trait: string) => {
    setTraits(prev =>
      prev.includes(trait)
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  const handleAddDataSource = () => {
    setDataSources([
      ...dataSources,
      { id: Date.now().toString(), type: 'sharepoint', path: '', enabled: true }
    ]);
  };

  const handleRemoveDataSource = (id: string) => {
    if (dataSources.length > 1) {
      setDataSources(dataSources.filter(ds => ds.id !== id));
    }
  };

  const handleUpdateDataSource = (id: string, field: 'type' | 'path', value: string) => {
    setDataSources(dataSources.map(ds =>
      ds.id === id ? { ...ds, [field]: value } : ds
    ));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'sharepoint': return <Database className="w-5 h-5" />;
      case 'local': return <Folder className="w-5 h-5" />;
      case 'aws': return <Cloud className="w-5 h-5" />;
      case 'gdrive': return <HardDrive className="w-5 h-5" />;
      default: return <Folder className="w-5 h-5" />;
    }
  };

  const progress = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-3xl shadow-2xl border-slate-200 dark:border-slate-800">
        {/* Progress Tracker */}
        <div className="p-8 pb-6 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {STEPS.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm mb-2 bg-white dark:bg-slate-900 transition-all",
                      step.number < currentStep
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : step.number === currentStep
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-slate-300 dark:border-slate-600 text-slate-400"
                    )}
                  >
                    {step.number < currentStep ? <Check className="w-5 h-5" /> : step.number}
                  </div>
                  <div
                    className={cn(
                      "text-xs font-medium text-center",
                      step.number === currentStep
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500"
                    )}
                  >
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <CardContent className="p-8">
          {/* Step 1: Profile & Work Context */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Your Profile & Work Context
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Tell us about yourself and your work to help us personalize your AI experience.
                </p>
              </div>


              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Your Profile
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">How should I address you?</Label>
                      <p className="text-xs text-slate-500 mt-1 mb-2">
                        Choose something you're comfortable with—your first name, nickname, or preferred title.
                      </p>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Jayden, Jay, Mr. Tan"
                        className="mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          value={email}
                          disabled
                          className="mt-2 bg-slate-50 dark:bg-slate-900/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="agency">Agency</Label>
                        <Input
                          id="agency"
                          value={agency}
                          disabled
                          className="mt-2 bg-slate-50 dark:bg-slate-900/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Work Context
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="job-role">Job Role</Label>
                      <p className="text-xs text-slate-500 mt-1 mb-2">
                        This helps the AI understand your professional context.
                      </p>
                      <Popover open={openJobRole} onOpenChange={setOpenJobRole}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openJobRole}
                            className="w-full justify-between mt-2"
                          >
                            {jobRole || "Select your role"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput placeholder="Search role..." />
                            <CommandList>
                              <CommandEmpty>No role found.</CommandEmpty>
                              <CommandGroup>
                                {JOB_ROLES.map((role) => (
                                  <CommandItem
                                    key={role}
                                    value={role}
                                    onSelect={(currentValue: string) => {
                                      setJobRole(currentValue);
                                      setOpenJobRole(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        jobRole === role ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                    {role}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="profile">
                        Professional Background <span className="text-slate-400 font-normal">(Optional)</span>
                      </Label>
                      <p className="text-xs text-slate-500 mt-1 mb-2">
                        Share your experience and expertise to receive more tailored assistance.
                      </p>
                      <Textarea
                        id="profile"
                        value={profileDescription}
                        onChange={(e) => setProfileDescription(e.target.value)}
                        placeholder="E.g., I specialize in digital transformation initiatives with 5 years of experience in public sector technology projects..."
                        className="mt-2 min-h-[80px] resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="work-focus">
                        Current Work Focus <span className="text-slate-400 font-normal">(Optional)</span>
                      </Label>
                      <p className="text-xs text-slate-500 mt-1 mb-2">
                        What are your main projects or priorities right now?
                      </p>
                      <Textarea
                        id="work-focus"
                        value={workFocus}
                        onChange={(e) => setWorkFocus(e.target.value)}
                        placeholder="E.g., Currently leading the implementation of a new citizen engagement platform, with emphasis on accessibility and user experience..."
                        className="mt-2 min-h-[80px] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Communication Style */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  AI Communication Style
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose how you'd like the AI to communicate with you.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Select Your Preferred Traits</Label>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    You can select multiple traits that match your preferences.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Professional', 'Friendly', 'Concise', 'Detailed',
                      'Creative', 'Analytical', 'Empathetic', 'Proactive'
                    ].map((trait) => (
                      <div key={trait} className="flex items-center space-x-2">
                        <Checkbox
                          id={`trait-${trait}`}
                          checked={traits.includes(trait)}
                          onCheckedChange={() => handleTraitToggle(trait)}
                        />
                        <label
                          htmlFor={`trait-${trait}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {trait}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="custom-instructions">
                    Additional Preferences <span className="text-slate-400 font-normal">(Optional)</span>
                  </Label>
                  <p className="text-xs text-slate-500 mt-1 mb-2">
                    Any specific preferences for how the AI should respond to you?
                  </p>
                  <Textarea
                    id="custom-instructions"
                    value={customInstructions}
                    onChange={(e) => setCustomInstructions(e.target.value)}
                    placeholder="E.g., Always provide sources for factual claims, use bullet points for action items, avoid technical jargon when possible..."
                    className="mt-2 min-h-[100px] resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Data Sources */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Connected Data Sources
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Connect data sources that the AI can reference for more contextual responses.
                </p>
              </div>

              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div key={source.id} className="space-y-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Source {index + 1}</Label>
                      {dataSources.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveDataSource(source.id)}
                          className="h-8 w-8 p-0 text-slate-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-[30%_70%] gap-4">
                      <div>
                        <Label htmlFor={`type-${source.id}`}>Type</Label>
                        <Select
                          value={source.type}
                          onValueChange={(value: 'sharepoint' | 'local' | 'aws' | 'gdrive') => handleUpdateDataSource(source.id, 'type', value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sharepoint">SharePoint</SelectItem>
                            <SelectItem value="gdrive">Google Drive</SelectItem>
                            <SelectItem value="aws">AWS S3</SelectItem>
                            <SelectItem value="local">Local</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor={`path-${source.id}`}>
                          {source.type === 'local' ? 'File Path' : 'URL or Connection'}
                        </Label>
                        <Input
                          id={`path-${source.id}`}
                          value={source.path}
                          onChange={(e) => handleUpdateDataSource(source.id, 'path', e.target.value)}
                          placeholder={
                            source.type === 'sharepoint' ? 'https://yourorg.sharepoint.com' :
                              source.type === 'gdrive' ? 'https://drive.google.com/...' :
                                source.type === 'aws' ? 's3://bucket-name/path' :
                                  '/Users/username/documents'
                          }
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={handleAddDataSource}
                  className="w-full border-dashed border-2 hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Data Source
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  You can manage your data sources anytime in settings.
                </p>
              </div>
            </div>
          )}
        </CardContent>

        {/* Navigation */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className={cn(
                "text-slate-500 hover:text-slate-700 h-12 text-base",
                currentStep === 3 && "invisible"
              )}
            >
              Skip for now
            </Button>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handleBack}
                className={cn(
                  "gap-2 h-12 text-base",
                  currentStep === 1 && "invisible"
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-12 text-base px-8"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={onComplete}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-12 text-base px-8"
                >
                  Complete Setup
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
