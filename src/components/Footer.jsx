import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-academia-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/radhika-kanwar" className="text-academia-text hover:text-academia-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/radhika-kanwar-0a0319239/" className="text-academia-text hover:text-academia-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} />
            </a>
            <a href="mailto:radhikakanwar863@gmail.com" className="text-academia-text hover:text-academia-accent transition-colors">
              <Mail size={15} />
            </a>
          </div>

          <div className="text-center text-sm text-academia-text whitespace-nowrap">
            © {new Date().getFullYear()} Radhika Kanwar & the respective publishers for book covers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
