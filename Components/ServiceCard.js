export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="group relative p-6 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-marshallGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-xl border border-marshallGold/20 group-hover:border-marshallGold/40 transition-colors duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="text-4xl text-marshallGold group-hover:text-marshallGoldLight transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-marshallGold/0 via-marshallGold/50 to-marshallGold/0 transform origin-left group-hover:scale-x-110 transition-transform duration-300"></div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-marshallGold to-marshallGoldLight group-hover:from-marshallGoldLight group-hover:to-marshallGold transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-base leading-relaxed text-marshallWhite/80 group-hover:text-marshallWhite transition-colors duration-300">
          {description}
        </p>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-marshallGold/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    </div>
  );
}