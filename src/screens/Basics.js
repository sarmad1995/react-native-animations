import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import List from "../components/basics/List";
import Opacity from "../components/basics/Opacity";
import Translate from "../components/basics/Translate";
import Scale from "../components/basics/Scale";
import HeightWidth from "../components/basics/HeightWidth";
import ChangingBackground from "../components/basics/ChangingBackground";
import Rotate from "../components/basics/Rotate";
import Spring from "../components/basics/Spring";
import AnimatedEvent from "../components/basics/AnimatedEvent";
import Decay from "../components/basics/Decay";
import CombineAnimation from "../components/basics/CombineAnimation";

class Basics extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarColor: "purple"
  });
  state = {
    showContent: false
  };

  onListItemPress = index => {
    console.log(index);
    this.setState({ showContent: true });
    this.setState({ currentContent: index });
  };
  renderAnimation = () => {
    switch (this.state.currentContent) {
      case 0:
        return <Opacity />;
      case 1:
        return <Translate />;
      case 2:
        return <Scale />;
      case 3:
        return <HeightWidth />;
      case 4:
        return <ChangingBackground />;
      case 5:
        return <Rotate />;
      case 6:
        return <Spring />;
      case 7:
        return <AnimatedEvent />;
      case 8:
        return <Decay />;
      case 9:
        return <CombineAnimation />;
      default:
        return <Translate />;
    }
  };
  renderContent = () => {
    if (this.state.showContent) {
      return (
        <View style={styles.container}>
          {this.renderAnimation()}
          <TouchableOpacity
            onPress={() => this.setState({ showContent: false })}
            style={{ position: "absolute", bottom: 10, elevation: 10 }}
          >
            <Text>GO Back </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <ScrollView style={{ marginTop: 50 }}>
        <List onPress={this.onListItemPress} />
      </ScrollView>
    );
  };
  render() {
    return <View style={{ flex: 1 }}>{this.renderContent()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Basics;
