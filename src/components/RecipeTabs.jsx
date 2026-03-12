import React from 'react';

export default function RecipeTabs({ recipes, activeId, onSelect }) {
  return (
    <nav className="tabs" role="tablist" aria-label="Recipe tabs">
      {recipes.map((r) => (
        <button
          key={r.id}
          role="tab"
          aria-selected={r.id === activeId}
          className={`tab${r.id === activeId ? ' tab--active' : ''}`}
          onClick={() => onSelect(r.id)}
        >
          {r.name}
        </button>
      ))}
    </nav>
  );
}
