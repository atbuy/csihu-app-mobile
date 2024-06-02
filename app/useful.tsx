import Navbar from "@/components/Navbar";
import { View } from "@/components/Themed";
import UsefulButton from "@/components/UsefulButton";
import { Dimensions, ScrollView, StyleSheet } from "react-native";

import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons/faChalkboardUser";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const width = windowWidth / cols - marginHorizontal * (cols + 1);
const height = windowHeight / rows - marginVertical * (rows + 1);

export default function Useful() {
  return (
    <View style={styles.body}>
      <Navbar />
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.sectionContainer}>
            <View style={styles.button}>
              <UsefulButton
                to="https://moodle.cs.ihu.gr/moodle/"
                label="Moodle"
                image={require("@/assets/images/moodle.png")}
              />
            </View>
            <View style={styles.button}>
              <UsefulButton
                to="https://cs.duth.gr/"
                label="CSDUTH"
                image={require("@/assets/images/duth_light.png")}
              />
            </View>
            <View style={styles.button}>
              <UsefulButton
                to="https://uniportal.ihu.gr/"
                label="Uniportal"
                image={require("@/assets/images/uniportal.png")}
              />
            </View>
            <View style={styles.button}>
              <UsefulButton
                to="https://courses.cs.ihu.gr/"
                label="Courses"
                image={require("@/assets/images/courses.png")}
              />
            </View>
            <View style={styles.button}>
              <UsefulButton
                to="https://cs.duth.gr/cs_hosting/attachments/webpages/el_timetable.pdf"
                label="Πρόγραμμα"
                icon={faTable}
              />
            </View>
            <View style={styles.button}>
              <UsefulButton
                to="https://cs.duth.gr/faculty.xhtml"
                label="Προσωπικό"
                icon={faChalkboardUser}
              />
            </View>
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
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
});
