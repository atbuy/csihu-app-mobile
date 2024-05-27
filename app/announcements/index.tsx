import Announcement from "@/components/Announcement";
import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { AppConfig } from "../../app.config";

const { API_BASE_URL } = Constants.manifest?.extra as AppConfig;

type Announcement = {
  pk: string;
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function Announcements() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Announcement[]>([]);

  // Query API to get all announcements
  const getAnnouncements = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                id={obj.id}
                title={obj.title}
                description={obj.description}
                date={"22 Απρ 2024 11:59"}
                author={"Δρ. Ελένη Βρογχίδου"}
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
