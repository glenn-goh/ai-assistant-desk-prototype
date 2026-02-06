/**
 * Lightweight markdown-to-HTML converter for prototype use.
 * Supports: **bold**, numbered lists, unordered lists (- item), line breaks.
 * Only used with controlled simulation content — not user-generated input.
 */
export function renderSimpleMarkdown(text: string): string {
  return text
    .split('\n\n')
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      // Check if the block is a list (numbered or bulleted)
      const lines = trimmed.split('\n');
      const isNumberedList = lines.every(l => /^\d+\.\s/.test(l.trim()) || l.trim() === '');
      const isBulletList = lines.every(l => /^[-*]\s/.test(l.trim()) || l.trim() === '');

      if (isNumberedList || isBulletList) {
        const tag = isNumberedList ? 'ol' : 'ul';
        const items = lines
          .filter(l => l.trim())
          .map(l => {
            const content = l.replace(/^\d+\.\s|^[-*]\s/, '').trim();
            return `<li>${inlineFormat(content)}</li>`;
          })
          .join('');
        return `<${tag}>${items}</${tag}>`;
      }

      return `<p>${inlineFormat(trimmed.replace(/\n/g, '<br/>'))}</p>`;
    })
    .join('');
}

function inlineFormat(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
