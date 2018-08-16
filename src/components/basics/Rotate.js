import React from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

class Rotate extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      }).start();
    });
  };
  render() {
    const rotateInterpolation = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const animatedBoxStyles = {
      transform: [
        {
          rotate: rotateInterpolation
        }
      ]
    };

    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedBoxStyles]}>
            <Animated.Text>Rotate me..!</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"
  }
});
export default Rotate;
