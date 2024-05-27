import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

type UsefulProps = {
  label: string;
  to: string;
};

export default function UsefulButton(props: UsefulProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.boxShadow, styles.label]}>{props.label}</Text>
      <Link href={props.to} style={[styles.boxShadow, styles.button]}>
        <Image source={require("@/assets/images/duth_light.png")} resizeMode="contain"/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  container: {
    // flex: 1,
    flexWrap: "nowrap",
    flexDirection: "column",
    alignItems: "center",
    // marginHorizontal: 50,
    // width: 150,
    // height: 150,
  },
  label: {
    textAlign: "center",
    backgroundColor: "#3D5475",
    borderRadius: 50,
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 11,
  },
});
