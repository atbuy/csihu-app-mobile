import Navbar from "@/components/Navbar";
import HomepageButton from "@/components/HomepageButton";
import { View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons/faBullhorn";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";

export default function Home() {
  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <HomepageButton
          icon={faBullhorn}
          to="/announcements"
          label="Ανακοινώσεις"
        />
        <HomepageButton
          icon={faList}
          to="/useful"
          label="Χρήσιμα"
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
    justifyContent: "flex-start",
    alignContent: "flex-start",
    fontSize: 18,
  },
});
