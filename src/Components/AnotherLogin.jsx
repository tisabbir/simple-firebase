import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.init";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AnotherLogin = () => {
  const [user, setUser] = useState([]);

  const handleGoogleLogIN = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .error((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleGoogleLogIN} className="btn text-center mx-auto">
          Google Log In
        </button>
      </div>

      <div className="flex justify-center">
        <button onClick={handleGithubLogIn} className="btn text-center mx-auto">
          GitHub Log In
        </button>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSignOut} className="btn text-center mx-auto">
          Sign Out
        </button>
      </div>

      <div>
        <h1>User : {user?.displayName}</h1>
        <p>Email : {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default AnotherLogin;
