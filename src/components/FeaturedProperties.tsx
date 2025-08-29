// ⭐ COMPONENTE PROPIEDADES DESTACADAS
// ===================================
// 
// 📝 PARA DESTACAR PROPIEDADES:
// 
// 1. Ve al archivo 'data/properties.ts'
// 2. Añade 'featured: true' a las propiedades que quieras destacar
// 3. Solo las propiedades con 'featured: true' aparecerán en esta sección

import React from 'react';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import { getFeaturedProperties } from '../data/properties';
import { Property } from '../data/properties';
import { useState } from 'react';

const FeaturedProperties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const featuredProperties = getFeaturedProperties();

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  if (featuredProperties.length === 0) {
    return null; // No mostrar la sección si no hay propiedades destacadas
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección especial de propiedades únicas con características excepcionales
          </p>
        </div>

        {/* Grid de propiedades destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              onClick={handlePropertyClick}
            />
          ))}
        </div>

        {/* Modal de detalles */}
        <PropertyModal 
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default FeaturedProperties;