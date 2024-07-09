import React from 'react'
import { downloadJson } from '../lib/file'


export default function Footer({data, setData}) {
  const download = event=>{
    downloadJson(data, 'data.json')
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
    
    {/* 
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    */}
  </footer>
}