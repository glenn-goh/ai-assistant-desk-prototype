# Chat Simulator Data Files

This folder contains JSON data files for different AI conversation scenarios. Each file represents a complete conversation flow that can be loaded into the Chat Simulator.

## File Structure

```
/data/
  ├── _TEMPLATE.json          # Template with instructions for creating new scenarios
  ├── feature-overview.json   # Demo: Feature showcase
  ├── customer-support.json   # Demo: Customer support interaction
  └── feedback-collection.json # Demo: User feedback collection
```

## Creating a New Scenario

1. **Copy the template**: Start with `_TEMPLATE.json`
2. **Edit the fields**: Update id, title, description, and colorScheme
3. **Build the conversation**: Add user and bot message pairs
4. **Save the file**: Use a descriptive name (e.g., `onboarding-flow.json`)

## JSON Structure

### Root Level
```json
{
  "id": "unique-id",
  "title": "Scenario Title",
  "description": "What this demonstrates",
  "colorScheme": "slate",
  "messages": [...]
}
```

### Color Schemes
Choose one of: `slate`, `blue`, `green`, `purple`, `indigo`

This determines the visual theme (buttons, borders, highlights).

### Message Types

#### User Message
```json
{
  "role": "user",
  "content": {
    "text": "What the user types"
  }
}
```

#### Bot Message
```json
{
  "role": "bot",
  "content": [
    { "type": "thinking", ... },
    { "type": "assistantSwitch", ... },
    { "type": "text", ... },
    { "type": "artifact", ... }
  ]
}
```

### Bot Response Types

#### 1. Thinking Response
Shows the AI's thought process:
```json
{
  "type": "thinking",
  "thoughts": [
    "Analyzing...",
    "Processing...",
    "Complete"
  ],
  "timingMs": 1500
}
```

#### 2. Assistant Switch
Shows when switching tools/assistants:
```json
{
  "type": "assistantSwitch",
  "message": "Activating Code Assistant"
}
```

#### 3. Text Response
Standard chat message:
```json
{
  "type": "text",
  "content": "Your message here.\n\nUse \\n\\n for paragraphs.",
  "delayMs": 1000
}
```

#### 4. Artifact Response (Static)
Documents, code, reports:
```json
{
  "type": "artifact",
  "title": "Report Title",
  "fileType": "document",
  "description": "Brief description",
  "interactive": false,
  "content": "<div class=\"p-6\">HTML content</div>"
}
```

#### 5. Artifact Response (Interactive Form)
Forms that users can fill out:
```json
{
  "type": "artifact",
  "title": "Survey Form",
  "fileType": "form",
  "description": "Share your feedback",
  "interactive": true,
  "content": "<div class=\"p-6\"><form id=\"formId\">...</form></div>"
}
```

## Artifact Content Guidelines

### HTML & Styling
- Use Tailwind CSS classes for styling
- Match your colorScheme: 
  - `blue` → use `blue-*` classes
  - `green` → use `green-*` classes
  - `slate` → use `slate-*` classes
  - etc.

### Example Artifact HTML
```html
<div class="p-6">
  <h1 class="text-2xl font-bold mb-4 text-blue-900">Title</h1>
  <div class="border-l-4 border-blue-500 pl-4">
    <h2 class="text-xl font-semibold text-blue-800">Section</h2>
    <p class="text-gray-700 mt-2">Content here</p>
  </div>
</div>
```

### Interactive Form Requirements
- Forms MUST have an `id` attribute
- Use Tailwind classes for inputs
- Required fields should have `required` attribute
- Submit button should have `type="submit"`

### Example Form HTML
```html
<div class="p-6">
  <form id="myForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-2">Name</label>
      <input type="text" name="name" required 
             class="w-full px-3 py-2 border border-blue-300 rounded-md 
                    focus:ring-2 focus:ring-blue-500">
    </div>
    <button type="submit" 
            class="w-full bg-blue-600 text-white py-2 rounded-md 
                   hover:bg-blue-700">
      Submit
    </button>
  </form>
</div>
```

## Timing Configuration

### Default Timings
- **Bot initial delay**: 3000ms (shows thinking dots)
- **Thinking response**: 1500ms per thought
- **Text response**: 1000ms delay
- **Artifact response**: 1000ms delay

### Custom Timings
Override with optional parameters:
```json
{
  "type": "thinking",
  "thoughts": ["..."],
  "timingMs": 2000
}

{
  "type": "text",
  "content": "...",
  "delayMs": 2500
}
```

## Tips for Creating Scenarios

### 1. Keep It Focused
Each scenario should demonstrate one specific use case or interaction pattern.

### 2. Natural Flow
- Start with a user question
- Bot thinks, then responds
- Build up complexity gradually
- End with clear resolution or next steps

### 3. Use All Response Types
Show variety:
- Thinking responses show AI reasoning
- Assistant switches show tool usage
- Text for explanations
- Artifacts for rich content
- Forms for data collection

### 4. Match Visual Theme
Choose a colorScheme and stick to it in your HTML content.

### 5. Test Your JSON
Validate your JSON before using:
- Check for syntax errors
- Ensure all quotes are escaped
- Test special characters

## Loading Data into Simulator

### Option 1: Direct Import (React)
```javascript
import scenarioData from './data/feature-overview.json';
<ChatSimulator data={scenarioData} />
```

### Option 2: Fetch at Runtime
```javascript
const [data, setData] = useState(null);

useEffect(() => {
  fetch('/data/feature-overview.json')
    .then(res => res.json())
    .then(setData);
}, []);

{data && <ChatSimulator data={data} />}
```

### Option 3: Load Multiple Scenarios
```javascript
const scenarios = [
  'feature-overview',
  'customer-support',
  'feedback-collection'
];

const loadScenario = async (name) => {
  const response = await fetch(`/data/${name}.json`);
  return response.json();
};
```

## Example Scenarios Included

### feature-overview.json
- **Use case**: Product demonstrations
- **Shows**: Documentation, feature lists
- **Color**: Blue theme
- **Length**: Single exchange

### customer-support.json  
- **Use case**: Support interactions
- **Shows**: Troubleshooting, escalation to forms
- **Color**: Green theme
- **Length**: Two exchanges with form

### feedback-collection.json
- **Use case**: User surveys
- **Shows**: Interactive forms, data collection
- **Color**: Purple theme
- **Length**: Single exchange with survey

## Need Help?

Refer to `_TEMPLATE.json` for a complete annotated example with all available options and detailed comments.
