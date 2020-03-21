import React, { Component } from 'react';
import { Pane, Tablist, Tab} from 'evergreen-ui'

class Langswitch extends Component {
    state = { 
        selectedIndex: 0,
        tabs: ['DE', 'ENG', '汉语']
     }
    render() { 
        return ( 
            <Pane height={120} float="right">
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
              {this.state.tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  onSelect={() => this.setState({ selectedIndex: index })}
                  isSelected={index === this.state.selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            </Pane>
         );
    }
}
 
export default Langswitch;