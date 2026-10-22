import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { styles } from "@/constants/styles";
import { useBooks } from "@/context/BooksContext";

export default function AddBook() {
  const router = useRouter();
  const { addBook } = useBooks();

  // useState: satu state untuk tiap field form + satu untuk pesan error
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [error, setError] = useState("");

  // useEffect: setiap kali judul/penulis berubah, pesan error dihapus
  useEffect(() => {
    setError("");
  }, [title, author]);

  const handleSave = () => {
    if (!title.trim() || !author.trim()) {
      setError("Judul dan penulis wajib diisi.");
      return;
    }
    addBook(title.trim(), author.trim(), cover.trim());
    router.back(); // kembali ke Beranda, daftar sudah bertambah
  };

  const handleCancel = () => {
    // canGoBack: cek dulu ada halaman sebelumnya atau tidak
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/"); // fallback jika halaman ini dibuka langsung
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.formCard}>
        <TextInput
          placeholder="Judul buku"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Penulis"
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          placeholder="URL cover (opsional)"
          style={styles.input}
          value={cover}
          onChangeText={setCover}
          autoCapitalize="none"
        />

        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <Pressable style={styles.addButton} onPress={handleSave}>
          <Ionicons name="add-circle" size={22} color="#ffffff" />
          <Text style={styles.addButtonText}>Simpan Buku</Text>
        </Pressable>

        <Button title="Batal" color="#64748b" onPress={handleCancel} />
      </View>
    </ScrollView>
  );
}
