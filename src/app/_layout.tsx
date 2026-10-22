import { Stack } from "expo-router";

import { BooksProvider } from "@/context/BooksContext";

export default function RootLayout() {
  return (
    // Provider membungkus Stack, jadi semua halaman bisa memakai useBooks()
    <BooksProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Beranda" }} />
        <Stack.Screen name="add" options={{ title: "Tambah Buku" }} />
        <Stack.Screen name="book/[id]" options={{ title: "Detail Buku" }} />
      </Stack>
    </BooksProvider>
  );
}
