import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Result from "./Result";
function Router() {
  return (
    <>
      <div className="p-4">
        <Routes>
          <Route exact path="/" element={<Navigate to="/search" />} />

          <Route path="/search" element={<Result />} />
          <Route path="/images" element={<Result />} />
          <Route path="/news" element={<Result />} />
          <Route path="/videos" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default Router;
