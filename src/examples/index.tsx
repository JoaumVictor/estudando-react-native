import { StyleSheet, Text, View } from "react-native";

export function Example() {
  return (
    <View style={styles.container}>
      <Text>Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
