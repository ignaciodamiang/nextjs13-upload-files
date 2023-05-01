'use client';
import { useState } from 'react';

function HomePage() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!file) return;
          console.log('Uploading file...');
        }}
      >
        <label>Upload file:</label>
        <input
          type='file'
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default HomePage;
