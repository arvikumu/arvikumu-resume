import React from "react";
import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  "professional-experience-container": {
    padding: "4px 0 8px 0",
  },
  "content-container": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 2,
    paddingLeft: 4,
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
  medium: { fontFamily: "Montserrat-Medium" },
  section: {
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
  },
  link: {
    fontSize: 10,
    color: "#0D47A1",
    textDecoration: "none",
    fontFamily: "RobotoSlab-Regular",
  },
});

function ProfessionalExperience() {
  return (
    <View style={styles["professional-experience-container"]}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 1,
        }}
      >
        <Text style={{ ...styles.section, ...styles.bold }}>
          Koinearth India Private Limited:{" "}
        </Text>
        <Text style={{ ...styles.section }}>
          (Senior Frontend Engineer ~ [Dec'2018 - Jan'2021])
        </Text>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Developed <Text style={styles.medium}>2 Frontends</Text> and{" "}
            <Text style={styles.medium}>1 Backend</Text> project from{" "}
            <Text style={styles.medium}>scratch</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            <Text style={styles.medium}>Leading</Text> the{" "}
            <Text style={styles.medium}>Frontend team</Text> with 4 members.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Developed <Text style={styles.medium}>infrastructure</Text> for many
            services in <Text style={styles.medium}>AWS</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Developed{" "}
            <Text style={styles.medium}>scalable react components</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Part of the product architecture{" "}
            <Text style={styles.medium}>decision-making team</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Designed <Text style={styles.medium}>DB schemas</Text> for the
            backend service in <Text style={styles.medium}>MySQL</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Part of UI and Backend{" "}
            <Text style={styles.medium}>release process</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Have full knowledge of the{" "}
            <Text style={styles.medium}>product architecture</Text> and
            pipeline.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Integrated <Text style={styles.medium}>Email and SMS</Text> service
            using <Text style={styles.medium}>AWS</Text>.
          </Text>
        </View>
      </View>
      <View style={{ ...styles["content-container"], paddingBottom: 4 }}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Implemented{" "}
            <Text style={styles.medium}>
              mobile number verification via OTP
            </Text>{" "}
            in the backend and frontend service.
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 1,
        }}
      >
        <Text style={{ ...styles.section, ...styles.bold, paddingBottom: 1 }}>
          Goomo Holdings Services India Pvt. Ltd.:{" "}
        </Text>
        <Text style={{ ...styles.section }}>
          (SDE 1 ~ [Dec'2017 - Dec'2018])
        </Text>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Developed UI for{" "}
            <Text style={styles.medium}>Payment Gateway System</Text> from{" "}
            <Text style={styles.medium}>scratch</Text> in a team of 5 members.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            <Text style={styles.medium}>Lead</Text> the UI development of
            <Text style={styles.medium}>Train's</Text> product in a team of 4
            members.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Contributed to migrating the website from{" "}
            <Text style={styles.medium}>Client-Side Rendering</Text> to
            <Text style={styles.medium}>Server-Side Rendering</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Wrote a <Text style={styles.medium}>custom implementation</Text> of
            a node module library and reduced{" "}
            <Text style={styles.medium}>webpack bundle size by 50kb</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Part of the <Text style={styles.medium}>code review</Text> team
            which enforced{" "}
            <Text style={styles.medium}>best coding practices</Text> in the
            development.
          </Text>
        </View>
      </View>
      <View style={{ ...styles["content-container"] }}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={{ ...styles.content }}>
          <Text style={{ ...styles.name }}>
            <Text style={styles.medium}>Mentored</Text> a college intern for 6
            months to help him get onboard for{" "}
            <Text style={styles.medium}>UI development</Text>.
          </Text>
        </View>
      </View>
      <View style={styles["content-container"]}>
        <Image src="/circle.png" style={styles["circle-icon"]} />
        <View style={styles.content}>
          <Text style={styles.name}>
            Part of <Text style={styles.medium}>product development</Text> and
            <Text style={styles.medium}>release cycle</Text> process.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProfessionalExperience;
