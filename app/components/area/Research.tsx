// components/home/page/ResearchAreasComponent.tsx

import React from 'react';

const ResearchAreas: React.FC = () => {
  return (
    <div className="my-10 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Research Areas</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1: Artificial Intelligence */}
        <div className="w-full sm:w-64 p-4 bg-blueuni text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
          <p className="text-sm">
            We develop AI systems to solve complex problems, including natural language processing and autonomous systems.
          </p>
        </div>

        {/* Card 2: Machine Learning */}
        <div className="w-full sm:w-64 p-4 bg-green-600 text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
          <p className="text-sm">
            Our focus is on creating self-learning algorithms that can make predictions and decisions based on data.
          </p>
        </div>

        {/* Card 3: Data Science */}
        <div className="w-full sm:w-64 p-4 bg-yellow-600 text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Data Science</h3>
          <p className="text-sm">
            We analyze complex datasets to uncover insights, helping organizations make data-driven decisions.
          </p>
        </div>

        {/* Card 4: Web Development */}
        <div className="w-full sm:w-64 p-4 bg-reduni text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Entomology</h3>
            <p className="text-sm">
              Our team apply machine learning techniques to study and control mosquito populations, such as those carrying dengue.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;
