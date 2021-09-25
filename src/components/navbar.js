import React from 'react'
import './navbar.css'


function Navbar() {
    const toogle = () => window.location.reload(false);
    return (
        <div>
            <nav className="first">
                <div className="second">
                    EXPLore  aSIa 
                </div>
                <div className="first">
                    <div className="first third">
                        <button className="sn-btn" onClick = {toogle}>Refresh</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
