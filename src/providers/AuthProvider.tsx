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
import { getSingleUser, saveUser } from "@/utils/api/user";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/UserType";
import { toast } from "react-toastify";

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  console.log("role:", role);
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
      return userCredential.user;
    } catch (error: any) {
      if (error.message.includes("password")) {
        toast.error("Password must be 6 characters");
      } else if (error.message.includes("email")) {
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      toast.error("Invalid email or password");
      setLoading(false);
      return null;
    }
  };

  const googleSignIn = async (role: string) => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);

      const userData: UserType = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
        number: "",
        division: "",
        district: "",
        address: "",
        role: role,
      };

      if (userCredential.user) {
        router.push("/");
        await saveUser(userData);
        toast.success("Google sign in Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      setLoading(false);
      await signOut(auth);
      toast.warning("Sign out successfully");
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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userResponse = await getSingleUser(currentUser.email);
        if (userResponse.code === "success") {
          const userRole = userResponse.data?.data?.role;
          setRole(userRole);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    role,
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
