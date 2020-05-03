import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "technical-skills-container": {
    padding: "4px 0 8px 0",
  },
  "content-container": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 2,
  },
  "circle-icon": {
    height: 8,
    width: 8,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 8,
    flexWrap: "wrap",
  },
  name: { fontSize: 10, fontFamily: "Montserrat-Regular" },
  bold: { fontFamily: "Montserrat-SemiBold" },
  section: {
    fontSize: 11,
  },
  link: {
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
});

function TechnicalSkills() {
  return (
    <View style={styles["technical-skills-container"]}>
      <Text style={{ ...styles.section, ...styles.bold, paddingBottom: 1 }}>
        Languages/Technologies:{" "}
      </Text>
      <Text style={{ ...styles.name, paddingBottom: 2 }}>
        JavaScript (ReactJS, Redux, Thunk, Saga, Redux-Form, Formik,
        Material-UI, React-PDF, React-Window), Redis, HTML, CSS, SCSS, NodeJS,
        GoLang, MySQL, Git, Firebase, Microservices, Message Brokers, Serverless
      </Text>
      <Text style={{ ...styles.section, ...styles.bold, paddingBottom: 1 }}>
        Frameworks:{" "}
      </Text>
      <Text style={styles.name}>
        NextJS, ExpressJS, NestJS, Fastify, GoMux, GoFiber, GoChi, GRPC
      </Text>
    </View>
  );
}

export default TechnicalSkills;
