import React, { useEffect, useState } from 'react'
import Controls from './Controls'
import Output from './Output'
import Editor from './Editor'
import { toast } from 'react-toastify';
import Papa from 'papaparse';

const Main = () => {

  const [tableData, setTableData] = useState([]);

  const [query, setQuery] = useState('select * from customer');

  const runQuery =(query) => {
    console.log(" executing query ", query)
    setQuery(query);    
    try {
      if (query.trim().toLowerCase() === 'select * from customer') {
        fetchData('/customers.csv');
      } else if (query.trim().toLowerCase() === 'select * from product') {
        fetchData('/products.csv');
      } else {
        fetchData('/customers.csv');
      }
    } catch (error) {
      toast.error('Error running query ' + error.message);
    }
  };
  const fetchData = async (csvFile) => {
    try {
      const response = await fetch(csvFile);
      const csvData = await response.text();
      parseCsvData(csvData);
    } catch (error) {
      toast.error('Error fetching data ' + error.message);
    }
  };
  const parseCsvData = (csvData) => {
    Papa.parse(csvData, {
      complete: (result) => {
        if (result.data && result.data.length > 0) {
          setTableData(result.data);
          toast.success('Query executed successfully');
        }
      },
      header: true,
    });
  };


  return (
    <div className='h-screen w-screen flex bg-zinc-200 flex-col  overflow-y-scroll p-4 gap-4'>
      {/* editor and controls */}
      <div className='flex  gap-4 h-3/4 w-full'>
        <div className='flex bg-white rounded-2xl p-4 h-full w-3/4 overflow-y-scroll'>
          <Editor
            setQuery={setQuery}
            query={query}
            runQuery={runQuery}
            tableData={tableData}
            setTableData={setTableData} />
        </div>
        <aside className='flex bg-white rounded-2xl p-4  h-full w-1/4'>
          <Controls
            runQuery={runQuery}
            tableData={tableData}
            setTableData={setTableData}
            query={query}
            setQuery={setQuery} />
        </aside>
      </div>
      {/* output */}
      <div className='flex bg-white rounded-2xl p-4 '>
        <Output tableData={tableData} setTableData={setTableData} />
      </div>
    </div>
  )
}

export default Main