'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Update {
  type: string;
  title: string;
  author: string;
  description: string;
}

const getColorByType = (type: string) => {
  switch (type) {
    case 'Project':
      return 'bg-blueuni';
    case 'News':
      return 'bg-reduni';
    case 'Members':
      return 'bg-bluelight';
    default:
      return 'bg-gray-500';
  }
};

const updatesData: Update[] = [
  {
    type: 'Project',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'Project',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Project',
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    description: 'Quantum computing is making waves in the industry.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  {
    type: 'News',
    title: 'AI Revolution',
    author: 'Maria Silva',
    description: 'New breakthroughs in AI research.',
  },
  {
    type: 'Members',
    title: 'New Team Member',
    author: 'John Doe',
    description: 'Welcome our newest team member to the research group.',
  },
  // Adicione mais itens aqui para testar
];

export default function UpdatesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxItemsToShow = 4;
  const totalItems = updatesData.length;

  // Verificar se não há itens no JSON
  if (totalItems === 0) {
    return (
      <div className="p-6">
        <h2 className="text-4xl font-normal mb-10 indent-10">See last update projects</h2>
        <p className="text-center text-lg text-gray-600">No updates available at the moment.</p>
      </div>
    );
  }

  // Definir o número máximo de transições como 4 (12 itens no total)
  const maxIterations = Math.min(Math.ceil(totalItems / maxItemsToShow), 4);

  // Avançar no carrossel
  const nextSlide = () => {
    if (currentIndex < maxIterations - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Retroceder no carrossel
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calcula se deve mostrar o botão "Ver Mais" (mostra quando tem mais de 12 itens)
  const shouldShowSeeMore = totalItems > 12 && currentIndex === maxIterations - 1;

  return (
    <div className="p-6">
      <h2 className="text-4xl font-normal mb-10 indent-10">See last update projects</h2>

      {/* Contêiner do carrossel */}
      <div className="relative w-full flex flex-col items-center">
        <div className="flex justify-center gap-4">
          {updatesData
            .slice(currentIndex * maxItemsToShow, (currentIndex + 1) * maxItemsToShow)
            .map((update, index) => (
              <div
                key={index}
                className="w-full sm:w-80 h-auto bg-white shadow-lg rounded-lg flex flex-col border-2 border-gray-300"
              >
                <div
                  className={`${getColorByType(update.type)} text-white p-2 rounded-t-lg text-center text-lg font-semibold`}
                >
                  {update.type}
                </div>
                <div className="p-8 text-center flex-1">
                  <h3 className="text-2xl font-semibold">{update.title}</h3>
                  <p className="text-md text-gray-600">Author: {update.author}</p>
                  <p className="mt-4 text-md">{update.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Botões de navegação (centralizados verticalmente) */}
        <div className="flex mt-10 items-center gap-4">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
            >
              <Image src="/arrow.svg" alt="Previous" width={40} height={40} />
            </button>
          )}
                  {/* Botão "Ver Mais" se houver mais de 12 itens */}
          {shouldShowSeeMore && (
            <div className="">
              <Link href="/updates" className="top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black py-3 px-3 rounded-full text-xl">
                See More
              </Link>
            </div>
          )}
          {!shouldShowSeeMore && currentIndex < maxIterations - 1 && (
            <button
              onClick={nextSlide}
              className="top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
            >
              <Image src="/arrow.svg" alt="Next" width={40} height={40} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
