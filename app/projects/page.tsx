'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface PopupProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

function Popup({ title, content, onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in max-w-lg w-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {content}
        <button onClick={onClose} className="mt-4 bg-reduni text-white px-4 py-2 rounded-lg hover:bg-red-600">Close</button>
      </div>
    </div>
  );
}

interface Project {
  title: string;
  author: string;
  area: string;
  specialization: string;
  description: string;
  links: {
    github: string;
    pypi: string;
  };
  updates: {
    title: string;
    date: string;
    description: string;
  }[];
  images: {
    src: string;
    name: string;
  }[];
  teamMembers: string[];
}

interface Member {
  name: string;
  position: string;
  active: boolean;
  urlLinkedin: string;
  urlGithub: string;
  urlLattes: string;
  profilePicture: string;
}

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [membersData, setMembersData] = useState<Member[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isImagesPopupVisible, setImagesPopupVisible] = useState(false);
  const [isMembersPopupVisible, setMembersPopupVisible] = useState(false);
  const defaultProfilePicture = '/persons/person.jpg';

  useEffect(() => {
    fetch('/jsons/coen/projects.json')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error fetching projects data:', error));

    fetch('/jsons/coen/members.json')
      .then(response => response.json())
      .then(data => setMembersData(data))
      .catch(error => console.error('Error fetching members data:', error));
  }, []);

  const handleOpenUpdates = (project: Project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  const handleOpenImages = (project: Project) => {
    setSelectedProject(project);
    setImagesPopupVisible(true);
  };

  const handleOpenMembers = (project: Project) => {
    setSelectedProject(project);
    setMembersPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setImagesPopupVisible(false);
    setMembersPopupVisible(false);
    setSelectedProject(null);
  };

  const normalizeName = (name: string) => {
    return name.trim().toLowerCase();
  };

  const getProjectMembers = (teamMembers: string[]) => {
    return teamMembers.map(memberName => {
      const normalizedMemberName = normalizeName(memberName);

      const matchingMembers = membersData.filter(member => {
        const normalizedFullName = normalizeName(member.name);
        return normalizedFullName.startsWith(normalizedMemberName);
      });

      if (matchingMembers.length === 1) {
        return matchingMembers[0];
      }

      return {
        name: memberName,
        position: 'Unknown',
        active: false,
        urlLinkedin: '',
        urlGithub: '',
        urlLattes: '',
        profilePicture: defaultProfilePicture,
      };
    });
  };

  return (
    <div className="container mx-auto p-6 my-24">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/5">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-md mb-1"><strong>Author:</strong> {project.author}</p>
              <p className="text-md mb-1"><strong>Area:</strong> {project.area}</p>
              <p className="text-md mb-1"><strong>Specialization:</strong> {project.specialization}</p>

              <div className="mt-2">
                <strong className="text-lg">Links:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <Link href={project.links.github} target="_blank" className="text-reduni hover:underline">GitHub</Link>
                  </li>
                  <li>
                    <Link href={project.links.pypi} target="_blank" className="text-reduni hover:underline">PyPI</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 flex items-start mt-4 md:mt-0">
              <p className="text-lg mb-1">{project.description}</p>
            </div>
          </div>

            <div className="mt-4 flex flex-row flex-wrap gap-2">
            <button onClick={() => handleOpenUpdates(project)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Latest Updates</button>
            <button onClick={() => handleOpenImages(project)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Show Images</button>
            <button onClick={() => handleOpenMembers(project)} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">Show Members</button>
            </div>
        </div>
      ))}

      {isPopupVisible && selectedProject && (
        <Popup
          title={`${selectedProject.title} - Latest Updates`}
          content={
            <div>
              {selectedProject.updates.map((update, i) => (
                <div key={i} className="mb-4 ml-4 transition-transform duration-150 hover:scale-105">
                  <h4 className="font-bold text-lg">{update.title}</h4>
                  <p className="text-sm mb-1">{update.date}</p>
                  <p>{update.description}</p>
                </div>
              ))}
            </div>
          }
          onClose={handleClosePopup}
        />
      )}

      {isImagesPopupVisible && selectedProject && (
        <Popup
          title={`${selectedProject.title} - Images`}
          content={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.images.map((image, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img src={image.src} alt={image.name} className="rounded-lg shadow-md hover:scale-105" />
                  <p className="mt-2 text-center">{image.name}</p>
                </div>
              ))}
            </div>
          }
          onClose={handleClosePopup}
        />
      )}

      {isMembersPopupVisible && selectedProject && (
        <Popup
          title={`${selectedProject.title} - Team Members`}
          content={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {getProjectMembers(selectedProject.teamMembers).map((member, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img src={member.profilePicture} alt={member.name} className="rounded-full w-24 h-24 shadow-md hover:scale-105" />
                  <p className="mt-2 text-center font-bold">{member.name}</p>
                  <p className="text-center">{member.position}</p>
                </div>
              ))}
            </div>
          }
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
