# AI Chat Simulator - Complete Package

## 📦 What's Included

### Core Components
1. **ChatSimulator.tsx** - Reusable React component
2. **chat-data.ts** - TypeScript data structure and helper functions
3. **data/** folder - Individual JSON scenario files
4. **chat-simulator-demo.html** - Standalone demo application

### Data Files (JSON)
- **_TEMPLATE.json** - Template with detailed instructions
- **feature-overview.json** - Product feature showcase
- **customer-support.json** - Support interaction with form
- **feedback-collection.json** - User feedback survey
- **README.md** - Complete data file documentation

### Documentation
- **ai-chat-simulator-requirements.md** - Full project requirements

## 🚀 Quick Start

### Option 1: Use the Standalone HTML Demo
1. Open `chat-simulator-demo.html` in your browser
2. Select a scenario from the menu
3. Type randomly and press Enter to interact

### Option 2: Create Your Own Scenario
1. Copy `/data/_TEMPLATE.json`
2. Edit the JSON to create your conversation
3. Load it into the simulator

### Option 3: Integrate into Your React App
```jsx
import ChatSimulator from './ChatSimulator';
import scenarioData from './data/feature-overview.json';

function App() {
  return <ChatSimulator data={scenarioData} colorScheme="blue" />;
}
```

## 📝 Creating a New Scenario

### Step 1: Start with the Template
Copy `_TEMPLATE.json` and rename it (e.g., `onboarding-flow.json`)

### Step 2: Define Basic Info
```json
{
  "id": "onboarding-flow",
  "title": "User Onboarding Demo",
  "description": "Guide new users through setup",
  "colorScheme": "blue",
  "messages": []
}
```

### Step 3: Build the Conversation
Add alternating user and bot messages:

```json
"messages": [
  {
    "role": "user",
    "content": {"text": "I'm new here, how do I get started?"}
  },
  {
    "role": "bot",
    "content": [
      {
        "type": "thinking",
        "thoughts": ["Checking account status...", "Preparing onboarding guide..."]
      },
      {
        "type": "text",
        "content": "Welcome! I'll guide you through the setup process."
      },
      {
        "type": "artifact",
        "title": "Getting Started Guide",
        "fileType": "document",
        "description": "Your onboarding checklist",
        "interactive": false,
        "content": "<div class='p-6'>...</div>"
      }
    ]
  }
]
```

### Step 4: Test Your Scenario
Load it in the demo HTML or your React app.

## 🎨 Customization Options

### Color Schemes
Choose from: `slate`, `blue`, `green`, `purple`, `indigo`

Each colors the:
- User message bubbles
- Thinking states
- Artifact borders
- Interactive elements

### Response Types

#### 1. Thinking Response
```json
{
  "type": "thinking",
  "thoughts": ["Step 1...", "Step 2...", "Done"],
  "timingMs": 1500
}
```

#### 2. Assistant Switch
```json
{
  "type": "assistantSwitch",
  "message": "Switching to Analytics Assistant"
}
```

#### 3. Text Response
```json
{
  "type": "text",
  "content": "Your message here",
  "delayMs": 1000
}
```

#### 4. Static Artifact
```json
{
  "type": "artifact",
  "title": "Report",
  "fileType": "document",
  "description": "Analysis results",
  "interactive": false,
  "content": "<div>...</div>"
}
```

#### 5. Interactive Form
```json
{
  "type": "artifact",
  "title": "Survey",
  "fileType": "form",
  "description": "Quick survey",
  "interactive": true,
  "content": "<form id='survey'>...</form>"
}
```

## 🔧 Advanced Usage

### Loading Multiple Scenarios

```jsx
const [scenarios, setScenarios] = useState([]);

useEffect(() => {
  const loadScenarios = async () => {
    const names = ['feature-overview', 'customer-support', 'feedback'];
    const loaded = await Promise.all(
      names.map(name => 
        fetch(`/data/${name}.json`).then(r => r.json())
      )
    );
    setScenarios(loaded);
  };
  loadScenarios();
}, []);
```

### Custom Form Handlers

```jsx
<ChatSimulator 
  data={scenarioData}
  onFormSubmit={(formData, artifactTitle) => {
    console.log('Form submitted:', formData);
    // Send to your backend
    // Trigger workflows
    // Update state
  }}
  onComplete={() => {
    console.log('Scenario completed');
    // Show next scenario
    // Return to menu
  }}
/>
```

### Dynamic Color Scheme

```jsx
const [colorScheme, setColorScheme] = useState('blue');

<ChatSimulator 
  data={scenarioData}
  colorScheme={colorScheme}
/>
```

## 📱 Use Cases

### 1. Product Demos
Show off features with realistic AI interactions
- **Example**: feature-overview.json

### 2. Customer Support Training
Train support staff with common scenarios
- **Example**: customer-support.json

### 3. User Research
Collect feedback through interactive forms
- **Example**: feedback-collection.json

### 4. Sales Presentations
Demo AI capabilities to potential clients
- **Example**: Create custom scenarios for your product

### 5. Onboarding
Guide new users through setup processes
- **Example**: Create step-by-step onboarding flows

### 6. Documentation
Interactive tutorials and how-tos
- **Example**: Code generation, troubleshooting guides

## 🎯 Best Practices

### 1. Keep Scenarios Focused
Each scenario should demonstrate one specific use case.

### 2. Use Natural Conversation Flow
- User asks question
- Bot thinks (optional)
- Bot responds with 1-3 messages
- Include artifacts when helpful
- Continue naturally

### 3. Match Color Scheme to Content
- **Blue**: Professional, technical
- **Green**: Support, success
- **Purple**: Creative, feedback
- **Slate**: Neutral, general

### 4. Test Interactive Forms
Always test form submissions to ensure they work correctly.

### 5. Keep HTML Clean
- Use Tailwind classes
- Match your color scheme
- Test rendering in the side panel

## 🐛 Troubleshooting

### JSON Syntax Errors
- Validate JSON using jsonlint.com
- Check for missing commas
- Escape special characters in strings

### Forms Not Working
- Ensure form has an `id` attribute
- Set `interactive: true`
- Include submit button with `type="submit"`

### Styling Issues
- Use Tailwind classes matching your colorScheme
- Test in the side panel (fixed width: 384px)
- Avoid absolute positioning

### Timing Issues
- Adjust `timingMs` for thinking responses
- Adjust `delayMs` for text/artifact responses
- Default bot delay is 3000ms (with dots)

## 📚 File Structure

```
/
├── ChatSimulator.tsx          # Main React component
├── chat-data.ts               # TypeScript data structures
├── chat-simulator-demo.html   # Standalone demo
├── ai-chat-simulator-requirements.md
└── data/
    ├── _TEMPLATE.json         # Template with instructions
    ├── README.md              # Data file documentation
    ├── feature-overview.json
    ├── customer-support.json
    └── feedback-collection.json
```

## 🤝 Sharing with Team

### For Non-Technical Team Members
Share the JSON files from `/data/` folder. They can:
1. Copy `_TEMPLATE.json`
2. Edit the conversation in any text editor
3. Share back for integration

### For Developers
Share the entire package:
1. `ChatSimulator.tsx` component
2. TypeScript interfaces from `chat-data.ts`
3. Example JSON files
4. Requirements document

### For Clients/Stakeholders
Share `chat-simulator-demo.html`:
1. Single file, no dependencies
2. Works offline
3. Shows multiple scenarios
4. Easy to understand

## 🔄 Updating Scenarios

### To Update Existing Scenario
1. Edit the JSON file
2. Reload in browser/app
3. Changes appear immediately

### To Add New Scenario
1. Create new JSON file in `/data/`
2. Follow template structure
3. Add to scenario loader
4. Test thoroughly

## ✨ Tips & Tricks

### Reusable Artifact Content
Store common HTML snippets separately and reference them.

### Scenario Playlists
Chain scenarios together for longer demos.

### A/B Testing
Create variations of scenarios to test different approaches.

### Localization
Create language-specific versions of scenarios.

### Analytics
Track which scenarios users complete, where they drop off.

## 📞 Need Help?

Refer to:
- `/data/README.md` - Data file details
- `/data/_TEMPLATE.json` - Annotated example
- `ai-chat-simulator-requirements.md` - Full specs

## 🎉 You're Ready!

You now have everything needed to:
✅ Run the demo
✅ Create custom scenarios  
✅ Integrate into your app
✅ Share with your team

Start by opening `chat-simulator-demo.html` and exploring the example scenarios!
