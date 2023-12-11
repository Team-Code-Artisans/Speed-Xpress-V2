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

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
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
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      setLoading(false);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      setLoading(false);
      await signOut(auth);
    } catch (error) {
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
