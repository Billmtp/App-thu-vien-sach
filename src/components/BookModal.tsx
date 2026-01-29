import { X, Heart, Calendar, User, Tag } from "lucide-react";
import type { Book } from "@/data/books";
import { useEffect } from "react";

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

const BookModal = ({ book, isOpen, onClose, isFavorite, onToggleFavorite }: BookModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-card rounded-3xl shadow-modal animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Book Cover */}
          <div className="md:w-2/5 relative">
            <div className="aspect-[3/4] md:aspect-auto md:h-full">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover md:rounded-l-3xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Book Details */}
          <div className="md:w-3/5 p-6 sm:p-8 lg:p-10">
            {/* Genre Badge */}
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Tag className="w-3 h-3" />
              {book.genre}
            </span>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {book.title}
            </h2>

            {/* Author & Year */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="text-sm sm:text-base">{book.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">{book.year}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Mô Tả
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {book.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onToggleFavorite(book)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isFavorite
                    ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    : "hero-gradient text-primary-foreground hover:opacity-90"
                }`}
              >
                <Heart
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isFavorite ? "fill-current" : ""
                  }`}
                />
                {isFavorite ? "Đã Yêu Thích" : "Thêm Yêu Thích"}
              </button>

              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 sm:py-4 rounded-xl font-medium border-2 border-border text-foreground hover:bg-secondary transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
