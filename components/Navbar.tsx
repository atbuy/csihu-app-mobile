import { Image, StyleSheet, Text, useColorScheme } from "react-native";
import { View } from "./Themed";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "../assets/images/csihu_icon.png" }}
    />
  );
}

export default function Navbar() {
  return (
    <View style={[styles.navbar, styles.shadowProp]}>
      <LogoTitle />
      <Text>CSIHU Touch</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",

  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  image: {},
});
