import * as AuthSession from "expo-auth-session";
import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IUser {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export interface IUserProvider {
  HandleGoogleSignIn: () => Promise<string | undefined>;
  Login: () => Promise<void>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export const UserLoginContext = createContext({} as IUserProvider);

const UserLoginProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  async function HandleGoogleSignIn() {
    try {
      const CLIENT_ID =
        "707934883290-iqlc8iomph52jl6l6t3pj1edg5oplm66.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@expovitorsantos/leide-salon";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const user = await response.json();

        setUser(user);
        setIsAuthenticated(true);
        await AsyncStorage.setItem("user_aut", "authenticated");

        return type;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function Login() {
    const value = await AsyncStorage.getItem("user_auth");
    if (value) {
      setIsAuthenticated(true);
      return;
    } else {
      return;
    }
  }

  return (
    <UserLoginContext.Provider
      value={{
        HandleGoogleSignIn,
        setIsAuthenticated,
        isAuthenticated,
        user,
        Login,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserLoginProvider;
