//Allgemeine Komponente Query welche den gewünschten GraphQL Query 
//Annimmt und anschließend die Daten zurückgibt

import React from "react";
import {useQuery} from "@apollo/react-hooks";

const Query = ({children,query,id}) => {
    const {data, loading, error} = useQuery(query,{
        variables: {id: parseInt(id)}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({data});
};

export default Query;

