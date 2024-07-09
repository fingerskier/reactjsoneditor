import React, {useState} from 'react'
import Footer from './com/Footer'
import Generic from './com/Item/Generic'

import './App.css'


export default function App() {
  const [data, setData] = useState({name:'asdf',stuff:[1,2,3]})
  
  
  return <div className="App">
    <header>
      <h1>JSON Editor</h1>
    </header>
    
    <main>
      <Generic data={data} setData={setData} />
    </main>
    
    <Footer data={data} setData={setData} />
  </div>
}