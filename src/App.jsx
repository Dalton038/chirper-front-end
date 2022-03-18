import React from 'react';
import { FaFeather, FaUserAlt,  } from 'react-icons/fa';
import { SiGooglemessages } from "react-icons/si"

class App extends React.Component {

    state = {
        username: '',
        message: '',
        chirps: []
    };


    handleUsernameChange = e => this.setState({ username: e.target.value });
    handleMessageChange = e => this.setState({ message: e.target.value });
    handleChripSubmit = e => {
        e.preventDefault();
        let chirps = this.state.chirps.slice();
        chirps.push({
            username: this.state.username,
            message: this.state.message
        });

        this.setState({
            username: '',
            message: '',
            chirps
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row mt-2">
                    <div className="col-md-5">
                        <form className="form-group p-3 shadow-lg">
                            <label ><FaUserAlt /> Username</label>
                            <input value={this.state.username} onChange={this.handleUsernameChange} type="text" className="form-control" />
                            <label ><SiGooglemessages /> Message</label>
                            <textarea value={this.state.message} onChange={this.handleMessageChange} className="form-control" rows={5} />
                            <button onClick={this.handleChripSubmit} className="btn btn-primary btn-block mt-3"><FaFeather /> Chirp</button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group list-group-flush shadow-lg">
                            {this.state.chirps.map((chirp, i) => {
                                return (
                                    <li key={`chirp-item-${i}`} className="list-group-item d-flex justify-content-between align-items-center"><b><FaUserAlt /> {chirp.username}:</b>
                                    <span>{chirp.message}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;



