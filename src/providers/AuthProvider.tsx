"use client";

import app from "@/config/firebaseConfig";
import { AuthContextType } from "@/types/AuthContextType";
import { ChildrenProps } from "@/types/ChildrenProps";
import { UserType } from "@/types/UserType";
import { saveUser } from "@/utils/api/user";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
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
  const pathname = usePathname();

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

      if (userCredential.user.email) {
        await updateProfile(userCredential.user, {
          displayName: displayName,
        });

        // await createJWT({
        //   email: userCredential.user.email,
        //   role: displayName,
        // });

        setUser({
          ...userCredential.user,
          email,
          displayName,
        });

        setRole(displayName);
        setLoading(false);
      }

      return userCredential.user;
    } catch (error: any) {
      if (error.message.includes("email")) {
        toast.error("Email already exist");
      } else {
        toast.error("Something went wrong!");
      }

      setLoading(false);
      // console.error(error);
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

      if (userCredential.user) {
        // await createJWT({
        //   email: userCredential.user?.email as string,
        //   role: userCredential.user?.displayName as string,
        // });

        setRole(
          ["regular", "merchant", "rider", "admin"].includes(
            `${userCredential.user?.displayName}`
          )
            ? userCredential.user?.displayName
            : "regular"
        );

        setLoading(false);
      }

      return userCredential.user;
    } catch (error) {
      toast.error("Invalid email or password");
      // console.error(error);
      setLoading(false);
      return null;
    }
  };

  const googleSignIn = async () => {
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
        role: "regular",
      };

      if (userCredential.user.email) {
        router.push("/dashboard/regular");

        // await createJWT({
        //   email: userCredential.user.email,
        //   role: "regular",
        // });

        setRole("regular");

        const userResponse = await saveUser(userData);
        if (userResponse.code === "success") {
          toast.success("Google sign in Successfully");
        } else {
          console.error(userResponse.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      setUser(null);
      setRole(null);
      // await removeJWT();
      await signOut(auth);

      if (pathname !== "/") {
        router.push("/login");
      }

      toast.success("Sign out successfully");
    } catch (error) {
      console.error(error);
      toast.error("Sign out failed");
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser !== null) {
        setRole(
          ["regular", "merchant", "rider", "admin"].includes(
            `${currentUser?.displayName}`
          )
            ? currentUser?.displayName
            : "regular"
        );
      }

      setLoading(false);
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
