import { Code, Palette, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Computer Science Student at LPU
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a Computer Science student at Lovely Professional University, specializing in Data Science and Machine Learning. With a strong foundation in programming and analytics, I develop innovative solutions to complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Currently pursuing my Bachelor's degree, I've worked on various projects including a Credit Card Fraud Detection Model and a Crop Recommendation System, demonstrating my ability to apply theoretical knowledge to practical solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                    <Code size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Development</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Python, Java, and Machine Learning
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                    <Palette size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Data Analysis and Visualization
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Tools</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MySQL, Tableau, and Git
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src="https://media-hosting.imagekit.io/c54bafb185034b36/WhatsApp%20Image%202025-04-21%20at%2023.18.48_143fa66c.jpg?Expires=1839865798&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YPp6U-WBUkz584BQNb7LtuWyBhIpEthTDphnG99wjN2b9dByEAXEJBzDh8ItpWF4egwgg-m~W2YZpm5fzXpWWjZ47Pwjk0gK36FEFGPPQ4Jzec2kQZn8eiYX5uv~TmH-ZBN5JvkapmnBglvbM~4wGx95yggUFiLlZOdG5ysSgcKPHVr4L3rp4rIwwGXqFmY4-BcFWCc2UnenXUfUCrSoYQkS27TEcZjUv0CWuwb4cCvy2uqsnTAyE~18LSRJc8bmSM1nRMPk9xoKWb4SKk1yffo-CmrSxxtG8R8jfVDEGEjrmbHd60bEU5A-hTmg6awoygBiaDAXhKNC9EKwpvPW~A__"
                    alt="Sanjeev Upadhyay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white py-2 px-6 rounded-full shadow-lg">
                  <span className="font-bold">CS Student</span> at LPU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;