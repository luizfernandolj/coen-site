'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Publication {
  citation: string;
  link: string;
  date: string;
  researchArea: string;
}

interface ResearchArea {
  name: string;
  color: string;
  description: string;
}

const groupByAreaAndYear = (publications: Publication[]) => {
  return publications.reduce((acc, publication) => {
    const year = new Date(publication.date).getFullYear();
    if (!acc[publication.researchArea]) {
      acc[publication.researchArea] = {};
    }
    if (!acc[publication.researchArea][year]) {
      acc[publication.researchArea][year] = [];
    }
    acc[publication.researchArea][year].push(publication);
    return acc;
  }, {} as Record<string, Record<number, Publication[]>>);
};

export default function Publications() {
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  const [publicationsData, setPublicationsData] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchResearchAreas = async () => {
      try {
        const response = await fetch('/jsons/coen/research.json');
        const data = await response.json();
        setResearchAreas(data);
      } catch (error) {
        console.error('Error fetching research areas:', error);
      }
    };

    const fetchPublications = async () => {
      try {
        const response = await fetch('/jsons/coen/publications.json');
        const data = await response.json();
        setPublicationsData(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchResearchAreas();
    fetchPublications();
  }, []);

  const groupedPublications = groupByAreaAndYear(publicationsData);

  return (
    <div className="container mx-auto p-2 my-36 min-h-screen">
      {Object.keys(groupedPublications).map((area) => (
        <div key={area} className="mb-8 bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">{area}</h2>
          {Object.keys(groupedPublications[area]).sort().map((year) => (
            <div key={year} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{year}</h3>
              <div className="flex flex-col gap-4">
                {groupedPublications[area][Number(year)].map((publication: Publication, index: number) => (
                  <div key={index} className="border bg-white p-4">
                    <Link href={publication.link} className="text-base font-normal mb-2 hover:underline">
                      {publication.citation}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
