import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const animations = [
  "opacity",
  "transform",
  "scale",
  "changing height and width"
];
class List extends React.Component {
  render() {
    return (
      <View>
        {animations.map((animation, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => this.props.onPress(index)}
            >
              <Card>
                <Text> {animation} </Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
export default List;
