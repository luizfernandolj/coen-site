import React from 'react';

const ResearchAreas: React.FC = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Research Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1: Artificial Intelligence */}
        <div className="bg-blueuni text-white rounded-lg shadow-lg h-60">
          <h3 className="text-3xl font-semibold mb-4 p-6">Artificial Intelligence</h3>
          <p className="text-lg p-6">
            We develop AI systems to solve complex problems, including natural language processing and autonomous systems.
          </p>
        </div>

        {/* Card 2: Machine Learning */}
        <div className="bg-green-600 text-white rounded-lg shadow-lg h-60">
          <h3 className="text-3xl font-semibold mb-4 p-6">Machine Learning</h3>
          <p className="text-lg p-6">
            Our focus is on creating self-learning algorithms that can make predictions and decisions based on data.
          </p>
        </div>

        {/* Card 3: Data Science */}
        <div className="bg-yellow-600 text-white rounded-lg shadow-lg h-60">
          <h3 className="text-3xl font-semibold mb-4 p-6">Data Science</h3>
          <p className="text-lg p-6">
            We analyze complex datasets to uncover insights, helping organizations make data-driven decisions.
          </p>
        </div>

        {/* Card 4: Web Development */}
        <div className="bg-reduni text-white rounded-lg shadow-lg h-60">
          <h3 className="text-3xl font-semibold mb-4 p-6">Entomology</h3>
          <p className="text-lg p-6">
            Our team apply machine learning techniques to study and control mosquito populations, such as those carrying dengue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;
