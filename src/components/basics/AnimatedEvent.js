import React from "react";
import { View, Animated, Text, ScrollView, StyleSheet } from "react-native";

class AnimatedEvent extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };
  render() {
    const contentInterpolation = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
    });
    const animatedStyles = {
      backgroundColor: contentInterpolation
    };

    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Animated.View style={[styles.content, animatedStyles]}>
            <Text>Scroll me</Text>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    height: 3000
  }
});
export default AnimatedEvent;
