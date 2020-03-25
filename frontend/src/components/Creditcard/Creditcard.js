import React, { Component } from 'react';
import { Pane} from 'evergreen-ui'
import { connect } from "react-redux"
import '../../App.css';

class Creditcard extends Component {
    render() { 
        return ( 
                <div className="Creditcard">
                    <Pane
                    position="relative"
                    height="100%"
                    left="5%"
                    width="90%"
                    borderRadius="10px"
                    backgroundColor="#FAE3CD"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                    <p>{this.props.name}</p>
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
        number: state.creditcardNumber,
        date: state.creditcardDate,
        version: state.version
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Creditcard);