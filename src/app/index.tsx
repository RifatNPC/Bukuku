import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "@/constants/styles";
import { useBooks } from "@/context/BooksContext";
import { Book } from "@/types/book";
import { getStatusColor } from "@/utils/status";

// Custom function: membuat satu kartu buku, kartu bisa ditekan (onPress)
const renderBookCard = (book: Book, onPress: () => void) => (
  <Pressable key={book.id} style={styles.card} onPress={onPress}>
    <Image source={{ uri: book.cover }} style={styles.cover} />

    <View style={styles.cardInfo}>
      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text style={styles.bookAuthor}>{book.author}</Text>

      {/* Inline style: warna badge bergantung pada nilai status (dinamis) */}
      <View
        style={[styles.badge, { backgroundColor: getStatusColor(book.status) }]}
      >
        <Text style={styles.badgeText}>
          {book.status ?? "Belum ada status"}
        </Text>
      </View>
    </View>
  </Pressable>
);

export default function Index() {
  const router = useRouter();
  const { books } = useBooks();

  const appName = "Bukuku";
  const totalBooks = books.length;

  // useState: teks pencarian, UI ikut berubah setiap kali diketik
  const [query, setQuery] = useState("");

  // useMemo: hasil filter hanya dihitung ulang jika books atau query berubah
  const filteredBooks = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword),
    );
  }, [books, query]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="book" size={36} color="#2563eb" />
        <View>
          <Text style={styles.appTitle}>{appName}</Text>
          <Text style={styles.appSubtitle}>
            {totalBooks} buku dalam daftar bacaanmu
          </Text>
        </View>
      </View>

      {/* router.push: pindah ke halaman Tambah Buku (ditumpuk di atas Beranda) */}
      <Pressable style={styles.addButton} onPress={() => router.push("/add")}>
        <Ionicons name="add-circle" size={22} color="#ffffff" />
        <Text style={styles.addButtonText}>Tambah Buku</Text>
      </Pressable>

      <TextInput
        placeholder="Cari judul atau penulis"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />

      {/* Daftar buku: loop dengan map() */}
      <Text style={styles.sectionTitle}>Daftar Buku</Text>
      {filteredBooks.length === 0 ? (
        <Text style={styles.emptyText}>Tidak ada buku yang cocok.</Text>
      ) : (
        filteredBooks.map((book) =>
          renderBookCard(book, () =>
            // router.push dengan params: kirim id buku ke halaman detail
            router.push({ pathname: "/book/[id]", params: { id: book.id } }),
          ),
        )
      )}
    </ScrollView>
  );
}
