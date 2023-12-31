import { User } from "firebase/auth";

export type firebaseUserType = User | null;

export type AuthContextType = {
  user: firebaseUserType;
  role: string | null;
  registerUser: (email: string, password: string, displayName: string) => void;
  googleSignIn: () => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  resetPassword: (email: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
