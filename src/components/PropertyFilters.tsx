// 🔧 COMPONENTE FILTROS DE PROPIEDADES
// ====================================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR FILTROS:
// 
// 1. AÑADIR NUEVOS FILTROS:
//    - Agrega nuevos campos al estado 'filters'
//    - Crea el HTML correspondiente
//    - Actualiza la función 'handleSubmit' para incluir el nuevo filtro
// 
// 2. MODIFICAR RANGOS DE PRECIO:
//    - Cambia los valores en 'priceRanges'
//    - Adapta según tu mercado local
// 
// 3. ACTUALIZAR TIPOS DE PROPIEDAD:
//    - Modifica el array 'propertyTypes'

import React, { useState } from 'react';
import { SlidersHorizontal, X, Search } from 'lucide-react';

interface Filters {
  type: string;
  location: string;
  minPrice: number | '';
  maxPrice: number | '';
  bedrooms: number | '';
  bathrooms: number | '';
  minArea: number | '';
  maxArea: number | '';
}

interface PropertyFiltersProps {
  onFiltersChange: (filters: Filters) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minArea: '',
    maxArea: ''
  });

  // 🏠 TIPOS DE PROPIEDAD - Personaliza según tus necesidades
  const propertyTypes = [
    { value: '', label: 'Todos los tipos' },
    { value: 'piso', label: 'Piso' },
    { value: 'casa', label: 'Casa' },
    { value: 'chalet', label: 'Chalet' },
    { value: 'duplex', label: 'Duplex' },
    { value: 'estudio', label: 'Estudio' }
  ];

  // 💰 RANGOS DE PRECIO PREDEFINIDOS - Ajusta según tu mercado
  const priceRanges = [
    { value: '', label: 'Cualquier precio' },
    { min: 0, max: 150000, label: 'Hasta 150.000€' },
    { min: 150000, max: 300000, label: '150.000€ - 300.000€' },
    { min: 300000, max: 500000, label: '300.000€ - 500.000€' },
    { min: 500000, max: 1000000, label: '500.000€ - 1.000.000€' },
    { min: 1000000, max: Infinity, label: 'Más de 1.000.000€' }
  ];

  // Manejar cambios en los filtros
  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Aplicar filtros
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFiltersChange(filters);
    setIsOpen(false);
  };

  // Limpiar filtros
  const handleClearFilters = () => {
    const clearedFilters = {
      type: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      minArea: '',
      maxArea: ''
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="mb-8">
      {/* 🔘 BOTÓN PARA ABRIR FILTROS */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filtros avanzados</span>
        </button>

        {/* Contador de filtros activos */}
        {Object.values(filters).some(value => value !== '') && (
          <button
            onClick={handleClearFilters}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <X className="h-4 w-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      {/* 🎛️ PANEL DE FILTROS */}
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Tipo de propiedad */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de propiedad
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ubicación */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ciudad, barrio..."
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Precio mínimo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio mínimo
                </label>
                <input
                  type="number"
                  placeholder="€"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Precio máximo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio máximo
                </label>
                <input
                  type="number"
                  placeholder="€"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Habitaciones */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Habitaciones mínimas
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Baños */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Baños mínimos
                </label>
                <select
                  value={filters.bathrooms}
                  onChange={(e) => handleFilterChange('bathrooms', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </select>
              </div>

              {/* Área mínima */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área mínima (m²)
                </label>
                <input
                  type="number"
                  placeholder="m²"
                  value={filters.minArea}
                  onChange={(e) => handleFilterChange('minArea', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Área máxima */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área máxima (m²)
                </label>
                <input
                  type="number"
                  placeholder="m²"
                  value={filters.maxArea}
                  onChange={(e) => handleFilterChange('maxArea', e.target.value ? Number(e.target.value) : '')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Buscar</span>
              </button>
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;