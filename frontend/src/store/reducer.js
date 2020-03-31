//Der Reducer für die Manipulation des Redux Store
const initialState = {
    name:"",
    password:"",
    private:"",
    verified:"",
    categories:"",
    lngTabs: ['DE', 'ENG', '汉语'],
    lng:0,
    articles:[],
    currentArticle:""
}

//Falls schonmal eingeloggt
if(localStorage.getItem('name') != null){initialState.name = localStorage.getItem('name');}
if(localStorage.getItem('password')!= null){initialState.password = localStorage.getItem('password');}
if(localStorage.getItem('private')!= null){initialState.private = localStorage.getItem('private');}
if(localStorage.getItem('lng')!= null){initialState.lng = localStorage.getItem('lng');}
if(localStorage.getItem('verified')!= null){initialState.verified = JSON.parse(localStorage.getItem('verified'));}
if(localStorage.getItem('categories')!= null){initialState.categories = JSON.parse(localStorage.getItem('categories'));}
if(localStorage.getItem('articles')!= null){initialState.articles = JSON.parse(localStorage.getItem('articles'));}
if(localStorage.getItem('currentArticle')!= null||undefined){initialState.currentArticle = JSON.parse(localStorage.getItem('currentArticle'));}

console.log(initialState.name)

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_NAME":
            localStorage.setItem('name', action.name);
            return{
                ...state,
                name: action.name
            }
        case "SET_PASSWORD":
            localStorage.setItem('password', action.password);
            return{
                ...state,
                password: action.password
            }
        case "SET_LNG":
            localStorage.setItem('lng', action.index);
            return{
                ...state,
                lng: action.index
            }
        case "SET_VERSION":
            localStorage.setItem('private', action.prvt);
            return{
                ...state,
                private: action.prvt
            }
        case "SET_VERIFIED":
            localStorage.setItem('verified', JSON.stringify(action.state));
            return{
                ...state,
                verified: action.state
            }
        case "SET_CATEGORIES":
            localStorage.setItem('categories',  JSON.stringify(action.categories));
            let resp = action.categories;
            let categoriesArray = [];
            resp.map(obj=>{
                categoriesArray.push(obj.name)
            })
            return{
                ...state,
                categories: categoriesArray
            }
        case "SET_ARTICLES":
            localStorage.setItem('articles', JSON.stringify(action.articles));
            return{
                ...state,
                articles: action.articles
            }
        case "SET_CURRENT_ARTICLE":
            let string = action.path
            let array = string.split("/");
            let pos = array[array.length-1];
            let currentArticle = action.articles[pos]
            localStorage.setItem('currentArticle', JSON.stringify(currentArticle));
            return{
                ...state,
                currentArticle: currentArticle
            }
    }
    return state;
}
export default reducer;