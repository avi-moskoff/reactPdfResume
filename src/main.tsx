import React from "react";
import { Page, Text, View, Document, render, Link } from "@react-pdf/renderer";

import { styles, white } from "./Styles";
import { Image } from "./FontAwesome";
import { Job } from "./Job";

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      <Text style={styles.name}>Avi Moskoff</Text>
      <Text style={styles.title}>Software Engineer</Text>
      <View style={styles.title}>
        <View style={styles.rowFlex}>
          <Image image="at" width={10} height={10} fill={white} />
          <Link src="mailto:avi.z.moskoff@gmail.com">
            <Text style={styles.link}>avi.z.moskoff@gmail.com</Text>
          </Link>
        </View>

        <View style={styles.rowFlex}>
          <Image image="phone" width={10} height={10} fill={white} />
          <Link src="tel:+7209176217">
            <Text style={styles.link}>(720)917-6217</Text>
          </Link>
        </View>

        <View style={styles.rowFlex}>
          <Image image="www" width={10} height={10} fill={white} />
          <Link src="https://avi.me">
            <Text style={styles.link}>avi.me</Text>
          </Link>
        </View>
        <View style={styles.rowFlex}>
          <Image image="github" width={10} height={10} fill={white} />
          <Link src="https://github.com/avi-moskoff/reactPdfResume">
            <Text style={styles.link}>avi-moskoff</Text>
          </Link>
        </View>
      </View>
      <View style={{ ...styles.rowFlex, ...styles.spaceBetween }}>
        <View style={styles.leftSection}>
          <View style={{ ...styles.rowFlex, ...styles.alignCenter }}>
            <Image image="hammer" width={15} height={10} fill={white} />
            <Text style={styles.sectionTitle}>Work Experience</Text>
          </View>
          <Job
            title="Software Engineer"
            company="GitKraken"
            location="Scottsdale, AZ"
            date="2020-present"
            description={[
              "Won a company-wide hackathon with a team of 4, using AI to determine whether to add labels to a pull request when it is uploaded.",
              "Delivered multiple features to the GitKraken Desktop client, an Electron application written in React and TypeScript.",
              "Instrumented the GitKraken Desktop client with OpenTelemetry, allowing the product team to make data-driven decisions about the direction of the application.",
              "Completed internships in the summers of 2020 and 2021, and became a full-time employee in 2022.",
            ]}
          />
          <Job
            title="Software Engineer Intern"
            company="Jacobs Engineering"
            location="Fort Huachuca, AZ"
            date="Summer 2019"
            description={[
              "Explored ways to fill out forms with conditional inputs and validation without internet access.",
              "Experimented with the built-in Javascript engine in Adobe's PDF reader to achieve this end.",
              "Obtained a secret security clearance.",
            ]}
          />
          <Job
            title="Software Engineer Intern"
            company="Left Hand Robotics"
            location="Longmont, CO"
            date="2017-2018"
            description={[
              "Developed an inventory management system in React with a MySQL database to keep track of the company's assets.",
              "Implemented a software deployment system in Python for GPS base stations, allowing for software upgrades in remote locations.",
              "Calculated centimeter-accurate GPS position of base stations over time using Python, enabling the use of differential GPS to navigate self-driving snow clearing robots.",
            ]}
          />
        </View>
        <View style={styles.rightSection}>
          <View style={{ ...styles.rowFlex, ...styles.alignCenter }}>
            <Image image="cap" width={15} height={10} fill={white} />
            <Text style={styles.sectionTitle}>Education</Text>
          </View>
          <Job
            title="BS in Computer Science and Mathematics"
            company="Arizona State University"
            location="Tempe, AZ"
            date="2018-2022"
            description={[
              "Graduated with a 3.98 GPA.",
              "Completed coursework in data structures, algorithms, and software engineering.",
              "Completed coursework in linear algebra, statistics, and analysis.",
            ]}
          />
          <View style={{ ...styles.rowFlex, ...styles.alignCenter }}>
            <Image image="flask" width={15} height={10} fill={white} />
            <Text style={styles.sectionTitle}>Projects</Text>
          </View>
          <Job
            title="React-Pdf Resume"
            company="Personal"
            location="Tempe, AZ"
            date="Today"
            description={[
              "Ported my resume to React-PDF from LaTeX.",
              "Used SVG elements from Fontawesome, ts-node to compile and run my code, and nord-theme for styling.",
            ]}
            github="https://github.com/avi-moskoff/reactPdfResume"
          />
          <Job
            title="Robotics Head Mentor"
            company="Si Se Puede Foundation"
            location="Chandler, AZ"
            date="2022-2025"
            description={[
              "Volunteered as a mentor for two middle-school FIRST Tech Challenge teams at a non-profit organization",
              "Taught Java and the engineering process to students",
              "Nominated by students for the Compass Award at the 2023 Arizona State Championship, receiving second place.",
            ]}
          />
          <Job
            title="Project Euler"
            company="Personal"
            location="Tempe, AZ"
            date="2016-2024"
            description={[
              "Ranked in the top 1% of users on Project Euler, a website that challenges users to solve mathematical problems with code.",
              "Used the website to learn about algorithms, data structures, and combinatorics.",
            ]}
          />
        </View>
      </View>
    </Page>
  </Document>
);

render(<MyDocument />, `${__dirname}/../out/resume.pdf`);
