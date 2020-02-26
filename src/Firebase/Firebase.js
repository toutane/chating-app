import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

import { firebaseConfig } from "../Config/FirebaseConfig";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  getCurrentUserId() {
    return this.auth.currentUser && this.auth.currentUser.uid;
  }
  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}
export default new Firebase();
