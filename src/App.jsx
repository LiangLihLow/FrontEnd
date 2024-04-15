import React from "react";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import { AuthContext } from "./Contents/AuthContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./Contents/RequireAuth";
import { useState } from "react";
import ThemeContext from "./Contents/ThemeContext";
import useLocalStorage from "use-local-storage";

export default function Apps() {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <div>


            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<LogIn />} path="/login" />
              <Route element={
                <RequireAuth>
                  <label>
                    <input
                      type="checkbox"
                      checked={theme === "dark"}
                      onChange={(e) => {
                        setTheme(e.target.checked ? "dark" : "light");
                      }}
                    />
                    Dark mode
                  </label>
                  <Dashboard />

                </RequireAuth>
              } path="/login/dashboard" />
            </Routes>


          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
