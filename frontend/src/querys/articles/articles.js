//Ein Graphql Query

import gql from "graphql-tag";

const ARTICLES_QUERY  = gql`
    query Articles {
        articles {
        title
        text
        published
        }
    }
  
`;

export default ARTICLES_QUERY;