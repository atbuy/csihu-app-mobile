import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Text, View } from "@/components/Themed";
import Navbar from "@/components/Navbar";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "@/constants/Colors";

type AnnouncementData = {
  pk: string;
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
  author: string;
};

export default function AnnouncementDetail() {
  const local = useLocalSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<AnnouncementData[]>([]);

  const theme = useColorScheme() ?? "light";

  let textColor = { color: Colors.dark.text };
  let cardBackgroundColor = { backgroundColor: Colors.dark.cardColor };
  let shadowColor = styles.boxShadowDark;
  let dateColor = { color: "#cacaca" };
  if (theme == "light") {
    textColor = { color: Colors.light.text };
    cardBackgroundColor = { backgroundColor: Colors.light.cardColor };
    shadowColor = styles.boxShadowLight;
    dateColor = { color: "#515151" };
  }

  const getAnnouncement = async () => {
    try {
      const API_BASE_URL = process.env.API_BASE_URL;
      const response = await fetch(
        `${API_BASE_URL}/csihu/notifications/${local.announcement_id}`,
      );
      const json = await response.json();
      setData([json.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  const externalLinkStyle = {
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: textColor.color,
  };

  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} />
        ) : (
          <ScrollView style={styles.announcementContainer}>
            {data.map((obj) => (
              <View
                key={obj.id}
                style={[styles.mainContainer, cardBackgroundColor, shadowColor]}
              >
                <View style={styles.headerContainer}>
                  <Link
                    href={`${process.env.ANNOUNCEMENT_BASE_URL}?id=${obj.id}`}
                    style={[externalLinkStyle, textColor]}
                  >
                    Προβολή{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      style={textColor}
                    />
                  </Link>
                </View>
                <View style={styles.mainBody}>
                  <Text style={[textColor, styles.title]}>{obj.title}</Text>
                  <Text style={[textColor, styles.description]}>
                    {obj.description}
                  </Text>
                </View>
                <Text style={[{ fontSize: 15, textAlign: "right" }, dateColor]}>
                  <FontAwesomeIcon
                    icon={faClock}
                    style={[dateColor, { paddingRight: 10 }]}
                  />
                  {obj.date} | {obj.author}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    width: "100%",

    // height: Dimensions.get("window").height * 0.9,
  },
  container: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    height: Dimensions.get("window").height,
    fontSize: 18,
  },
  announcementContainer: {
    // height: Dimensions.get("window").height * 0.9,
  },
  spinner: {
    margin: 40,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 11,
    // height: Dimensions.get("window").height * 0.9,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "none",
    fontSize: 18,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mainBody: {
    marginVertical: 20,
    backgroundColor: "none",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
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
