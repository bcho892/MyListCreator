import React from 'react';
import Menu from '../../menu/Menu';
import Header from '../../header/Header';
import Searchandadd from "../searchandadd/Searchandadd"
import "./addtitle.css"
function Addtitle() {
    return (
        <div class>
            <Header />
            <div className="maincontainer">
                <span className='side'><Menu /></span>
                <div className="main"><Searchandadd /></div>

            </div>

        </div>
    );
}

export default Addtitle;
