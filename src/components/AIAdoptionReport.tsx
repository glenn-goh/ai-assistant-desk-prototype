import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses } from '../lib/theme-utils';

interface AIAdoptionReportProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function AIAdoptionReport({ colorTheme, fontStyle }: AIAdoptionReportProps) {
  const theme = getThemeClasses(colorTheme);

  return (
    <div className={`h-full overflow-auto ${theme.outputPanel}`}>
      <div className="p-8 max-w-4xl mx-auto">
        {/* Report Header */}
        <div className="mb-8">
          <h1 className={`text-2xl mb-2 ${theme.title}`}>AI Adoption in Singapore Public Service</h1>
          <p className={`text-xs ${theme.navItem}`}>Comprehensive Research Report • Generated on {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>Executive Summary</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              Singapore's public service has emerged as a global leader in AI adoption, driven by the National AI Strategy and supported by comprehensive governance frameworks. This report examines the current state of AI implementation across government agencies, highlighting key initiatives, challenges, and future opportunities.
            </p>
            <p>
              Key findings indicate that AI adoption is concentrated in three main areas: (1) citizen services and engagement, (2) operational efficiency and automation, and (3) policy development and decision support. The government has invested over S$500 million in AI initiatives since 2019, with significant emphasis on ethical AI development and upskilling public officers.
            </p>
          </div>
        </section>

        {/* National AI Strategy */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>1. National AI Strategy Framework</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              The National AI Strategy 2.0, launched in 2023, builds upon the original 2019 framework with enhanced focus on responsible AI development. The strategy identifies five key pillars:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>AI for Public Good:</strong> Deploying AI solutions to improve citizen services, healthcare, education, and urban planning</li>
              <li><strong>AI for Industry:</strong> Supporting businesses in AI adoption through grants, infrastructure, and regulatory sandboxes</li>
              <li><strong>AI for Singapore:</strong> Building local AI capabilities through research, education, and talent development</li>
              <li><strong>AI Governance:</strong> Establishing ethical frameworks and testing protocols for responsible AI deployment</li>
              <li><strong>AI Infrastructure:</strong> Investing in compute resources, data platforms, and connectivity</li>
            </ul>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>2. Major AI Initiatives in Government</h2>
          
          <div className={`mb-6 p-4 rounded-lg border ${theme.aiMessage}`}>
            <h3 className={`mb-2 ${theme.title}`}>2.1 AI Singapore (AISG)</h3>
            <div className={`space-y-2 text-xs ${theme.chatItemText}`}>
              <p>
                AI Singapore serves as the national programme coordinating AI research, innovation, and enterprise. Key achievements include:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>100 For 100 initiative: Deploying 100 AI experiments across government agencies</li>
                <li>AI Apprenticeship Programme: Training 2,000+ AI practitioners</li>
                <li>SEA-Lion (Southeast Asian Languages In One Network): Open-source LLM for regional languages</li>
              </ul>
            </div>
          </div>

          <div className={`mb-6 p-4 rounded-lg border ${theme.aiMessage}`}>
            <h3 className={`mb-2 ${theme.title}`}>2.2 Pair.gov.sg Platform</h3>
            <div className={`space-y-2 text-xs ${theme.chatItemText}`}>
              <p>
                The whole-of-government AI platform enabling public officers to access AI tools and services:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>15,000+ active users across 50+ agencies</li>
                <li>AI Assistant Desk for productivity enhancement</li>
                <li>Centralized model deployment and monitoring</li>
                <li>Integrated compliance and ethics checks</li>
              </ul>
            </div>
          </div>

          <div className={`mb-6 p-4 rounded-lg border ${theme.aiMessage}`}>
            <h3 className={`mb-2 ${theme.title}`}>2.3 Smart Nation Sensor Platform (SNSP)</h3>
            <div className={`space-y-2 text-xs ${theme.chatItemText}`}>
              <p>
                IoT and AI-powered platform for urban management:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Real-time environmental monitoring and predictive maintenance</li>
                <li>Crowd density analysis for public safety</li>
                <li>Traffic optimization using computer vision</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agency-Specific Implementations */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>3. Agency-Specific AI Implementations</h2>
          
          <div className={`space-y-4 text-xs ${theme.chatItemText}`}>
            <div>
              <h3 className={`mb-2 ${theme.title}`}>Ministry of Health (MOH)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>AI-assisted diagnosis for diabetic retinopathy and lung cancer screening</li>
                <li>Predictive analytics for hospital bed management</li>
                <li>Chatbots for health advisory services (SELENA+)</li>
              </ul>
            </div>

            <div>
              <h3 className={`mb-2 ${theme.title}`}>Ministry of Education (MOE)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Adaptive learning platforms personalizing student education</li>
                <li>Automated essay scoring and feedback systems</li>
                <li>AI tutors for language learning</li>
              </ul>
            </div>

            <div>
              <h3 className={`mb-2 ${theme.title}`}>Immigration & Checkpoints Authority (ICA)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Facial recognition for automated clearance gates</li>
                <li>Risk assessment AI for visa applications</li>
                <li>Anomaly detection in immigration patterns</li>
              </ul>
            </div>

            <div>
              <h3 className={`mb-2 ${theme.title}`}>GovTech</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>APEX (API Exchange) for government API management</li>
                <li>AI-powered transcription services for meetings</li>
                <li>Intelligent document processing for policy analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance and Ethics */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>4. AI Governance & Ethics Framework</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              Singapore has established a comprehensive AI governance framework, recognized internationally as a model for responsible AI:
            </p>
            
            <div className={`p-4 rounded-lg border ${theme.aiMessage}`}>
              <h3 className={`mb-2 ${theme.title}`}>Model AI Governance Framework (Second Edition)</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Transparency and explainability requirements</li>
                <li>Human oversight and accountability mechanisms</li>
                <li>Fairness and bias mitigation protocols</li>
                <li>Data privacy and security standards</li>
              </ul>
            </div>

            <div className="mt-4">
              <p><strong>AI Verify Foundation:</strong> Open-source toolkit for testing AI systems against governance standards, with participation from over 60 organizations globally.</p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>5. Implementation Challenges</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <div className={`p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800`}>
              <h3 className={`mb-2 ${theme.title}`}>Talent Gap</h3>
              <p>Shortage of AI specialists in government. Current initiatives include TechSkills Accelerator and partnerships with universities.</p>
            </div>

            <div className={`p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800`}>
              <h3 className={`mb-2 ${theme.title}`}>Legacy Systems Integration</h3>
              <p>Many agencies operate on legacy IT infrastructure incompatible with modern AI solutions. Modernization efforts ongoing but resource-intensive.</p>
            </div>

            <div className={`p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800`}>
              <h3 className={`mb-2 ${theme.title}`}>Data Silos</h3>
              <p>Cross-agency data sharing limited by privacy concerns and technical barriers. Government Data Architecture initiative addressing this.</p>
            </div>

            <div className={`p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800`}>
              <h3 className={`mb-2 ${theme.title}`}>Change Management</h3>
              <p>Resistance to AI adoption among public officers. Addressed through training programmes and change champions network.</p>
            </div>
          </div>
        </section>

        {/* Skills Development */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>6. Skills Development & Training</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              The Public Service Division has launched multiple initiatives to build AI literacy across all levels:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>AI for Everyone:</strong> Introductory course for all public officers, 20,000+ completed</li>
              <li><strong>AI Practitioners Programme:</strong> Technical training for data scientists and engineers</li>
              <li><strong>AI Champions Network:</strong> 500+ officers driving AI adoption in their agencies</li>
              <li><strong>Executive AI Programme:</strong> Strategic AI training for senior leadership</li>
            </ul>
          </div>
        </section>

        {/* International Comparison */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>7. International Benchmarking</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              Singapore ranks highly in international AI readiness indices:
            </p>
            <div className={`p-4 rounded-lg border ${theme.aiMessage}`}>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Oxford Insights Government AI Readiness Index 2023:</strong> #7 globally, #1 in Asia</li>
                <li><strong>IMD World Digital Competitiveness Ranking 2023:</strong> #4 globally</li>
                <li><strong>OECD Digital Government Index:</strong> Leading in digital-by-design approaches</li>
              </ul>
            </div>
            
            <p className="mt-4">
              <strong>Key Differentiators:</strong> Singapore's success attributed to coordinated whole-of-government approach, strong public-private partnerships, and balanced emphasis on innovation and governance.
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>8. Strategic Recommendations</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <div className={`p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800`}>
              <h3 className={`mb-2 ${theme.title}`}>1. Accelerate Cross-Agency Collaboration</h3>
              <p>Establish shared AI services and reusable models to reduce duplication and accelerate deployment.</p>
            </div>

            <div className={`p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800`}>
              <h3 className={`mb-2 ${theme.title}`}>2. Enhance Citizen Engagement</h3>
              <p>Develop public communication strategies to build trust in government AI systems and address concerns.</p>
            </div>

            <div className={`p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800`}>
              <h3 className={`mb-2 ${theme.title}`}>3. Invest in Sovereign AI Capabilities</h3>
              <p>Continue development of locally-trained models to reduce dependency on foreign AI providers.</p>
            </div>

            <div className={`p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800`}>
              <h3 className={`mb-2 ${theme.title}`}>4. Strengthen Regional Leadership</h3>
              <p>Expand AI capacity-building partnerships with ASEAN nations to promote regional AI standards.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>9. Conclusion</h2>
          <div className={`space-y-3 text-xs ${theme.chatItemText}`}>
            <p>
              Singapore's public service has made significant strides in AI adoption, establishing a strong foundation for continued innovation. The combination of strategic vision, robust governance, and practical implementation has positioned Singapore as a global reference point for government AI deployment.
            </p>
            <p>
              Moving forward, success will depend on maintaining the balance between innovation and responsibility, while addressing challenges in talent development, system integration, and public trust. With sustained commitment and investment, Singapore's public service is well-positioned to leverage AI for enhanced citizen services and operational excellence.
            </p>
          </div>
        </section>

        {/* References */}
        <section className="mb-8">
          <h2 className={`text-lg mb-3 ${theme.title}`}>References</h2>
          <div className={`space-y-2 text-xs ${theme.navItem}`}>
            <p>1. Smart Nation Singapore. (2023). National AI Strategy 2.0. Retrieved from smartnation.gov.sg</p>
            <p>2. AI Singapore. (2023). Annual Report 2022/2023. Retrieved from aisingapore.org</p>
            <p>3. GovTech Singapore. (2023). Government Technology Stack Documentation. Retrieved from tech.gov.sg</p>
            <p>4. IMDA. (2023). Model AI Governance Framework (Second Edition). Retrieved from imda.gov.sg</p>
            <p>5. Oxford Insights. (2023). Government AI Readiness Index. Retrieved from oxfordinsights.com</p>
            <p>6. Public Service Division. (2023). Public Service Transformation Roadmap. Retrieved from psd.gov.sg</p>
          </div>
        </section>

        {/* Download Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs">
            Download Report (PDF)
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs">
            Export as Word
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs">
            Share Report
          </button>
        </div>
      </div>
    </div>
  );
}
