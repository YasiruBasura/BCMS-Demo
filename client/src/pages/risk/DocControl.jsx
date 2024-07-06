import React from 'react'
import Sidebar from '../../components/Sidebar'  

const DocControl = () => {
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
                    <div className="pb-20 pt-20 pr-28 pl-28">
                        <div className="relative overflow-hidden rounded-2xl">
                            <table className="table table-xs w-full text-center mt-10 border border-[#52B14A] rounded-2xl  ">
                                <thead className="bg-[#00bbf6] h-10 rounded-2xl">
                                    <tr>
                                        <th>Version</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-[#bbe4ff]'>
                                    <tr>
                                        <td>1.0</td>
                                        <td>Initial Version</td>
                                        <td>10 Oct 2016</td>
                                    </tr>
                                    <tr>
                                        <td>2.0</td>
                                        <td>2018 review</td>
                                        <td>20 May 2018</td>
                                    </tr>
                                    <tr>
                                        <td>3.0</td>
                                        <td>2019 review</td>
                                        <td>20 May 2019</td>
                                    </tr>
                                    <tr>
                                        <td>4.0</td>
                                        <td>2020 review</td>
                                        <td>21 Aug 2020</td>
                                    </tr>
                                    <tr>
                                        <td>5.0</td>
                                        <td>2021 review</td>
                                        <td>. . .</td>
                                    </tr>
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