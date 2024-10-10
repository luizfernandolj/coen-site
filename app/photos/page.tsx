'use client';

import React, { useEffect, useState } from 'react';

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/jsons/coen/photos.json');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Laboratory Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="transform transition-transform hover:scale-105 duration-300">
            <img
              src={photo}
              alt={`Laboratory photo ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
