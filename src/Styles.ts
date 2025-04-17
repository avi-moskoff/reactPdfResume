import { StyleSheet } from "@react-pdf/renderer";

export const white = "#ECEFF4";
export const lightBlue = "#88C0D0";

// Create styles
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#2E3440",
    color: white,
    flexDirection: "column",
    display: "flex",
  },
  name: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: white,
    alignSelf: "center",
    fontFamily: "Courier",
  },
  title: {
    gap: 10,
    fontSize: 15,
    marginBottom: 10,
    color: white,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  link: {
    marginLeft: 5,
    marginRight: 5,
    color: lightBlue,
    fontSize: 10,
  },
  linkView: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
  },
});
