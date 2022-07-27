import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doLoginAsync,
  selectlogin,
  logout,
  selectUsername,
} from "./app/loginSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const loginStatus = useSelector(selectlogin);
  const userName = useSelector(selectUsername);
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1> {userName}</h1>
      {loginStatus ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <div>
          User
          <input onChange={(e) => setUser(e.target.value)} />
          Pwd
          <input type={"password"} onChange={(e) => setPwd(e.target.value)} />
          <button
            onClick={() =>
              dispatch(doLoginAsync({ username: user, password: pwd }))
            }
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
