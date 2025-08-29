// 🏠 COMPONENTE HEADER PRINCIPAL
// ==============================
// 
// 📝 PARA PERSONALIZAR EL HEADER:
// 
// 1. CAMBIAR LOGO:
//    - Reemplaza el icono Home de lucide-react por tu logo
//    - O usa una imagen: <img src="/tu-logo.png" alt="Tu Inmobiliaria" />
// 
// 2. MODIFICAR NOMBRE DE LA EMPRESA:
//    - Cambia "InmoExpress" por el nombre de tu inmobiliaria
// 
// 3. ACTUALIZAR NAVEGACIÓN:
//    - Modifica los elementos del array 'navItems'
//    - Añade o quita secciones según necesites
// 
// 4. CAMBIAR COLORES:
//    - Modifica las clases de Tailwind para personalizar colores
//    - bg-white/95 = fondo semi-transparente blanco
//    - text-blue-600 = color azul corporativo

import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onSectionChange, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 📝 PERSONALIZAR NAVEGACIÓN: Modifica este array para cambiar las secciones
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'venta', label: 'Comprar' },
    { id: 'alquiler', label: 'Alquilar' },
    { id: 'vender', label: 'Vender' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* 🏢 LOGO Y NOMBRE - Personalízalo aquí */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSectionChange('inicio')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">InmoExpress</h1>
              <p className="text-xs text-gray-500">Tu hogar ideal te espera</p>
            </div>
          </div>

          {/* 📱 NAVEGACIÓN DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  activeSection === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 📞 CONTACTO RÁPIDO */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+34 900 123 456</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@inmoexpress.com</span>
            </div>
          </div>

          {/* 📱 BOTÓN MENÚ MÓVIL */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 📱 MENÚ MÓVIL DESPLEGABLE */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>info@inmoexpress.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;