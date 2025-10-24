'use client';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Thêm logic xử lý form tại đây
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-marshallGold mb-1">Họ và tên</label>
          <input
            type="text"
            id="name"
            placeholder="Nhập họ tên của bạn"
            className="w-full px-4 py-2 bg-marshallBlack text-marshallWhite rounded focus:outline-none focus:ring-2 focus:ring-marshallGold"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-marshallGold mb-1">Địa chỉ email</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 bg-marshallBlack text-marshallWhite rounded focus:outline-none focus:ring-2 focus:ring-marshallGold"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-marshallGold mb-1">Chủ đề</label>
        <input
          type="text"
          id="subject"
          placeholder="Nhập chủ đề của bạn"
          className="w-full px-4 py-2 bg-marshallBlack text-marshallWhite rounded focus:outline-none focus:ring-2 focus:ring-marshallGold"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-marshallGold mb-1">Tin nhắn</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Nhập nội dung tin nhắn của bạn"
          className="w-full px-4 py-2 bg-marshallBlack text-marshallWhite rounded focus:outline-none focus:ring-2 focus:ring-marshallGold"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-marshallGold text-marshallBlack font-bold rounded hover:bg-opacity-90 transition-colors"
      >
        Gửi Tin Nhắn
      </button>
      <p className="mt-4 text-sm text-marshallWhite opacity-80">
        * Tôi sẽ phản hồi trong vòng 24 giờ làm việc.
      </p>
    </form>
  );
}