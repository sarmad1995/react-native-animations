import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";
import Basics from "./screens/Basics";
import Advanced from "./screens/Advanced";
import Intermediate from "./screens/Intermediate";

export default createMaterialBottomTabNavigator(
  {
    Basics: {
      screen: Basics,
      navigationOptions: {
        tabBarLabel: "Basics",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="timeline" color={tintColor} />
        )
      }
    },
    Intermediate: {
      screen: Intermediate,
      navigationOptions: {
        tabBarLabel: "Intermediate",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="directions" color={tintColor} />
        )
      }
    },
    Advanced: {
      screen: Advanced,
      navigationOptions: {
        tabBarLabel: "Advanced",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="directions" color={tintColor} />
        )
      }
    }
  },
  {
    activeTintColor: "white",
    shifting: true,
    barStyle: {
      backgroundColor: "#f2f2f2"
    }
  }
);
