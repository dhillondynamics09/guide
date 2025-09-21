import React, { useState, useEffect } from 'react';

export default function PageEditor({ page, onChange }) {
  const [bgImage, setBgImage] = useState(page.background || '');

  useEffect(() => {
    setBgImage(page.background || '');
  }, [page]);

  function handleBgChange(e) {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBgImage(url);
      onChange({ ...page, background: url });
    }
  }

  function handleContentChange(e) {
    onChange({ ...page, content: e.target.value });
  }

  return (
    <div
      className="page-editor"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
    >
      <textarea
        value={page.content || ''}
        onChange={handleContentChange}
        placeholder="Write your notes here..."
      />
      <label>
        Set Background Image
        <input type="file" accept="image/*" onChange={handleBgChange} style={{ display: 'none' }} />
      </label>
    </div>
  );
}