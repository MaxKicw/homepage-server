//Der Reducer für die Manipulation des Redux Store
const initialState = {
    name:"",
    password:"",
    private:"",
    verified:"",
    categories:"",
    lngTabs: ['DE', 'ENG', '汉语'],
    lng:0,
    articles:[]
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_NAME":
            return{
                ...state,
                name: action.name
            }
        case "SET_PASSWORD":
            return{
                ...state,
                password: action.password
            }
        case "SET_LNG":
            return{
                ...state,
                lng: action.index
            }
        case "SET_VERSION":
            return{
                ...state,
                private: action.prvt
            }
        case "SET_VERIFIED":
            return{
                ...state,
                verified: action.state
            }
        case "SET_CATEGORIES":
            return{
                ...state,
                categories: action.categories
            }
        case "SET_ARTICLES":
            return{
                ...state,
                articles: action.articles
            }
    }
    return state;
}
export default reducer;