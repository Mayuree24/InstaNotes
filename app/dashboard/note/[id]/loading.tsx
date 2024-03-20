"use client";

import React from "react";
import { LineWave } from "react-loader-spinner";

function loading() {
  return (
    <div className="grid h-dvh place-content-center">
      <LineWave
        visible={true}
        height="400"
        width="400"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}

export default loading;
