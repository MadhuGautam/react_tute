import React from "react";

//below is functional component
const Header = () => {
    // ui fixed menu are the semantic-ui css classes added in index.html
    return (
        <div className="ui fixed menu"> 
            <div className="ui container center">
                <h2>Contanct Manager</h2>
            </div>
        </div>
    );
};

export default Header;