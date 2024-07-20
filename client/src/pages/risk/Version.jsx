import React, { useState } from 'react';
import axios from 'axios';

const Version = () => {

 



  return (
    <div className=" pr-28 pl-28">
        <table class="table-fixed w-full border-separate border-spacing-4">
            <tbody>
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
  )
}

export default Version