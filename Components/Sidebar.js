'use client';

export default function Sidebar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed h-screen w-20 bg-marshallGray flex flex-col items-center py-8">
      <div className="w-12 h-12 bg-marshallGold rounded-full mb-8 flex items-center justify-center">
        <span className="text-marshallBlack text-2xl font-bold">TB</span>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={() => scrollToSection('about')}
          className="text-marshallWhite hover:text-marshallGold transition-colors"
          title="Thông Tin Cá Nhân"
        >
          👤
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-marshallWhite hover:text-marshallGold transition-colors"
          title="Kỹ Năng Chuyên Môn"
        >
          🎯
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="text-marshallWhite hover:text-marshallGold transition-colors"
          title="Dịch Vụ Cung Cấp"
        >
          💼
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-marshallWhite hover:text-marshallGold transition-colors"
          title="Dự Án Tiêu Biểu"
        >
          🚀
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-marshallWhite hover:text-marshallGold transition-colors"
          title="Liên Hệ Tư Vấn"
        >
          ✉️
        </button>
      </div>
      <div className="mt-auto space-y-4">
        <a
          href="/CV_BuiVietTuanBao.pdf"
          download
          className="block px-3 py-2 bg-marshallGold text-marshallBlack rounded text-sm hover:bg-opacity-90 transition-colors text-center"
          title="Tải CV Của Tôi"
        >
          CV
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-marshallWhite hover:text-marshallGold transition-colors block"
          title="Xem Dự Án Trên GitHub"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="w-6 h-6 mx-auto">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </nav>
  );
}