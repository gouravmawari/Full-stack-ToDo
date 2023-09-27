import axios from "axios";

const baseURL = "http://localhost:8000/api"

const alltodo = (setalldata)=>{
    axios.get(baseURL)
    .then(({data})=>{
        setalldata(data)
    })
    .catch((err)=>console.log(err))
}

const addtext = (text,newtext,setalldata)=>{
    axios.post(`${baseURL}/add`, {text})
    .then(({data})=>{
        newtext("")
        alltodo(setalldata)
    })
    .catch((err)=>console.log(err))
}
const updatetext = (text,setalldata,settext,todoid,setisupdating)=>{
    axios.post(`${baseURL}/updatetext`, {_id:todoid,text})
    .then(({data})=>{
        setisupdating(false)
        settext("")
        alltodo(setalldata)
    })
    .catch((err)=>console.log(err))
}

const deletetext = (_id,setalldata)=>{
    axios.post(`${baseURL}/del`, {_id})
    .then(({data})=>{
        alltodo(setalldata)
    })
    .catch((err)=>console.log(err))
}
export{alltodo,addtext ,updatetext,deletetext} 