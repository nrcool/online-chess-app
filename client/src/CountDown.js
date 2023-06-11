import React from "react";

export default function CountDown({count}) {

  return (
    <div className="counter">
      <div
        className={`radial-progress ${count.m===1? "bg-red-600":"bg-red-100"}`}
        style={{
          "--value": 300 / 3 - (300 - (count.m * 60 + count.s)) / 3,
          "--size": "12rem",
          "--thickness": "0.5rem"
        }}
      >
        {" "}
        <div className="grid grid-flow-col  justify-center items-center gap-1 text-center auto-cols-max">
          <div className="flex flex-col items-center p-1 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-lg">
              <span style={{ "--value": count.m }}></span>
            </span>
            minutes
          </div>
          <div className="flex flex-col items-center p-1 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-lg">
              <span style={{ "--value": count.s }}></span>
            </span>
            seconds
          </div>
        </div>
      </div>
    </div>
  );
}
