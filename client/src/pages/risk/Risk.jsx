import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

const Risk = () => {
  return (
    
    
    <div className=" border-2 w-full p-5 rounded-2xl mx-2 h-screen ml-96 mt-20">
    <div className="h-screen flex flex-col">
      <h2 className="font-bold text-[#52B14A] text-4xl  mt-3">
        Business Imapact Analysis
      </h2>
      <div className=" border mt-5 bg-cyan-50 rounded-2xl mx-5">
              <div className="pb-20 pt-20 pr-28 pl-28">
                <table class= 'table-fixed w-full border-separate border-spacing-4'>
                    <tbody >
                        <tr>
                            <td>
                                <label
                                htmlFor="SectionName"
                                className="block text-m font-medium leading-6 text-[#003E81]"
                                >
                                Section Name
                                </label>
                            </td>
                            <td>
                                <select
                                id="SectionName"
                                name="SectionName"
                                className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                onChange={(e) => handleAttendeeClick(e.target.value)} >
                                
                                <option value="">Please Select Your Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
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
                                onChange={(e) => handleAttendeeClick(e.target.value)} >
                                
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
                                htmlFor="Maintainers"
                                className="block text-m font-medium leading-6 text-[#003E81]"
                                >
                                Maintainers
                                </label>
                            </td>
                            <td>
                            <input
                                type="text"
                                name="Maintainers"
                                id="Maintainers"
                                placeholder='Please Enter the Maintainers'
                                required
                                
                                className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setPurpose(e.target.value)}
                            />
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
                                placeholder='Please Enter the Viewers'
                                required
                                
                                className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setPurpose(e.target.value)}
                            />
                            </td>
                        </tr>
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
                                placeholder='Please Enter the Review Changes'
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

                  
                  </div>

                  

      </div>
      </div>
      
  )
}

export default Risk