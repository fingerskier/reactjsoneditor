import {useEffect, useState} from 'react'
import {KEY} from '../constants'
import usePeer from '../hook/usePeer'


export default function DataShare({data}) {
  const [initialPeerId, setInitialPeerId] = useState('')
  const [remotePeerId, setRemotePeerId] = useState('')
  const [peerIdSet, setPeerIdSet] = useState(false)
  
  const { payload, peerId, connectToPeer, sendMessage, connections } = usePeer(peerIdSet ? initialPeerId : null)
  
  const [show, setShow] = useState(false)
  
  
  const handleSetPeerId = () => {
    setPeerIdSet(true)
  }
  
  const handleConnect = () => {
    connectToPeer(remotePeerId)
  }
  
  
  const handleSendMessage = () => {
    console.log(`sending data to ${remotePeerId}`, data)
    sendMessage(data)
  }
  
  
  const mergeById = (originalArray, newArray) => {
    const mergedArray = [...originalArray]
    
    newArray.forEach(newItem => {
      const index = mergedArray.findIndex(item => item.id === newItem.id)
      
      if (index > -1) {
        mergedArray[index] = { ...mergedArray[index], ...newItem }
      } else {
        mergedArray.push(newItem)
      }
    })
    return mergedArray
  }
  
  
  return <div>
    {show? <div>
      {!peerIdSet ? (
        <div>
          <input
            autoFocus
            type="text"
            value={initialPeerId}
            onChange={(e) => setInitialPeerId(e.target.value)}
            placeholder="Enter your Peer ID"
          />
          <button onClick={handleSetPeerId}>Set Peer ID</button>
        </div>
      ) : (
        <div>
          <h1>My PeerJS ID: {peerId}</h1>
          <input
            autoFocus
            type="text"
            value={remotePeerId}
            onChange={(e) => setRemotePeerId(e.target.value)}
            placeholder="Remote Peer ID"
          />
          <button onClick={handleConnect}>Connect</button>
          
          {connections?.length &&
            <button onClick={handleSendMessage}>Send Message</button>
          }
          <ul>
            {connections.map((conn, index) => (
              <li key={index}>Connected to: {conn.peer}</li>
            ))}
          </ul>
          
          <pre>
            {JSON.stringify(payload, null, 2)}
          </pre>
        </div>
      )}
    </div> : <>
      <button onClick={() => setShow(true)}>Share Data</button>
    </> }
  </div>
}