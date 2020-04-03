import React, { Component } from 'react';
import {Paragraph, Tooltip} from 'evergreen-ui'
import { connect } from "react-redux"
import {Link} from 'react-router-dom';
import trans from '../../translation/translation';
import '../../App.css';

class Footer extends Component {

    logMeOut = () => {
        localStorage.clear();
        window.location.reload(); 
    }

    render() { 
        let cssClasses =['Footer'] 
            return ( 
                <div className={cssClasses.join(' ')}>
                    <div className="Footerlinks">
                        <Link margin="20px" color="black" to="/" >{trans[this.props.lng].home}</Link>
                        <Link margin="20px" color="black" to="/" onClick={() => this.logMeOut()}>{trans[this.props.lng].logout}</Link>
                    </div>
                    <Tooltip content={trans[this.props.lng].codeWithLove}>
                        <Paragraph className="Footernote"  display="inline">2020 Maximilian Wick</Paragraph>
                    </Tooltip>
                </div>
            )
   
    }
}

//REDUX

const mapStateToProps = state => {
    return{
        name: state.name,
        lng: state.lng,
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Footer);

