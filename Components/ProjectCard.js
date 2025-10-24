'use client';

export default function ProjectCard({ title, description, technologies, image, demoLink, codeLink }) {
  return (
    <div className="marshall-card group">
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-marshallBlack/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="space-x-6 scale-90 group-hover:scale-100 transition-transform duration-500">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="marshall-button inline-flex items-center space-x-2"
            >
              <span>Demo</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="marshall-button inline-flex items-center space-x-2"
            >
              <span>Code</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 3L2 9l6 6M16 3l6 6-6 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-heading text-gradient-marshall mb-3">{title}</h3>
        <p className="text-marshallWhite/90 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-marshallGrayDark border border-marshallGold/20 text-marshallGoldLight text-sm rounded-full font-heading"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}