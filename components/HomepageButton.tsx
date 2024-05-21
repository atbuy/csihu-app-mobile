import {
  Dimensions,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Text, View } from "./Themed";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

type ButtonProps = {
  icon: IconDefinition;
  label: string;
  to: string;
};

export default function HomepageButton(props: ButtonProps) {
  const theme = useColorScheme() ?? "light";

  let boxShadow = styles.boxShadowDark;
  let textColor = { color: Colors.dark.text };
  let backgroundColor = { backgroundColor: "#3D5475" };

  if (theme == "light") {
    boxShadow = styles.boxShadowLight;
    textColor = { color: Colors.light.text };
    backgroundColor = { backgroundColor: "#fff" };
  }

  return (
    <Pressable style={styles.pressable}>
      <Link href={props.to}>
        <View
          style={[styles.maxWidth, styles.button, boxShadow, backgroundColor]}
        >
          <Text style={[styles.buttonText]}>
            <FontAwesomeIcon
              icon={props.icon}
              style={[styles.icon, textColor]}
            />
          </Text>
          <Text style={[styles.buttonText, textColor]}>{props.label}</Text>
        </View>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  maxWidth: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.9,
  },
  boxShadowLight: {
    shadowColor: "#313131",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  boxShadowDark: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 11,
    padding: 20,
  },
  pressable: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
  },
  buttonText: {
    fontSize: 18,
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 10,
  },
});
