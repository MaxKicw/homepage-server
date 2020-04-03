import React, { Component } from 'react';
import { connect } from "react-redux";
import { Heading } from 'evergreen-ui';
import Card from '../Card/Card';
import trans from '../../translation/translation';
import '../../App.css';

class RelatedArticles extends Component {

    render() { 
        let lngPrefix = this.props.lngNames[this.props.lng];
        return ( 
            <div>
                <div className="relatedTitle">
                    <Heading>{trans[this.props.lng].relatedArticles}</Heading>
                </div>
                <div className="RelatedArticles">
                {this.props.articles.map((article, id)=>{
                    if(article.category.name === this.props.currentArticle.category.name && article.article_id != this.props.currentArticle.article_id){
                        switch(lngPrefix){
                            case "de":
                                return(
                                    <Card title={article.de_title} text={article.de_text} published={article.published} image={article.image} categories={article.category} id={id}/>
                                );
                            break;
                            case "eng":
                                return(
                                    <Card title={article.eng_title} text={article.eng_text} published={article.published} image={article.image} categories={article.category} id={id}/>
                                );
                            break;
                            case "zh":
                                return(
                                    <Card title={article.zh_title} text={article.zh_text} published={article.published} image={article.image} categories={article.category} id={id}/>
                                );
                            break;
                            default:
                                return(<div></div>)  
                            break;
                        }
                    }
                })}
                </div>
            </div>
        );
    }
}
//REDUX

const mapStateToProps = state => {
    return{
        currentArticle: state.currentArticle,
        verified: state.verified,
        categories: state.categories,
        articles: state.articles,
        lngNames: state.lngNames,
        lng: state.lng
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
        onReveiveArticle: (articles) => dispatch({type:"SET_ARTICLES",articles:articles})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RelatedArticles);

