import React from 'react'


export default function StringItem({data, setData}) {
  return <>
    <input
      type="text"
      value={data}
      onChange={e => setData(e.target.value)}
    />
  </>
}