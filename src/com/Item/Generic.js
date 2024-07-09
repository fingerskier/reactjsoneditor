import {useEffect, useState} from 'react'
import Item from '.'
import {TYPE} from '../../constants'


export default function GenericItem({data, setData}) {
  const [type, setType] = useState()
  
  
  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        setType(TYPE.ARRAY)
      } else if (typeof data === TYPE.OBJECT) {
        setType(TYPE.OBJECT)
      } else if (typeof data === TYPE.NUMBER) {
        setType(TYPE.NUMBER)
      } else if (typeof data === TYPE.STRING) {
        setType(TYPE.STRING)
      }
    }
  }, [data])
  
  
  return <>
    {(type === TYPE.ARRAY)?
      <Item.Array data={data} setData={setData} />
    : (type === TYPE.OBJECT)?
      <Item.Object data={data} setData={setData} />
    : (type === TYPE.NUMBER)?
      <Item.Number data={data} setData={setData} />
    : (type === TYPE.STRING)?
      <Item.String data={data} setData={setData} />
    : null
    }
  </>
}