import React, { Component } from 'react';
import { connect } from "react-redux";
import client from "../../utils/apolloClients";
import FILTER_ARTICLES_QUERY from '../../querys/articles/filteredArticles';
import Card from '../Card/Card';
import '../../App.css';

class Box extends Component {

    getArticles = () => {

        let resp = this.props.categories;
        let categoriesArray = [];
        resp.map(obj=>{
            categoriesArray.push(obj.name)
        })
        console.log(categoriesArray);
        client.query({query:FILTER_ARTICLES_QUERY,variables:{categories:categoriesArray}})
        .then((response)=>{
                try{
                    this.props.onReveiveArticle(response.data.articles)
                }catch(error){
                  
                }
            }   
        )
    }

    // renderCards = () => {
    //     if(this.props.verified){
    //         let articles = this.props.articles;
    //         for(let i=0;i<articles.length;i++){
    //             return(
    //                 <Card></Card>
    //             )
    //         }
    //     }
    // }

    render() { 
        let cssClasses =['Box', this.props.verified ? 'active':'']
        if(this.props.verified){this.getArticles()};
        return ( 
            <div className={cssClasses.join(' ')}>
               {this.props.articles.map((article)=>{
                   return(
                       <Card title={article.title} text={article.text} published={article.published} image={article.image} categories={article.category}/>
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

