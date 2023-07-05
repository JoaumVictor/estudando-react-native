import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import globalImages from "../../../assets/images";
import globalUtils from "../../../utils";

export function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Image source={globalImages.logoBlack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: globalUtils.statusBarHeight + 50,
    height: "100%",
    width: "100%",
  },
});
