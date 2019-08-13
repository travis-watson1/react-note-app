import React from 'react';
import { directive } from '@babel/types';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props;
        return(
        <div className="nav-container">
            <div className="nav-logo">Note</div>
            <div className="nav-button" onClick={() => toggleNote() }>
                { showNote ? 'Cancel' : '+ Note' }
            </div>
        </div>
        );
    }
}

export default Nav;