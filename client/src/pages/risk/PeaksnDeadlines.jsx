import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const PeaksnDeadlines = forwardRef(({selectedMainSection}, ref) => {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/peaksnDeadline', { params: {sectionName: selectedMainSection}});
        const fetchData = response.data;
        setSiteData([...fetchData, {sectionName:selectedMainSection, name: '', description: '', timeoftheday: '', dayoftheweek: '', businessday: '', calenderday: '', month: '' }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMainSection]);

  useImperativeHandle(ref, () => ({
    saveData: async () => {
      const filteredData = siteData.filter(site =>site.sectionName && site.name && site.description && site.timeoftheday && site.dayoftheweek && site.businessday && site.calenderday && site.month);
      try {
        await axios.post('http://localhost:5000/peaksnDeadline', filteredData);
      } catch (error) {
        console.error('Error submitting data:' , error);
      }
    },

  }));

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...siteData];
    newData[index][name] = value;
    setSiteData(newData);

    if (
      index === newData.length - 1 &&
      newData[index].name &&
      newData[index].description &&
      newData[index].timeoftheday &&
      newData[index].dayoftheweek &&
      newData[index].businessday &&
      newData[index].calenderday &&
      newData[index].month
    ) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, { name: '', description: '', timeoftheday: '', dayoftheweek: '', businessday: '', calenderday: '', month: '' }]);
  };

  const generateRows = () => {
    return siteData.map((site, index) => (
      <tr key={index}>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter the name"
            name="name"
            value={site.name}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter description"
            name="description"
            value={site.description}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="time"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter the time"
            name="timeoftheday"
            value={site.timeoftheday}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <select
            className="w-full border-none focus:ring-transparent text-center"
            name="dayoftheweek"
            value={site.dayoftheweek}
            onChange={(e) => handleInputChange(index, e)}
          >
            <option value="Select Day">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </td>
        <td>
          <input
            type="date"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter Business Day"
            name="businessday"
            value={site.businessday}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="date"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter Calender Day"
            name="calenderday"
            value={site.calenderday}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <select
            className="w-full border-none focus:ring-transparent text-center"
            name="month"
            value={site.month}
            onChange={(e) => handleInputChange(index, e)}
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </td>
      </tr>
    ));
  };


  return (
    <div className="flex">
      <div className="w-full pb-20 pt-8 pr-28 pl-28">
        <div className="relative overflow-hidden">
          <table className="w-full text-center border border-[#52B14A]">
            <thead className="bg-[#00bdf6] h-10">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Description</th>
                <th className="py-2">Time of the Day</th>
                <th className="py-2">Day of week</th>
                <th className="py-2">Business Day</th>
                <th className="py-2">Calender Day</th>
                <th className="py-2">Month</th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              {generateRows()}
            </tbody>
          </table>
        
        </div>
      </div>
    </div>
  );
});

export default PeaksnDeadlines;
