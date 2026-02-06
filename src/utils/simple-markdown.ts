/**
 * Lightweight markdown-to-HTML converter for prototype use.
 * Supports: **bold**, numbered lists, unordered lists (- item), line breaks.
 * Only used with controlled simulation content — not user-generated input.
 */
export function renderSimpleMarkdown(text: string): string {
  const lines = text.split('\n');
  const htmlParts: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }

    // Collect consecutive numbered list items (allowing blank lines between them)
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        const l = lines[i].trim();
        if (/^\d+\.\s/.test(l)) {
          items.push(l.replace(/^\d+\.\s/, '').trim());
          i++;
        } else if (l === '') {
          // Skip blank lines within list, but peek ahead to see if list continues
          if (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1].trim())) {
            i++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      htmlParts.push(`<ol>${items.map(c => `<li>${inlineFormat(c)}</li>`).join('')}</ol>`);
      continue;
    }

    // Collect consecutive bullet list items (allowing blank lines between them)
    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        const l = lines[i].trim();
        if (/^[-*]\s/.test(l)) {
          items.push(l.replace(/^[-*]\s/, '').trim());
          i++;
        } else if (l === '') {
          if (i + 1 < lines.length && /^[-*]\s/.test(lines[i + 1].trim())) {
            i++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      htmlParts.push(`<ul>${items.map(c => `<li>${inlineFormat(c)}</li>`).join('')}</ul>`);
      continue;
    }

    // Regular paragraph — collect lines until blank line
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '' && !/^\d+\.\s/.test(lines[i].trim()) && !/^[-*]\s/.test(lines[i].trim())) {
      paraLines.push(lines[i].trim());
      i++;
    }
    htmlParts.push(`<p>${inlineFormat(paraLines.join('<br/>'))}</p>`);
  }

  return htmlParts.join('');
}

function inlineFormat(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
