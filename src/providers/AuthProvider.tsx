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
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<User | null> => {
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
        router.push(`/dashboard/${role}`);
        await saveUser(userData);
        toast.success("Google sign in Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      setLoading(false);
      await signOut(auth);
      toast.success("Sign out successfully");
      router.push("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Sign out failed");
      console.error(error);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setLoading(false);
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          setUser(currentUser);

          if (currentUser?.email) {
            setLoading(true);

            try {
              const userResponse = await getSingleUser(currentUser.email);

              if (userResponse.code === "success") {
                const userRole = userResponse.data?.data?.role;
                setRole(userRole !== undefined ? userRole : null);
              } else {
                console.error(userResponse.error.message);
              }
            } catch (error) {
              console.error("Error fetching user data:", error);
            } finally {
              setLoading(false);
            }
          } else {
            setLoading(false);
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
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
