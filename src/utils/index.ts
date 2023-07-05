import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 10;

const globalUtils = {
  statusBarHeight,
};

export default globalUtils;
