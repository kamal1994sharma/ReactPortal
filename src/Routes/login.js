import React from 'react';
export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCred: {
                "name" : "admin",
                "pass" : "pass"
            }
        }
    }
    componentDidMount() {
        debugger;
        alert("hello")

    }


    render() {
        return (
            <div className="container fluid">
                <div>
                    Login Here
                </div>
            </div>
        );
    }
}