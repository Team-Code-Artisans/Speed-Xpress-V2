"use client";

import { useState, createContext, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";
import app from "@/config/firebaseConfig";
import { ChildrenProps } from "@/types/ChildrenProps";
import { AuthContextType } from "@/types/AuthContextType";
import { saveUser } from "@/utils/api/user";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/UserType";
import { toast } from "react-toastify";

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<User | null> => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        ...userCredential.user,
        email,
        displayName,
      });

      setLoading(false);
      await updateProfile(userCredential.user, { displayName: displayName });
      toast.success("Register successfully");
      router.push("/");
      return userCredential.user;
    } catch (error: any) {
      if (error.message && error.message.includes("password")) {
        toast.error("Password must be 6 characters");
      } else if (error.message && error.message.includes("email")) {
        toast.error("Email already exist");
      } else {
        toast.error("Something went wrong!");
      }
      setLoading(false);
      return null;
    }
  };

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      setLoading(false);
      toast.success("Sign in successfully");
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.message && error.message.includes("password")) {
        toast.error("Invalid password");
      } else if (error.message && error.message.includes("email")) {
        toast.error("Invalid email address");
      } else {
        toast.error("Something went wrong!");
      }
      setLoading(false);
    }
  };

  const googleSignIn = async (role: string) => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);

      const data: UserType = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
        role: role,
      };

      await saveUser(data);
      toast.success("Google sign in Successfully");
      router.push("/");
    } catch (error) {
      toast.error("Google sign in failed");
      console.error(error);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      toast.warning("Sign out successfully");
      setLoading(false);
      await signOut(auth);
    } catch (error) {
      toast.error("Sign out failed");
      console.error(error);
    }
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    try {
      setLoading(false);
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    registerUser,
    googleSignIn,
    loginUser,
    logOut,
    resetPassword,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
