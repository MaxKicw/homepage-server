//Ein Graphql Query

import gql from "graphql-tag";

const ADD_CREDITCARD  = gql`
    mutation($name: String!,$date: Date!,$private:Boolean!,$password:String!){
        createCreditcard(input: {
        data: {
            name: $name,
            private:$private,
            Password:$password,
            date:$date
        }
        }) {
        creditcard {
            name
            private
            Password
            date
        }
        }
    }
`;

export default ADD_CREDITCARD;