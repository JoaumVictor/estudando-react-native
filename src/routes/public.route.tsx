import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/public/login";
import { propsPublicNavigationStack } from "../types/publicRoutes";

export function PublicRoutes() {
  const Stack = createNativeStackNavigator<propsPublicNavigationStack>();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
