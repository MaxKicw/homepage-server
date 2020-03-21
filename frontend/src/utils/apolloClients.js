import Apollo from "apollo-boost";
import  ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // uri: '${process.env.REACT_APP_BACKEND_URL}/graphql' || "http://localhost:1337/graphql"
    uri:"https://maximilian-wick.de/graphql"
});

export default client;
