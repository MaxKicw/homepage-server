//Ein Graphql Query

import gql from "graphql-tag";

const LOGINS_QUERY  = gql`
    query($password: String!){
        logins(where: {password:$password}){
            password
            private
    		categories{name}
        }
    }
`;

export default LOGINS_QUERY;