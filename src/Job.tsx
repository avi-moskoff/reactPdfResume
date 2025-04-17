import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { lightBlue, styles, white } from "./Styles";
import { Image } from "./FontAwesome";

export const Job = (props: {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  github?: string;
}) => (
  <View style={{ ...styles.spaceBetween, ...{ marginBottom: 10 } }}>
    <Text style={styles.jobHeader}>{props.title}</Text>
    <View>
      <Text style={styles.companyHeader}>{props.company}</Text>
      <View style={{ ...styles.rowFlex, ...styles.spaceBetween }}>
        <Text style={styles.location}>{props.location}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      {props.description.map((desc, index) => (
        <View
          key={index}
          style={{ ...styles.rowFlex, ...styles.jobDescription }}
        >
          <Image image="circle" width={5} height={5} fill={white} />
          <Text style={styles.jobDescriptionText}>{desc}</Text>
        </View>
      ))}
      {props.github && (
        <View style={{ ...styles.rowFlex, ...styles.jobDescription }}>
          <Image image="circle" width={5} height={5} fill={white} />
          <View style={{ ...styles.jobDescriptionText, ...styles.rowFlex }}>
            <Text style={{ color: white }}>GitHub repo available &nbsp;</Text>
            <Link src={props.github}>
              <Text style={{ color: lightBlue }}>here!</Text>
            </Link>
          </View>
        </View>
      )}
    </View>
  </View>
);
