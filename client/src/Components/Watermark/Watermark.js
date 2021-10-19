import React from 'react'
import cuckoologo from '../../Icons/cuckoo-logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={cuckoologo} alt="Cuckoo Logo"/>
            <span className="logoText">Screen Share</span>
        </div>
    )
}

export default Watermark