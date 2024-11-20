import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import Profile from "./Profile";
function App() {
  return (
    <>
      <ThemeProvider>
        <Login />
      </ThemeProvider>
      <UserProvider>
        <Profile />
        <Login />
      </UserProvider>
    </>
  );
}

export default App;
