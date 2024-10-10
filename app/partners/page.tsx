'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
  const [partnersData, setPartnersData] = useState<{ link: string; name: string; logo: string | null }[]>([]);

  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await fetch('/jsons/coen/partners.json');
        const text = await response.text();
        
        try {
          const data = JSON.parse(text);
          setPartnersData(data);
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
          console.error('Response text:', text);
        }
      } catch (error) {
        console.error('Error fetching partners data:', error);
      }
    };

    fetchPartnersData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8 mt-20">
      <h1 className="text-4xl font-bold mb-12">Partners</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-screen-lg">
        {partnersData.map((partner, index) => (
          <Link 
            href={partner.link} 
            key={index} 
            className="block group flex justify-center items-center relative transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={150}
                height={150}
                className="object-contain transition-transform duration-300 ease-in-out"
              />
            ) : (
              <div className="bg-reduni w-full h-36 flex items-center justify-center text-white font-bold transition-transform duration-300 ease-in-out">
                Logo here
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {partner.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
