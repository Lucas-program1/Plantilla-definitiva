// 🏘️ COMPONENTE CATEGORÍAS DE PROPIEDADES
// =======================================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR CATEGORÍAS:
// 
// 1. MODIFICAR CATEGORÍAS:
//    - Edita el array 'categories' para añadir/quitar/modificar categorías
//    - Cambia iconos, títulos, descripciones y colores
// 
// 2. AÑADIR NUEVA CATEGORÍA:
//    - Agrega un nuevo objeto al array con: icon, title, description, color, category
//    - Asegúrate de que el 'category' coincida con los datos en 'properties.ts'
// 
// 3. CAMBIAR COLORES:
//    - Modifica las clases de Tailwind en 'color' para cada categoría

import React from 'react';
import { Home, Key, TrendingUp, Building, Users, Star } from 'lucide-react';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  
  // 🎨 CATEGORÍAS DISPONIBLES - Personaliza según tus necesidades
  const categories = [
    {
      icon: Home,
      title: 'Comprar Casa',
      description: 'Encuentra la casa perfecta para tu familia',
      color: 'bg-blue-500 hover:bg-blue-600',
      category: 'venta',
      count: '150+ propiedades'
    },
    {
      icon: Key,
      title: 'Alquilar',
      description: 'Propiedades en alquiler listas para habitar',
      color: 'bg-green-500 hover:bg-green-600',
      category: 'alquiler',
      count: '80+ propiedades'
    },
    {
      icon: TrendingUp,
      title: 'Vender Propiedad',
      description: 'Vende tu propiedad al mejor precio',
      color: 'bg-purple-500 hover:bg-purple-600',
      category: 'vender',
      count: 'Valoración gratuita'
    },
    {
      icon: Building,
      title: 'Obra Nueva',
      description: 'Descubre las últimas promociones',
      color: 'bg-indigo-500 hover:bg-indigo-600',
      category: 'obra-nueva',
      count: '25+ proyectos'
    },
    {
      icon: Users,
      title: 'Inversiones',
      description: 'Oportunidades de inversión rentables',
      color: 'bg-yellow-500 hover:bg-yellow-600',
      category: 'inversion',
      count: 'Alto rendimiento'
    },
    {
      icon: Star,
      title: 'Lujo',
      description: 'Propiedades exclusivas y premium',
      color: 'bg-red-500 hover:bg-red-600',
      category: 'lujo',
      count: 'Exclusivas'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué estás buscando?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestras diferentes categorías para encontrar exactamente lo que necesitas
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => onCategorySelect(category.category)}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Icono de fondo decorativo */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <category.icon className="h-16 w-16" />
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg text-white mb-4 ${category.color.split(' ')[0]} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    {category.count}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    Ver más →
                  </span>
                </div>
              </div>

              {/* Efecto hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;