import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import List from "../components/basics/List";
import Opacity from "../components/basics/Opacity";
import Translate from "../components/basics/Translate";
import Scale from "../components/basics/Scale";
import HeightWidth from "../components/basics/HeightWidth";

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
      default:
        return <Translate />;
    }
  };
  renderContent = () => {
    if (this.state.showContent) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.setState({ showContent: false })}
            style={{ position: "absolute", bottom: 10 }}
          >
            <Text>GO Back </Text>
          </TouchableOpacity>

          {this.renderAnimation()}
        </View>
      );
    }
    return <List onPress={this.onListItemPress} />;
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
