import { useState, useMemo } from "react";
import { books, genres, type Book } from "@/data/books";
import BookCard from "@/components/BookCard";
import BookModal from "@/components/BookModal";
import { Filter, Search, BookOpen } from "lucide-react";

interface LibraryProps {
  favorites: Book[];
  onToggleFavorite: (book: Book) => void;
}

const Library = ({ favorites, onToggleFavorite }: LibraryProps) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [selectedGenre, searchQuery]);

  const isFavorite = (book: Book) => favorites.some((f) => f.id === book.id);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Khám Phá</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thư Viện Sách
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Tìm kiếm và khám phá những cuốn sách hay nhất từ nhiều thể loại khác nhau
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4 sm:space-y-6 animate-fade-in-up">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên sách hoặc tác giả..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border-2 border-border focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <div className="flex items-center gap-2 text-muted-foreground mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Thể loại:</span>
            </div>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedGenre === genre
                    ? "hero-gradient text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-muted-foreground">
            Tìm thấy <span className="font-semibold text-primary">{filteredBooks.length}</span> cuốn sách
          </p>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={isFavorite(book)}
                onToggleFavorite={onToggleFavorite}
                onClick={() => handleBookClick(book)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Không tìm thấy sách
            </h3>
            <p className="text-muted-foreground">
              Thử tìm kiếm với từ khóa khác hoặc chọn thể loại khác
            </p>
          </div>
        )}
      </div>

      {/* Book Modal */}
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isFavorite={selectedBook ? isFavorite(selectedBook) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};

export default Library;
