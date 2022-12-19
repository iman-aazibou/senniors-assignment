import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//Views
import Home from "../app/screens/Home";
import CreateAccForm from "../app/screens/CreateAccForm";
import LoggedUserHome from "../app/screens/LoggedUserHome";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const transitionSpec = {
  open: config,
  close: config,
};

const screens = {
  Home: {
    screen: Home,
    
  },
  Form: {
    screen: CreateAccForm,
  },
  LoggedUserHome: {
    screen: LoggedUserHome,
  },
};

const routeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    ...TransitionPresets.ModalSlideFromBottomIOS,
    ...TransitionPresets.FadeFromBottomAndroid,
    transitionSpec,
  },
});

export default createAppContainer(routeStack);
