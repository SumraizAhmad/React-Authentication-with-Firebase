import logo from "./logo.svg";
import "./App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("successfully created");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("this user has signIn")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
        alert("this user has not signIn")

      });
  };

  return (
    <div className="App">
      <input
        type={"email"}
        placeholder="please enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={"password"}
        placeholder="please enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup}>create account</button>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
}

export default App;
