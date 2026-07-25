import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, categoryLabels } from './data';
import { ProjectCategory } from './types';

function App() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const categories: (ProjectCategory | 'all')[] = ['all', 'react-active', 'react-other', 'static', 'legacy'];

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold tracking-tight">Portfolio Dashboard</h1>
          <p className="text-gray-400 mt-1">Matt Stewart · 18 projects</p>
        </div>
      </header>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat === 'all' ? 'All Projects' : categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-sm text-gray-500 mb-4">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-600">
        <a href="https://github.com/MattybotStew" className="hover:text-gray-400 transition-colors">
          github.com/MattybotStew
        </a>
        <span className="mx-2">·</span>
        Last updated July 2026
      </footer>
    </div>
  );
}

export default App;