// 🦶 COMPONENTE FOOTER
// ===================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR FOOTER:
// 
// 1. ACTUALIZAR INFORMACIÓN DE EMPRESA:
//    - Cambia nombre, descripción, derechos de autor
// 
// 2. MODIFICAR ENLACES:
//    - Edita los arrays 'quickLinks' y 'services'
//    - Añade/quita enlaces según necesites
// 
// 3. REDES SOCIALES:
//    - Actualiza URLs en 'socialLinks'
//    - Añade/quita redes sociales

import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  
  // 🔗 ENLACES RÁPIDOS - Personalízalos aquí
  const quickLinks = [
    'Inicio',
    'Comprar',
    'Alquilar', 
    'Vender',
    'Servicios',
    'Nosotros',
    'Blog',
    'Contacto'
  ];

  // 🛠️ SERVICIOS - Personalízalos aquí
  const services = [
    'Valoración gratuita',
    'Gestión legal',
    'Fotografía profesional',
    'Tasaciones oficiales',
    'Asesoramiento',
    'Financiación',
    'Seguros',
    'Reformas'
  ];

  // 📱 REDES SOCIALES - Actualiza con tus URLs reales
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/tu-inmobiliaria', name: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/tu-inmobiliaria', name: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/tu-inmobiliaria', name: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/tu-inmobiliaria', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 🏢 INFORMACIÓN DE LA EMPRESA */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">InmoExpress</h3>
                <p className="text-sm text-gray-400">Tu hogar ideal te espera</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Más de 15 años de experiencia ayudando a familias a encontrar su hogar ideal. 
              Profesionalidad, confianza y resultados garantizados.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 🔗 ENLACES RÁPIDOS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🛠️ SERVICIOS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 CONTACTO Y HORARIOS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            
            {/* Información de contacto */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+34 900 123 456</p>
                  <p className="text-gray-400 text-sm">Llama gratis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">info@inmoexpress.com</p>
                  <p className="text-gray-400 text-sm">Respuesta rápida</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Madrid, España</p>
                  <p className="text-gray-400 text-sm">Calle Gran Vía, 45</p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <h5 className="font-semibold mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Horarios
              </h5>
              <div className="space-y-2">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{schedule.day}</span>
                    <span className="text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 📄 PIE DE PÁGINA */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 InmoExpress. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;