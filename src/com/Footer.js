import React from 'react'
import DataShare from './DataShare'
import useLocalStorage from '../hook/useLocalStorage'
import { downloadJson } from '../lib/file'
import { KEY } from '../constants'


export default function Footer() {
  const [data, setData] = useLocalStorage(KEY.DATA, {})
  
  
  const download = event=>{
    downloadJson(data, 'data.json')
  }


  const reset = event=>{
    event.preventDefault()
    
    const yes = window.confirm('Are you sure?')
    
    if (yes) setData({})
    
    return false
  }
  
  
  return <footer>
    <button onClick={download}>Download</button>
    
    <br />
    
    <label>
      Upload:
      
      <input
        type="file"
        onChange={event => {
          const file = event.target.files[0]
          const reader = new FileReader()
          
          reader.onload = e => {
            const newData = JSON.parse(e.target.result)
            setData(newData)
          }
          
          reader.readAsText(file)
        }} 
      />
    </label>
    
    <DataShare data={data} />
    
    {/* 
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    */}

    <button onClick={reset}>Reset Data</button>
  </footer>
}