import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Chats from "../Views/Chats";
import Login from "../Views/Login";
import Register from "../Views/Register";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarLabel: "Chats",
            tabBarIcon: ({ color }) => (
              <Feather name="message-circle" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Auth"
          component={Auth}
          options={{
            tabBarLabel: "User",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={20} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
