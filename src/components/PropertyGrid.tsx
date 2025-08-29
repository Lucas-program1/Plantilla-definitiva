// 🏘️ COMPONENTE GRID DE PROPIEDADES
// =================================
// 
// 📝 ESTE COMPONENTE ORGANIZA Y MUESTRA LAS PROPIEDADES EN FORMATO GRID
// 
// Para modificar las propiedades mostradas, edita 'data/properties.ts'
// Para cambiar filtros, modifica 'components/PropertyFilters.tsx'

import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import PropertyModal from './PropertyModal';
import { Property, mockProperties } from '../data/properties';

interface PropertyGridProps {
  category?: string;
  title: string;
  showFilters?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ category, title, showFilters = true }) => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar propiedades por categoría inicial
  useEffect(() => {
    let filtered = mockProperties;
    
    if (category) {
      filtered = filtered.filter(property => property.category === category);
    }
    
    setFilteredProperties(filtered);
  }, [category]);

  // Manejar filtros aplicados
  const handleFiltersApply = (filters: any) => {
    let filtered = mockProperties;

    // Filtrar por categoría si está definida
    if (category) {
      filtered = filtered.filter(property => property.category === category);
    }

    // Aplicar filtros adicionales
    if (filters.type && filters.type !== '') {
      filtered = filtered.filter(property => property.type === filters.type);
    }

    if (filters.location && filters.location !== '') {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(property => property.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(property => property.price <= filters.maxPrice);
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= filters.bedrooms);
    }

    setFilteredProperties(filtered);
  };

  // Abrir modal con detalles de propiedad
  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 📋 TÍTULO DE SECCIÓN */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de propiedades cuidadosamente seleccionadas
          </p>
        </div>

        {/* 🔧 FILTROS (si están habilitados) */}
        {showFilters && (
          <PropertyFilters onFiltersChange={handleFiltersApply} />
        )}

        {/* 📊 CONTADOR DE RESULTADOS */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredProperties.length} propiedades encontradas
            {category && ` en ${category}`}
          </p>
        </div>

        {/* 🏠 GRID DE PROPIEDADES */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron propiedades con los filtros seleccionados</p>
            <button 
              onClick={() => handleFiltersApply({})}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property}
                onClick={handlePropertyClick}
              />
            ))}
          </div>
        )}

        {/* 🔗 LLAMADA A LA ACCIÓN */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Ver todas las propiedades
            </button>
          </div>
        )}
      </div>

      {/* 🪟 MODAL DE DETALLES */}
      <PropertyModal 
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PropertyGrid;