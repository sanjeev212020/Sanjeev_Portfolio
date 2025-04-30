import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'soft';
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'JavaScript', level: 80, category: 'languages' },
  { name: 'SQL', level: 85, category: 'languages' },
  { name: 'HTML/CSS', level: 80, category: 'languages' },
  { name: 'Machine Learning', level: 85, category: 'frameworks' },
  { name: 'Data Analysis', level: 90, category: 'frameworks' },
  { name: 'Algorithm Design', level: 85, category: 'frameworks' },
  { name: 'MySQL', level: 90, category: 'tools' },
  { name: 'Tableau', level: 85, category: 'tools' },
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Team Collaboration', level: 85, category: 'soft' },
  { name: 'Project Management', level: 80, category: 'soft' },
];

type Category = 'all' | 'languages' | 'frameworks' | 'tools' | 'soft';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'languages', label: 'Languages' },
    { value: 'frameworks', label: 'Frameworks & Concepts' },
    { value: 'tools', label: 'Tools' },
    { value: 'soft', label: 'Soft Skills' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My Skills
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through my academic journey and projects, I've developed a diverse set of technical and soft skills.
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
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;