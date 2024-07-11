import {useState} from 'react'
import Generic from './Generic'
import {TYPE} from '../../constants'


export default function ObjectItem({data, setData}) {
  function ObjectKey({name, setName}) {
    const [value, setValue] = useState(name)
    
    return <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={e => setName(value)}
    />
  }
  
  
  return <>
    {'{'}
    <ul>
      {Object.keys(data).map(key => 
        <li key={key}>
          <label>
            <ObjectKey name={key} setName={newKey => {
              const copy = {...data}
              copy[newKey] = copy[key]
              setData(copy)
              delete copy[key]
            }} />
            
            :&nbsp;
            
            <Generic
              data={data[key]}
              setData={value => setData({...data, [key]: value})}
              />
          </label>
        </li>
      )}
      
      <li>
        <select
          onChange={e => {
            const key = e.target.value
            if (!key) return
            
            const defVal = key === TYPE.ARRAY ? [] :
              key === TYPE.OBJECT ? {} :
              key === TYPE.NUMBER ? 1 :
              key === TYPE.STRING ? 'string'
              : null
            
            setData({...data, [key]: defVal})
            
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
    {'}'}
  </>
}