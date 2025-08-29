// 🏡 COMPONENTE CARD DE PROPIEDAD
// ===============================
// 
// 📝 ESTE COMPONENTE MUESTRA CADA PROPIEDAD INDIVIDUAL
// 
// Las propiedades se pasan desde el componente padre y se muestran automáticamente.
// Para modificar la información mostrada, edita el archivo 'data/properties.ts'

import React from 'react';
import { MapPin, Bed, Bath, Square, Car, Leaf, Building } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  // Formatear precio según categoría (venta o alquiler)
  const formatPrice = (price: number, category: string) => {
    const formattedPrice = new Intl.NumberFormat('es-ES').format(price);
    return category === 'alquiler' 
      ? `${formattedPrice}€/mes` 
      : `${formattedPrice}€`;
  };

  // Mostrar badge de categoría
  const getCategoryBadge = () => {
    const styles = {
      venta: 'bg-green-100 text-green-800',
      alquiler: 'bg-blue-100 text-blue-800',
      compra: 'bg-purple-100 text-purple-800'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${styles[property.category]}`}>
        {property.category}
      </span>
    );
  };

  return (
    <div 
      onClick={() => onClick(property)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      {/* 🖼️ IMAGEN PRINCIPAL */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          {getCategoryBadge()}
        </div>

        {/* Badge destacado (si aplica) */}
        {property.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Destacado
          </div>
        )}

        {/* Overlay con precio en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>

      {/* 📄 INFORMACIÓN DE LA PROPIEDAD */}
      <div className="p-6">
        
        {/* Precio */}
        <div className="text-2xl font-bold text-blue-600 mb-2">
          {formatPrice(property.price, property.category)}
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Ubicación */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Características principales */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}m²</span>
            </div>
          </div>
        </div>

        {/* Características adicionales */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.parking && (
            <div className="flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <Car className="h-3 w-3 mr-1" />
              Parking
            </div>
          )}
          {property.garden && (
            <div className="flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <Leaf className="h-3 w-3 mr-1" />
              Jardín
            </div>
          )}
          {property.elevator && (
            <div className="flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <Building className="h-3 w-3 mr-1" />
              Ascensor
            </div>
          )}
        </div>

        {/* Botón ver detalles */}
        <button className="w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 py-3 rounded-lg transition-all duration-300 font-medium">
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;