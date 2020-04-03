import React, { Component } from 'react';
import { Heading,Pane, Paragraph,Badge} from 'evergreen-ui'
import { connect } from "react-redux"
import ReactMarkdown from "react-markdown"
import RelatedArticles from "../Article/RelatedArticles";
import Comments from '../Article/Comments';
import Footer from '../Footer/Footer';
import '../../App.css';

class Article extends Component {

    render() { 
        let cssClasses =['Article']
        this.props.onCurrentArticle(this.props.location.pathname,this.props.articles);
        let imageURL;
        let articleObj = this.props.currentArticle;
        let lngtext = articleObj[Object.keys(articleObj)[0]];
        let lngtitle = articleObj[Object.keys(articleObj)[1]];
        try{ imageURL = "url("+this.props.currentArticle.image.url+")"}catch{imageURL="none"}
        return ( 
            <div className={cssClasses.join(' ')}>
                <Pane
                    className="Header"
                    backgroundImage={imageURL}
                >
                    <Badge 
                    className="Badge"
                    >{this.props.currentArticle.category.name}</Badge>
                    <Heading 
                        className="Heading"
                        size={900}
                    >{lngtitle}</Heading>
                </Pane>
                <Pane
                    className="Textblock"
                ><Paragraph size={500}><ReactMarkdown source={lngtext}/></Paragraph></Pane>
                <RelatedArticles/>
                <Comments/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        currentArticle: state.currentArticle,
        articles: state.articles,
        lng: state.lng,
        lngNames: state.lngNames,
        categories: state.categories
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onCurrentArticle: (path,articles) => dispatch({type:"SET_CURRENT_ARTICLE",path:path,articles:articles}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);

