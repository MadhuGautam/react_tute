import React from "react";

//below is class component
class AddContact extends React.Component{
    // in class component return will use inside render method
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div>
                    <label>Name:</label>
                    <input type="text" name="username" />
                    </div>
                </form>
            </div>
        );
    }

}

export default AddContact;