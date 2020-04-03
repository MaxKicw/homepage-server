import React, { Component } from "react";
import { Pane, TextInputField,toaster, Heading, Button } from 'evergreen-ui'
import { connect } from "react-redux"
import client from "../../utils/apolloClients";
import LOGINS_QUERY from '../../querys/logins/logins';
import trans from '../../translation/translation';
import '../../App.css';
import { empty } from "apollo-boost";

class Login extends Component{
    state={
        success:"none",
        icon:"lock"
    }

    componentDidMount= () =>{
        if(this.props.password != ""){
            try{
                this.runLogin();
            }catch{
                console.log("No Setup")
            }
        
        }
    }
    
    runLogin = () => {
        if(this.props.password != ""){
            client.watchQuery({query:LOGINS_QUERY,pollInterval:6000,variables:{password:this.props.password}})
            .subscribe((response)=>{
                    try{
                        this.props.onSetVersion(response.data.logins[0].private)
                        this.props.onSetCategories(response.data.logins[0].categories)
                        this.setState({success:"success"});
                        this.setState({icon:"tick-circle"});
                    }catch(error){
                        toaster.warning('Oops',{description: trans[this.props.lng].alertPasswordWrong})
                        this.setState({success:"danger"});
                        this.setState({icon:"ban-circle"});
                    }
                }   
            )
        }else if(this.props.password === ""){
            toaster.danger('Oops',{description: trans[this.props.lng].passwordHintLogin})
            this.setState({success:"warning"});
            this.setState({icon:"warning-sign"}); 
        }
    }

    expandBody = () => {
        if(this.props.verified){document.body.classList.add('active');}
    }

    render(){
        let cssClasses =['Login', this.props.verified ? 'verified':''] 
        this.expandBody();
        return(
            <div className={cssClasses.join(' ')}>
                <Pane
                    float="left"
                    border="none"
                    width="100%"
                    height="100vh"
                    >  
                        <Pane 
                            height="30vh"
                            width="80%"
                            marginTop="40vh"
                            marginLeft="10%">
                                <Heading 
                                    size={800}
                                    marginBottom="5vh"
                                    >
                                    {trans[this.props.lng].welcomeLogin}</Heading>
                                <TextInputField
                                className="loginInput"
                                label=""
                                description={trans[this.props.lng].descriptionLogin}
                                placeholder={trans[this.props.lng].fieldLogin}
                                onChange={e => this.props.onPasswordInput(e.target.value)}
                                type="password"
                                />
                                <Button intent={this.state.success} className="loginButton" float="right" iconBefore={this.state.icon} onClick={() => this.runLogin()}>{trans[this.props.lng].buttonLogin}</Button>
                        </Pane>
                </Pane>
            </div>
        );
    }
}

//REDUX

const mapStateToProps = state => {
    return{
        password: state.password,
        private: state.private,
        lng: state.lng,
        verified: state.verified,
        categories: state.categories,
        currentArticle: state.currentArticle
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onPasswordInput: (password) => dispatch({type:"SET_PASSWORD",password:password}),
        onSetVersion: (prvt) => dispatch({type:"SET_VERSION",prvt:prvt}),
        onSetCategories: (categories) => dispatch({type:"SET_CATEGORIES",categories:categories})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);


