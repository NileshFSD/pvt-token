import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, selectIsSignIn, signInUser } from "./redux/valueSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isSignIn = useSelector(selectIsSignIn);

  return (
    <div>
      <h2>TOKEN : {isSignIn}</h2>
      <div>
        <button onClick={() => dispatch(signInUser())}>signIn</button>
        <button onClick={() => dispatch(logOutUser())}>logout</button>
      </div>
    </div>
  );
}

export default App;
