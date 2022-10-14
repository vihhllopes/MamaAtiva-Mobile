import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main/Main';
import StepOne from './pages/Step/StepOne';
import StepTwo from './pages/Step/StepTwo';
import StepThree from './pages/Step/StepThree';
import Requisitos from './pages/Requisitos/Requisitos';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="StepOne" component={StepOne} options={{ headerShown: false }} />
      <Stack.Screen name="StepTwo" component={StepTwo} options={{ headerShown: false }} />
      <Stack.Screen name="StepThree" component={StepThree} options={{ headerShown: false }} />
      <Stack.Screen name="Requisitos" component={Requisitos} options={{ headerShown: false }} />
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