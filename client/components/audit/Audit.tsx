"use client";
import React from "react";
import LineGraph from "./LineGraph";

export default function Audit() {
  return (
    <div className="bg-background relative top-0 flex-1 w-full flex flex-col gap-10 h-full px-4 pt-4">
      <LineGraph />
    </div>
  );
}
