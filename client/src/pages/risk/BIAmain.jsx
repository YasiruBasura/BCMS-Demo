import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Risk from "./Risk";
import OperatingSites from "./OperatingSites";
import CriticalFunctions from "./CriticalFunctions";
import PeaksnDeadlines from "./PeaksnDeadlines";
import Resources from "./Resources";

const BIAmain = () => {
  const [mainSections, setMainSections] = useState([
    "Digital Platform",
    "Digital Labs",
    "Human Resources",
    "Finance",
  ]);
  const [selectedMainSection, setSelectedMainSection] = useState("Digital Platform");
  const [newMainSection, setNewMainSection] = useState("");

  const handleMainSectionChange = (e) => {
    setSelectedMainSection(e.target.value);
  };

  const handleAddMainSection = () => {
    if (newMainSection && !mainSections.includes(newMainSection)) {
      setMainSections([...mainSections, newMainSection]);
      setSelectedMainSection(newMainSection);
      setNewMainSection("");
    }
  };

  return (
    <div className="flex">
      <div className="mt-20 mb-10 fixed">
        <Sidebar />
      </div>

      <div className="h-screen flex flex-col">
        <div className="border-2 p-5 rounded-2xl mr-2 ml-96 mt-20">
          <div className="flex items-center">
            <h2 className="font-bold text-[#52B14A] text-4xl mt-3">
              Business Impact Analysis -{" "}
              <span className="inline-block relative hover:text-teal-600">
                <select
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer text-black "
                  value={selectedMainSection}
                  onChange={handleMainSectionChange}
                >
                  {mainSections.map((section, index) => (
                    <option key={index} value={section} >
                      {section}
                    </option>
                  ))}
                  <option value="new">Add new section</option>
                </select>
                <span className="text-4xl ">{selectedMainSection}</span>
              </span>
            </h2>
          </div>
          {selectedMainSection === "new" && (
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                placeholder="Enter new section name"
                value={newMainSection}
                onChange={(e) => setNewMainSection(e.target.value)}
              />
              <button
                className="text-white bg-[#52B14A] hover:bg-[#285924] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2"
                onClick={handleAddMainSection}
              >
                Add
              </button>
            </div>
          )}
          <div className="border mt-5 bg-cyan-50 rounded-2xl mx-5">
            <Risk />
            <h2 className="font-bold text-[#52B14A] text-xl ml-5 mt-20">
              Operating Sites
            </h2>
            <OperatingSites />
            <h2 className="font-bold text-[#52B14A] text-xl ml-5 mt-20">
              Critical Business Functions
            </h2>
            <CriticalFunctions />
            <h2 className="font-bold text-[#52B14A] text-xl ml-5 mt-20">
              Business Peaks and Deadlines
            </h2>
            <PeaksnDeadlines />
            <h2 className="font-bold text-[#52B14A] text-xl ml-5 mt-20">
              Resources
            </h2>
            <Resources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIAmain;
