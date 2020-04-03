import React, { Component } from 'react';
import {Heading} from 'evergreen-ui'
import { connect } from "react-redux"
import trans from '../../translation/translation';
import '../../App.css';

class Welcome extends Component {

    render() { 
        let cssClasses =['Welcome', this.props.verified ? 'verified':''] 
            return ( 
                <div className={cssClasses.join(' ')}>
                    <Heading size={500}>{trans[this.props.lng].welcomeTextHeader}</Heading>
                    <Heading size={900} marginTop="25px" marginBottom="25px">{this.props.name}</Heading>
                    <Heading size={500}>{trans[this.props.lng].welcomeTextUnder}</Heading>
                </div>
            )
   
    }
}

//REDUX

const mapStateToProps = state => {
    return{
        name: state.name,
        private: state.private,
        lng: state.lng,
        verified: state.verified
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Welcome);

