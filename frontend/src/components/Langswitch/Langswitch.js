import React, { Component } from 'react';
import { Pane, Tablist, Tab} from 'evergreen-ui'
import { connect } from "react-redux"
import '../../App.css';

class Langswitch extends Component {
    state = { 
        selectedIndex: 0,
     }
    render() { 
        return ( 
            <div className="Langswitch">
              <Pane height={120} float="right" marginTop="20px">
              <Tablist marginBottom={16} flexBasis={240} marginRight={24}  backgroundColor="white" borderRadius="5px">
                {this.props.lngTabs.map((tab, index) => (
                  <Tab
                    key={tab}
                    id={tab}
                    onSelect={() => this.props.onChangeLanguage(index)}
                    isSelected={index === this.props.lng}
                    aria-controls={`panel-${tab}`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tablist>
              </Pane>
              <div className="logo-small-grey"></div>
            </div>
         );
    }
}
 
//REDUX

const mapStateToProps = state => {
  return{
      lng: state.lng,
      lngTabs: state.lngTabs,
      private: state.private
  };
} 

const mapDispatchToProps = dispatch => {
  return{
      onChangeLanguage: (index) => dispatch({type:"SET_LNG",index:index})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Langswitch);