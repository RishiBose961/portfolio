import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Body/Main';
import YoutubeCon from './components/ContentCreated/YoutubeCon';
import FollowFor from './components/FollowForm/FollowFor';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)")

  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ]

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMatch()
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem('theme', 'dark')
        break;
      case "light":
        element.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        break;
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break;
    }
  }, [theme])
  return (
    <div className="min-h-screen pt-3 dark:text-black dark:bg-slate-900 duration-100">
      <Header options={options} setTheme={setTheme} theme={theme} />
      <Home />
      <Main />
      <Skills />
      <Work />
      <YoutubeCon />
      <div className='container mx-auto py-4'>
        <hr />
        <FollowFor />
      </div>
    </div>
  );
}

export default App;
