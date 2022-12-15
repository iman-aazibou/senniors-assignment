import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../app/screens/Home";
import CreateAccForm from "../app/screens/CreateAccForm";
import LoggedUserHome from "../app/screens/LoggedUserHome";

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

const routeStack = createStackNavigator(screens);
export default createAppContainer(routeStack);
