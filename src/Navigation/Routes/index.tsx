import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { UserLoginContext } from "../../Contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoute from "./auth.route";

export default function Routes() {
  const { isAuthenticated } = useContext(UserLoginContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoute />}
    </NavigationContainer>
  );
}
