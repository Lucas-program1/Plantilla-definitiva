// 🏠 APLICACIÓN PRINCIPAL INMOBILIARIA
// ====================================
// 
// 📝 INSTRUCCIONES GENERALES PARA PERSONALIZACIÓN:
// 
// ✅ PASOS RÁPIDOS PARA PERSONALIZAR:
// 
// 1. 📝 CAMBIAR INFORMACIÓN BÁSICA:
//    - Ve a 'src/data/properties.ts' para modificar propiedades
//    - Edita 'src/components/Header.tsx' para cambiar logo y nombre
//    - Actualiza 'src/components/Contact.tsx' para tu información de contacto
// 
// 2. 🖼️ CAMBIAR IMÁGENES:
//    - Reemplaza URLs de Pexels por tus propias imágenes
//    - Usa URLs completas o súbe las imágenes a tu hosting
//    - Formato recomendado: JPG, PNG, WebP (optimizadas para web)
// 
// 3. 💰 ACTUALIZAR PRECIOS:
//    - Modifica directamente en 'src/data/properties.ts'
//    - Los precios se formatean automáticamente en euros
// 
// 4. 🏘️ GESTIONAR CATEGORÍAS:
//    - Añade/quita propiedades cambiando 'category' en los datos
//    - Valores: 'venta', 'alquiler', 'compra'
// 
// 5. ⭐ DESTACAR PROPIEDADES:
//    - Añade 'featured: true' en 'src/data/properties.ts'
//    - Se mostrarán en la sección "Destacadas"

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Categories from './components/Categories';
import PropertyGrid from './components/PropertyGrid';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <>
            <Hero onSectionChange={setActiveSection} />
            <FeaturedProperties />
            <Categories onCategorySelect={setActiveSection} />
            <Services />
          </>
        );
      case 'venta':
        return (
          <div className="pt-20">
            <PropertyGrid 
              category="venta" 
              title="Propiedades en Venta"
              showFilters={true}
            />
          </div>
        );
      case 'alquiler':
        return (
          <div className="pt-20">
            <PropertyGrid 
              category="alquiler" 
              title="Propiedades en Alquiler"
              showFilters={true}
            />
          </div>
        );
      case 'vender':
        return (
          <div className="pt-20">
            <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Vende tu Propiedad
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Te ayudamos a vender tu propiedad al mejor precio y en el menor tiempo posible
                </p>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Solicita una valoración gratuita</h3>
                  <p className="text-gray-600 mb-6">
                    Nuestros expertos analizarán tu propiedad y te darán una valoración profesional sin coste alguno
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Solicitar valoración
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'nosotros':
        return (
          <div className="pt-20">
            <About />
          </div>
        );
      case 'contacto':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return (
          <>
            <Hero onSectionChange={setActiveSection} />
            <FeaturedProperties />
            <Categories onCategorySelect={setActiveSection} />
            <Services />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onSectionChange={setActiveSection} 
        activeSection={activeSection} 
      />
      
      {renderSection()}
      
      <Footer />
    </div>
  );
}

export default App;