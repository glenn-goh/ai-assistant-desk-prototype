import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { cn } from './ui/utils';

interface OnboardingPageProps {
  userProfile: import('../App').UserProfile;
  onUpdateProfile: (profile: import('../App').UserProfile) => void;
  onComplete: () => void;
}

const AI_STYLES = [
  { id: 'Concise', label: 'Concise', description: 'Brief and to the point' },
  { id: 'Professional', label: 'Professional', description: 'Formal business tone' },
  { id: 'Academic', label: 'Academic', description: 'Scholarly and detailed' },
  { id: 'Creative', label: 'Creative', description: 'Imaginative and expressive' },
  { id: 'Others', label: 'Others', description: 'Describe your own style' },
];

export function OnboardingPage({ userProfile, onUpdateProfile, onComplete }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [aiStyle, setAiStyle] = useState('Concise');
  const [otherAiStyle, setOtherAiStyle] = useState('');
  const [name, setName] = useState(userProfile.name);
  const [jobRole, setJobRole] = useState('');
  const [otherJobRole, setOtherJobRole] = useState('');
  const [workActivities, setWorkActivities] = useState<string[]>([]);

  const handleComplete = () => {
    // Save the personalization data
    onUpdateProfile({
      ...userProfile,
      name: name.trim() || userProfile.name,
      role: jobRole === 'other' ? otherJobRole : jobRole,
      aiStyle: aiStyle === 'other' ? otherAiStyle : aiStyle,
      workActivities: workActivities,
    });
    onComplete();
  };

  const handleSkip = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      handleComplete();
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const toggleActivity = (activityId: string) => {
    setWorkActivities(prev =>
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl shadow-lg border-gray-300 bg-white">
        <CardContent className="p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <p className="text-xs text-gray-500 mb-2">Step 1 of 2</p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Tell Us About Yourself
                </h2>
                <p className="text-gray-500">
                  Help us personalize your experience
                </p>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name">What would you like us to call you?</Label>
                  <p className="text-xs text-gray-500 mt-1 mb-2">
                    Choose something you're comfortable with—your first name, nickname, or preferred title.
                  </p>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Jayden, Jay, Mr. Tan"
                    className="bg-white border-gray-300"
                  />
                </div>

                <Separator className="bg-gray-300" />

                {/* Job Role */}
                <div>
                  <Label htmlFor="job-role">Which best describes your primary job role?</Label>
                  <p className="text-xs text-gray-500 mt-1 mb-2">
                    This helps the AI understand your professional context.
                  </p>
                  <Select value={jobRole} onValueChange={setJobRole}>
                    <SelectTrigger id="job-role" className="bg-white border-gray-300">
                      <SelectValue placeholder="Select your job role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy-strategy">Policy / Strategy</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="hr-people">HR / People</SelectItem>
                      <SelectItem value="finance-procurement">Finance / Procurement</SelectItem>
                      <SelectItem value="legal-compliance">Legal / Compliance</SelectItem>
                      <SelectItem value="communications">Communications</SelectItem>
                      <SelectItem value="data-tech">Data / Tech</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {jobRole === 'other' && (
                    <Input
                      placeholder="Describe your job role..."
                      value={otherJobRole}
                      onChange={(e) => setOtherJobRole(e.target.value)}
                      className="mt-2 bg-white border-gray-300"
                    />
                  )}
                </div>

                <Separator className="bg-gray-300" />

                {/* Work Activities */}
                <div>
                  <Label>What do you spend most of your time doing?</Label>
                  <p className="text-xs text-gray-500 mt-1 mb-3">
                    Select all that apply
                  </p>
                  <div className="space-y-3">
                    {[
                      { id: 'drafting', label: 'Drafting documents' },
                      { id: 'reviewing', label: 'Reviewing / editing' },
                      { id: 'researching', label: 'Researching / summarising' },
                      { id: 'briefings', label: 'Preparing briefings / slides' },
                      { id: 'cases', label: 'Handling cases' },
                      { id: 'queries', label: 'Responding to queries' },
                      { id: 'analysis', label: 'Data analysis' },
                      { id: 'planning', label: 'Planning / coordination' },
                    ].map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity.id}
                          checked={workActivities.includes(activity.id)}
                          onCheckedChange={() => toggleActivity(activity.id)}
                        />
                        <Label htmlFor={activity.id} className="text-sm font-normal cursor-pointer">
                          {activity.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: AI Style and Tone */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <p className="text-xs text-gray-500 mb-2">Step 2 of 2</p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Choose Your AI Style
                </h2>
                <p className="text-gray-500">
                  Select how you'd like your AI Assistant to communicate with you
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {AI_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setAiStyle(style.id)}
                    className={cn(
                      "relative p-4 rounded-lg border-2 text-left transition-all",
                      aiStyle === style.id
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-300 hover:border-gray-400"
                    )}
                  >
                    {aiStyle === style.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="font-semibold text-gray-900 mb-1">{style.label}</div>
                    <div className="text-xs text-gray-500">{style.description}</div>
                  </button>
                ))}
              </div>

              {aiStyle === 'Others' && (
                <div className="mt-4">
                  <Input
                    placeholder="Describe your preferred style..."
                    value={otherAiStyle}
                    onChange={(e) => setOtherAiStyle(e.target.value)}
                    className="bg-white border-gray-300"
                  />
                </div>
              )}
            </div>
          )}
        </CardContent>

        {/* Navigation */}
        <div className="p-6 border-t border-gray-300 bg-gray-100">
          <div className="flex justify-end items-center gap-4">
            <div className="flex items-center gap-3">
              {currentStep === 2 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2 h-12 text-base border-gray-300 hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              )}

              <Button
                onClick={handleNext}
                className="bg-gray-900 hover:bg-gray-800 text-white gap-2 h-12 text-base px-8"
              >
                {currentStep === 1 ? 'Next' : 'Complete Setup'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
