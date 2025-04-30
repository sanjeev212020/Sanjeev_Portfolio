import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (heading && subtitle && cta) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';

      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        heading.style.transition = 'opacity 0.8s, transform 0.8s';
      }, 300);

      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        subtitle.style.transition = 'opacity 0.8s, transform 0.8s';
      }, 600);

      setTimeout(() => {
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
        cta.style.transition = 'opacity 0.8s, transform 0.8s';
      }, 900);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100 dark:bg-indigo-900/20 filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-200 dark:bg-indigo-800/20 filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white"
          >
            Sanjeev <span className="text-indigo-600 dark:text-indigo-400">Upadhyay</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A passionate Computer Science student specializing in Data Science and Machine Learning, building innovative solutions with modern technologies.
          </p>
          
          <div ref={ctaRef} className="space-y-6 pt-4">
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/sanjeev212020" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanjeev00121" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="mailto:sanjeevupadhyay4493@gmail.com" 
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            
            <a 
              href="#about" 
              className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            >
              <span>Learn more about me</span>
              <ArrowDown className="ml-2 w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;