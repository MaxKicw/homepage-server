import React, { Component } from 'react';
import { connect } from "react-redux";
import client from "../../utils/apolloClients";
import FILTER_ARTICLES_QUERY from '../../querys/articles/filteredArticles';
import Card from '../Card/Card';
import '../../App.css';

class Box extends Component {

    getArticles = () => {

        client.watchQuery({query:FILTER_ARTICLES_QUERY,pollInterval:6000,variables:{categories:this.props.categories}})
        .subscribe((response)=>{
                try{
                    this.props.onReveiveArticle(response.data.articles)
                }catch(error){
                  
                }
            }   
        )
    }

    render() { 
        let cssClasses =['Box', this.props.verified ? 'active':'']
        if(this.props.verified){this.getArticles()};
        return ( 
            <div className={cssClasses.join(' ')}>
               {this.props.articles.map((article, key)=>{
                   return(
                       <Card title={article.title} text={article.text} published={article.published} image={article.image} categories={article.category} id={key}/>
                   );
               })}
            </div>
        );
    }
}
//REDUX

const mapStateToProps = state => {
    return{
        verified: state.verified,
        categories: state.categories,
        articles: state.articles
    };
} 

const mapDispatchToProps = dispatch => {
    return{
        onNameInput: (name) => dispatch({type:"SET_NAME",name:name}),
        onReveiveArticle: (articles) => dispatch({type:"SET_ARTICLES",articles:articles})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Box);

