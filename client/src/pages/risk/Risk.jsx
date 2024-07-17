import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Risk = () => {
  const [maintainers, setMaintainers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addMaintainer = () => {
    if (inputValue.trim() !== "") {
      setMaintainers([...maintainers, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeMaintainer = (index) => {
    const newMaintainers = maintainers.filter((_, i) => i !== index);
    setMaintainers(newMaintainers);
  };

  return (

   <>
            <div className=" pt-20 pr-28 pl-28">
              <table class="table-fixed w-full border-separate border-spacing-4">
                <tbody>
                 
                  {/* <tr>
                    <td>
                      <label
                        htmlFor="Owner"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Owner
                      </label>
                    </td>
                    <td>
                      <select
                        id="Owner"
                        name="Owner"
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleAttendeeClick(e.target.value)}
                      >
                        <option value="">Please Select Owner</option>
                        <option value="A">Yasiru Jayasinghe</option>
                        <option value="B">Sahan</option>
                        <option value="C">Yasiru Basura</option>
                        <option value="D">Kusal Mendis</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label
                        htmlFor="BCMCoordinator"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        BCM Coordinator
                      </label>
                    </td>
                    <td>
                      <select
                        id="BCMCoordinator"
                        name="BCMCoordinator"
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleAttendeeClick(e.target.value)}
                      >
                        <option value="">Please Select the Coordinator</option>
                        <option value="A">Yasiru Jayasinghe</option>
                        <option value="B">Sahan</option>
                        <option value="C">Yasiru Basura</option>
                        <option value="D">Kusal Mendis</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label
                        htmlFor="Maintainers"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Maintainers
                      </label>
                    </td>

                    <td>
                      <div className="relative">
                        <input
                          type="text"
                          name="Maintainers"
                          id="Maintainers"
                          placeholder="Please Enter the Maintainers"
                          required
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="block w-full pr-10 rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          onClick={addMaintainer}
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-transparent text-[#52B14A] font-extrabold text-2xl hover:text-[#2f672a] "
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-wrap mt-1">
                        {maintainers.map((maintainer, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs bg-[#d3d5d8] text-[#003E81] rounded-xl px-2 mr-1 mb-1"
                          >
                            <span>{maintainer}</span>
                            <button
                              type="button"
                              onClick={() => removeMaintainer(index)}
                              className="ml-2 px-2 py-1 bg-transparent text-white hover:text-[#000000] "
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="Viewers"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Viewers
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Viewers"
                        id="Viewers"
                        placeholder="Please Enter the Viewers"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <label
                        htmlFor="DateApproved"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Date Approved
                      </label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DateApproved"
                        id="DateApproved"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="DateLastReviewed"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Date last reviewed
                      </label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DateLastReviewed"
                        id="DateLastReviewed"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="ReviewChanges"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Changes of the last review
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ReviewChanges"
                        id="ReviewChanges"
                        placeholder="Please Enter the Review Changes"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="DateNextReview"
                        className="block text-m font-medium leading-6 text-[#003E81]"
                      >
                        Date due for next review
                      </label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DateNextReview"
                        id="DateNextReview"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

           

      
          </>
  );
};

export default Risk;
