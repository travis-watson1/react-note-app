import React from 'react';
import { directive } from '@babel/types';

class Nav extends React.Component {
    render() {
        return(
        <div className="nav-container">
            <div className="nav-logo">Note</div>
            <div className="nav-button">+ Note</div>
        </div>
        );
    }
}

export default Nav;