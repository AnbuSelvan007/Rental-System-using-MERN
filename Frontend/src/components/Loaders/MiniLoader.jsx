import React from "react";
import { RotateLoader,SyncLoader } from "react-spinners";

const MiniLoader = () => {
  return (
    <div
      className="loader"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <RotateLoader color="blue" /> */}
      <SyncLoader  color="blue"/>
    </div>
  );
};

export default MiniLoader;
