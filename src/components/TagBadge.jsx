import React from 'react';

// Generate a consistent HSL color from a string
function tagColor(tag) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = ((hash % 360) + 360) % 360;
  return {
    background: `hsla(${hue}, 45%, 50%, 0.12)`,
    color: `hsl(${hue}, 55%, 70%)`,
    borderColor: `hsla(${hue}, 45%, 50%, 0.25)`,
  };
}

export default function TagBadge({ tag }) {
  const style = tagColor(tag);
  return (
    <span className="tag" style={style}>
      {tag}
    </span>
  );
}
