import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';


const Output = ({tableData, setTableData}) => {

  return <div className=" overflow-x-scroll">
      <h2 className="text-3xl font-bold mb-6 w-fit ">Output table</h2>
      {tableData.length > 0 ? (
        <table className=" overflow-x-scroll table-auto	w-fit">
          <thead className='h-14'>
            <tr className='table-auto	py-4'>
              {Object.keys(tableData[0]).map((header, index) => (
                <th key={index} className=" text-start capitalize pr-20">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=''>
            {tableData.map((rowData, index) => (
              <tr key={index} className=' border-y'>
                {Object.values(rowData).map((value, index) => (
                  <td key={index} className=" py-4 ">
                   <div className='p-2 w-max '>
                   {value}
                   </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  
}

export default Output