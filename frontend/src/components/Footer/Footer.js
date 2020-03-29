import React, { Component } from 'react';
import {Pane, Popover, Text, Button } from 'evergreen-ui'
import { connect } from "react-redux"
import trans from '../../translation/translation';
import '../../App.css';

class Footer extends Component {

    render() { 
        let cssClasses =['Footer', this.props.verified ? 'verified':''] 
            return ( 
                <div className={cssClasses.join(' ')}>
                    <Pane
                        width="20%">
                        <Popover
                            content={
                                <Pane
                                width={240}
                                height={240}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column"
                                >
                                </Pane>
                            }
                            >
                            <Button margin="30px">2020 Maximilian Wick</Button>
                            </Popover>
                    </Pane>
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
 
export default connect(mapStateToProps,mapDispatchToProps)(Footer);

