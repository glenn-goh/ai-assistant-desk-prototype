const GRID_SIZE = 24;
const LINE_COLOR = '#f5f5f5';

export function HeroGrid() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(to right, ${LINE_COLOR} 1px, transparent 1px), linear-gradient(to bottom, ${LINE_COLOR} 1px, transparent 1px)`,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
    />
  );
}
