import { BookStatus } from "@/types/book";

// Daftar semua status yang valid (dipakai untuk tombol pilihan status)
export const ALL_STATUS: BookStatus[] = [
  "Ingin dibaca",
  "Sedang dibaca",
  "Selesai",
];

// Function biasa + kondisi (switch): menentukan warna badge sesuai status
export function getStatusColor(status?: BookStatus): string {
  switch (status) {
    case "Selesai":
      return "#16a34a";
    case "Sedang dibaca":
      return "#2563eb";
    case "Ingin dibaca":
      return "#d97706";
    default:
      return "#64748b";
  }
}
