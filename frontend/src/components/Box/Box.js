import React, { Component } from 'react';
import { connect } from "react-redux";
// import {filterArticles} from '../../calls/calls';
import client from "../../utils/apolloClients";
import DE_FILTER_ARTICLES_QUERY from '../../querys/articles/de_filteredArticles';
import ENG_FILTER_ARTICLES_QUERY from '../../querys/articles/eng_filteredArticles';
import ZH_FILTER_ARTICLES_QUERY from '../../querys/articles/zh_filteredArticles';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import '../../App.css';

class Box extends Component {


    componentDidMount= () =>{
        if(this.props.categories !== ""){
            try{
                this.getArticles();
            }catch(error){
                console.log("No Setup");
            }
           
        }
    }

    getArticles = () => {
        let query;
        let lngPrefix = this.props.lngNames[this.props.lng];
        switch(lngPrefix){
            case "de":
                query = DE_FILTER_ARTICLES_QUERY;
            break;
            case "eng":
                query = ENG_FILTER_ARTICLES_QUERY;
            break;
            case "zh":
                query = ZH_FILTER_ARTICLES_QUERY;
            break;
            default:
            break
        }
        client.watchQuery({query:query,pollInterval:6000,variables:{categories:this.props.categories}})
        .subscribe((response)=>{
                try{
                    console.log("UPDATING ARTICLES")
                    this.props.onReveiveArticle(response.data.articles)
                }catch(error){

                }
            }   
        )
    }

    render() { 
        let cssClasses =['Box', this.props.verified ? 'active':'']
        if(this.props.verified){this.getArticles()};
        let lngPrefix = this.props.lngNames[this.props.lng];
        return ( 
            <div className={cssClasses.join(' ')}>
               {this.props.articles.map((article, id)=>{
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
               })}
                <Footer></Footer>
            </div>
        );
    }
}
//REDUX

const mapStateToProps = state => {
    return{
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
 
export default connect(mapStateToProps,mapDispatchToProps)(Box);

