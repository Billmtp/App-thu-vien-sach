import { Heart } from "lucide-react";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
  onClick: () => void;
  index: number;
}

const BookCard = ({ book, isFavorite, onToggleFavorite, onClick, index }: BookCardProps) => {
  return (
    <div
      className={`group relative card-gradient rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 cursor-pointer opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
      onClick={onClick}
    >
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(book);
          }}
          className={`absolute top-3 right-3 p-2 sm:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 ${
            isFavorite
              ? "bg-destructive text-destructive-foreground"
              : "bg-background/50 text-foreground hover:bg-background/80"
          }`}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
              isFavorite ? "fill-current scale-110" : ""
            }`}
          />
        </button>

        {/* Genre Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs sm:text-sm font-medium">
          {book.genre}
        </div>

        {/* Quick Info on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-primary-foreground text-sm line-clamp-2">
            {book.description}
          </p>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4 sm:p-5">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {book.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base">
          {book.author}
        </p>
        <p className="text-muted-foreground/70 text-xs sm:text-sm mt-1">
          {book.year}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
