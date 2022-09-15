import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        setPersistence,
        browserSessionPersistence,
        signInWithPopup,
        sendPasswordResetEmail,
        signOut } from "firebase/auth";

import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebaseConfig";


export const registerWithEmail = async (auth, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export function loginWithEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // eslint-disable-next-line
          const user = userCredential.user;
          // ...
        })
        .catch((err) => {
            if (err.message.includes(("auth/"))) {
                console.log("Invalid Username or Password.");
            } else {
                console.log('something else')
            }
        });
};


export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


export async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCred = await signInWithPopup(auth, provider);

      return {
        user: userCred.user
      };
    } catch (err) {
      return {
        error: err.message
      };
    }
  }


export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
    signOut(auth);
  };
