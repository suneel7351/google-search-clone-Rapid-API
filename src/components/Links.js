import React from "react";
import { NavLink } from "react-router-dom";
const search = <i class="fa-solid fa-magnifying-glass mr-1"></i>;
const news = <i class="fa-solid fa-newspaper mr-1"></i>;
const image = <i class="fa-solid fa-image mr-1"></i>;
const video = <i class="fa-solid fa-video mr-1"></i>;
const links = [
  { url: "/search", text: <p>{search}All</p> },
  { url: "/news", text: <p>{news}News</p> },
  { url: "/images", text: <p>{image}Images</p> },
  { url: "/videos", text: <p>{video}Videos</p> },
];

function Links() {
  return (
    <div className="flex" items-center>
      {links.map(({ url, text }, index) => {
        return (
          <NavLink
            key={index}
            to={url}
            className="mx-2"
            activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Links;
