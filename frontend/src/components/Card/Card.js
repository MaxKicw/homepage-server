import React, { Component } from 'react';
import { Pane, Heading, Badge, Paragraph, Button} from 'evergreen-ui'
import {Link} from 'react-router-dom';
import { connect } from "react-redux"
import '../../App.css';

class Card extends Component {

    render() { 
        let cssClasses =['Card']
        let path = "/article/"+this.props.id;
        // Card mit Titel, Text
        if(this.props.image != null){
            let imageURL = "url("+this.props.image.url+")";
            if(this.props.text != null){
                return ( 
                    // Card mit Bild, Titel, Text
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
                                backgroundSize="cover"
                                borderRadius="5px"
                            ></Pane>
                            <Heading size={700} margin="10px">{this.props.title} </Heading>
                            <Paragraph size={400} margin="10px">{this.props.text.substring(0, 100)+"..."}</Paragraph>
                            <Badge color="green" margin="10px">{this.props.categories.name}</Badge>
                            <Badge margin="10px">{this.props.published}</Badge>
                            <Badge margin="10px" color="blue"><Link to={path}>zum Artikel</Link></Badge>
                        </Pane>
                    </div>
                );
                  // Card mit Bild und Titel
            }else{
                return ( 
                    <div className={cssClasses.join(' ')}>
                        <Pane
                            elevation={2}
                            hoverElevation={3}
                            borderRadius="5px"
                        >
                            <Pane
                                position="relative"
                                height="70vh"
                                width="100%"
                                backgroundImage={imageURL}
                                backgroundSize="cover"
                                borderRadius="5px"
                            >
                                <Badge color="teal" marginLeft="10px" marginTop="60vh">{this.props.categories.name}</Badge>
                                <Badge marginLeft="10px" marginTop="60vh">{this.props.published}</Badge>
                            </Pane>
                        </Pane>
                    </div>
                );
            }
            
        }else{
            return ( 
                <div className={cssClasses.join(' ')}>
                     <Pane
                        elevation={2}
                        hoverElevation={3}
                        borderRadius="5px"
                    >
                        <Heading size={700} margin="10px" marginTop="20vh">{this.props.title}</Heading>
                        <Paragraph size={500} margin="10px">{this.props.text.substring(0, 200)+"..."}</Paragraph>
                        <Badge color="purple" margin="10px">{this.props.categories.name}</Badge>
                        <Badge margin="10px">{this.props.published}</Badge>
                        <Badge margin="10px" color="blue"><Link to={path}>zum Artikel</Link></Badge>
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

