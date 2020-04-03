//Ein Graphql Query

import gql from "graphql-tag";

const FILTER_ARTICLES_QUERY  = gql`
    query Article($categories:[String!]!){
        articles(where:{category: {name:$categories}}){
            zh_text
            zh_title
            article_id
            published
            image{url}
            category{name}
        }
    }
`;

export default FILTER_ARTICLES_QUERY;