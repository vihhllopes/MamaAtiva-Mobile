import { Image, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeList from "./HomeList";
import NotificationsScreen from "./NotificationScreen";

const HomeScreen = ({ navigation }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home" // title: 'App Name'
        component={HomeList}
      />
      <Drawer.Screen name="Configurações" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
