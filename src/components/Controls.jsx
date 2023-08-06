import React, { useEffect } from 'react'

const Controls = ({ query, runQuery, setQuery }) => {
  const queryButtons = [
    {
      name: 'Select all customer',
      query: 'Select * from customer'
    },
    {
      name: 'Select all product',
      query: 'Select * from product'
    },
    {
      name: 'Select all order',
      query: 'Select * from order'
    },
    {
      name: 'Select all order_item',
      query: 'Select * from order_item'
    },
  ]
  return (
    <div className='flex flex-col w-full gap-4 '>
      {
        queryButtons.map((queryItem, index) => (
          <CustomQueryButton
            key={index}
            queryItem={queryItem}
            setQuery={setQuery}
            query={query}
            runQuery={runQuery} />
        ))
      }
    </div>
  )
}


const CustomQueryButton = ({queryItem, query, setQuery, runQuery}) => {
  const setQueryHandler = () => {
    runQuery(queryItem.query)
  }
  return (
    <button onClick={setQueryHandler} className='flex bg-blue-600 text-white rounded-xl px-4 space-x-2 py-2 active:bg-green-700 '>
      <p>{queryItem.name}</p>
    </button>
  )
}

export default Controls