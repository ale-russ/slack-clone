import React from "react";
import "./Login.css";

import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //push the google user info to the data layer
        //console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://th.bing.com/th/id/OIP.bsTk-baJCUgxiFlsQxIIdQHaHb?pid=Api&w=178&h=178&c=7"
          alt=""
        />
        <h1>Sing in to Kabbee HQ</h1>
        <p>kabbee.slack.com</p>
        <Button onClick={singIn}>Sing In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
