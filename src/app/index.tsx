import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "@/constants/styles";
import { books } from "@/data/books";
import { Book, BookStatus } from "@/types/book";

// Function biasa + kondisi (switch): menentukan warna badge sesuai status
function getStatusColor(status?: BookStatus): string {
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

// Custom function: membuat satu kartu buku dari satu data Book
const renderBookCard = (book: Book) => (
  <View key={book.id} style={styles.card}>
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
  </View>
);

export default function Index() {
  const appName = "Bukuku";
  const totalBooks = books.length;

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

      {/* Daftar buku: loop dengan map() */}
      <Text style={styles.sectionTitle}>Daftar Buku</Text>
      {books.map(renderBookCard)}

      {/* Form tambah buku (masih statis, diaktifkan di Modul 2) */}
      <Text style={styles.sectionTitle}>Tambah Buku</Text>
      <View style={styles.formCard}>
        <TextInput placeholder="Judul buku" style={styles.input} />
        <TextInput placeholder="Penulis" style={styles.input} />
        <TextInput placeholder="URL cover (opsional)" style={styles.input} />

        <Pressable
          style={styles.addButton}
          onPress={() =>
            Alert.alert("Bukuku", "Fitur tambah buku diaktifkan di Modul 2.")
          }
        >
          <Ionicons name="add-circle" size={22} color="#ffffff" />
          <Text style={styles.addButtonText}>Tambah Buku</Text>
        </Pressable>

        <Button
          title="Batal"
          color="#64748b"
          onPress={() => Alert.alert("Bukuku", "Form dibatalkan.")}
        />
      </View>
    </ScrollView>
  );
}
