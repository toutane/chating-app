import React from "react";
import { AuthProvider } from "./src/Contexts/Auth";
import FirebaseInitialization from "./src/Firebase/FirebaseInitialization";

export default function App() {
  return (
    <AuthProvider>
      <FirebaseInitialization />
    </AuthProvider>
  );
}
