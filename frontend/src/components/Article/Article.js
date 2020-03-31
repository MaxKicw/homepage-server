import React, { Component } from 'react';
import { Heading,Pane, Paragraph,Badge} from 'evergreen-ui'
import { connect } from "react-redux"
import ReactMarkdown from "react-markdown"
import '../../App.css';

class Article extends Component {

    render() { 
        let cssClasses =['Article']
        this.props.onCurrentArticle(this.props.location.pathname,this.props.articles);
        let imageURL;
        try{ imageURL = "url("+this.props.image.url+")"}catch{imageURL="none"}
        return ( 
            <div className={cssClasses.join(' ')}>
                <Pane
                    className="Header"
                    backgroundImage={imageURL}
                >
                    <Badge 
                    color="green" 
                    margin="10px"
                    position="relative"
                    left="19vw"
                    top="55vh"
                    >Viel Spaß</Badge>
                    <Heading 
                        className="Heading"
                        size={900}
                    >{this.props.currentArticle.title}</Heading>
                </Pane>
                <Pane
                    className="Textblock"
                ><Paragraph size={500}><ReactMarkdown source={this.props.currentArticle.text}/></Paragraph></Pane>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        currentArticle: state.currentArticle,
        articles: state.articles
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onCurrentArticle: (path,articles) => dispatch({type:"SET_CURRENT_ARTICLE",path:path,articles:articles}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);

