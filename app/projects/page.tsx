'use client';

import Link from 'next/link';
import { useState } from 'react';

// Simulação de carregamento do arquivo JSON
const projectsData = [
  {
    title: "MLQuantify",
    author: "Luiz Fernando Luth Junior",
    area: "Machine Learning",
    specialization: "Quantification",
    description: "MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.MLQuantify is a Python library used for quantification in machine learning datasets, focusing on API integration and automated dataset evaluation.",
    links: {
      github: "https://github.com/",
      pypi: "https://pypi.org/"
    },
    updates: [
      {
        title: "Funding Received",
        date: "2024-01-10",
        description: "Received funding to support research in machine learning quantification techniques."
      },
      {
        title: "API Integration",
        date: "2024-03-15",
        description: "Successfully integrated the project with a quantification API for real-time data analysis."
      },
      {
        title: "New Dataset Module",
        date: "2024-05-05",
        description: "Developed a new module that improves dataset quantification accuracy and performance."
      },
      {
        title: "Research Publication",
        date: "2024-07-22",
        description: "Submitted research paper on innovative approaches in dataset quantification to a leading ML conference."
      }
    ],
    images: [
      { src: "images/photo1.jpg", name: "foto tirada no laboratorio" },
      { src: "images/photo2.jpg", name: "foto desenhada por membro Luiz Fernando" }
    ]
  },
  {
    title: "DataAnalyzer",
    author: "John Doe",
    area: "Data Science",
    specialization: "Data Analysis",
    description: "DataAnalyzer focuses on providing tools for large-scale data processing, with emphasis on efficient algorithms and scalability.",
    links: {
      github: "https://github.com/",
      pypi: "https://pypi.org/"
    },
    updates: [
      {
        title: "Initial Funding",
        date: "2023-11-30",
        description: "Secured initial funding to begin research and development of the data analysis platform."
      },
      {
        title: "Prototype Developed",
        date: "2024-02-17",
        description: "The prototype of the data analysis engine was completed, focusing on speed and scalability."
      },
      {
        title: "Algorithm Testing",
        date: "2024-04-10",
        description: "Began testing new algorithms for more efficient data processing and analysis."
      },
      {
        title: "Conference Paper",
        date: "2024-06-18",
        description: "Paper on novel data analysis techniques submitted to a top-tier data science conference."
      }
    ],
    images: [
      { src: "images/photo3.jpg", name: "foto tirada no laboratorio" },
      { src: "images/photo4.jpg", name: "foto desenhada por membro Rafael" }
    ]
  }
];

interface PopupProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

function Popup({ title, content, onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
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
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isImagesPopupVisible, setImagesPopupVisible] = useState(false);

  const handleOpenUpdates = (project: Project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  const handleOpenImages = (project: Project) => {
    setSelectedProject(project);
    setImagesPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setImagesPopupVisible(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto p-6 my-24">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
          <div className="flex justify-between">
            <div className="w-2/5">
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
            <div className="w-3/5 flex items-start">
              <p className="text-lg mb-1">{project.description}</p>
            </div>
          </div>

          <div className="mt-4">
            <button onClick={() => handleOpenUpdates(project)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Latest Updates</button>
            <button onClick={() => handleOpenImages(project)} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Show Images</button>
          </div>
        </div>
      ))}

      {isPopupVisible && selectedProject && (
        <Popup
          title={`${selectedProject.title} - Latest Updates`}
          content={
            <div>
              {selectedProject.updates.map((update, i) => (
                <div 
                  key={i} 
                  className="mb-4 ml-4 transition-transform duration-150 hover:scale-105" // Ajustado para diminuir a intensidade da animação
                >
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
    </div>
  );
}
