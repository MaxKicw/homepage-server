import React, { Component } from "react";
import { Pane, TextInputField,Text, Heading, Button } from 'evergreen-ui'
import { connect } from "react-redux"
import client from "../../utils/apolloClients";
import LOGINS_QUERY from '../../querys/logins/logins';
import trans from '../../translation/translation';
import '../../App.css';

class Login extends Component{
    state={
        success:"none",
        icon:"lock"
    }
    runLogin = () => {
        if(this.props.password != ""){
            client.query({query:LOGINS_QUERY,variables:{password:this.props.password}})
            .then((response)=>{
                    try{
                        this.props.onSetVersion(response.data.logins[0].private)
                        this.props.onWarning({state:false,text:""})
                        this.setState({success:"success"});
                        this.setState({icon:"tick-circle"});
                    }catch(error){
                        this.props.onWarning({state:true,text:trans[this.props.lng].alertPasswordWrong})
                        this.setState({success:"danger"});
                        this.setState({icon:"ban-circle"});
                    }
                }   
            )
        }else if(this.props.password === ""){
            this.props.onWarning({state:true,text:trans[this.props.lng].passwordHintLogin})
            this.setState({success:"warning"});
            this.setState({icon:"warning-sign"}); 
        }
    }
    render(){
        return(
            <div className="Login">
                <Pane
                    float="left"
                    border="none"
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
                                    marginBottom="5vh"
                                    >
                                    {trans[this.props.lng].welcomeLogin}</Heading>
                                <TextInputField
                                description={trans[this.props.lng].descriptionLogin}
                                placeholder={trans[this.props.lng].fieldLogin}
                                onChange={e => this.props.onPasswordInput(e.target.value)}
                                type="password"
                                />
                                <Button intent={this.state.success} float="right" iconBefore={this.state.icon} onClick={() => this.runLogin(this.props.name,this.props.password)}>{trans[this.props.lng].buttonLogin}</Button>
                        </Pane>
                </Pane>
            </div>
          
        );
    }
}

//REDUX

const mapStateToProps = state => {
    return{
        name: state.name,
        password: state.password,
        private: state.private,
        warning: state.warning,
        lng: state.lng
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
        onPasswordInput: (password) => dispatch({type:"SET_PASSWORD",password:password}),
        onSetVersion: (prvt) => dispatch({type:"SET_VERSION",prvt:prvt}),
        onWarning: (state,text) => dispatch({type:"SET_WARNING",state:state,text:text})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);


