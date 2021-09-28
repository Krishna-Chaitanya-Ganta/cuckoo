import React,{ useRef } from 'react'
import { useHistory } from 'react-router-dom'

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'

function Join () {
  const history = useHistory();
  const meetingID = useRef();

  function joinMeetingHandler (event) {
    event.preventDefault();
    if (meetingID.current.value?.length) {
      history.push(`/meet/${meetingID.current.value}`);
    }
  }

  let landingHTML = <>
    <Navigation />
    <main>
      <div className="u-margin-top-xxlarge u-margin-bottom-xxlarge">
        <div className="o-wrapper-l">
          <div className="hero flex flex-column">
            <div>
              <div className="welcomeText">
                Anonymous Video Calls
              </div>
              <div className="descriptionText">
                across the world for free
              </div>
            </div>
            <div>
              {/* <div className="actionText">Who do you want to call, <span className={copied ? "username highlight copied" : "username highlight"} onClick={() => { showCopiedMessage() }}>{yourID}</span>?</div> */}
            </div>
            <div className="callBox flex">
              {/* <input type="text" placeholder="Friend ID" value={receiverID} onChange={e => setReceiverID(e.target.value)} className="form-input" />
              <button onClick={() => callPeer(receiverID.toLowerCase().trim())} className="primaryButton">Call</button> */}
              <input type="text" placeholder="Meeting ID" ref={meetingID} className="form-input" />
              <button onClick={joinMeetingHandler} className="primaryButton">Join</button>
            </div>
            <div>
              To call your friend, ask them to open Cuckoo in their browser. <br />
              {/* Send your username (<span className="username">{yourID}</span>) and wait for their call <span style={{ fontWeight: 600 }}>OR</span> enter their username and hit call! */}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>

  return <>
    <div>
      {landingHTML}
      {/* <Rodal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        width={20}
        height={5}
        measure={'em'}
        closeOnEsc={true}
      >
        <div>{modalMessage}</div>
      </Rodal>
      {incomingCall} */}
    </div>
  </>
}

export default Join;
