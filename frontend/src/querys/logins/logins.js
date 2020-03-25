//Ein Graphql Query

import gql from "graphql-tag";

const LOGINS_QUERY  = gql`
    query($password: String!){
        logins(where: {password:$password}){
            name
            password
            private
        }
    }
`;

export default LOGINS_QUERY;