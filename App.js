import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme, Heading, Text } from "native-base";
import { useFonts } from "expo-font";
import Main from "./pages/Main/Main";
import StepOne from "./pages/Step/StepOne";
import StepTwo from "./pages/Step/StepTwo";
import StepThree from "./pages/Step/StepThree";
import Requisitos from "./pages/Requisitos/Requisitos";
import MilkBank from "./pages/MilkBanks/MilkBank";
import Show from "./pages/MilkBanks/Show";
import Login from "./pages/Login/LoginScreen";
import SignUp from "./pages/Login/SignUpScreen";
import RecoverPasswordStep1 from "./pages/Login/Password/RecoverPasswordStep1";
import RecoverPasswordStep2 from "./pages/Login/Password/RecoverPasswordStep2";
import HomeScreen from "./pages/Home";
const theme = extendTheme({
  fontConfig: {
    Quicksand: {
      300: {
        normal: "Quicksand-Light",
      },
      400: {
        normal: "Quicksand-Regular",
      },
      500: {
        normal: "Quicksand-Medium",
      },
      600: {
        normal: "Quicksand-SemiBold",
      },
      700: {
        normal: "Quicksand-Bold",
      },
    },
    RobotoSlab: {
      100: {
        normal: "RobotoSlab-Thin",
      },
      200: {
        normal: "RobotoSlab-ExtraLight",
      },
      300: {
        normal: "RobotoSlab-Light",
      },
      400: {
        normal: "RobotoSlab-Regular",
      },
      500: {
        normal: "RobotoSlab-Medium",
      },
      600: {
        normal: "RobotoSlab-SemiBold",
      },
      700: {
        normal: "RobotoSlab-Bold",
      },
      800: {
        normal: "RobotoSlab-ExtraBold",
      },
      900: {
        normal: "RobotoSlab-Black",
      },
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  // fonts: {
  //   heading: "Quicksand",
  //   body: "RobotoSlab",
  //   mono: "Quicksand",
  // },
  colors: {
    primary: "#9098E0",
    secondary: "#B2DECD",
    tertiary: "#273444",
    active: "#918ECB",
    black: "#1F2D3D",
    white: "#D3DCE6",
    whiteSnow: "#D3DCE6",
  },
  Text: {
    defaultProps: {
      size: "sm",
      color: "primary",
      fontFamily: "Quicksand",
    },
  },
  Input: {
    defaultProps: {
      size: "sm",
      borderColor: "primary",
      color: "primary",
      fontFamily: "Quicksand",
    },
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand-VariableFont_wght.ttf"),
    RobotoSlab: require("./assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepOne"
            component={StepOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepTwo"
            component={StepTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepThree"
            component={StepThree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Requisitos"
            component={Requisitos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MilkBank"
            component={MilkBank}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Show"
            component={Show}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecoverPasswordStep1"
            component={RecoverPasswordStep1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecoverPasswordStep2"
            component={RecoverPasswordStep2}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
