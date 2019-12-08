import React from 'react';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            save: this.save.bind(this)
        }
    }
    save() {
        window.location.href="/users"
        // console.log("email", this.state.email)
        // console.log("password", this.state.password)
        // if (this.state.email == "kamal" && this.state.password == "kamal") {
        //     alert("user is valid")
        // }
        // else {
        //     alert("invalid details")
        // }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <b>Home Tutor Services Services</b>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h1>TEXT CONTENT HERE</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="row">
                            <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="row">
                            <input type="button" name="button" value="save" onClick={this.save.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1>Footer goes here</h1>
                </div>
                <div className="jumbotron">
                    <h1>Bootstrap Tutorial</h1>
                    <p>Bootstrap is the most popular HTML, CSS...</p>
                </div>
            </div>
        );
    }
}
