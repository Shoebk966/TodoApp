import React, {useState , useContext , createContext, useEffect} from  'react';

const AppContext = createContext();


const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list){
    return    JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }

}

export const AppProvider = ({children}) => {

const [name , setName] = useState();
const [list , setList] = useState(getLocalStorage())
const [isEditing ,setIsEditing] = useState(false);
const [isEdit , setIsEdit] = useState(null);
const [alert , setAlert] = useState({
    show:false,
    msg:'',
    type:''
});

const showAlert = (show=false, msg='' , type ='')=>{

    setAlert({show,msg,type})
}

const Handlesubmit=(e)=>{
e.preventDefault();


if(!name){

showAlert(true,'Enter Some Value' , 'danger')

}else if(name && isEditing){

    setList(list.map((item)=>{
if(item.id == isEdit){
    return {...item , title:name}
}
return item;


    }))
    setName('')
setIsEditing(false);
setIsEdit(null)

}else{
    showAlert(true,'List Added' , 'success')

    const newitems = {id : new Date().getTime().toString(),  title:name}
    setList([...list , newitems].reverse() )
    setName('')
    

}

}

const Clearall=()=>{
    setList([])
}

const Removeitem = (id) =>{
    showAlert(true,'Item Removed' , 'success');   
    setList(list.filter((item) => item.id !== id))
}

const Edititem = (id) => {

const editupdate = list.find((item)=> item.id == id )
setIsEditing(true);
setIsEdit(id);
setName(editupdate.title)
}

useEffect(()=>{
localStorage.setItem('list' , JSON.stringify(list))

},[list])

return(
<AppContext.Provider value={{
    name,
    setName,
    list,
    alert,
    Handlesubmit,
    Clearall,
    showAlert,
    Removeitem,
    isEditing,
    Edititem,
    
}}>
    {children}
</AppContext.Provider>
)}

export const useGlobalContext = () => {
  return  useContext(AppContext);
}