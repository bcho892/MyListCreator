import React from 'react'
import "./header.css";
import MobileMenu from '../menu/MobileMenu';

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="logo">MyListMaker</div>
            <div className="mobilemenu">
            <MobileMenu/>
            </div>
        </div>
    </div>
  )
}
