import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const ExternalDependencies = forwardRef(({selectedMainSection}, ref) => {
  const [siteData, setSiteData] = useState([ ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/externalDependancy', { params: {sectionName: selectedMainSection}});
        const fetchData = response.data;
        setSiteData([...fetchData, {sectionName:selectedMainSection, criticalFunction:'', organization:'', dependancy:'', primaryContact:'', secondaryContact:'', justification:''}]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMainSection]);

  useImperativeHandle(ref, () => ({
    saveData: async () => {
      const filteredData = siteData.filter(site =>site.sectionName && site.criticalFunction && site.organization && site.dependancy && site.primaryContact && site.secondaryContact && site.justification);
      try {
        await axios.post('http://localhost:5000/externalDependancy', filteredData);
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
      newData[index].criticalFunction &&
      newData[index].organization &&
      newData[index].dependancy &&
      newData[index].primaryContact &&
      newData[index].secondaryContact &&
      newData[index].justification
    ) {
      addEmptyRow();
    }
  };

  const addEmptyRow = () => {
    setSiteData([...siteData, {criticalFunction:'', organization:'', dependancy:'', primaryContact:'', secondaryContact:'', justification:''}]);
  };

  const generateRows = () => {
    return siteData.map((site, index) => (
      <tr key={index}>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter the function"
            name="criticalFunction"
            value={site.criticalFunction}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter the organization"
            name="organization"
            value={site.organization}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Dependancy"
            name="dependancy"
            value={site.dependancy}
            onChange={(e) => handleInputChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Primary Contact"
            name="primaryContact"
            value={site.primaryContact}
            onChange={(e) => handleInputChange(index, e)}
          />
          </td>
          <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Secondary Contact"
            name="secondaryContact"
            value={site.secondaryContact}
            onChange={(e) => handleInputChange(index, e)}
          />
          </td>
          <td>
          <input
            type="text"
            className="w-full border-none focus:ring-transparent text-center"
            placeholder="Enter Justification"
            name="justification"
            value={site.justification}
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
                <th className="py-2">Organization</th>
                <th className="py-2">Dependancy</th>
                <th className="py-2">Primary Contact</th>
                <th className="py-2">Secondary Contact</th>
                <th className="py-2">Justification</th>
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

export default ExternalDependencies;
