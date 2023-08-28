"use client";

import React from "react";

const Login = () => {
  const [username, setUsername] = React.useState("");

  const onClickLogin = () => {};
  const onclickToggle = () => {};
  const onClickLogout = () => {};
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <button>Login</button>
        <br />
        <button>Logout</button>
        <br />

        <button>Toggle Moderator Status</button>
      </div>
    </>
  );
};

export default Login;
