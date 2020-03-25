//Der Reducer für die Manipulation des Redux Store
const initialState = {
    name:"",
    password:"",
    warning:{state:false,text:""},
    private:"",
    verified:"",
    lngTabs: ['DE', 'ENG', '汉语'],
    lng:0,
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
        case "SET_WARNING":
            return{
                ...state,
                warning: action.state
            }
    }
    return state;
}
export default reducer;