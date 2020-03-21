import React, { Component } from 'react';
import { Pane} from 'evergreen-ui'
import '../../App.css';

class Creditcard extends Component {
    state = {  }
    render() { 
        return ( 
            <Pane
                width="40vw"
                className="Creditcard"
                height="30vw"
                maxHeight="200px"
                maxWidth="400px"
                borderRadius="10px"
                backgroundColor="#FAE3CD"
                elevation={3}
                hoverElevation={4}
                float="left"
                marginLeft="5vw"
                marginTop="15vh">
            </Pane>
         );
    }
}
 
export default Creditcard;