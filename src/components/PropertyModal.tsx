// 🪟 COMPONENTE MODAL DE DETALLES DE PROPIEDAD
// ============================================
// 
// 📝 ESTE COMPONENTE MUESTRA LOS DETALLES COMPLETOS DE UNA PROPIEDAD
// 
// Para personalizar la información mostrada, modifica la estructura
// de las propiedades en 'data/properties.ts'

import React from 'react';
import { X, MapPin, Bed, Bath, Square, Car, Leaf, Building, Calendar, Zap, Phone, Mail, Heart } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose }) => {
  if (!isOpen || !property) return null;

  const formatPrice = (price: number, category: string) => {
    const formattedPrice = new Intl.NumberFormat('es-ES').format(price);
    return category === 'alquiler' 
      ? `${formattedPrice}€/mes` 
      : `${formattedPrice}€`;
  };

  const getEnergyRatingColor = (rating?: string) => {
    const colors = {
      'A': 'bg-green-500',
      'B': 'bg-green-400', 
      'C': 'bg-yellow-500',
      'D': 'bg-yellow-400',
      'E': 'bg-orange-500',
      'F': 'bg-red-500',
      'G': 'bg-red-600'
    };
    return colors[rating as keyof typeof colors] || 'bg-gray-400';
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header del modal */}
        <div className="relative">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
              property.category === 'venta' ? 'bg-green-100 text-green-800' :
              property.category === 'alquiler' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {property.category}
            </span>
            {property.featured && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Destacado
              </span>
            )}
          </div>
        </div>

        {/* Contenido del modal */}
        <div className="p-6 md:p-8">
          
          {/* Precio y título */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.address}, {property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">
                {formatPrice(property.price, property.category)}
              </div>
              <button className="mt-2 p-2 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors">
                <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>
          </div>

          {/* Características principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Bed className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">{property.bedrooms}</div>
              <div className="text-sm text-gray-600">Habitaciones</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Bath className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">{property.bathrooms}</div>
              <div className="text-sm text-gray-600">Baños</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Square className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">{property.area}m²</div>
              <div className="text-sm text-gray-600">Superficie</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Building className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold capitalize">{property.type}</div>
              <div className="text-sm text-gray-600">Tipo</div>
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          {/* Características adicionales */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Características</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {property.yearBuilt && (
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Año {property.yearBuilt}</span>
              </div>
            )}
            {property.energyRating && (
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-gray-600" />
                <span className={`text-xs text-white px-2 py-1 rounded ${getEnergyRatingColor(property.energyRating)}`}>
                  Clase {property.energyRating}
                </span>
              </div>
            )}
            {property.parking && (
              <div className="flex items-center space-x-2 text-gray-600">
                <Car className="h-4 w-4" />
                <span className="text-sm">Parking</span>
              </div>
            )}
            {property.garden && (
              <div className="flex items-center space-x-2 text-gray-600">
                <Leaf className="h-4 w-4" />
                <span className="text-sm">Jardín</span>
              </div>
            )}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Llamar ahora</span>
            </button>
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Solicitar información</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;