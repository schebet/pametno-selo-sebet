import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакт</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+381 123 456 789</span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>kontakt@sebet.rs</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Брзи линкови</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="hover:text-blue-400">Новости</Link></li>
              <li><Link to="/documents" className="hover:text-blue-400">Документи</Link></li>
              <li><Link to="/emergency" className="hover:text-blue-400">Хитни контакти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Пратите нас</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 Паметно село Шебет. Сва права задржана.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;