import { Link } from "expo-router";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type UsefulProps = {
  label: string;
  to: string;
  image?: ImageSourcePropType;
  icon?: IconDefinition;
};

export default function UsefulButton(props: UsefulProps) {
  const render = () => {
    if (props.icon === undefined && props.image !== undefined) {
      return <Image source={props.image} resizeMode="contain" />;
    }

    if (props.icon !== undefined) {
      return (
        <FontAwesomeIcon icon={props.icon} style={styles.icon} size={105} />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.boxShadow, styles.label]}>{props.label}</Text>
      <Link href={props.to} style={[styles.boxShadow, styles.button]}>
        {render()}
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
  icon: {
    padding: 10,
    color: "#3D5475",
  },
});
