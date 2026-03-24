import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HUH = () => {
  return (
    <View style={style.HUH}>
      <Text style={style.HUHL}>HUH</Text>
    </View>
  );
};
const style = StyleSheet.create({
  HUH: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  HUHL: {
    fontSize: 100,
    color: "red",
    color: "blue",
  },
});

export default HUH;
