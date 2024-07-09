import React from 'react'
import Generic from './Generic'
import {TYPE} from '../../constants'


export default function ArrayItem({data, setData}) {
  return <>
    [
    <ul>
      {data?.map((item, index) => 
        <li key={index}>
          <Generic
            data={item}
            setData={value => {
              const copy = [...data]
              copy[index] = value
              setData(copy)
            }}
          />
        </li>
      )}
      
      <li>
        <select
          onChange={e => {
            const value = e.target.value
            if (!value) return
            
            const defVal = (value === TYPE.ARRAY) ? [] 
              : (value === TYPE.OBJECT) ? {} 
              : (value === TYPE.STRING)? 'STRING'
              : (value === TYPE.NUMBER)? 1
              : value
            
            setData([...data, defVal])
            
            e.target.value = ''
          }}
        >
          <option value="">Add an Item</option>
          <option>{TYPE.ARRAY}</option>
          <option>{TYPE.OBJECT}</option>
          <option>{TYPE.NUMBER}</option>
          <option>{TYPE.STRING}</option>
        </select>
      </li>
    </ul>
    ]
  </>
}