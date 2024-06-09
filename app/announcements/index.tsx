import Announcement from "@/components/Announcement";
import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnnouncementListItem from "@/components/AnnouncementListItem";

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
  const [offset, setOffset] = useState(0);

  const announcementAmount = 50;

  // Query API to get all announcements
  const getAnnouncements = async (offset: number) => {
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

      const URL = `${process.env.API_BASE_URL}/csihu/notifications?amount=${announcementAmount}&offset=${offset}`;

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

  useEffect(() => {
    getAnnouncements(offset);
  }, [offset]);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({ changed }) => {
        changed.forEach((changedItem: any) => {
          if (changedItem.isViewable) {
            // console.log("++ Impression for: ", changedItem.item.id);
          }
        });
      },
    },
  ]);
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <AnnouncementListItem announcement={item} />
          )}
          ListFooterComponent={() => isLoading && <ActivityIndicator />}
          refreshing={isLoading}
          onEndReached={() => {
            setOffset(offset + announcementAmount);
          }}
          onEndReachedThreshold={3}
          initialNumToRender={2}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          // getItemLayout={(data, index) = ({
          //   length: itemHeight,
          //   offset: (itemHeight + 5) * index,
          //   index
          // })}
        />
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
