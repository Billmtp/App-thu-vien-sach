import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import Index from "./pages/Index";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import type { Book } from "./data/books";

const queryClient = new QueryClient();

const App = () => {
  const [favorites, setFavorites] = useState<Book[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (book: Book) => {
    const isFavorite = favorites.some((f) => f.id === book.id);
    if (isFavorite) {
      setFavorites(favorites.filter((f) => f.id !== book.id));
      toast.success(`Đã xóa "${book.title}" khỏi yêu thích`, {
        duration: 2000,
      });
    } else {
      setFavorites([...favorites, book]);
      toast.success(`Đã thêm "${book.title}" vào yêu thích`, {
        duration: 2000,
      });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/library"
            element={
              <Library
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
