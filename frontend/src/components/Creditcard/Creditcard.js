import React, { Component } from 'react';
import { Pane, TextInput} from 'evergreen-ui'
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
                    background="radial-gradient(71.43% 227.24% at 96.23% 5.29%, #FF5C00 0%, #B49A14 43.03%, #0D400F 100%)"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                        <div className="logo private"></div>
                        <TextInput
                            position="relative"
                            top="70%"
                            left="50%"
                            width="40%"
                            placeholder="Dein Name"
                        />
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
                    background="radial-gradient(71.43% 227.24% at 96.23% 5.29%, #FF7A00 0%, #B41414 43.03%, #12566B 100%)"
                    elevation={3}
                    hoverElevation={4}
                    float="left">
                        <div className="logo business"></div>
                        <TextInput
                            position="relative"
                            top="70%"
                            left="50%"
                            width="40%"
                            placeholder="Dein Name"
                        />
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

