'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const positions = ["All", "Cordenator", "Collaborator", "Master Student", "Student"];

export default function Members() {
  interface Member {
    name: string;
    position: string;
    profilePicture: string;
    active: boolean;
    urlLinkedin: string;
    urlGithub: string;
    urlLattes: string;
  }

  const [membersData, setMembersData] = useState<Member[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/jsons/coen/members.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setMembersData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
        setLoading(false);
      });
  }, []);

  const filteredMembers = selectedPosition === "All" 
    ? membersData 
    : membersData.filter(member => member.position === selectedPosition);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8 mt-20">
      <h1 className="text-4xl font-bold mb-12">Members</h1>
      
      {/* Abas para seleção de cargo */}
      <div className="mb-8">
        {positions.map((position) => (
          <button 
            key={position} 
            onClick={() => setSelectedPosition(position)} 
            className={`mr-4 p-2 rounded ${selectedPosition === position ? 'bg-reduni text-white' : 'bg-gray-200'}`}
          >
            {position}
          </button>
        ))}
      </div>

      {/* Membros Ativos e Inativos */}
      <div className="w-full max-w-screen-lg">
        <h2 className="text-2xl font-semibold mb-4">Active Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredMembers.filter(member => member.active).map((member, index) => (
            <div key={index} className="rounded-lg p-4 flex flex-col items-center">
              <Image
                src={member.profilePicture}
                alt={`${member.name}'s Profile Picture`}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-center">{member.name}</h3>
              <p className="mb-2">{member.position}</p>
              <div className="flex space-x-2">
                <Link href={member.urlLinkedin} className="text-blue-500" target="_blank">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href={member.urlGithub} className="text-blue-500" target="_blank">
                  <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                </Link>
                <Link href={member.urlLattes} className="text-blue-500" target="_blank">
                  <Image src="/lattes.svg" alt="Lattes" width={24} height={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Inactive Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredMembers.filter(member => !member.active).map((member, index) => (
            <div key={index} className="rounded-lg p-4 flex flex-col items-center">
              <Image
                src={member.profilePicture}
                alt={`${member.name}'s Profile Picture`}
                width={150}
                height={150}
                className="rounded-full mb-4 filter grayscale"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="mb-2">{member.position}</p>
              <div className="flex space-x-2">
                <Link href={member.urlLinkedin} className="text-blue-500" target="_blank">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href={member.urlGithub} className="text-blue-500" target="_blank">
                  <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                </Link>
                <Link href={member.urlLattes} className="text-blue-500" target="_blank">
                  <Image src="/lattes.svg" alt="Lattes" width={24} height={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
