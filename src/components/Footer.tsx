import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative w-full bg-black/30 backdrop-blur-sm text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>Developed by Cedric Kent Centeno</p>
        </div>
        <div className="flex space-x-6">
          <a 
            href="mailto:cdrcknt@gmail.com" 
            className="hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/cdrcknt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/cedric-kent-centeno-8a9951274/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}