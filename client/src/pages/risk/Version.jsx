import React, { useState, useImperativeHandle, forwardRef, useEffect} from 'react';
import axios from 'axios';

const Version = forwardRef(({ selectedMainSection }, ref) => {


  const [versionData, setVersionData] = useState([ ]);

  useEffect(() => {
    const fetchSectionName = () => {
      try {
        setVersionData([{sectionName:selectedMainSection, dateApproved: '', dateLastReviewed: '', description: '', dateNextReview: ''}]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSectionName();
  }, [selectedMainSection]);


  useImperativeHandle(ref, () => ({
    saveData: async () => {
      const filteredData = versionData.filter(version =>  version.dateApproved && version.dateLastReviewed && version.description && version.dateNextReview);
      try {
        await axios.post('http://localhost:5000/version', filteredData);
      } catch (error) {
        console.error('Error submitting data:' , error);
      }
    },

  }));
  

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...versionData];
    newData[index][name] = value;
    setVersionData(newData);
  };

  return (
    <div className="pr-28 pl-28">
      {versionData.map((version, index) => (
        <table className="table-fixed w-full border-separate border-spacing-4" key={index}>
          <tbody>
            <tr >
              <td>
                <label
                  htmlFor="dateApproved"
                  className="block text-m font-medium leading-6 text-[#003E81]"
                >
                  Date Approved
                </label>
              </td>
              <td>
                <input
                  type="date"
                  name="dateApproved"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  value={version.dateApproved}
                  onChange={(e) => handleInputChange(index, e)}
                  
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="dateLastReviewed"
                  className="block text-m font-medium leading-6 text-[#003E81]"
                >
                  Date Last Reviewed
                </label>
              </td>
              <td>
                <input
                  type="date"
                  name="dateLastReviewed"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  value={version.dateLastReviewed}
                  onChange={(e) => handleInputChange(index, e)}
                  
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="description"
                  className="block text-m font-medium leading-6 text-[#003E81]"
                >
                  Changes of the Last Review
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  placeholder="Please Enter the Review Changes"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  value={version.description}
                  onChange={(e) => handleInputChange(index, e)}
                  
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="dateNextReview"
                  className="block text-m font-medium leading-6 text-[#003E81]"
                >
                  Date Due for Next Review
                </label>
              </td>
              <td>
                <input
                  type="date"
                  name="dateNextReview"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-[#003E81] shadow-sm ring-1 ring-inset ring-[#52B14A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  value={version.dateNextReview }
                  onChange={(e) => handleInputChange(index, e)}
                  
                />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
});

export default Version;
