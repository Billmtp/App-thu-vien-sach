import { useState } from "react";
import { Heart, Trash2, BookOpen } from "lucide-react";
import type { Book } from "@/data/books";
import BookCard from "@/components/BookCard";
import BookModal from "@/components/BookModal";
import { Link } from "react-router-dom";

interface FavoritesProps {
  favorites: Book[];
  onToggleFavorite: (book: Book) => void;
}

const Favorites = ({ favorites, onToggleFavorite }: FavoritesProps) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBook(null), 300);
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Bộ Sưu Tập</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sách Yêu Thích
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Những cuốn sách bạn đã lưu vào danh sách yêu thích
          </p>
        </div>

        {/* Content */}
        {favorites.length > 0 ? (
          <>
            {/* Stats */}
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card shadow-card">
                <Heart className="w-5 h-5 text-destructive fill-current" />
                <span className="text-foreground font-medium">
                  {favorites.length} cuốn sách yêu thích
                </span>
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {favorites.map((book, index) => (
                <div key={book.id} className="relative group">
                  <BookCard
                    book={book}
                    isFavorite={true}
                    onToggleFavorite={onToggleFavorite}
                    onClick={() => handleBookClick(book)}
                    index={index}
                  />
                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(book);
                    }}
                    className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-105"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Xóa</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16 sm:py-24 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Chưa Có Sách Yêu Thích
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md mx-auto">
              Hãy khám phá thư viện và thêm những cuốn sách bạn yêu thích vào đây
            </p>
            <Link
              to="/library"
              className="inline-flex items-center gap-3 px-8 py-4 hero-gradient text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Khám Phá Thư Viện
            </Link>
          </div>
        )}
      </div>

      {/* Book Modal */}
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isFavorite={true}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};

export default Favorites;
