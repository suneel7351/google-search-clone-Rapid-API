import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

function Ring() {
  return (
    <div className="flex justify-center items-center">
      <Rings color="#00BFFF" height={550} width={80} />
    </div>
  );
}

export default Ring;
