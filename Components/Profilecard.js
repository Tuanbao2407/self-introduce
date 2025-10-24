'use client';

export default function ProfileCard() {
  return (
    <div className="marshall-card group">
      <div className="text-center relative">
        <div className="absolute inset-0 bg-marshall-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
        
        {/* Ảnh đại diện với hiệu ứng */}
        <div className="relative inline-block">
          <div className="w-40 h-40 mx-auto mb-6 relative group">
            <img
              src="/images/z6405909815426_2eb3dd5c5f62c1902f8f7dc27e8ffa83.jpg"
              alt="Bùi Viết Tuấn Bảo"
              className="w-full h-full rounded-full object-cover border-4 border-marshallGold shadow-marshall transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hiệu ứng ánh sáng */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-marshallGold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Border animation */}
            <div className="absolute -inset-1 rounded-full border-2 border-marshallGold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
          </div>
        </div>
        {/* Tên và Chức danh */}
        <div className="relative">
          <h1 className="text-4xl font-bold mb-2 text-gradient-marshall relative inline-block">
            Bùi Viết Tuấn Bảo
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-marshallGold/0 via-marshallGold to-marshallGold/0"></div>
          </h1>
          <div className="mt-4 space-y-2">
            <p className="text-xl text-marshallWhite/90 font-medium">
              Web Developer & Music Composer
            </p>
            <p className="text-marshallGoldLight/80 text-sm">
              Turning Ideas into Digital Experiences
            </p>
          </div>
        </div>

        {/* Social Links và Contact */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-marshallGold hover:text-marshallGoldLight transition-all duration-300"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-marshallGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-marshallGold hover:text-marshallGoldLight transition-all duration-300"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-marshallGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
          
          {/* Contact Button */}
          <a
            href="#contact"
            className="marshall-button group relative overflow-hidden"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Liên Hệ Ngay</span>
            <div className="absolute inset-0 bg-gradient-to-r from-marshallGoldLight to-marshallGold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
