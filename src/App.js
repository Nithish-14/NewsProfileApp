import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import SettingsPage from "./components/SettingsPage";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ThemeContext from "./ThemeContext";
import './App.css'

const userDetail = {
  "name": "John Doe",
  "short_bio": "Passionate about bringing you the latest news and insights from around the world. Let's stay informed together!"
}

localStorage.setItem("userDetail", JSON.stringify(userDetail))

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
      <div className={`container-fluid app-container ${!darkMode ? "light-mode-app-container" : ""}`}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App