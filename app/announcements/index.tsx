import Navbar from "@/components/Navbar";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function Announcements() {
  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <Text>Announcements page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  container: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    fontSize: 18,
    width: "100%",
  },
});
