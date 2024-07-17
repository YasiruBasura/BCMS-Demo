import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const Resources = forwardRef(({selectedMainSection}, ref) => {
  const [siteData, setSiteData] = useState([ ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/resource', { params: {sectionName: selectedMainSection}});
        const fetchData = response.data;
        setSiteData([...fetchData, {sectionName:selectedMainSection, name: '', altname: '', rto: '', rpo: ''}]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMainSection]);

  useImperativeHandle(ref, () => ({
    saveData: async () => {
      const filteredData = siteData.filter(site =>site.sectionName && site.name && site.altname && site.rto && site.rpo );
      try {
        await axios.post('http://localhost:5000/resource', filteredData);
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
      newData[index].altname &&
      newData[index].rto &&
      newData[index].rpo
    ) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, { name: '', altname: '', rto: '', rpo: '' }]);
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
            name="altname"
            value={site.altname}
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
});

export default Resources;
