import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { AppConfig } from "../../app.config";
import Constants from "expo-constants";
import { View } from "@/components/Themed";
import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";

const { API_BASE_URL } = Constants.manifest?.extra as AppConfig;

type AnnouncementData = {
  pk: string;
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function AnnouncementDetail() {
  const local = useLocalSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<AnnouncementData[]>([]);

  const getAnnouncement = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/${local.announcement_id}`,
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
  });

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
                id={obj.id}
                title={obj.title}
                description={obj.description}
                date={"Test Date"} // Backend does not return enough info right now
                author={"Test Author"}
                pressable={false}
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
    justifyContent: "flex-start",
    alignContent: "flex-start",
    fontSize: 18,
  },
  announcementContainer: {
    flex: 1,
  },
  spinner: {
    margin: 40,
  },
});
