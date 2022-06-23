import React from 'react';
import Menu from '../../menu/Menu';
import Header from '../../header/Header';
import UserList from './UserList';
import "./generatelist.css"
export default function GenerateList() {

    return (
        <div class>
            <Header />
            <div className="maincontainer">
                <span className='side'><Menu /></span>
                <div className="main">
                    <div className="searchfield">
                        <div className="tableholder">
                            <span className="innertable">
                                <UserList />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
