import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar'  
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const DocControl = () => {

    const [version, setVersion] = useState([]);
    const location = useLocation();
    const {selectedMainSection} = location.state || {}; 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/version', { params: {sectionName: selectedMainSection}});
            const fetchData = response.data;
            setVersion(fetchData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
        }, []);

        console.log(selectedMainSection);


    return (
        <div className='flex'>
        <div className='mt-20 mb-10'>
    <Sidebar/>
    </div>
        <div className="border-2 w-full p-5 rounded-2xl mx-2 h-screen ml-20 mt-20">
            <div className="h-screen flex flex-col">
                <h2 className="font-bold text-[#52B14A] text-4xl mt-3">
                    Document Control
                </h2>
                <div className="border mt-5 bg-cyan-50 rounded-2xl mx-5">
                    <div className="pb-20 pt-20 pr-24 pl-24">
                        <div className="relative overflow-hidden rounded-2xl">
                            <table className="table table-xs w-full text-center mt-10 border border-[#52B14A] rounded-2xl  ">
                                <thead className="bg-[#00bbf6] h-10 rounded-2xl">
                                    <tr>
                                        {/* <th>Version</th> */}
                                        <th>Date Approved</th>
                                        <th>Date Last Reviewed</th>
                                        
                                        <th>Date for Next Review</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-[#bbe4ff]'>
                                    {version.map((version,index)=>(
                                        <tr key={index}>
                                            {/* <td>{version.sectionName}</td> */}
                                            <td>{version.dateApproved}</td>
                                            <td>{version.dateLastReviewed}</td>
                                            <td>{version.dateNextReview}</td>
                                            <td>{version.description}</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
    
   

     
  
}

export default DocControl