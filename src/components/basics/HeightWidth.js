import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet
} from "react-native";

class HeightWidth extends React.Component {
  state = {
    animation: new Animated.Value(150)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 150,
        duration: 500
      }).start();
    });
  };
  render() {
    const animatedStyles = {
      height: this.state.animation,
      width: this.state.animation
    };
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text> Change Me..!! </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "tomato"
  }
});
export default HeightWidth;
