//Ein Graphql Query

import gql from "graphql-tag";

const ADD_CREDITCARD  = gql`
    mutation($name: String!){
        createCreditcard(input: {
        data: {
            name: $name,
            date: 12344,
            private:true,
            password:tinder
        }
        }) {
        creditcard {
            name
            date
            private
            password
        }
        }
    }
`;

export default ADD_CREDITCARD;