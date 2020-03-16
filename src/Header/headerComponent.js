import React from "react";
// import home from "./home1.png"
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    loginRedirect(){
        debugger;
        window.location.href = "/login"
    }
    render() {
        return (
            <div className="row">
            <div className="container-fluid">
                <div className="headerTile">
                    {/* <img src="./home2.jpg" alt="HOME"/> */}
                    <span className="headerText">
                        E-Kart
                    </span>
                    <span className="rightAlign" onClick={()=>this.loginRedirect()}>version 1.0</span>
                </div>
                {/* <a href="/">Home</a> */}
                {/* <a href="/login">Login</a> */}

                </div>
                </div>
        )
    }
}