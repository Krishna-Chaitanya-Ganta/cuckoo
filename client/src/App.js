import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Rodal from 'rodal'
// import {Howl} from 'howler'

import  'rodal/lib/rodal.css'

// import minimize from './Icons/minimize.svg'
import Join from './Pages/Join';
import Meet from './Pages/Meet';

function App() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callingFriend, setCallingFriend] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callRejected, setCallRejected] = useState(false);
  const [receiverID, setReceiverID] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  // const [audioMuted, setAudioMuted] = useState(false)
  const [videoMuted, setVideoMuted] = useState(false)
  const [isfullscreen, setFullscreen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  function renderLanding() {
    if(!callRejected && !callAccepted && !callingFriend)
      return 'block'
    return 'none'
  }

  function renderCall() {
    if(!callRejected && !callAccepted && !callingFriend)
      return 'none'
    return 'block'
  }

  function showCopiedMessage(){
    navigator.clipboard.writeText(yourID)
    setCopied(true)
    setInterval(()=>{
      setCopied(false)
    },1000)
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/meet/:id">
            <Meet />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;