import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet
} from "react-native";

class CombineAnimation extends React.Component {
  state = {
    widthAnimation: new Animated.Value(200),
    radiusAnimation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.widthAnimation, {
        toValue: 70,
        duration: 500
      }),
      Animated.timing(this.state.radiusAnimation, {
        toValue: 35,
        duration: 500
      })
    ]).start(() => {
      Animated.timing(this.state.widthAnimation, {
        toValue: 200,
        duration: 500
      }).start();
      Animated.timing(this.state.radiusAnimation, {
        toValue: 0,
        duration: 500
      }).start();
    });
  };
  render() {
    const animatedStyles = {
      width: this.state.widthAnimation,
      borderRadius: this.state.radiusAnimation
    };
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text> Click </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "tomato",
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default CombineAnimation;
