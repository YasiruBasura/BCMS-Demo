import React, { useState } from 'react';

const Resources = () => {
  const [siteData, setSiteData] = useState([
    { name: '', altName: '', rto: '', rpo: '' }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...siteData];
    newData[index][name] = value;
    setSiteData(newData);

    // Automatically add a new row if editing the last row and it's not empty
    if (
      index === newData.length - 1 &&
      newData[index].name &&
      newData[index].altName &&
      newData[index].rto &&
      newData[index].rpo
    ) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, { name: '', altName: '', rto: '', rpo: '' }]);
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
            placeholder="Enter the alternate name"
            name="altName"
            value={site.altName}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="RTO"
            name="rto"
            value={site.rto}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="RPO"
            name="rpo"
            value={site.rpo}
            onChange={(e) => handleInputChange(index, e)}
          />
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
                <th className="py-2">Alternate Name</th>
                <th className="py-2">RTO</th>
                <th className="py-2">RPO</th>
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
};

export default Resources;
