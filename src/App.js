import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import Card from "./components/Card";
import productsData from "./products_data.json";
export default function App() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <View style={StatusBar.currentHeight}></View>
      {searchBar( onChangeText,text)}
      <FlatList
        numColumns={2}
        data={productsData}
        renderItem={({ item }) => <Card products={item} />}
      />
    </View>
  );
}

const searchBar = (onChangeText,text)=>(<TextInput
  style={styles.input}
  onChangeText={onChangeText}
  value={text}
  placeholder="Ara..."
/>);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
    color: "#7F007F",
  },
  input: {
    backgroundColor: "#ECEFF1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
});
