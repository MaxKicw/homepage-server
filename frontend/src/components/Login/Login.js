import React, { Component } from "react";
import { Pane, Combobox, TextInputField, Heading, Button } from 'evergreen-ui'
import '../../App.css';

class Login extends Component{
    state = {
        name:"...",
        password:null,
        version:null,
    }
    render(){
        return(
            <div className="Login">
                <Pane
                    background="tint1"
                    float="left"
                    border="muted"
                    width="100%"
                    height="100vh"
                    >
                        <Pane 
                            height="30vh"
                            width="80%"
                            marginTop="30vh"
                            marginLeft="10%">
                                <Heading 
                                    size={800}
                                    float="left"
                                    marginBottom="5vh"
                                    >
                                    Willkommen, {this.state.name}</Heading>
                                <TextInputField
                                placeholder="Nutzername"
                                onChange={e => this.setState({ name: e.target.value })}
                                />
                                <TextInputField
                                placeholder="Passwort"
                                onChange={e => this.setState({ password: e.target.value })}
                                type="password"
                                />
                                <Combobox
                                    items={['Private', 'Business']}
                                    width="50%"
                                    float="left"
                                    placeholder="Private"
                                    autocompleteProps={{
                                        // Used for the title in the autocomplete.
                                        title: 'Version'
                                    }}
                                    onChange={selected =>  this.setState({version:selected})}
                                />
                                <Button intent="success" float="right" iconBefore="tick-circle">Login</Button>

                        </Pane>
                </Pane>
            </div>
        );
    }
}

export default Login;


