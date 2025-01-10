import React from "react";

function DummyCard() {
  return (
    <div
      className="bg-slate-200 rounded-2xl"
      style={{
        height: "320px",
        // padding: "150px",
        margin: "10px 10px",
      }}
    >
      <div
        className="rounded-lg bg-slate-300"
        style={{ padding: "100px 145px" }}
      ></div>
      <div className="rounded-lg bg-slate-300 w-40 ml-3 py-2 mt-4"></div>
      <div className="rounded-lg bg-slate-300 w-40 ml-3 py-2 mt-4"></div>
      <div className="rounded-lg bg-slate-300 w-40 ml-3 py-2 mt-4"></div>
    </div>
  );
}

export default DummyCard;
