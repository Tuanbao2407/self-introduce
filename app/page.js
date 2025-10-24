import Sidebar from "@/Components/Sidebar";
import ProfileCard from "@/Components/Profilecard";
import ServiceCard from "@/Components/ServiceCard";
import ProjectCard from "@/Components/ProjectCard";
import SkillCard from "@/Components/SkillCard";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <div className="flex bg-marshallBlack min-h-screen">
      <Sidebar />
      <main className="ml-20 p-8 flex-1 text-marshallWhite overflow-y-auto">
        {/* Phần Giới Thiệu Chính */}
        <ProfileCard />

        {/* Giới thiệu chi tiết */}
        <section className="mt-12" id="about">
          <h2 className="text-3xl font-bold text-marshallGold mb-4">Giới Thiệu</h2>
          <div className="bg-marshallGray p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-6">
              Tôi là <strong>Bùi Viết Tuấn Bảo</strong>, một nhà thiết kế web đến từ Việt Nam. Tôi có nhiều kinh nghiệm trong việc thiết kế, xây dựng và tùy biến website. Tôi cũng rất thành thạo với WordPress. Tôi yêu thích việc trao đổi và hợp tác để tạo ra những sản phẩm độc đáo và khác biệt.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center"><span className="text-marshallGold mr-2">🎂</span><strong>Tuổi:</strong> 22</li>
              <li className="flex items-center"><span className="text-marshallGold mr-2">🌏</span><strong>Quốc gia:</strong> Việt Nam</li>
              <li className="flex items-center"><span className="text-marshallGold mr-2">💼</span><strong>Trạng thái:</strong> Sẵn sàng nhận dự án</li>
              <li className="flex items-center"><span className="text-marshallGold mr-2">📍</span><strong>Địa chỉ:</strong> Đà Nẵng</li>
            </ul>
          </div>
        </section>

        {/* Kỹ năng chuyên môn */}
        <section className="mt-12" id="skills">
          <h2 className="text-3xl font-bold text-marshallGold mb-4">Kỹ Năng Chuyên Môn</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard name="Lập Trình Web" level={90} icon="🌐" />
            <SkillCard name="JavaScript" level={85} icon="⚡" />
            <SkillCard name="React" level={80} icon="⚛️" />
            <SkillCard name="Next.js" level={75} icon="🔥" />
            <SkillCard name="WordPress" level={85} icon="📝" />
            <SkillCard name="Thiết Kế UI/UX" level={80} icon="🎨" />
            <SkillCard name="Sản Xuất Âm Nhạc" level={75} icon="🎵" />
            <SkillCard name="Lập Trình Backend" level={70} icon="🚀" />
          </div>
        </section>

        {/* Dịch vụ cung cấp */}
        <section className="mt-12" id="services">
          <h2 className="text-3xl font-bold text-marshallGold mb-4">Dịch Vụ Cung Cấp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Thiết Kế Website"
              description="Xây dựng website chuyên nghiệp, tương thích với mọi thiết bị, tối ưu hóa trải nghiệm người dùng và tốc độ tải trang."
              icon="💻"
            />
            <ServiceCard
              title="Sáng Tác Âm Nhạc"
              description="Sáng tác, hòa âm phối khí, thu âm và sản xuất âm nhạc chuyên nghiệp cho các dự án nghệ thuật."
              icon="🎵"
            />
            <ServiceCard
              title="Thiết Kế UI/UX"
              description="Thiết kế giao diện đẹp mắt, thân thiện với người dùng, tăng tỷ lệ tương tác và chuyển đổi."
              icon="🎨"
            />
          </div>
        </section>

        {/* Dự án tiêu biểu */}
        <section className="mt-12" id="projects">
          <h2 className="text-3xl font-bold text-marshallGold mb-4">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Website Thương Mại Điện Tử"
              description="Website bán hàng hiện đại với đầy đủ tính năng quản lý sản phẩm, đơn hàng và khách hàng"
              technologies={["Next.js", "Tailwind CSS", "Node.js"]}
              image="/project1.jpg"
              demoLink="https://example.com"
              codeLink="https://github.com/yourusername/project1"
            />
            <ProjectCard
              title="Portfolio Âm Nhạc"
              description="Website trưng bày và phát hành các sản phẩm âm nhạc cá nhân"
              technologies={["React", "SCSS", "Express"]}
              image="/project2.jpg"
              demoLink="https://example.com"
              codeLink="https://github.com/yourusername/project2"
            />
          </div>
        </section>

        {/* Liên hệ và tư vấn */}
        <section className="mt-12 mb-8" id="contact">
          <h2 className="text-3xl font-bold text-marshallGold mb-4">Liên Hệ Tư Vấn</h2>
          <div className="bg-marshallGray p-6 rounded-lg">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}