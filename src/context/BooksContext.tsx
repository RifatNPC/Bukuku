import { createContext, ReactNode, useContext, useState } from "react";

import { books as initialBooks } from "@/data/books";
import { Book, BookStatus } from "@/types/book";

// Bentuk data yang dibagikan lewat Context ke semua halaman
interface BooksContextValue {
  books: Book[];
  addBook: (title: string, author: string, cover?: string) => void;
  updateStatus: (id: string, status: BookStatus) => void;
  removeBook: (id: string) => void;
}

const BooksContext = createContext<BooksContextValue | null>(null);

export function BooksProvider({ children }: { children: ReactNode }) {
  // useState: daftar buku jadi state, nilai awalnya dari data statis Modul 1
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (title: string, author: string, cover?: string) => {
    const id = String(Date.now());
    const newBook: Book = {
      id,
      title,
      author,
      cover: cover || `https://picsum.photos/seed/bukuku${id}/200/300`,
    };
    // Spread: buat array baru (bukan mengubah array lama) supaya React re-render
    setBooks((prev) => [...prev, newBook]);
  };

  const updateStatus = (id: string, status: BookStatus) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, status } : book)),
    );
  };

  const removeBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, updateStatus, removeBook }}>
      {children}
    </BooksContext.Provider>
  );
}

// Custom hook: pembungkus useContext agar pemakaiannya lebih singkat
export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks harus dipakai di dalam <BooksProvider>");
  }
  return context;
}
