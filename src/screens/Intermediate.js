import React from "react";
import { View, Text } from "react-native";

class Intermediate extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarColor: "blue"
  });
  render() {
    return (
      <View>
        <Text> Intermediate </Text>
      </View>
    );
  }
}
export default Intermediate;
