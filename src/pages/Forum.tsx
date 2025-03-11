import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Plus, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { supabase } from '../lib/supabase';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Topic {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}

function Forum() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
    fetchRecentTopics();
  }, []);

  async function fetchCategories() {
    try {
      const { data, error } = await supabase
        .from('forum_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data);
    } catch (err) {
      setError('Грешка при учитавању категорија');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchRecentTopics() {
    try {
      const { data, error } = await supabase
        .from('forum_topics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setTopics(data);
    } catch (err) {
      setError('Грешка при учитавању тема');
      console.error('Error fetching topics:', err);
    }
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="card">
          <p className="text-gray-600">Учитавање форума...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="card bg-red-50">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Сеоски форум</h1>
        <Link
          to="/forum/new-topic"
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Нова тема
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <section className="card">
            <h2 className="text-xl font-bold mb-4">Категорије</h2>
            <div className="divide-y">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/forum/category/${category.id}`}
                  className="flex items-center justify-between py-4 hover:bg-gray-50 px-4 -mx-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </Link>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="text-xl font-bold mb-4">Недавне теме</h2>
            <div className="divide-y">
              {topics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/forum/topic/${topic.id}`}
                  className="flex items-start gap-4 py-4 hover:bg-gray-50 px-4 -mx-4 first:pt-0 last:pb-0"
                >
                  <MessageSquare className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">{topic.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{topic.content}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(new Date(topic.created_at), 'dd.MM.yyyy. HH:mm')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="card bg-blue-50">
            <h2 className="text-lg font-semibold mb-2">Форумска правила</h2>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>Поштујте друге учеснике</li>
              <li>Пишите јасно и концизно</li>
              <li>Избегавајте непримерен садржај</li>
              <li>Користите одговарајуће категорије</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Статистика</h2>
            <div className="text-sm text-gray-600">
              <p>Укупно тема: {topics.length}</p>
              <p>Категорија: {categories.length}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Forum;