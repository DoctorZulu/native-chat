import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Main = () => {
  Main.navigationOptions = {
    title: "Chatter",
  };

  const [name, setName] = useState("");

  onPress = () => {
    props.navigation.navigate("Chat", { name });
  };

  onChangeText = (name) => setName({ name });

  return (
    <View>
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput
        style={styles.nameInput}
        placeHolder="John Smith"
        onChangeText={onChangeText}
        value={name}
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;
