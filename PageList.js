import React from 'react';

export default function PageList({ pages, onSelect, onAdd, selectedIndex }) {
  return (
    <div>
      <h2>Pages</h2>
      <ul>
        {pages.map((page, i) => (
          <li
            key={i}
            onClick={() => onSelect(i)}
            className={selectedIndex === i ? 'selected' : ''}
          >
            {page.title || `Untitled Page ${i + 1}`}
          </li>
        ))}
      </ul>
      <button onClick={onAdd}>+ Add Page</button>
    </div>
  );
}