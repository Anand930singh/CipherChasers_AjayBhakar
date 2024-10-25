import { NotebookTabs, ScanLine, ShieldAlert, ShieldCheck } from "lucide-react";
import React from "react";

export default function Security() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 gap-3">
      <div className="col-span-1 md:col-span-6 md:row-span-4 w-full rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 order-1 md:order-3"></div>
      <div className="rounded-xl md:col-span-3 md:row-span-3 w-full justify-between shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] bg-card flex p-8 order-3 md:order-1">
        <div className="flex flex-col justify-end gap-4">
          <NotebookTabs className="text-indigo-500" />
          <p className="text-xs">Contracts Audited</p>
        </div>
        <div className="h-full flex items-center text-4xl">156</div>
      </div>
      <div className="rounded-xl md:col-span-3 md:row-span-3 w-full justify-between shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] bg-card flex p-8 order-4 md:order-2">
        <div className="flex flex-col justify-end gap-4">
          <ShieldAlert className="text-red-500" />
          <p className="text-xs">High Risk Projects</p>
        </div>
        <div className="h-full flex items-center text-4xl">23</div>
      </div>

      <div className="rounded-xl md:col-span-3 md:row-span-3 w-full justify-between shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] bg-card flex p-8 order-5 md:order-4">
        <div className="flex flex-col justify-end gap-4">
          <ScanLine className="text-orange-500" />
          <p className="text-xs">Suspicious Transactions</p>
        </div>
        <div className="h-full flex items-center text-4xl">89</div>
      </div>
      <div className="rounded-xl md:col-span-3 md:row-span-3 w-full justify-between shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] bg-card flex p-8 order-6 md:order-5">
        <div className="flex flex-col justify-end gap-4">
          <ShieldCheck className="text-green-500" />
          <p className="text-xs">Verified Projects</p>
        </div>
        <div className="h-full flex items-center text-4xl">45</div>
      </div>
      <div className="rounded-xl w-full md:col-span-6 md:row-span-2 justify-between shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] bg-card flex p-8 order-2 md:order-6"></div>
    </div>
  );
}
