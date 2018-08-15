import React from "react";
import { View, Text } from "react-native";

class Advanced extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarColor: "tomato"
  });
  render() {
    return (
      <View>
        <Text> ADVANCED</Text>
      </View>
    );
  }
}
export default Advanced;
