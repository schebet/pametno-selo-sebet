import React from 'react';

function News() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Сеоске новости</h1>
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
      </div>
    </div>
  );
}

export default News;