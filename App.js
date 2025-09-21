import React, { useState } from 'react';
import PageList from './components/PageList';
import PageEditor from './components/PageEditor';
import Timer from './components/Timer';
import CollageBoard from './components/CollageBoard';

export default function App() {
  const [pages, setPages] = useState([{ title: 'Page 1', content: '', background: '' }]);
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  function addPage() {
    setPages([...pages, { title: `Page ${pages.length + 1}`, content: '', background: '' }]);
    setSelectedPageIndex(pages.length);
  }

  function updatePage(updatedPage) {
    const newPages = [...pages];
    newPages[selectedPageIndex] = updatedPage;
    setPages(newPages);
  }

  return (
    <div className="container">
      <h1>Guide - Productivity PWA</h1>
      <div className="flex-row">
        <div className="page-list">
          <PageList
            pages={pages}
            onSelect={setSelectedPageIndex}
            onAdd={addPage}
            selectedIndex={selectedPageIndex}
          />
          <Timer />
          <CollageBoard />
        </div>
        <PageEditor page={pages[selectedPageIndex]} onChange={updatePage} />
      </div>
    </div>
  );
}