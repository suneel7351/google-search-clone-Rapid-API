import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
function Appbar({ darkTheme, setDarkTheme }) {
  return (
    <>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between border-b  dark:border-slate-700 justify-center border-slate-300 items-center">
        <div className="flex justify-between items-center w-screen">
          <Link to="/">
            <p className="text-2xl bg-sky-500 py-2 px-5 rounded-md text-slate-300 dark:bg-slate-400 dark:text-slate-900">
              google <i className="fa-solid fa-magnifying-glass"></i>
            </p>
          </Link>
          <button
            type="button"
            onClick={() => setDarkTheme(!darkTheme)}
            className="text-xl dark:text-slate-700 dark:bg-slate-200 bg-white rounded-full hover:shadow-lg border px-4 py-1"
          >
            {darkTheme ? (
              <p>
                {" "}
                light
                <i className="ml-2 fa-solid fa-lightbulb"></i>
              </p>
            ) : (
              <p>
                {" "}
                moon
                <i className="ml-2 fa-solid fa-moon"></i>
              </p>
            )}
          </button>
        </div>
        <Search />
      </div>
    </>
  );
}

export default Appbar;
