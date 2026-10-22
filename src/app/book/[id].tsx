import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";

import { styles } from "@/constants/styles";
import { useBooks } from "@/context/BooksContext";
import { ALL_STATUS, getStatusColor } from "@/utils/status";

export default function BookDetail() {
  const router = useRouter();
  const navigation = useNavigation();
  const { books, updateStatus, removeBook } = useBooks();

  // useLocalSearchParams: ambil [id] dari URL, misal /book/3 -> id = "3"
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  // useEffect: ubah judul header menjadi judul buku saat data buku tersedia
  useEffect(() => {
    if (book) {
      navigation.setOptions({ title: book.title });
    }
  }, [book?.title, navigation]);

  // Buku tidak ditemukan (misal sudah dihapus)
  if (!book) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.emptyText}>Buku tidak ditemukan.</Text>
          {/* router.replace: ganti halaman ini, tidak bisa kembali ke sini */}
          <Pressable style={styles.addButton} onPress={() => router.replace("/")}>
            <Text style={styles.addButtonText}>Ke Beranda</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert("Hapus buku", `Hapus "${book.title}" dari daftar?`, [
      { text: "Batal", style: "cancel" },
      {
        text: "Hapus",
        style: "destructive",
        onPress: () => {
          router.back();
          removeBook(book.id);
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: book.cover }} style={styles.detailCover} />
      <Text style={styles.detailTitle}>{book.title}</Text>
      <Text style={styles.detailAuthor}>{book.author}</Text>

      <Text style={styles.sectionTitle}>Status Baca</Text>
      <View style={styles.statusRow}>
        {ALL_STATUS.map((status) => {
          const isActive = book.status === status;
          return (
            <Pressable
              key={status}
              onPress={() => updateStatus(book.id, status)}
              style={[
                styles.statusButton,
                {
                  borderColor: getStatusColor(status),
                  backgroundColor: isActive
                    ? getStatusColor(status)
                    : "#ffffff",
                },
              ]}
            >
              <Text
                style={[
                  styles.statusButtonText,
                  { color: isActive ? "#ffffff" : getStatusColor(status) },
                ]}
              >
                {status}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.addButtonText}>Hapus Buku</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </Pressable>
    </ScrollView>
  );
}
