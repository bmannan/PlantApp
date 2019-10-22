import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Forgot from "../screens/Forgot";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Signup,
    Forgot,
    Browse,
    Explore,
    Product,
    Settings
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: (
        <Image
          style={{ marginLeft: theme.sizes.base }}
          source={require("../assets/icons/back.png")}
        />
      ),
      headerBackTitle: null,
      headerLeftContainterStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
