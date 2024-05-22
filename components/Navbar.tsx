import { Image, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "./Themed";
import Colors from "@/constants/Colors";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={require("@/assets/images/duth_dark.png")}
    />
  );
}

export default function Navbar() {
  const theme = useColorScheme() ?? "light";

  let shadowProp = styles.boxShadowDark;
  let logoTextColor = { color: Colors.light.text };

  if (theme == "light") {
    shadowProp = styles.boxShadowLight;
  }

  if (theme == "dark") {
    logoTextColor = { color: Colors.dark.text };
  }

  return (
    <View style={[styles.navbar, shadowProp]}>
      <LogoTitle />
      <Text style={[styles.logoText, logoTextColor]}>CSDUTH Touch</Text>
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
    height: "100%",
    marginBottom: 20,
    backgroundColor: "#495668",
    paddingTop: StatusBar.currentHeight,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  boxShadowLight: {
    shadowColor: "#313131",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  boxShadowDark: {
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: "75%",
  },
});
