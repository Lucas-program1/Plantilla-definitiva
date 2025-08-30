// 🏠 ARCHIVO DE DATOS DE PROPIEDADES
// ==========================================
// 
// 📝 INSTRUCCIONES PARA MODIFICAR PROPIEDADES:
// 
// 1. AÑADIR NUEVA PROPIEDAD:
//    - Copia una propiedad existente y modifica sus valores
//    - Asegúrate de cambiar el 'id' por uno único
//    - Usa imágenes de Pexels o URLs válidas
// 
// 2. MODIFICAR PRECIOS:
//    - Cambia el valor en 'price'
//    - El precio se muestra automáticamente con formato español (€)
// 
// 3. CAMBIAR IMÁGENES:
//    - Usa URLs de Pexels: https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg
//    - O súbelas a tu hosting y usa rutas relativas
//    - Ejemplo: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
// 
// 4. MODIFICAR CATEGORÍAS:
//    - Cambia 'category' por: 'venta', 'compra', 'alquiler'
//    - Añade nuevas categorías modificando también el archivo filters.ts
// 
// 5. ACTUALIZAR UBICACIONES:
//    - Modifica 'location' con la ciudad/zona que necesites
//    - Actualiza 'address' con la dirección completa

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // metros cuadrados
  type: 'casa' | 'piso' | 'chalet' | 'duplex' | 'estudio';
  category: 'venta' | 'compra' | 'alquiler';
  image: string;
  images?: string[]; // Galería adicional
  description: string;
  features: string[];
  yearBuilt?: number;
  parking?: boolean;
  garden?: boolean;
  terrace?: boolean;
  elevator?: boolean;
  furnished?: boolean;
  energyRating?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  available: boolean;
  featured?: boolean; // Para destacar propiedades
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Chalet de Lujo en Zona Residencial',
    price: 450000,
    location: 'Madrid',
    address: 'Urbanización Los Robles, 15',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    type: 'chalet',
    category: 'venta',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'Espectacular chalet independiente en una de las mejores zonas residenciales. Completamente reformado con materiales de alta calidad.',
    features: ['Jardín privado', 'Garaje 2 coches', 'Chimenea', 'Aire acondicionado', 'Sistema de alarma'],
    yearBuilt: 2018,
    parking: true,
    garden: true,
    terrace: true,
    energyRating: 'A',
    available: true,
    featured: true
  },
  {
    id: '2',
    title: 'Piso Moderno en Centro Ciudad',
    price: 320000,
    location: 'Barcelona',
    address: 'Calle Mayor, 45, 3º B',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    type: 'piso',
    category: 'venta',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    description: 'Piso completamente reformado en el centro de la ciudad. Muy luminoso y con excelentes acabados.',
    features: ['Totalmente reformado', 'Muy luminoso', 'Céntrico', 'Ascensor', 'Calefacción central'],
    yearBuilt: 2020,
    parking: false,
    garden: false,
    terrace: false,
    elevator: true,
    energyRating: 'B',
    available: true
  },
  {
    id: '3',
    title: 'Estudio Acogedor para Estudiantes',
    price: 750,
    location: 'Valencia',
    address: 'Avenida Universidad, 12, 1º A',
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    type: 'estudio',
    category: 'alquiler',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    description: 'Estudio perfectamente equipado ideal para estudiantes o jóvenes profesionales. Zona universitaria.',
    features: ['Amueblado', 'Wifi incluido', 'Cerca universidad', 'Transporte público', 'Gastos incluidos'],
    yearBuilt: 2015,
    parking: false,
    garden: false,
    terrace: false,
    elevator: true,
    furnished: true,
    energyRating: 'C',
    available: true
  },
  {
    id: '4',
    title: 'Casa Familiar con Jardín',
    price: 400000,
    location: 'Sevilla',
    address: 'Urbanización El Pinar, 28',
    bedrooms: 5,
    bathrooms: 3,
    area: 220,
    type: 'casa',
    category: 'venta',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    description: 'Amplia casa familiar en urbanización tranquila. Perfect para familias que buscan espacio y comodidad.',
    features: ['Jardín amplio', 'Piscina comunitaria', 'Zona infantil', 'Seguridad 24h', 'Garaje'],
    yearBuilt: 2010,
    parking: true,
    garden: true,
    terrace: true,
    energyRating: 'B',
    available: true,
    featured: true
  },
  {
    id: '5',
    title: 'Duplex con Terraza Panorámica',
    price: 2200,
    location: 'Bilbao',
    address: 'Calle Nervión, 67, Ático',
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    type: 'duplex',
    category: 'alquiler',
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
    description: 'Espectacular duplex con terraza y vistas panorámicas a la ciudad. Completamente amueblado.',
    features: ['Terraza 40m²', 'Vistas panorámicas', 'Amueblado', 'Parking incluido', 'Aire acondicionado'],
    yearBuilt: 2019,
    parking: true,
    garden: false,
    terrace: true,
    elevator: true,
    furnished: true,
    energyRating: 'A',
    available: true
  },
  {
    id: '6',
    title: 'Piso de Obra Nueva',
    price: 290000,
    location: 'Málaga',
    address: 'Residencial Mediterráneo, Bloque 2, 4º C',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    type: 'piso',
    category: 'venta',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    description: 'Piso de obra nueva en residencial moderno. Acabados premium y diseño contemporáneo.',
    features: ['Obra nueva', 'Piscina comunitaria', 'Gimnasio', 'Parking', 'Trastero'],
    yearBuilt: 2024,
    parking: true,
    garden: false,
    terrace: true,
    elevator: true,
    energyRating: 'A',
    available: true
  }
];

// 🎯 FUNCIONES AUXILIARES PARA FILTRAR PROPIEDADES
// ===============================================

export const getPropertiesByCategory = (category: string) => {
  return mockProperties.filter(property => property.category === category);
};

export const getFeaturedProperties = () => {
  return mockProperties.filter(property => property.featured);
};

export const getPropertiesByType = (type: string) => {
  return mockProperties.filter(property => property.type === type);
};

export const getPropertiesByPriceRange = (min: number, max: number) => {
  return mockProperties.filter(property => property.price >= min && property.price <= max);
};
