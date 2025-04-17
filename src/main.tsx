import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  render,
  Svg,
  Path,
  Link,
} from "@react-pdf/renderer";

import { styles, white } from "./Styles";
import { Image } from "./FontAwesome";

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.name}>Avi Moskoff</Text>
      <Text style={styles.title}>Software Engineer</Text>
      <View style={styles.title}>
        <View style={styles.linkView}>
          <Image image="at" width={10} height={10} fill={white} />
          <Link src="mailto:avi.z.moskoff@gmail.com">
            <Text style={styles.link}>avi.z.moskoff@gmail.com</Text>
          </Link>
        </View>

        <View style={styles.linkView}>
          <Image image="phone" width={10} height={10} fill={white} />
          <Link src="tel:+7209176217">
            <Text style={styles.link}>(720)917-6217</Text>
          </Link>
        </View>

        <View style={styles.linkView}>
          <Image image="www" width={10} height={10} fill={white} />
          <Link src="https://avi.me">
            <Text style={styles.link}>avi.me</Text>
          </Link>
        </View>
        <View style={styles.linkView}>
          <Image image="github" width={10} height={10} fill={white} />
          <Link src="https://github.com/avi-moskoff">
            <Text style={styles.link}>avi-moskoff</Text>
          </Link>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

render(<MyDocument />, `${__dirname}/../out/resume.pdf`);
