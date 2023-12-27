import { User } from "firebase/auth";
import { UserType } from "./UserType";

export type firebaseUserType = User | null;

export type AuthContextType = {
  user: firebaseUserType;
  userInfo: UserType | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserType | null>>;
  role: string | null;
  registerUser: (email: string, password: string, displayName: string) => void;
  googleSignIn: (role: string) => Promise<void>;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  resetPassword: (email: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
