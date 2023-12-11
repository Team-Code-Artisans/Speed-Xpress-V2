import { User } from "firebase/auth";

export type AuthContextType = {
  user: User | null;
  registerUser: (email: string, password: string, displayName: string) => void;
  googleSignIn: (role: string) => Promise<void>;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  resetPassword: (email: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
