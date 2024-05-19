import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Navbar />
      <View style={styles.container}>
        <Link href="/announcements" style={{ color: "#000" }}>
          Home Screen
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
