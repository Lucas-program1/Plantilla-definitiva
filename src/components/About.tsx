// 👥 COMPONENTE NOSOTROS/SOBRE LA EMPRESA
// ======================================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR:
// 
// 1. ACTUALIZAR INFORMACIÓN DE EMPRESA:
//    - Modifica la historia, misión, visión
//    - Cambia estadísticas y logros
// 
// 2. EQUIPO:
//    - Actualiza información del equipo en 'teamMembers'
//    - Cambia fotos, nombres, cargos
// 
// 3. VALORES:
//    - Modifica el array 'values' con los valores de tu empresa

import React from 'react';
import { Award, Users, Home, CheckCircle, Target, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  
  // 📊 ESTADÍSTICAS DE LA EMPRESA - Personalízalas con tus datos reales
  const stats = [
    { number: '15+', label: 'Años de experiencia', icon: Award },
    { number: '500+', label: 'Propiedades vendidas', icon: Home },
    { number: '200+', label: 'Familias felices', icon: Users },
    { number: '98%', label: 'Satisfacción cliente', icon: Star }
  ];

  // 👨‍💼 EQUIPO - Personaliza con tu equipo real
  const teamMembers = [
    {
      name: 'María García',
      position: 'Directora General',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      description: 'Más de 20 años en el sector inmobiliario. Especialista en propiedades de lujo.'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Agente Comercial Senior',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      description: 'Experto en valoraciones y negociaciones. Conocimiento profundo del mercado madrileño.'
    },
    {
      name: 'Ana López',
      position: 'Especialista en Alquileres',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      description: 'Gestora especializada en alquileres residenciales y comerciales. Atención personalizada.'
    }
  ];

  // 💎 VALORES DE LA EMPRESA - Personalízalos aquí
  const values = [
    {
      icon: CheckCircle,
      title: 'Transparencia',
      description: 'Información clara y honesta en cada operación. Sin sorpresas ni letra pequeña.'
    },
    {
      icon: Target,
      title: 'Profesionalidad',
      description: 'Equipo altamente cualificado con formación continua y certificaciones oficiales.'
    },
    {
      icon: Heart,
      title: 'Cercanía',
      description: 'Trato personal y humano. Entendemos que comprar una casa es una decisión muy importante.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 📋 TÍTULO Y INTRODUCCIÓN */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una inmobiliaria familiar con más de 15 años ayudando a personas a encontrar su hogar ideal. 
            Nuestro compromiso es ofrecerte el mejor servicio con total transparencia y profesionalidad.
          </p>
        </div>

        {/* 📊 ESTADÍSTICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 group-hover:bg-blue-100 p-6 rounded-xl transition-colors duration-300 mb-4">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 🎯 NUESTRA HISTORIA */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundada en 2009, InmoExpress nació con la visión de revolucionar el mercado inmobiliario español 
                ofreciendo un servicio personalizado y transparente. Comenzamos como una pequeña oficina en Madrid 
                y hoy somos referente en el sector.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A lo largo de estos años, hemos ayudado a más de 200 familias a encontrar su hogar ideal, 
                siempre manteniendo nuestros valores de honestidad, profesionalidad y cercanía.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Empresa certificada</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Premio excelencia 2024</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Oficina InmoExpress"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* 💎 NUESTROS VALORES */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 👥 NUESTRO EQUIPO */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                
                {/* Botón de contacto */}
                <button className="mt-4 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 px-4 py-2 rounded-lg transition-all duration-200 text-sm">
                  Contactar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 LLAMADA A LA ACCIÓN FINAL */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para encontrar tu hogar ideal?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está preparado para ayudarte en cada paso del proceso. 
            Contacta con nosotros y comienza tu búsqueda hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              <Phone className="h-5 w-5 inline mr-2" />
              Llamar ahora
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              <Mail className="h-5 w-5 inline mr-2" />
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
</thinking>