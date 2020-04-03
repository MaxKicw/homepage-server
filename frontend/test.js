var objectRenameKeys = require('object-rename-keys');
let array = [{de_text:"Das habe ich mit Opa gebaut",de_title:"Holzarbeit mit Opa","published":"2020-03-29","image":{"url":"/uploads/42bb89e3260948019b0c37dcf786901d.jpg","__typename":"UploadFile"},"category":{"name":"Woodworking","__typename":"Category"},"__typename":"Article"},{de_text:"Das ist in der Nacht beim Entwickeln",de_title:"Entwicklung der Seite","published":"2020-03-12","image":{"url":"/uploads/671267750fc241168f12b87aa2b51645.jpeg","__typename":"UploadFile"},"category":{"name":"Development","__typename":"Category"},"__typename":"Article"}]
let changesMap = {"de_title":"title","de_text":"text"}

array = array.map((obj)=>{
    return(objectRenameKeys(obj, changesMap))
})


console.log(array)