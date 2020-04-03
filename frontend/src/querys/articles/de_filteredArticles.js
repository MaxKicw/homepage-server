//Ein Graphql Query

import gql from "graphql-tag";

const FILTER_ARTICLES_QUERY  = gql`
    query Article($categories:[String!]!){
        articles(where:{category: {name:$categories}}){
            de_text
            de_title
            article_id
            published
            image{url}
            category{name}
        }
    }
`;

export default FILTER_ARTICLES_QUERY;