import React from 'react';
import Link from 'next/link';

// Definição da interface para uma atualização
interface Update {
  type: string;
  title: string;
  author: string;
  description: string;
  date?: string;
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

// Dados simulados para as atualizações
const updatesData: Update[] = [
  {
    type: 'Project',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  },
  {
    type: 'News',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  },
  {
    type: 'Members',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  },
  {
    type: 'Project',
    title: 'MLQuantify',
    author: 'Luiz Fernando',
    description: 'The project gained a thousand dollars of investment.',
  }
];

// Componente Updates
export default function UpdatesPage() {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-normal mb-10 indent-10">See last update projects</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {updatesData.map((update, index) => (
          <div key={index} className="w-full sm:w-80 h-auto bg-white shadow-lg rounded-lg flex flex-col">
            {/* Cor superior de acordo com o tipo */}
            <div className={`${getColorByType(update.type)} text-white p-2 rounded-t-lg text-center text-lg font-semibold`}>
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

      {/* Botão de navegação */}
      <div className="flex justify-center mt-10">
        <Link href="/updates" className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded-full text-4xl">
          →
        </Link>
      </div>
      </div>
  );
}
