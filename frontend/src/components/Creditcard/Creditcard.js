import React, { Component } from 'react';
import { Pane, TextInput, Button, Text, Heading} from 'evergreen-ui'
import { connect } from "react-redux"
import client from "../../utils/apolloClients";
import ADD_CREDITCARD from '../../querys/creditcards/createCreditcard';
import trans from '../../translation/translation';
import moment from 'moment'
import '../../App.css';

class Creditcard extends Component {

    state={
        success:"none",
        icon:"lock"
    }

    runSetup = () => {
        let date = moment().format('YYYY-MM-DD');
        if(this.props.name !== ""){
            client.mutate({mutation:ADD_CREDITCARD,variables:{name:this.props.name,date:date,private:this.props.private,password:this.props.password}})
            .then((response)=>{
                try{
                    let data = response.data.createCreditcard.creditcard;
                    this.props.onWarning({state:false,text:""})
                    this.props.isVerified({state:true});
                    this.setState({success:"success"});
                    this.setState({icon:"tick-circle"});
                    //Weiter mit dem Prozess
                }catch(error){
                    console.log("Error")
                    this.props.onWarning({state:true,text:trans[this.props.lng].alertErrorCreateCreditcard})
                    this.setState({success:"danger"});
                    this.setState({icon:"ban-circle"});
                }
                }   
            )
        }else if(this.props.name === ""){
            console.log("Empty")
            this.props.onWarning({state:true,text:trans[this.props.lng].alertEmptyName})
            this.setState({success:"warning"});
            this.setState({icon:"warning-sign"}); 
        }
    }

    render() { 
        let cssClasses =['Creditcard active', this.props.verified ? 'verified':'', this.props.private ? 'private':'business'] 
        let today = moment().format('MMDDYYYYmmHH');
        if(this.props.private !== ""){
            return ( 
                <div className={cssClasses.join(' ')}>
                    <Pane
                    position="relative"
                    height="100%"
                    left="5%"
                    width="90%"
                    borderRadius="10px"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                        <div className="logo private"></div>
                        <TextInput
                            position="relative"
                            backgroundColor="none"
                            top="70%"
                            width="40%"
                            left="10%"
                            placeholder={trans[this.props.lng].yourName}
                            onChange={e => this.props.onNameInput(e.target.value)}
                        />
                         <Heading
                            position="absolute"
                            top="30%"
                            left="10%"
                            color="white"
                            size={600}
                            >{this.props.name}</Heading>
                        <Text
                            position="absolute"
                            top="50%"
                            left="10%"
                            color="white"
                            >{today}</Text>
                         <Button 
                            intent="success"
                            className="addCreditcardButton" 
                            position="absolute"
                            top="70%"
                            zIndex="3"
                            left="50%"
                            intent={this.state.success}
                            iconBefore={this.state.icon} 
                            onClick={() => this.runSetup(this.props.name)}>
                                {trans[this.props.lng].buttonLos}
                        </Button>
                    </Pane>
                </div>
            );
        }else{
            return(
                <div className="Creditcard"></div>
            )
        }
    }
}
//REDUX

const mapStateToProps = state => {
    return{
        name: state.name,
        private: state.private,
        lng: state.lng,
        password: state.password,
        verified: state.verified
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
        onWarning: (state,text) => dispatch({type:"SET_WARNING",state:state,text:text}),
        isVerified: (state) => dispatch({type:"SET_VERIFIED",state:state})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Creditcard);

