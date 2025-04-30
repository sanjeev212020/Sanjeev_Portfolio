import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-indigo-400">
                Portfolio
              </a>
              <p className="mt-2 text-gray-400 max-w-xs">
                Creating beautiful, functional web experiences with cutting-edge technologies.
              </p>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:hello@example.com" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;