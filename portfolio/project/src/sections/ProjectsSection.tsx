import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'ml' | 'web' | 'other';
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Credit Card Fraud Detection Model',
    description: 'Developed and implemented a machine learning model for credit card fraud detection with advanced algorithms and feature engineering techniques.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    githubUrl: 'https://github.com/sanjeev212020',
    category: 'ml',
    date: 'November 2024'
  },
  {
    id: 2,
    title: 'Crop Recommendation System',
    description: 'Created a web-based application using Flask that provides crop recommendations based on soil parameters and environmental conditions.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['Python', 'Flask', 'Machine Learning'],
    githubUrl: 'https://github.com/sanjeev212020',
    category: 'web',
    date: 'February 2024'
  },
  {
    id: 3,
    title: 'House Automation System',
    description: 'Developed home automation systems using Arduino UNO, implementing smart home features for energy efficiency and security.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    tags: ['Arduino', 'Python', 'IoT'],
    githubUrl: 'https://github.com/sanjeev212020',
    category: 'other',
    date: 'March 2023'
  }
];

type Category = 'all' | 'ml' | 'web' | 'other';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'web', label: 'Web Development' },
    { value: 'other', label: 'Other Projects' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the key projects I've worked on, showcasing my skills in machine learning, web development, and problem-solving.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.value
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article 
                key={project.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;