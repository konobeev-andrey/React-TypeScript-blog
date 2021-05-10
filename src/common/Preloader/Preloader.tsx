import React from "react";
import preloaderSVG from "./preloaderSVG.svg";

export const Preloader = () => {
  return (
    <div className={"preloader__contener"}>
      <p>
        <img src={preloaderSVG} alt={"preloader"} />
      </p>
    </div>
  );
};
