"use client";
import React, { useState, useEffect } from 'react';

// Definição da interface para uma atualização
interface Update {
  title: string;
  author: string;
  date: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  imgs?: string[];
}

// Função para determinar a cor de acordo com o tipo
const getColorByType = (type: string) => {
  switch (type) {
    case 'Project':
      return 'bg-blueuni'; // Azul para Project
    case 'News':
      return 'bg-reduni'; // Vermelho para News
    case 'Members':
      return 'bg-bluelight'; // Azul claro para Members
    default:
      return 'bg-gray-500'; // Cor padrão caso o tipo não seja identificado
  }
};

// Componente para exibir o popup
const Popup = ({ update, onClose }: { update: Update; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 max-h-[80vh] overflow-auto relative">
        {/* Botão de fechar fixo */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-4xl"
        >
          &times; {/* Ícone de fechar */}
        </button>
        
        <h2 className="text-3xl font-semibold">{update.title}</h2>
        <p className="text-md text-gray-600">Date: {update.date}</p>
        <p className="mt-4 text-lg">{update.longDescription}</p>
        
        {update.imgs && update.imgs.length > 0 && (
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {update.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagem ${index + 1}`}
                className="h-24 w-24 object-cover rounded" // Tamanho fixo para as imagens
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Componente Updates
export default function UpdatesPage() {
  const [updatesData, setUpdatesData] = useState<Update[]>([]);
  const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/jsons/coen/updates.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setUpdatesData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching updates:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Agrupar atualizações por ano
  const updatesByYear: Record<string, Update[]> = {};

  updatesData.forEach(update => {
    const year = new Date(update.date).getFullYear();
    if (!updatesByYear[year]) {
      updatesByYear[year] = [];
    }
    updatesByYear[year].push(update);
  });

  // Ordenar os anos em ordem decrescente
  const sortedYears = Object.keys(updatesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container mx-auto p-6 h-screen overflow-y-auto">
      <h2 className="text-4xl font-normal mb-10">Latest Updates</h2>
      {sortedYears.map(year => (
        <div key={year} className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">{year}</h3>
          <div className="flex flex-wrap gap-4">
            {updatesByYear[year]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordenar por data decrescente
              .map((update, index) => (
                <div 
                  key={index} 
                  className="w-full sm:w-80 h-auto bg-white shadow-lg rounded-lg flex flex-col cursor-pointer hover-float"
                  onClick={() => setSelectedUpdate(update)} // Abre o popup ao clicar
                >
                  {/* Cor superior de acordo com o tipo */}
                  <div className={`${getColorByType(update.type)} text-white p-2 rounded-t-lg text-center text-lg font-semibold`}>
                    {update.type}
                  </div>
                  <div className="p-8 text-center flex-1">
                    <h4 className="text-2xl font-semibold">{update.title}</h4>
                    <p className="text-md text-gray-600">Date: {update.date}</p>
                    <p className="mt-4 text-md">{update.shortDescription}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      {/* Popup */}
      {selectedUpdate && (
        <Popup update={selectedUpdate} onClose={() => setSelectedUpdate(null)} />
      )}
    </div>
  );
}
