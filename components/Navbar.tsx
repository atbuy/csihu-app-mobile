import { Image, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "./Themed";
import Colors from "@/constants/Colors";

function LogoTitle() {
  const theme = useColorScheme() ?? "light";

  let imageURI = require("@/assets/images/duth_dark.png");

  if (theme == "light") {
    imageURI = require("@/assets/images/duth_light.png");
  }

  return <Image style={styles.image} resizeMode="contain" source={imageURI} />;
}

export default function Navbar() {
  const theme = useColorScheme() ?? "light";

  let shadowProp = styles.boxShadowDark;
  let logoTextColor = { color: Colors.dark.text };
  let navbarColor = { backgroundColor: Colors.dark.navbarBackground };

  if (theme == "light") {
    shadowProp = styles.boxShadowLight;
    logoTextColor = { color: Colors.light.text };
    navbarColor = { backgroundColor: Colors.light.navbarBackground };
  }

  return (
    <View style={[styles.navbar, shadowProp, navbarColor]}>
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
    paddingTop: StatusBar.currentHeight,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 20,
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
