import React, { Component } from 'react';
import { connect } from "react-redux"
import '../../App.css';

class Background extends Component {
    render() {
        let cssClasses =['Background', this.props.private] 
        return ( 
            
            <div>
                <div className="Overlay"></div>
                <div className={cssClasses.join(' ')}></div>
            </div>
         );
    }
}
 
//REDUX

const mapStateToProps = state => {
  return{
      private: state.private,
  };
} 

const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Background);