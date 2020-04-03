import React, { Component } from 'react';
import { Pane, Tablist, Tab} from 'evergreen-ui'
import { connect } from "react-redux"
import client from "../../utils/apolloClients";
import DE_FILTER_ARTICLES_QUERY from '../../querys/articles/de_filteredArticles';
import ENG_FILTER_ARTICLES_QUERY from '../../querys/articles/eng_filteredArticles';
import ZH_FILTER_ARTICLES_QUERY from '../../querys/articles/zh_filteredArticles';
import {Link} from 'react-router-dom';
import '../../App.css';

class Langswitch extends Component {
    state = { 
        selectedIndex: 0,
        isTop: true,
     }

     componentDidMount() {
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 430;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
      });
    }

     componentDidUpdate() {
        this.getArticles();
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
                  this.props.onReveiveArticle(response.data.articles)
              }catch(error){

              }
          }   
      )
  }

    render() { 
        let cssClasses = [this.state.isTop ? 'logo-small-trans' : 'logo-small-grey'] 
        return ( 
          <div className="Menu">
            <div className="Langswitch">
              <Pane height={120} float="right" marginTop="20px">
              <Tablist marginBottom={16} flexBasis={240} marginRight={24}  backgroundColor="white" borderRadius="5px">
                {this.props.lngTabs.map((tab, index) => (
                  <Tab
                    key={tab}
                    id={tab}
                    onSelect={() => this.props.onChangeLanguage(index)}
                    isSelected={index === this.props.lng}
                    aria-controls={`panel-${tab}`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tablist>
              </Pane>
              <Link to="/" className={cssClasses}></Link>
            </div>
          </div>
         );
    }
}
 
//REDUX

const mapStateToProps = state => {
  return{
      lng: state.lng,
      lngTabs: state.lngTabs,
      private: state.private,
      lngNames: state.lngNames,
      categories: state.categories
  };
} 

const mapDispatchToProps = dispatch => {
  return{
      onChangeLanguage: (index) => dispatch({type:"SET_LNG",index:index}),
      onReveiveArticle: (articles) => dispatch({type:"SET_ARTICLES",articles:articles})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Langswitch);