//Ein Graphql Query

import gql from "graphql-tag";

const CREDITCARDS_QUERY  = gql`
    query Creditcards {
        creditcards {
            id
            name
        }
    }
`;

export default CREDITCARDS_QUERY ;