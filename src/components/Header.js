import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Login</Link>
            </nav>
        );
    }
}

export default Header;