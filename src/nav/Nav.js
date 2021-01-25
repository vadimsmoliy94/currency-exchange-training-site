import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let nav = this.props.nav;
        let list = Object.keys(nav).map((item, index) => {
            return <li key={index.toString()}><a href={item}>{nav[item]}</a></li>

        })

        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {list}

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Nav;