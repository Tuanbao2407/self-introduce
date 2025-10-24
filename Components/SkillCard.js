'use client';

export default function SkillCard({ name, level, icon }) {
  return (
    <div className="group p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-marshallGold/10 hover:border-marshallGold/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="text-3xl text-marshallGold group-hover:text-marshallGoldLight transition-all duration-300 transform group-hover:scale-110">
              {icon}
            </span>
            <div className="absolute -inset-1 bg-marshallGold/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-marshallGold to-marshallGoldLight">
            {name}
          </h3>
        </div>
        <span className="text-sm font-medium text-marshallGoldLight/90">
          {level}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative">
        <div className="w-full h-2 bg-marshallBlack rounded-full overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 50%)',
              backgroundSize: '8px 8px'
            }}></div>
          </div>

          {/* Progress Bar */}
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{
              width: `${level}%`,
              background: 'linear-gradient(90deg, var(--marshall-gold) 0%, var(--marshall-gold-light) 100%)'
            }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-full opacity-30 blur-sm transition-opacity duration-300 group-hover:opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent ${level}%, var(--marshall-gold) ${level}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}