import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "./Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { router } from "expo-router";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import Colors from "@/constants/Colors";

type AnnouncementType = {
  pk: string;
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
  author: string;
};

type AnnouncementListItem = {
  announcement: AnnouncementType;
};

export default function AnnouncementListItem({
  announcement,
}: AnnouncementListItem) {
  const theme = useColorScheme() ?? "light";

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

  const cropText = (text: string) => {
    const STRING_LENGTH = 137;
    const cleanText = text
      .replaceAll("\n", " ")
      .replaceAll(".", ". ")
      .replaceAll(",", ", ")
      .replaceAll(":", ": ")
      .replaceAll(": //", "://")
      .replaceAll("  ", " ");
    return cleanText.substring(0, STRING_LENGTH) + "...";
  };

  const redirect = (id: number) => {
    router.replace(`/announcements/${id}`);
  };

  return (
    <Pressable onPress={() => redirect(announcement.id)}>
      <View style={[styles.container, cardBackgroundColor, shadow]}>
        <Text style={[styles.title, titleColor]}>{announcement.title}</Text>
        <Text style={[styles.description, descriptionColor]}>
          {cropText(announcement.description)}
        </Text>
        <Text style={[styles.footer, footerTextColor]}>
          <FontAwesomeIcon
            icon={faClock}
            style={[styles.footer, styles.footerIcon, footerTextColor]}
            size={styles.footerIcon.fontSize}
          />
          <Text style={[styles.footer, footerTextColor]}>
            {announcement.date} | {announcement.author}
          </Text>
        </Text>
      </View>
    </Pressable>
  );
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
