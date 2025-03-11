import React from 'react';
import ServiceGrid from '../components/ServiceGrid';

function Home() {
  return (
    <div className="container py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Добродошли у Шебет</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Дигитална платформа нашег села која повезује мештане и омогућава
          лакши приступ сеоским сервисима и информацијама.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Дигитални сервиси</h2>
        <ServiceGrid />
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Најновије вести</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for news items */}
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&h=300&fit=crop"
              alt="Вести"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Реконструкција сеоског дома</h3>
            <p className="text-gray-600">Почели радови на обнови сеоског дома културе...</p>
          </div>
          {/* Add more news items as needed */}
        </div>
      </section>
    </div>
  );
}

export default Home;