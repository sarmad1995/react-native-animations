import React from "react";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

class Translate extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1400
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 700
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation
        },
        {
          translateX: this.state.animation
        }
      ]
    };
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text> Translate</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "tomato",
    height: 150,
    width: 150
  }
});
export default Translate;
