const DE_FILTER_ARTICLES_QUERY = require('../querys/articles/de_filteredArticles');
const ENG_FILTER_ARTICLES_QUERY = require('../querys/articles/eng_filteredArticles');
const ZH_FILTER_ARTICLES_QUERY = require('../querys/articles/zh_filteredArticles');


export const filterArticles = (lngPrefix,categories) => {
    let query;
    let response;
    const client = require('../utils/apolloClients');
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
    client.watchQuery({query:query,pollInterval:6000,variables:{categories:categories}})
    .subscribe((response)=>{
            try{
                response=this.props.onReveiveArticle(response.data.articles)
            }catch(error){

            }
        }   
    )
    return response;
}

