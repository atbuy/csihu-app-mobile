import Navbar from "@/components/Navbar";
import { View, Text } from "@/components/Themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <Link href="/announcements">
          <Text>Home Screen</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 10,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
