import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Droplet, Building2, Phone } from 'lucide-react';

const services = [
  {
    title: 'Документи села',
    description: 'Приступите важним документима и обрасцима',
    icon: FileText,
    path: '/documents',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Водовод',
    description: 'Информације о водоводу и пријава проблема',
    icon: Droplet,
    path: '/water-system',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    title: 'Сеоска управа',
    description: 'Контактирајте управу и пратите одлуке',
    icon: Building2,
    path: '/administration',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Хитни контакти',
    description: 'Важни бројеви телефона и контакти',
    icon: Phone,
    path: '/emergency',
    color: 'bg-red-100 text-red-700',
  },
];

function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.title}
            to={service.path}
            className="card group hover:shadow-lg transition-shadow"
          >
            <div className={`rounded-full w-12 h-12 ${service.color} flex items-center justify-center mb-4`}>
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="btn-primary w-full">
              Приступи сервису
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceGrid;