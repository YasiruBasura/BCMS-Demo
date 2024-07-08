import React, { useState } from 'react';

const OperatingSites = () => {
  const [siteData, setSiteData] = useState([
    { location: '', type: '', address: '' } 
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...siteData];
    newData[index][name] = value;
    setSiteData(newData);

    // Automatically add a new row if editing the last row and it's not empty
    if (index === newData.length - 1 && newData[index].location && newData[index].type && newData[index].address) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, { location: '', type: '', address: '' }]);
  };

  const generateRows = () => {
    return siteData.map((site, index) => (
        
      <tr key={index}>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter location"
            name="location"
            value={site.location}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <select
            className="w-full border-none focus:ring-transparent text-center"
            name="type"
            value={site.type}
            onChange={(e) => handleInputChange(index, e)}
          >
            <option value="">Choose...</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter address"
            name="address"
            value={site.address}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex">
      
      <div className="w-full pb-20 pt-8 pr-28 pl-28">
        <div className="relative overflow-hidden ">
          <table className="w-full text-center  border border-[#52B14A] ">
            <thead className="bg-[#00bdf6] h-10">
              <tr>
                <th className="py-2">Location</th>
                <th className="py-2">Primary/Secondary</th>
                <th className="py-2">Address</th>
              </tr>
            </thead>
            <tbody className="bg-transparent ">
              {generateRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OperatingSites;
