import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function AnnouncementDetail() {
  const local = useLocalSearchParams();

  return <Text>Got '{local.announcement_id}' in path</Text>;
}
