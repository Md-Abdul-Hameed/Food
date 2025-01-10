import React from "react";
import DummyCard from "./DummyCard";

function Shimer() {
  
  return (
    <div>
      <div className="flex  w-10/12 m-auto p-10 space-y-4 bg-darkBlue rounded-lg  md:space-y-0 md:space-x-3">
        <div className="flex-1 p-3  rounded-lg  py-2 pl-9 pr-3 bg-slate-300 h-10" />

        <button
          type="button"
          className="bg-slate-2=300 ml-4 w-24 rounded-lg"
        ></button>
      </div>
      <div className="bg-slate-300 rounded-lg ml-28 w-96 h-10"></div>
      <div className="flex justify-around w-10/12 m-auto overflow-hidden my-8">
        <DummyCard />
        <DummyCard />
        <DummyCard />
        <DummyCard />
      </div>
      <div className="bg-slate-300 rounded-lg ml-28 w-96 h-10"></div>
    </div>
  );
}

export default Shimer;
