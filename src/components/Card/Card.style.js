import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    flex: 1,
    alignItems: "center",
    alignContent: "space-around",
    backgroundColor: "#ECEFF1",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  body: {
    padding: 10,
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 4,
    margin: 5,
    borderRadius: 10,
    resizeMode: "center",
  },
  inStockText: { color: "red", fontWeight: "bold" },
});
