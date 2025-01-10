import React from "react";
import DummyCard from "./DummyCard";

function ShimerMenu() {
  return (
    <div className="w-7/12 m-auto">
      <div className="flex-1 p-3 w-40  rounded-lg  py-2 bg-slate-200 h-10" />
      <div className="w-full rounded-lg bg-slate-200 h-40 my-8"></div>
      <div className="w-40 rounded-lg bg-slate-200 h-10 m-auto"></div>
      <div className="flex-1 p-3 w-40  rounded-lg  py-2 bg-slate-200 h-10" />
      <div className="flex justify-around w-full m-auto overflow-hidden my-8">
        <div className="w-6/12 h-64 bg-slate-200 rounded-lg mr-8 ">
          <div className="w-full h-36 bg-slate-300 rounded-lg px-40 py-24"></div>
          <div className="w-8/12 m-auto bg-slate-300 rounded-lg px-20 py-5 my-1"></div>
        </div>
        <div className="w-6/12 h-64 bg-slate-200 rounded-lg mr-8 ">
          <div className="w-full h-36 bg-slate-300 rounded-lg px-40 py-24"></div>
          <div className="w-8/12 m-auto bg-slate-300 rounded-lg px-20 py-5 my-1"></div>
        </div>
        <div className="w-6/12 h-64 bg-slate-200 rounded-lg mr-8 ">
          <div className="w-full h-36 bg-slate-300 rounded-lg px-40 py-24"></div>
          <div className="w-8/12 m-auto bg-slate-300 rounded-lg px-20 py-5 my-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ShimerMenu;
