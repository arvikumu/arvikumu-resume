import React from "react";
import { View, Text, Link, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "intro-container": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 16,
  },
  "intro-left-view-container": { flex: 1 },
  name: {
    fontSize: 22,
    textTransform: "uppercase",
    fontFamily: "RobotoSlab-Medium",
  },
  "designation-container": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  objective: {
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
  },
  "mobile-number": {
    fontSize: 10,
    fontFamily: "RobotoSlab-Regular",
  },
  "intro-right-view-container": {
    flex: 1,
    textAlign: "right",
  },
  email: {
    paddingTop: 4,
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
  linkedin: {
    paddingTop: 1,
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
  link: {
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
});

function ResumeDocumentIntro() {
  return (
    <View style={styles["intro-container"]}>
      <View style={styles["intro-left-view-container"]}>
        <Text style={styles.name}>Arvind Kumar</Text>
        <View style={styles["designation-container"]}>
          <Text style={styles.objective}>I'm a self taught developer. </Text>
        </View>
      </View>
      <View style={styles["intro-right-view-container"]}>
        <Text style={styles["mobile-number"]}>+91-8681859577</Text>
        <Text style={styles.email}>
          <Link src="mailto:arvikumu28@gmail.com">
            arvikumu28@gmail.com
          </Link>
        </Text>
        <Text style={styles.linkedin}>
          <Link src="https://linkedin.com/in/arvikumu">
            linkedin.com/in/arvikumu
          </Link>
        </Text>
        <Text style={styles.linkedin}>
          <Link src="https://github.com/arvikumu">github.com/arvikumu</Link>
        </Text>
      </View>
    </View>
  );
}

export default ResumeDocumentIntro;
