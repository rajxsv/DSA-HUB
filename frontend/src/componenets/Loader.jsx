import React from "react";
import { LineWave } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
    <div className="flex items-center overflow-clip h-lvh w-full justify-center" >
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        />
        </div>
    </>
  );
}
