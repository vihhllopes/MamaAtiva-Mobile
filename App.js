import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main/Main';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Appdois() {
   return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}