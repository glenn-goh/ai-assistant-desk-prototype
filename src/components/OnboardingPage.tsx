import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, Folder, Cloud, Database, HardDrive, Trash2, ChevronsUpDown, Check } from 'lucide-react';
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
import { LibraryManager, type DataSource } from './LibraryManager';

interface OnboardingPageProps {
  userProfile: import('../App').UserProfile;
  onUpdateProfile: (profile: import('../App').UserProfile) => void;
  onComplete: () => void;
}

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

export function OnboardingPage({ userProfile, onUpdateProfile, onComplete }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // User Details
  const [name, setName] = useState(userProfile.name);
  const [email] = useState(userProfile.email);
  const [agency] = useState(userProfile.agency);

  // Work Context
  const [jobRole, setJobRole] = useState(userProfile.role);
  const [openJobRole, setOpenJobRole] = useState(false);
  const [profileDescription, setProfileDescription] = useState(userProfile.profileDescription || 'I coordinate marketing campaigns and public communications for government agencies, focusing on digital outreach and stakeholder engagement.');
  const [workFocus, setWorkFocus] = useState(userProfile.workFocus || 'Social media strategy, campaign planning, and content creation for government communications.');

  // Communication Style
  const [customInstructions, setCustomInstructions] = useState(userProfile.customInstructions || '');
  const [traits, setTraits] = useState<string[]>(userProfile.traits || []);

  // Data Sources
  const [dataSources, setDataSources] = useState<DataSource[]>(userProfile.dataSources || [
    { id: '1', name: 'GovTech branding guidelines', type: 'sharepoint', path: '', enabled: true },
    { id: '2', name: 'Procurement Guidelines', type: 'sharepoint', path: '', enabled: true }
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
      { id: Date.now().toString(), name: 'New Data Source', type: 'sharepoint', path: '', enabled: true }
    ]);
  };

  const handleRemoveDataSource = (id: string) => {
    if (dataSources.length > 1) {
      setDataSources(dataSources.filter(ds => ds.id !== id));
    }
  };

  const handleUpdateDataSource = (id: string, field: 'type' | 'path' | 'name', value: string) => {
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

  const handleComplete = () => {
    // Save all the profile data
    onUpdateProfile({
      name,
      email,
      role: jobRole,
      agency,
      profileDescription,
      workFocus,
      customInstructions,
      traits,
      dataSources
    });
    onComplete();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-3xl shadow-lg border-gray-300 bg-white">
        {/* Content Area */}
        <CardContent className="p-8">
          {/* Step 1: Profile & Work Context */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <p className="text-xs text-gray-500 mb-2">Step 1 of 3</p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Your Profile & Work Context
                </h2>
                <p className="text-gray-500">
                  Tell us about yourself and your work to help us personalize your AI experience.
                </p>
              </div>


              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Your Profile
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">How should I address you?</Label>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        Choose something you're comfortable with—your first name, nickname, or preferred title.
                      </p>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Jayden, Jay, Mr. Tan"
                        className="mt-2 bg-white border-gray-300"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          value={email}
                          disabled
                          className="mt-2 bg-gray-100 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="agency">Agency</Label>
                        <Input
                          id="agency"
                          value={agency}
                          disabled
                          className="mt-2 bg-gray-100 border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-gray-300" />

                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Work Context
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="job-role">Job Role</Label>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        This helps the AI understand your professional context.
                      </p>
                      <Popover open={openJobRole} onOpenChange={setOpenJobRole}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openJobRole}
                            className="w-full justify-between mt-2 bg-gray-100 border-gray-300"
                            disabled={true}
                          >
                            {jobRole || "Select your role"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-white border-gray-300">
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
                        Professional Background <span className="text-gray-500 font-normal">(Optional)</span>
                      </Label>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        Share your experience and expertise to receive more tailored assistance.
                      </p>
                      <Textarea
                        id="profile"
                        value={profileDescription}
                        onChange={(e) => setProfileDescription(e.target.value)}
                        placeholder="E.g., I specialize in digital transformation initiatives with 5 years of experience in public sector technology projects..."
                        className="mt-2 min-h-[80px] resize-none bg-white border-gray-300"
                      />
                    </div>

                    <div>
                      <Label htmlFor="work-focus">
                        Current Work Focus <span className="text-gray-500 font-normal">(Optional)</span>
                      </Label>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        What are your main projects or priorities right now?
                      </p>
                      <Textarea
                        id="work-focus"
                        value={workFocus}
                        onChange={(e) => setWorkFocus(e.target.value)}
                        placeholder="E.g., Currently leading the implementation of a new citizen engagement platform, with emphasis on accessibility and user experience..."
                        className="mt-2 min-h-[80px] resize-none bg-white border-gray-300"
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
                <p className="text-xs text-gray-500 mb-2">Step 2 of 3</p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  AI Communication Style
                </h2>
                <p className="text-gray-500">
                  Choose how you'd like the AI to communicate with you.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Select Your Preferred Traits</Label>
                  <p className="text-xs text-gray-500 mt-1 mb-4">
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
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-700"
                        >
                          {trait}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="custom-instructions">
                    Additional Preferences <span className="text-gray-500 font-normal">(Optional)</span>
                  </Label>
                  <p className="text-xs text-gray-500 mt-1 mb-2">
                    Any specific preferences for how the AI should respond to you?
                  </p>
                  <Textarea
                    id="custom-instructions"
                    value={customInstructions}
                    onChange={(e) => setCustomInstructions(e.target.value)}
                    placeholder="E.g., Always provide sources for factual claims, use bullet points for action items, avoid technical jargon when possible..."
                    className="mt-2 min-h-[100px] resize-none bg-white border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Libraries */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <p className="text-xs text-gray-500 mb-2">Step 3 of 3</p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Set Up Your First Library
                </h2>
                <p className="text-gray-500">
                  Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly.
                </p>
              </div>

              <LibraryManager
                dataSources={dataSources}
                onAdd={handleAddDataSource}
                onRemove={handleRemoveDataSource}
                onUpdate={handleUpdateDataSource}
                showDescription={false}
              />

              <p className="text-xs text-gray-500 text-center">
                You can manage your libraries anytime in <span className="text-gray-900 font-medium">Library</span>
              </p>
            </div>
          )}
        </CardContent>

        {/* Navigation */}
        <div className="p-6 border-t border-gray-300 bg-gray-100">
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className={cn(
                "text-gray-500 hover:text-gray-700 hover:bg-gray-200 h-12 text-base",
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
                  "gap-2 h-12 text-base border-gray-300 hover:bg-gray-100",
                  currentStep === 1 && "invisible"
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className="bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  className="bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8"
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