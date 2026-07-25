import { Project } from './types';

function ProjectCard({ project }: { project: Project }) {
  const buildBadge = {
    pass: { label: '✅ Builds', color: 'bg-green-900/60 text-green-400 border-green-700' },
    fail: { label: '❌ No deps', color: 'bg-red-900/60 text-red-400 border-red-700' },
    na: { label: '', color: '' },
  }[project.buildStatus];

  const catColor = {
    'react-active': 'border-l-emerald-500',
    'react-other': 'border-l-amber-500',
    'static': 'border-l-blue-500',
    'legacy': 'border-l-gray-600',
  }[project.category];

  return (
    <div
      className={`bg-gray-900 border border-gray-800 border-l-4 ${catColor} rounded-xl p-6 flex flex-col gap-3 hover:border-gray-700 transition-colors`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white truncate">{project.name}</h3>
        {buildBadge.label && (
          <span className={`text-xs px-2 py-0.5 rounded-full border whitespace-nowrap ${buildBadge.color}`}>
            {buildBadge.label}
          </span>
        )}
      </div>

      <p className="text-gray-400 text-sm line-clamp-2 min-h-[2.5rem]">
        {project.description}
      </p>

      <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
        <span className="bg-gray-800 px-2 py-0.5 rounded">{project.stack}</span>
        {project.pages && (
          <span className="bg-gray-800 px-2 py-0.5 rounded">{project.pages} pages</span>
        )}
        <span className="text-gray-600">{project.lastCommit}</span>
      </div>

      <div className="flex gap-3 mt-auto pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;