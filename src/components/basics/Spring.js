import React from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

class Spring extends React.Component {
  state = {
    animation: new Animated.Value(1)
  };
  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      tension: 100,
      friction: 2
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start();
    });
  };
  render() {
    const animatedBoxStyles = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
    };

    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedBoxStyles]}>
            <Animated.Text>Click me..!</Animated.Text>
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
export default Spring;
