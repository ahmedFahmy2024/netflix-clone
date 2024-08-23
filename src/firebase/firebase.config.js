import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBhY-NKhGWOBqYxhuStxO42qpcWSsOKr8Q",
  authDomain: "netfix-clone-bb9f6.firebaseapp.com",
  projectId: "netfix-clone-bb9f6",
  storageBucket: "netfix-clone-bb9f6.appspot.com",
  messagingSenderId: "479323355978",
  appId: "1:479323355978:web:bcbe92483f98be48ea1fb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (error) {
        console.error(JSON.stringify(error, null, 2));
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(JSON.stringify(error, null, 2));
        throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successful");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      throw error;
    }
  };

export { auth, db, signup, login, logout };
