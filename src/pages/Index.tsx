import { Link } from "react-router-dom";
import { BookOpen, Sparkles, Heart, Library } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 sm:mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Khám Phá Thế Giới Sách</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Thư Viện Sách
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Của Bạn
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              Khám phá hàng ngàn cuốn sách hay từ khắp nơi trên thế giới. 
              Tìm kiếm, lưu trữ và chia sẻ những cuốn sách yêu thích của bạn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Link
                to="/library"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 hero-gradient text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1"
              >
                <Library className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Khám Phá Thư Viện
              </Link>

              <Link
                to="/favorites"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg border-2 border-border hover:bg-muted transition-all duration-300 transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5" />
                Sách Yêu Thích
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-24 max-w-4xl mx-auto">
            <div className="card-gradient p-6 rounded-2xl shadow-card animate-fade-in-up stagger-3 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Đa Dạng Thể Loại
              </h3>
              <p className="text-muted-foreground text-sm">
                Từ tiểu thuyết đến self-help, fantasy đến kinh điển
              </p>
            </div>

            <div className="card-gradient p-6 rounded-2xl shadow-card animate-fade-in-up stagger-4 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Lưu Yêu Thích
              </h3>
              <p className="text-muted-foreground text-sm">
                Tạo bộ sưu tập sách yêu thích của riêng bạn
              </p>
            </div>

            <div className="card-gradient p-6 rounded-2xl shadow-card animate-fade-in-up stagger-5 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Giao Diện Đẹp
              </h3>
              <p className="text-muted-foreground text-sm">
                Trải nghiệm đọc sách tuyệt vời với dark mode
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
