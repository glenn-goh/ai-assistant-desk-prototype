import { useState, useEffect } from 'react';
import { Search, Brain, PanelRight, Globe, FileText, GitFork, Users, Shield } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const featureCards = [
  {
    icon: Search,
    title: 'Powerful Tools, Built In',
    body: 'Search the web, chat with your documents, generate diagrams, and visualise data without leaving your conversation.',
  },
  {
    icon: Brain,
    title: 'Memory That Works For You',
    body: 'AIBots remembers your preferences and past context so you spend less time repeating yourself and more time on work that matters.',
  },
  {
    icon: PanelRight,
    title: 'Canvas',
    body: 'Edit, preview, and download documents side-by-side with your AI. Draft a report, refine it in Canvas, and export, all in one flow.',
  },
];

const toolItems = [
  {
    icon: Globe,
    title: 'Web Search',
    description: 'Get real-time information from the web, right inside your conversation.',
  },
  {
    icon: FileText,
    title: 'File Support',
    description: 'Chat with PDFs, Word docs, spreadsheets, images, and more. No conversion needed.',
  },
  {
    icon: GitFork,
    title: 'Mermaid Diagrams',
    description: 'Generate flowcharts, sequence diagrams, and more from plain text using Mermaid syntax.',
  },
  {
    icon: Users,
    title: 'Pre-built Assistants',
    description: 'Ready-made assistants customised for your role, from drafting emails to writing reports.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built for government. Your data stays within the approved boundary up to Restricted / Sensitive.',
  },
];

const footerLinks = [
  { label: 'Feedback', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Report Vulnerability', href: '#' },
];

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', system-ui, sans-serif" }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolledPastHero ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          backdropFilter: scrolledPastHero ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolledPastHero ? 'blur(12px)' : 'none',
          borderBottom: scrolledPastHero ? '1px solid #e5e7eb' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 tracking-tight">AIBots V2</span>
          <button
            onClick={onGetStarted}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #f5f5f5 1px, transparent 1px), linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 mb-6">
            V2 Beta
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
            Your AI Workspace.
            <br />
            One Place. Every Tool.
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-500 max-w-2xl mx-auto">
            Stop switching between apps. AIBots brings your tools, documents, and AI assistants into a single workspace built for public officers.
          </p>
          <div className="mt-8">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="mt-12 md:mt-16 aspect-video max-w-4xl mx-auto rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center shadow-lg">
            <span className="text-sm text-gray-400">Product screenshot / illustration placeholder</span>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Built for how you actually work
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Everything you need in one place. No more juggling tabs, tools, or copy-pasting between apps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <card.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-gray-900">{card.title}</h3>
                <p className="mt-3 text-base text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built-in Tools */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              No plugins. No setup. Just start.
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Everything is included and ready to use from your first conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {toolItems.map((tool) => (
              <div
                key={tool.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
                  <tool.icon size={20} className="text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-gray-900">{tool.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 md:py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2025 Government of Singapore
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
