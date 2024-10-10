'use client';
import React, { useEffect, useState } from 'react';

interface ResearchArea {
  name: string;
  color: string;
  description: string;
}

const ResearchAreas: React.FC = () => {
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);

  useEffect(() => {
    // Fetch data from JSON
    const fetchResearchAreas = async () => {
      try {
        const response = await fetch('/jsons/coen/research.json');
        const data = await response.json();
        setResearchAreas(data);
      } catch (error) {
        console.error("Error fetching research areas:", error);
      }
    };

    fetchResearchAreas();
  }, []);

  return (
    <div className="my-10 w-[80%] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Research Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <div key={index} className={`${area.color} text-white rounded-lg shadow-lg h-60`}>
            <h3 className="text-3xl font-semibold mb-4 p-6">{area.name}</h3>
            <p className="text-lg p-6">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;
