import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/private/home";

export function PrivateRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
