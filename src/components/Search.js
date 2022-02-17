import React, { useContext, useEffect, useState } from "react";

import { useDebounce } from "use-debounce";
import useResultContext from "../context/UseResultContext";
import Links from "./Links";

export default function Search() {
  const context = useContext(useResultContext);
  const { setSearchTerm } = context;
  const [text, setText] = useState("JavaScript");
  const [debouncedValue] = useDebounce(text, 400);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex justify-center items-center flex-col py-2 w-100 m-auto">
      <div>
        {" "}
        <input
          value={text}
          type="text"
          className="sm:w-96 w-80 h-10 dark:bg-slate-200 border rounded-full mb-3 shadow-sm outline-none p-6 text-black hover:shadow-lg"
          placeholder="search..."
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <button
            className="text-2xl text-slate-500 text-center ml-2 mt-4"
            onClick={() => setText("")}
          >
            X
          </button>
        )}
      </div>
      <Links />
    </div>
  );
}
