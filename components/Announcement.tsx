import Colors from "@/constants/Colors";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { router } from "expo-router";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "./Themed";

type AnnouncementProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  pressable?: boolean;
  fullscreen?: boolean;
};

export default function Announcement(props: AnnouncementProps) {
  const theme = useColorScheme() ?? "light";

  let pressable: boolean;
  if (props.pressable === undefined) {
    pressable = true;
  } else {
    pressable = props.pressable;
  }

  let fullscreen: boolean;
  if (props.fullscreen === undefined) {
    fullscreen = false;
  } else {
    fullscreen = props.fullscreen;
  }

  let fullscreenClass = {};
  if (fullscreen) {
    fullscreenClass = { flex: 1, height: "100%" };
  }

  // Assume dark theme
  let cardBackgroundColor = { backgroundColor: Colors.dark.cardColor };
  let footerTextColor = { color: "#cacaca" };
  let shadow = styles.boxShadowDark;
  let titleColor = { color: "#ffffff" };
  let descriptionColor = { color: "#ffffff" };

  if (theme == "light") {
    cardBackgroundColor = { backgroundColor: Colors.light.cardColor };
    footerTextColor = { color: "#515151" };
    shadow = styles.boxShadowLight;
    titleColor = { color: "#213B61" };
    descriptionColor = { color: "#000000" };
  }

  const redirect = (id: number) => {
    router.replace(`/announcements/${id}`);
  };

  const render = () => {
    if (pressable === true) {
      return (
        <Pressable onPress={() => redirect(props.id)}>
          <View
            style={[
              styles.container,
              cardBackgroundColor,
              shadow,
              fullscreenClass,
            ]}
          >
            <Text style={[styles.title, titleColor]}>{props.title}</Text>
            <Text style={[styles.description, descriptionColor]}>
              {props.description}
            </Text>
            <Text style={[styles.footer, footerTextColor]}>
              <FontAwesomeIcon
                icon={faClock}
                style={[styles.footer, styles.footerIcon, footerTextColor]}
                size={styles.footerIcon.fontSize}
              />
              <Text style={[styles.footer, footerTextColor]}>
                {props.date} | {props.author}
              </Text>
            </Text>
          </View>
        </Pressable>
      );
    }

    return (
      <View>
        <View
          style={[
            styles.container,
            cardBackgroundColor,
            shadow,
            fullscreenClass,
          ]}
        >
          <Text style={[styles.title, titleColor]}>{props.title}</Text>
          <Text style={[styles.description, descriptionColor]}>
            {props.description}
          </Text>
          <Text style={[styles.footer, footerTextColor]}>
            <FontAwesomeIcon
              icon={faClock}
              style={[styles.footer, styles.footerIcon, footerTextColor]}
              size={styles.footerIcon.fontSize}
            />
            <Text style={[styles.footer, footerTextColor]}>
              {props.date} | {props.author}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  return render();
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 11,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
  },
  footer: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  footerText: {
    marginLeft: 20,
    paddingLeft: 20,
  },
  footerIcon: {
    fontSize: 10,
    paddingRight: 5,
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
});
