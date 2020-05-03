import React from "react";
import { Link, View, StyleSheet, Image, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "projects-container": {
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

function Projects() {
  return (
    <View style={styles["projects-container"]}>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            This <Text style={styles.bold}>PDF</Text> was generated from{" "}
            <Text style={styles.bold}>CODE</Text>. Here is the link to{" "}
            <Link
              src="https://github.com/arvikumu/arvikumu-resume"
              style={styles.link}
            >
              GitHub Repo
            </Link>{" "}
            and{" "}
            <Link src="https://resume.arvikumu.dev" style={styles.link}>
              demo
            </Link>
            .
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Projects;
