import React, { Component } from "react";
import { Pane, Combobox, TextInputField, Heading, Button } from 'evergreen-ui'
import '../../App.css';

class Login extends Component{
    state = {
        name:null,
        password:null,
        version:null,
    }
    render(){
        return(
            <Pane
                background="tint1"
                float="left"
                border="muted"
                width="50vw"
                height="100vh"
                >
                    <Pane 
                        height="30vh"
                        width="30vw"
                        marginTop="30vh"
                        marginLeft="5vw">
                            <Heading 
                                size={800}
                                float="left"
                                marginBottom="5vh"
                                >
                                Willkommen</Heading>
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
        );
    }
}

export default Login;


