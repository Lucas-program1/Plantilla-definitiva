// 🛠️ COMPONENTE SERVICIOS
// =======================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR SERVICIOS:
// 
// 1. MODIFICAR SERVICIOS:
//    - Edita el array 'services' para cambiar/añadir servicios
//    - Cambia iconos, títulos, descripciones
// 
// 2. AÑADIR NUEVO SERVICIO:
//    - Agrega un objeto al array con: icon, title, description, features

import React from 'react';
import { Calculator, FileText, Camera, Scale, Users, HeadphonesIcon as HeadphoneIcon } from 'lucide-react';

const Services: React.FC = () => {
  
  // 🎯 SERVICIOS OFRECIDOS - Personaliza según tu inmobiliaria
  const services = [
    {
      icon: Calculator,
      title: 'Valoración Gratuita',
      description: 'Obtén una valoración profesional y gratuita de tu propiedad en menos de 24 horas.',
      features: ['Valoración profesional', 'Informe detallado', 'Sin compromiso', 'En 24 horas']
    },
    {
      icon: FileText,
      title: 'Gestión Legal',
      description: 'Te acompañamos en todos los trámites legales para una compraventa segura.',
      features: ['Asesoría legal', 'Gestión hipotecaria', 'Documentación', 'Registro']
    },
    {
      icon: Camera,
      title: 'Fotografía Profesional',
      description: 'Sesiones fotográficas profesionales para destacar tu propiedad.',
      features: ['Fotógrafo profesional', 'Tours virtuales', 'Edición premium', 'Múltiples formatos']
    },
    {
      icon: Scale,
      title: 'Tasaciones Oficiales',
      description: 'Tasaciones oficiales realizadas por profesionales certificados.',
      features: ['Tasador certificado', 'Informe oficial', 'Validez bancaria', 'Entrega rápida']
    },
    {
      icon: Users,
      title: 'Asesoramiento Personalizado',
      description: 'Atención personalizada con un agente especializado en tu zona.',
      features: ['Agente dedicado', 'Conocimiento local', 'Seguimiento continuo', 'Disponibilidad total']
    },
    {
      icon: HeadphoneIcon,
      title: 'Soporte 24/7',
      description: 'Estamos disponibles para resolver todas tus dudas en cualquier momento.',
      features: ['Atención 24/7', 'Respuesta inmediata', 'Múltiples canales', 'Soporte técnico']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos un servicio integral para que tu experiencia inmobiliaria sea perfecta
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 hover:bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200"
            >
              {/* Icono */}
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8" />
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Efecto hover decorativo */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Necesitas más información sobre nuestros servicios?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Contactar con un especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;