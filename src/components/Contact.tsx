// 📞 COMPONENTE CONTACTO
// =====================
// 
// 📝 INSTRUCCIONES PARA PERSONALIZAR CONTACTO:
// 
// 1. ACTUALIZAR INFORMACIÓN DE CONTACTO:
//    - Modifica teléfono, email, dirección en el array 'contactInfo'
// 
// 2. CAMBIAR HORARIOS:
//    - Actualiza los horarios en 'schedules'
// 
// 3. PERSONALIZAR FORMULARIO:
//    - Añade/quita campos según necesites
//    - Modifica validation messages

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 📋 INFORMACIÓN DE CONTACTO - Personalízala aquí
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 900 123 456',
      description: 'Llamadas gratuitas de lunes a domingo'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@inmoexpress.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      content: 'Calle Gran Vía, 45, 28013 Madrid',
      description: 'Visítanos de lunes a sábado'
    }
  ];

  // 🕐 HORARIOS DE ATENCIÓN - Personalízalos aquí
  const schedules = [
    { day: 'Lunes - Viernes', hours: '9:00 - 20:00' },
    { day: 'Sábados', hours: '10:00 - 18:00' },
    { day: 'Domingos', hours: '11:00 - 15:00' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 📝 AQUÍ PUEDES INTEGRAR CON TU SISTEMA DE EMAILS O CRM
    console.log('Datos del formulario:', formData);
    setIsSubmitted(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyType: ''
      });
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte en cada paso del proceso. Contáctanos y te asesoraremos personalmente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 📝 FORMULARIO DE CONTACTO */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envíanos un mensaje</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-600">Nos pondremos en contacto contigo en breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de consulta
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Seleccionar</option>
                      <option value="comprar">Quiero comprar</option>
                      <option value="vender">Quiero vender</option>
                      <option value="alquilar">Busco alquiler</option>
                      <option value="valoracion">Solicitar valoración</option>
                      <option value="inversion">Oportunidades inversión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos qué estás buscando..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>

          {/* 📞 INFORMACIÓN DE CONTACTO */}
          <div className="space-y-8">
            
            {/* Datos de contacto */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-blue-600 font-medium">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios de atención */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Horarios de atención</h3>
              
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                    </div>
                    <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Para consultas urgentes fuera de horario, 
                  envíanos un WhatsApp al +34 600 123 456
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;