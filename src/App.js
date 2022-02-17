import React, { useState } from "react";
import Appbar from "./components/Appbar";
import Router from "./components/Router";
import Footer from "./components/Footer";
import { ResultContextProvider } from "./context/ResultContextProvider";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ResultContextProvider>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-slate-200 min-h-screen dark:text-slate-200 dark:bg-slate-900">
          {" "}
          <Appbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Router />
          <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </div>
      </div>
    </ResultContextProvider>
  );
}

export default App;
