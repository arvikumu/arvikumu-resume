import React from "react";
import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "courses-container": {
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
  content: { display: "flex", flexDirection: "row", paddingLeft: 8 },
  name: { fontSize: 10, fontFamily: "Montserrat-Regular" },
  bold: { fontFamily: "Montserrat-SemiBold" },
});

function Courses() {
  return (
    <View style={styles["courses-container"]}>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>Udacity - </Text>
          <Text style={{ ...styles.name, ...styles.bold }}>
            React Nanodegree{" "}
          </Text>
          <Text style={styles.name}>(2017)</Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>Udemy - </Text>
          <Text style={{ ...styles.name, ...styles.bold }}>
            Go: The Complete Developer's Guide (Golang)
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Courses;
