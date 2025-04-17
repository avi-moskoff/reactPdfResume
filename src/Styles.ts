import { StyleSheet } from "@react-pdf/renderer";

export const white = "#ECEFF4";
export const lightBlue = "#88C0D0";
export const darkBlue = "#5E81AC";
export const green = "#8FBCBB";

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
  leftSection: {
    marginLeft: 30,
    marginTop: 20,
    width: "40%",
  },
  rightSection: {
    marginRight: 30,
    marginTop: 20,
    width: "40%",
  },
  rowFlex: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontsize: 20,
    marginLeft: 5,
    color: white,
  },
  jobHeader: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    color: white,
  },
  companyHeader: {
    fontSize: 15,
    marginBottom: 5,
    color: green,
  },
  location: {
    fontSize: 10,
    marginBottom: 5,
    color: white,
  },
  date: {
    fontSize: 10,
    marginBottom: 5,
    color: white,
  },
  jobDescription: {
    fontSize: 10,
    marginBottom: 10,
    color: white,
    alignItems: "center",
  },
  jobDescriptionText: {
    marginLeft: 5,
  },
  alignCenter: {
    alignItems: "center",
  },
});
