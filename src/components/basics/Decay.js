import React from "react";
import {
  View,
  Animated,
  Text,
  ScrollView,
  StyleSheet,
  PanResponder
} from "react-native";

class Decay extends React.Component {
  state = {
    animation: new Animated.ValueXY(0)
  };
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start();
      }
    });
  }
  render() {
    const animatedStyles = {
      transform: this.state.animation.getTranslateTransform()
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyles]}
          {...this.panResponder.panHandlers}
        >
          <Text>Move me</Text>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: 70,
    width: 70,
    backgroundColor: "tomato"
  }
});
export default Decay;
