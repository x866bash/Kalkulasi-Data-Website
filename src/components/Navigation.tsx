import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Contact } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Analisis Metadata Website
        </div>
        <div className="flex space-x-4">
          <Link to="/">
            <Button 
              variant={location.pathname === '/' ? 'default' : 'outline'}
              className="flex items-center space-x-2"
            >
              <Home size={16} />
              <span>Beranda</span>
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant={location.pathname === '/contact' ? 'default' : 'outline'}
              className="flex items-center space-x-2"
            >
              <Contact size={16} />
              <span>Kontak</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;