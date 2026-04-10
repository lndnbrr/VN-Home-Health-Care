'use client'

import { useState } from "react"
import OurStory from "./aboutSubSections/OurStory";
import MeetTheTeam from "./aboutSubSections/MeetTheTeam";
import Mission from "./aboutSubSections/Mission";
import Goals from "./aboutSubSections/Goals";

export default function AboutSection () {

  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {id:0 ,label: "Our Story", content: <OurStory/>},
    {id:1 ,label: "Meet the Team", content: <MeetTheTeam/>},
    {id:2 ,label: "Philosophy and Mission", content: <Mission/>},
    {id:3 ,label: "Our Goals", content: <Goals/>}
  ];

  return (
    <>
      <div id="aboutUs" className="flex text-4xl section-padding">
        <div className="flex flex-col flex-1 justify-center"> 
          <div className="flex justify-center text-[5vw]">
            <h1 className="font-bold underline text-primary">About Us</h1>
          </div>
          <div className="flex flex-col flex-1 pt-[75px] text-[3vw]"> 
            {
              tabs.map((tab)=> (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab=== tab.id ? "text-primary font-bold drop-shadow-[0_2.2px_1.9px_rgba(200,50,0,0.90)]" : "text-gray-500"}>{tab.label}</button>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center border-4 border-primary pl-1 mr-10 min-h-[555px] overflow-y-auto">
        {
            tabs.map((tab)=> (
              <div key={tab.id}> {activeTab === tab.id && tab.content} </div>
            ))
          }
        </div>
      </div>

    </>
  )
}
