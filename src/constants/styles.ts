import { StyleSheet } from "react-native";

// External styling: semua aturan style dipisah dari file komponen
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  content: {
    padding: 20, // paddingTop 56 dihapus karena sekarang sudah ada header Stack
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginLeft: 12,
  },
  appSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
    marginTop: 8,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
  },
  cover: {
    width: 70,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#e2e8f0",
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
  },
  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    elevation: 3,
    shadowColor: "#000",
  },
  input: {
    borderWidth: 2,
    borderColor: "#2563eb",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  // ===== Tambahan Modul 2 =====
  emptyText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 12,
  },
  errorText: {
    fontSize: 13,
    color: "#dc2626",
    marginBottom: 12,
  },
  detailCover: {
    width: 160,
    height: 230,
    borderRadius: 12,
    alignSelf: "center",
    backgroundColor: "#e2e8f0",
    marginBottom: 16,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },
  detailAuthor: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 16,
  },
  statusRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  statusButton: {
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  statusButtonText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dc2626",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  backButton: {
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#64748b",
  },
  backButtonText: {
    color: "#64748b",
    fontSize: 16,
    fontWeight: "bold",
  },
});
