import React, { Component } from 'react';
import { Pane} from 'evergreen-ui'
import { connect } from "react-redux"
import '../../App.css';

class Creditcard extends Component {
    render() { 
        if(this.props.private){
            return ( 
                <div className="Creditcard active">
                    <Pane
                    position="relative"
                    height="100%"
                    left="5%"
                    width="90%"
                    borderRadius="10px"
                    backgroundColor="#0D400F"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                    </Pane>
                </div>
            );
        }else if(this.props.private === false){
            return ( 
                <div className="Creditcard active">
                    <Pane
                    position="relative"
                    height="100%"
                    left="5%"
                    width="90%"
                    borderRadius="10px"
                    backgroundColor="#12566B"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                    </Pane>
                </div>
         )  ;
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
        private: state.private
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Creditcard);