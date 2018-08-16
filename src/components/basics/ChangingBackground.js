import React from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

class ChangingBackground extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      }).start();
    });
  };
  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99, 71, 255)"]
    });
    const textInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99, 71, 255)", "rgb(255,99,71)"]
    });
    const animatedBoxStyles = {
      backgroundColor: boxInterpolation
    };
    const animatedTextStyles = {
      color: textInterpolation
    };
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedBoxStyles]}>
            <Animated.Text style={animatedTextStyles}>
              Change me..!
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150
  }
});
export default ChangingBackground;
