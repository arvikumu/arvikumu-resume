import React from "react";
import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";

import Intro from "./Intro";
import Education from "./Education";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalExperience from "./ProfessionalExperience";
// import Projects from "./Projects";
import Courses from "./Courses";

const styles = StyleSheet.create({
  page: { padding: 24 },
  heading: {
    fontSize: 12,
    fontFamily: "RobotoSlab-Medium",
    textTransform: "uppercase",
    color: "#B71C1C",
  },
});

function ResumeDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Intro />
        <Text style={styles.heading}>Education</Text>
        <Education />
        <Text style={styles.heading}>Technical Skills</Text>
        <TechnicalSkills />
        <Text style={styles.heading}>Professional Experience</Text>
        <ProfessionalExperience />
        {/* <Text style={styles.heading}>Projects</Text>
        <Projects /> */}
        <Text style={styles.heading}>Courses</Text>
        <Courses />
      </Page>
    </Document>
  );
}

export default ResumeDocument;
