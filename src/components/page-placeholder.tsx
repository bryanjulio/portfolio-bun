"use client";
import React, { useState } from "react";

import { useTabs } from "@/hooks/use-tabs";

import { Framer } from "@/lib/framer";
import About from "./pages/about";
import Curriculum from "./pages/curriculum";
import Portfolio from "./pages/portfolio";
import Posts from "./pages/posts";
import Contact from "./pages/contact";
import { Separator } from "./ui/separator";

export default function PagePlaceholder({ pageName }: { pageName: string }) {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Sobre mim",
        children: <About />,
        id: "Overview",
      },
      {
        label: "Curriculo",
        children: <Curriculum />,
        id: "Integrations",
      },
      {
        label: "Portfolio",
        children: <Portfolio />,
        id: "Activity",
      },
      {
        label: "Posts",
        children: <Posts />,
        id: "Domains",
      },
      {
        label: "Contato",
        children: <Contact />,
        id: "Domains",
      },
    ],
    initialTabId: "Matches",
  });
  const framer = useTabs(hookProps);
 console.log(framer)

  return (
    <div className="flex flex-1 h-full max-h-screen flex-col space-y-2 pr-10">
      <div className=" border border-zinc-500 w-full h-full max-h-screen rounded-lg bg-[#1F1E1F]">
        <div className="flex w-full  h-20  rounded-lg">
          <div className="w-2/5 flex justify-end px-8 flex-col">
            <span className="font-bold text-3xl">{framer.selectedTab.label}</span>
           
          </div>
          
          <div className="w-3/5">
            <div className="bg-[#282729] h-2/3 rounded-bl-lg rounded-tr-lg">
              {" "}
              <div className="w-full flex flex-col  ">
                <div className=" w-full items-start flex text-md ">
                  <Framer.Tabs {...framer.tabProps} />
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <Separator className="w-[60px] mx-8 bg-[#FFCD4D] h-1 rounded my-6"/>
        <div className="px-8  h-full max-h-max">{framer.selectedTab.children}</div>
      </div>
    </div>
  );
}
