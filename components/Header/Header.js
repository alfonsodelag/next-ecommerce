import React from 'react';
import MenuWeb from './Menu';
import TopBar from './TopBar';

export default function Header() {
    return (
        <div className="header">
            <TopBar />
            <MenuWeb />
        </div>
    )
}

