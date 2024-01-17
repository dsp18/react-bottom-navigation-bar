import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstTab } from "./FirstTab";
import { NavigationContainer } from "@react-navigation/native";
import { ThirdTab } from "./ThirdTab";
import { SecondTab } from "./SecondTab";

export const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FirstTab" component={FirstTab}></Tab.Screen>
        <Tab.Screen name="SecondTab" component={SecondTab}></Tab.Screen>
        <Tab.Screen name="ThirdTab" component={ThirdTab}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
