import React from 'react'


export default function NumericItem({data, setData}) {
  return <>
    <input 
      type="number"
      value={data}
      onChange={e => setData(Number(e.target.value))}
    />
  </>
}