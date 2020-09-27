import React from "react";
import logo from '../../logo.jpg';

const Header = () => {
    return (
        <header>
            <div className="uk-container uk-margin-top uk-container-expand">
                <div className="uk-grid  uk-grid-medium uk-flex uk-flex-middle">
                    <div className="uk-width-auto">
                        <a href="#" className="uk-logo">
                            <img src={logo} width="100" height="50" alt="Home" />
                        </a>
                    </div>
                    <div className="uk-width-expand">                     
                    </div>       
                </div>
            </div>
        </header>
    )
};

export default Header;