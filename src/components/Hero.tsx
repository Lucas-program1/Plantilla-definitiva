// 🎯 COMPONENTE SECCIÓN HERO
// =========================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR:
// 
// 1. CAMBIAR IMAGEN DE FONDO:
//    - Reemplaza la URL en el estilo backgroundImage
//    - Usa imágenes de alta resolución (mínimo 1920x1080)
//    - Ejemplo: "https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg"
// 
// 2. MODIFICAR TEXTOS:
//    - Cambia el título principal y subtítulo
//    - Personaliza el texto del botón CTA
// 
// 3. ACTUALIZAR ESTADÍSTICAS:
//    - Modifica los números en el array 'stats'
//    - Añade o quita estadísticas según tus datos reales

import React from 'react';
import { Search, MapPin, Home as HomeIcon, Users, Award } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  // 📊 ESTADÍSTICAS - Personaliza estos números con tus datos reales
  const stats = [
    { icon: HomeIcon, number: '500+', label: 'Propiedades' },
    { icon: Users, number: '200+', label: 'Clientes Felices' },
    { icon: Award, number: '15+', label: 'Años Experiencia' },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        // 🖼️ CAMBIAR IMAGEN DE FONDO AQUÍ:
        backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 📝 TÍTULO PRINCIPAL - Personalízalo aquí */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Encuentra tu
          <span className="text-blue-400 block">Hogar Ideal</span>
        </h1>
        
        {/* 📝 SUBTÍTULO - Personalízalo aquí */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Más de 15 años ayudando a familias a encontrar la casa de sus sueños. 
          Tu próximo hogar está a un clic de distancia.
        </p>

        {/* 🔍 BUSCADOR PRINCIPAL */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Tipo de operación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Operación</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Seleccionar</option>
                <option value="venta">Comprar</option>
                <option value="alquiler">Alquilar</option>
              </select>
            </div>

            {/* Tipo de propiedad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Todos</option>
                <option value="piso">Piso</option>
                <option value="casa">Casa</option>
                <option value="chalet">Chalet</option>
                <option value="duplex">Duplex</option>
                <option value="estudio">Estudio</option>
              </select>
            </div>

            {/* Ubicación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ciudad, zona..." 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Botón buscar */}
            <div className="flex items-end">
              <button 
                onClick={() => onSectionChange('venta')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <Search className="h-5 w-5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>

        {/* 📊 ESTADÍSTICAS - Modifica el array 'stats' arriba para cambiar estos datos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animación de scroll suave */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;