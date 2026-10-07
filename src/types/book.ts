// Union type: status hanya boleh salah satu dari tiga nilai ini
export type BookStatus = "Ingin dibaca" | "Sedang dibaca" | "Selesai";

// Interface: bentuk (struktur) data satu buku
export interface Book {
  readonly id: string; // readonly: tidak bisa diubah setelah objek dibuat
  title: string;
  author: string;
  cover: string;
  status?: BookStatus; // tanda "?" artinya opsional
}
