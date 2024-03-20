"use client";

import React from "react";
import { Puff } from "react-loader-spinner";

function loading() {
  return (
    <div className="grid h-dvh place-content-center">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default loading;
