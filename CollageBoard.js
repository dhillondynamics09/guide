import React, { useState } from 'react';

export default function CollageBoard() {
  const [photos, setPhotos] = useState([]);

  function addPhotos(e) {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => URL.createObjectURL(file));
    setPhotos(prev => [...prev, ...newPhotos]);
  }

  function removePhoto(index) {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="collage-board">
      <h3>Vision Board (Collage)</h3>
      <input type="file" accept="image/*" multiple onChange={addPhotos} />
      <div className="collage-photos">
        {photos.map((src, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <img src={src} alt={`collage-${i}`} />
            <button onClick={() => removePhoto(i)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}