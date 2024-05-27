import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import UsefulButton from "@/components/UsefulButton";
import { ScrollView, StyleSheet } from "react-native";

export default function Useful() {
  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <ScrollView style={styles.buttonContainer}>
          <View style={styles.button}>
            <UsefulButton
              to="https://moodle.cs.ihu.gr/moodle/"
              label="Moodle"
            />
          </View>
          <View style={styles.button}>
            <UsefulButton to="https://cs.duth.gr/" label="CSDUTH" />
          </View>
          <View style={styles.button}>
            <UsefulButton to="https://uniportal.ihu.gr/" label="Uniportal" />
          </View>
          <View style={styles.button}>
            <UsefulButton to="https://courses.cs.ihu.gr/" label="Courses" />
          </View>
          <View style={styles.button}>
            <UsefulButton
              to="https://cs.duth.gr/cs_hosting/attachments/webpages/el_timetable.pdf"
              label="Πρόγραμμα"
            />
          </View>
          <View style={styles.button}>
            <UsefulButton
              to="https://cs.duth.gr/faculty.xhtml"
              label="Προσωπικό"
            />
          </View>
        </ScrollView>
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
    fontSize: 18,
    flex: 10,
    // justifyContent: "space-around",
    // alignContent: "center",
    // paddingHorizontal: 10,
    // margin: 10,
  },
  buttonContainer: {
    flex: 1,
    // flexDirection: "row",
    flexWrap: "wrap",
    // height: 150,
    // justifyContent: "center",
    // alignContent: "flex-start",
    // paddingHorizontal: "10%",
  },
  button: {
    // width: 150,
    // height: 150,
    // flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    
    alignSelf: "center",
    marginHorizontal: 10,
    marginVertical: 20,
  }
});
