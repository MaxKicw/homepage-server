import React, { Component } from 'react';
import { Pane , Alert } from 'evergreen-ui'
import { connect } from "react-redux"
import '../../App.css';

class Warning extends Component {
    render() { 
        if(this.props.state){
            return ( 
                        <div className="Warning">
                            <Pane>
                                <Alert
                                    appearance="card"
                                    intent="danger"
                                    title={this.props.text}
                                />
                            </Pane>
                        </div>
                    );
        }else{
            return(
                <div className="Warining"></div>
            )
        }
      
    }
}
 
//REDUX

const mapStateToProps = state => {
  return{
      text: state.warning.text,
      state: state.warning.state
  };
} 

const mapDispatchToProps = dispatch => {
  return{
     
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Warning);