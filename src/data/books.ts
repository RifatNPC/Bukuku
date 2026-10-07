import { Book } from "@/types/book";

// Array of objects: daftar buku sementara (data statis untuk Modul 1)
export const books: Book[] = [
  {
    id: "1",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    cover: "https://picsum.photos/seed/bukuku1/200/300",
    status: "Selesai",
  },
  {
    id: "2",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    cover: "https://picsum.photos/seed/bukuku2/200/300",
    status: "Sedang dibaca",
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://picsum.photos/seed/bukuku3/200/300",
    status: "Ingin dibaca",
  },
  {
    id: "4",
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    cover: "https://picsum.photos/seed/bukuku4/200/300",
  },
];
