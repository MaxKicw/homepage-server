import React, { Component } from 'react';
import { Pane, Heading, Badge, Paragraph} from 'evergreen-ui'
import { connect } from "react-redux"
import '../../App.css';

class Card extends Component {

    render() { 
        let cssClasses =['Card']
        // Card mit Bild, Titel, Text
        // Card mit Titel, Text
        // Card mit Bild und Titel
        if(this.props.image != null){
            let imageURL = "url("+this.props.image.url+")";
            return ( 
                <div className={cssClasses.join(' ')}>
                    <Pane
                        elevation={2}
                        hoverElevation={3}
                        borderRadius="5px"
                    >
                        <Pane
                            position="relative"
                            height="35vh"
                            width="100%"
                            backgroundImage={imageURL}
                        ></Pane>
                        <Heading size={700} margin="10px">{this.props.title} </Heading>
                        <Paragraph size={400} margin="10px">{this.props.text.substring(0, 100)+"..."}</Paragraph>
                        <Badge color="green" margin="10px">{this.props.categories.name}</Badge>
                        <Badge margin="10px">{this.props.published}</Badge>
                    </Pane>
                </div>
            );
        }else{
            return ( 
                <div className={cssClasses.join(' ')}>
                     <Pane
                        elevation={2}
                        hoverElevation={3}
                        borderRadius="5px"
                    >
                        <Heading size={700} margin="10px" marginTop="20vh">{this.props.title}</Heading>
                        <Paragraph size={600} margin="10px">{this.props.text.substring(0, 200)+"..."}</Paragraph>
                        <Badge color="green" margin="10px">{this.props.categories.name}</Badge>
                        <Badge margin="10px">{this.props.published}</Badge>
                    </Pane>
                </div>
            );
        }
    }
}
//REDUX

const mapStateToProps = state => {
    return{

    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Card);

