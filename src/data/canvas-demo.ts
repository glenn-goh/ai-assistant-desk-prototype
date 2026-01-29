export const canvasDemoData = {
  id: "canvas-demo",
  title: "Canvas Generation Demo",
  description: "Demonstrating canvas creation and versioning",
  colorScheme: "blue" as const,
  classificationType: "rsn" as const,
  messages: [
    {
      role: "user" as const,
      content: {
        text: "Help me generate a 1 pager plan for launching a new government digital service",
        autoSend: true
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thought: "Analyzing requirements for the 1-pager plan...",
          reasoning: [
            "Analyzing the user's request and identifying key requirements...",
            "Breaking down the components needed for a government digital service launch plan...",
            "Considering stakeholder engagement, timeline, and governance requirements...",
            "Structuring the plan into clear, actionable sections...",
            "Preparing to create a comprehensive yet concise 1-pager document..."
          ],
          timingMs: 4500
        },
        {
          type: "text" as const,
          content: "I'll create a comprehensive 1-pager plan for your government digital service launch. This will include key sections covering objectives, timeline, stakeholders, and success metrics."
        },
        {
          type: "artifact" as const,
          title: "Digital Service Launch Plan",
          fileType: "document",
          description: "1-pager plan for government digital service launch",
          interactive: true,
          version: 1,
          content: `<div class="p-6 space-y-4">
  <h1 class="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
    Government Digital Service Launch Plan
  </h1>

  <div class="space-y-3">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">🎯 Objectives</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Deliver citizen-centric digital service by Q4 2024</li>
        <li>Achieve 80% digital adoption rate within 6 months</li>
        <li>Reduce processing time from 14 days to 48 hours</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📅 Timeline</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Phase 1 (Months 1-2):</strong> Requirements gathering and design</li>
        <li><strong>Phase 2 (Months 3-4):</strong> Development and testing</li>
        <li><strong>Phase 3 (Month 5):</strong> User acceptance testing and pilot</li>
        <li><strong>Phase 4 (Month 6):</strong> Full launch and monitoring</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">👥 Key Stakeholders</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Project Sponsor: Chief Digital Officer</li>
        <li>Technical Lead: Government Technology Agency</li>
        <li>User Research: Service Design Team</li>
        <li>Governance: Digital Transformation Committee</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📊 Success Metrics</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>80% digital adoption rate</li>
        <li>90% user satisfaction score</li>
        <li>48-hour average processing time</li>
        <li>Zero critical security incidents</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">⚠️ Risks & Mitigation</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Risk:</strong> Low user adoption → <strong>Mitigation:</strong> Comprehensive training program</li>
        <li><strong>Risk:</strong> Technical issues → <strong>Mitigation:</strong> Phased rollout approach</li>
        <li><strong>Risk:</strong> Budget overrun → <strong>Mitigation:</strong> Monthly financial reviews</li>
      </ul>
    </div>
  </div>
</div>`
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Can you refine the timeline to add more detail on the deliverables for each phase?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "thinking" as const,
          thought: "Enhancing the timeline section with detailed deliverables...",
          reasoning: [
            "Analyzing the request to add deliverables to each phase...",
            "Identifying key outputs for each phase of the project...",
            "Ensuring deliverables align with governance requirements...",
            "Maintaining document clarity while adding detail...",
            "Updating the canvas with enhanced timeline information..."
          ],
          timingMs: 4000
        },
        {
          type: "text" as const,
          content: "I've updated the plan with detailed deliverables for each phase. The timeline now includes specific outputs and milestones to track progress."
        },
        {
          type: "artifact" as const,
          title: "Digital Service Launch Plan",
          fileType: "document",
          description: "Updated with detailed phase deliverables",
          interactive: true,
          version: 2,
          content: `<div class="p-6 space-y-4">
  <h1 class="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
    Government Digital Service Launch Plan
    <span class="text-sm font-normal text-gray-500 ml-2">(v2)</span>
  </h1>

  <div class="space-y-3">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">🎯 Objectives</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Deliver citizen-centric digital service by Q4 2024</li>
        <li>Achieve 80% digital adoption rate within 6 months</li>
        <li>Reduce processing time from 14 days to 48 hours</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📅 Timeline & Deliverables</h2>
      <div class="ml-2 mt-1 space-y-3">
        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 1 (Months 1-2): Requirements & Design</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Stakeholder consultation report</li>
            <li>User research findings and personas</li>
            <li>Service blueprint and user journey maps</li>
            <li>Technical architecture document</li>
            <li>Security and compliance assessment</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 2 (Months 3-4): Development & Testing</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Working prototype (alpha version)</li>
            <li>Integration with backend systems</li>
            <li>Security penetration testing report</li>
            <li>Accessibility compliance certification (WCAG 2.1 AA)</li>
            <li>Load testing results</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 3 (Month 5): UAT & Pilot</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>User acceptance testing with 50+ users</li>
            <li>Pilot launch with 500 selected citizens</li>
            <li>Feedback analysis and bug fixes</li>
            <li>Training materials and help documentation</li>
            <li>Go-live readiness assessment</li>
          </ul>
        </div>

        <div class="border-l-4 border-blue-500 pl-3">
          <p class="font-semibold text-gray-800">Phase 4 (Month 6): Launch & Monitoring</p>
          <ul class="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
            <li>Public launch communications plan</li>
            <li>24/7 support team activation</li>
            <li>Real-time monitoring dashboard</li>
            <li>Weekly performance reports</li>
            <li>Post-launch optimization roadmap</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">👥 Key Stakeholders</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>Project Sponsor: Chief Digital Officer</li>
        <li>Technical Lead: Government Technology Agency</li>
        <li>User Research: Service Design Team</li>
        <li>Governance: Digital Transformation Committee</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">📊 Success Metrics</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li>80% digital adoption rate</li>
        <li>90% user satisfaction score</li>
        <li>48-hour average processing time</li>
        <li>Zero critical security incidents</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800">⚠️ Risks & Mitigation</h2>
      <ul class="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
        <li><strong>Risk:</strong> Low user adoption → <strong>Mitigation:</strong> Comprehensive training program</li>
        <li><strong>Risk:</strong> Technical issues → <strong>Mitigation:</strong> Phased rollout approach</li>
        <li><strong>Risk:</strong> Budget overrun → <strong>Mitigation:</strong> Monthly financial reviews</li>
      </ul>
    </div>
  </div>
</div>`
        }
      ]
    }
  ]
};
