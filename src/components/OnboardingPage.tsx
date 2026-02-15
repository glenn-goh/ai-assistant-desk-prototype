import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button, TextInput, Select, Checkbox, Card, Stack, Title, Text, Divider, Box, Input } from '@mantine/core';
import { FormField } from './shared';
import cls from './OnboardingPage.module.css';

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

const JOB_ROLE_OPTIONS = [
  { value: 'policy-strategy', label: 'Policy / Strategy' },
  { value: 'operations', label: 'Operations' },
  { value: 'hr-people', label: 'HR / People' },
  { value: 'finance-procurement', label: 'Finance / Procurement' },
  { value: 'legal-compliance', label: 'Legal / Compliance' },
  { value: 'communications', label: 'Communications' },
  { value: 'data-tech', label: 'Data / Tech' },
  { value: 'other', label: 'Other' },
];

const WORK_ACTIVITIES = [
  { id: 'drafting', label: 'Drafting documents' },
  { id: 'reviewing', label: 'Reviewing / editing' },
  { id: 'researching', label: 'Researching / summarising' },
  { id: 'briefings', label: 'Preparing briefings / slides' },
  { id: 'cases', label: 'Handling cases' },
  { id: 'queries', label: 'Responding to queries' },
  { id: 'analysis', label: 'Data analysis' },
  { id: 'planning', label: 'Planning / coordination' },
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
    <Box className={cls.page}>
      <Card className={cls.card} shadow="lg" withBorder>
        <Box className={cls.stepContent}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Stack gap="lg">
              <Box>
                <Text size="xs" c="gray.5" mb="xs">Step 1 of 2</Text>
                <Title order={2} mb="xs">Tell Us About Yourself</Title>
                <Text c="gray.5">Help us personalize your experience</Text>
              </Box>

              <Stack gap="lg">
                {/* Name */}
                <FormField
                  label="What would you like us to call you?"
                  htmlFor="name"
                  helperText="Choose something you're comfortable with—your first name, nickname, or preferred title."
                >
                  <TextInput
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="e.g., Jayden, Jay, Mr. Tan"
                  />
                </FormField>

                <Divider color="gray.3" />

                {/* Job Role */}
                <FormField
                  label="Which best describes your primary job role?"
                  htmlFor="job-role"
                  helperText="This helps the AI understand your professional context."
                >
                  <Select
                    id="job-role"
                    value={jobRole}
                    onChange={(value) => setJobRole(value || '')}
                    data={JOB_ROLE_OPTIONS}
                    placeholder="Select your job role"
                  />
                  {jobRole === 'other' && (
                    <TextInput
                      placeholder="Describe your job role..."
                      value={otherJobRole}
                      onChange={(e) => setOtherJobRole(e.currentTarget.value)}
                      mt="xs"
                    />
                  )}
                </FormField>

                <Divider color="gray.3" />

                {/* Work Activities */}
                <Box>
                  <Input.Label>What do you spend most of your time doing?</Input.Label>
                  <Text size="xs" c="gray.5" mt={4} mb="sm">
                    Select all that apply
                  </Text>
                  <Stack gap="sm">
                    {WORK_ACTIVITIES.map((activity) => (
                      <Box key={activity.id} className={cls.activityItem}>
                        <Checkbox
                          id={activity.id}
                          checked={workActivities.includes(activity.id)}
                          onChange={() => toggleActivity(activity.id)}
                          label={activity.label}
                          size="sm"
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          )}

          {/* Step 2: AI Style and Tone */}
          {currentStep === 2 && (
            <Stack gap="lg">
              <Box>
                <Text size="xs" c="gray.5" mb="xs">Step 2 of 2</Text>
                <Title order={2} mb="xs">Choose Your AI Style</Title>
                <Text c="gray.5">
                  Select how you'd like your AI Assistant to communicate with you
                </Text>
              </Box>

              <Box className={cls.styleGrid}>
                {AI_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setAiStyle(style.id)}
                    className={`${cls.styleOption} ${aiStyle === style.id ? cls.styleOptionSelected : ''}`}
                  >
                    {aiStyle === style.id && (
                      <Box className={cls.checkIcon}>
                        <Check size={12} color="white" />
                      </Box>
                    )}
                    <Text fw={600} c="gray.9" mb={4}>{style.label}</Text>
                    <Text size="xs" c="gray.5">{style.description}</Text>
                  </button>
                ))}
              </Box>

              {aiStyle === 'Others' && (
                <TextInput
                  placeholder="Describe your preferred style..."
                  value={otherAiStyle}
                  onChange={(e) => setOtherAiStyle(e.currentTarget.value)}
                  mt="md"
                />
              )}
            </Stack>
          )}
        </Box>

        {/* Navigation */}
        <Box className={cls.footer}>
          <Box className={cls.footerActions}>
            <Box className={cls.footerButtons}>
              {currentStep === 2 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  leftSection={<ArrowLeft size={16} />}
                  size="md"
                >
                  Back
                </Button>
              )}

              <Button
                onClick={handleNext}
                rightSection={<ArrowRight size={16} />}
                size="md"
                px="xl"
              >
                {currentStep === 1 ? 'Next' : 'Complete Setup'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
