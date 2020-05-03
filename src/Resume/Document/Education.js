import React from "react";
import { View, StyleSheet, Image, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "education-container": {
    padding: "4px 0 8px 0",
  },
  "content-container": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 4,
    paddingBottom: 2,
  },
  "circle-icon": {
    height: 4,
    width: 4,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 8,
    flexWrap: "wrap",
  },
  name: { fontSize: 10, fontFamily: "Montserrat-Regular" },
  bold: { fontFamily: "Montserrat-SemiBold" },
  link: {
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
});

function Education() {
  return (
    <View style={styles["education-container"]}>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Class 10th SSC - <Text style={styles.bold}>88.8%</Text> (2011)
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Class 12th HSC - <Text style={styles.bold}>88.8%</Text> (2013)
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Education;
