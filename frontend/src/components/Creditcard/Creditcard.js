import React, { Component } from 'react';
import { Pane} from 'evergreen-ui'
import '../../App.css';

class Creditcard extends Component {
    state = {  }
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
                </Pane>
            </div>
         );
    }
}
 
export default Creditcard;