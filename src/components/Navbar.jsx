import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Projects', path: '/projects' },
    { title: 'Journey Snapshots', path: '/journey' },
    { title: 'Reading List', path: '/reading' },
  ];

  return (
    <nav className="bg-academia-primary py6 border-b border-academia-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold hover:text-academia-accent">RK</Link>
          
          <div className="hidden md:flex space-x-8 text-academia-text">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className="hover:text-academia-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden hover:text-academia-accent" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:text-academia-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
