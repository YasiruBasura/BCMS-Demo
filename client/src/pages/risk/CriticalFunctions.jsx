import React, { useState } from 'react';

const CriticalFunctions = () => {
  const [siteData, setSiteData] = useState([
    { function: '', description: '', criticality: '', rto: '', rpo: '', mtpd: '' }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...siteData];
    newData[index][name] = value;
    setSiteData(newData);

    // Automatically add a new row if editing the last row and it's not empty
    if (
      index === newData.length - 1 &&
      newData[index].function &&
      newData[index].description &&
      newData[index].criticality &&
      newData[index].rto &&
      newData[index].rpo &&
      newData[index].mtpd
    ) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, { function: '', description: '', criticality: '', rto: '', rpo: '', mtpd: '' }]);
  };

  const generateRows = () => {
    return siteData.map((site, index) => (
      <tr key={index}>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter the function"
            name="function"
            value={site.function}
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
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter criticality"
            name="criticality"
            value={site.criticality}
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
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="MTPD"
            name="mtpd"
            value={site.mtpd}
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
                <th className="py-2">Critical Business Function</th>
                <th className="py-2">Description</th>
                <th className="py-2">Criticality</th>
                <th className="py-2">RTO</th>
                <th className="py-2">RPO</th>
                <th className="py-2">MTPD</th>
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

export default CriticalFunctions;
