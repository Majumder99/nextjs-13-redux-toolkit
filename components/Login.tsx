import React from "react";
import { logIn, logOut, moderator } from "@/redux/features//auth-slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = React.useState("");
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const onClickLogin = () => {
    dispatch(logIn(username));
  };
  const onclickToggle = () => {
    dispatch(moderator());
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <button onClick={onClickLogin}>Login</button>
        <br />
        <button onClick={onClickLogout}>Logout</button>
        <br />

        <button onClick={onclickToggle}>Toggle Moderator Status</button>
      </div>
    </>
  );
};

export default Login;
