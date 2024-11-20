import React, { useContext, useState } from "react";
import { useTheme, useUpdateTheme } from "./ThemeContext";
import { UserContext } from "./UserContext";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email, password });
  };
  const darkTheme = useTheme();
  const toogleTheme = useUpdateTheme();

  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };
  const buttonStyle = {
    backgroundColor: darkTheme ? "white" : "black",
    color: darkTheme ? "black" : "white",
  };
  return (
    <>
      <div className="w-full h-full flex  justify-center items-center ">
        <div
          style={themeStyle}
          className="flex flex-col justify-center items-center mt-10 w-[400px] h-[600px] rounded-3xl  "
        >
          <button onClick={toogleTheme}>Toggle</button>
          <div className="mt-8">
            <h1 className="text-2xl font-bold ">Login</h1>
          </div>
          <div className="h-[300px] flex flex-col justify-center gap-2 items-center">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="focus:outline-none p-3 rounded-xl"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              type="text"
              className="focus:outline-none p-3 rounded-xl"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <input
              type="button"
              value="Login"
              style={buttonStyle}
              className=" py-2  font-semibold text-xl px-12 rounded-lg"
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
