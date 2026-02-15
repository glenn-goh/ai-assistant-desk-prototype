import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import classes from './MermaidDiagram.module.css';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
  themeVariables: {
    primaryColor: '#e5e7eb',
    primaryTextColor: '#111827',
    primaryBorderColor: '#9ca3af',
    lineColor: '#6b7280',
    secondaryColor: '#f3f4f6',
    tertiaryColor: '#f9fafb',
  },
});

let idCounter = 0;

export default function MermaidDiagram({ chart, maxWidth }: { chart: string; maxWidth?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const id = `mermaid-${idCounter++}`;
    mermaid.render(id, chart).then(({ svg: renderedSvg }) => {
      setSvg(renderedSvg);
    });
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={classes.diagram}
      style={maxWidth ? { maxWidth } : undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
