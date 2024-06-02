import Announcement from "@/components/Announcement";
import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Announcement = {
  pk: string;
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
  author: string;
};

export default function Announcements() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Announcement[]>([]);

  // Query API to get all announcements
  const getAnnouncements = async () => {
    try {
      // Check if data is already cached
      const cached = await AsyncStorage.getItem("announcementData");
      if (cached !== null) {
        // Verify that the cache was loaded in the last 10 minutes
        let lastCache = await AsyncStorage.getItem("lastCache");
        if (lastCache === null) {
          lastCache = Date();
        }

        const currentTimestamp = Date.now();
        const pastTimestamp = Date.parse(lastCache);
        const minutes10 = 60 * 10;

        if (pastTimestamp + minutes10 >= currentTimestamp) {
          setData(JSON.parse(cached));
          setLoading(false);
          return;
        }
      }

      const URL = `${process.env.API_BASE_URL}/csihu/notifications`;

      const response = await fetch(URL);
      const json = await response.json();
      setData(json.data);
      await AsyncStorage.setItem("announcementData", JSON.stringify(json.data));
      await AsyncStorage.setItem("lastCache", Date());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cropText = (text: string) => {
    const STRING_LENGTH = 137;
    const cleanText = text
      .replaceAll("\n", "")
      .replaceAll(".", ". ")
      .replace(",", ", ")
      .replaceAll(":", ": ")
      .replaceAll(": //", "://");
    return cleanText.substring(0, STRING_LENGTH) + "...";
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} />
        ) : (
          <ScrollView style={styles.announcementContainer}>
            {data.map((obj) => (
              <Announcement
                key={obj.id}
                id={obj.id}
                title={obj.title}
                description={cropText(obj.description)}
                date={obj.date}
                author={obj.author}
              />
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
  },
  container: {
    flex: 10,
    flexDirection: "column",
    alignContent: "flex-start",
    fontSize: 18,
    width: "100%",
  },
  announcementContainer: {
    flex: 1,
  },
  spinner: {
    margin: 40,
  },
});
