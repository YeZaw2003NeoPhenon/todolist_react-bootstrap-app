import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AddForm } from "./AddForm";
import { SearchForm } from "./SearchForm";
import { MainContent } from "./MainContent";
import { AlertDialog } from "./AlertDialog";
import axios from "axios";

function App() {

    const[items , setItems] = useState([]);

    const[ newItem , setNewItem ] = useState("")
    const[searchItem , setSearchItem ] = useState("")
    const[error , setError ] = useState(null)
    const[alertMessage , setAlertMessage ] = useState("")
    const[alertVariant , setALertVariant] = useState("success")

    const api_url = "http://localhost:5000/todoitems"

    useEffect(() => {
        fetchTodoItems()
    },[])

    const fetchTodoItems = async() => {
        try{
         const response = await axios.get(api_url)
        setItems(response.data)
        }
        catch(error){
            setError(`There is tremulous errors fetching Todo Items ${error.message}`)
        }
    }

    const showAlertMessage = ( message , variant) => {
        setAlertMessage(message)
        setALertVariant(variant)

      const timeHandler =  setTimeout(() => {
            setAlertMessage("")
        } , 2000 )
        clearTimeout(timeHandler)
    }
    const handleSubmit = (e) => {

         e.preventDefault()

        if( !newItem.trim() ){
            return;
        }

        addItem(newItem);
        setNewItem("");
        showAlertMessage( "Items Added Successfully " , "success")

    }

    const addItem = async(item) => {
        try{
            const itemId = items.length ? items[items.length-1].id + 1 : 1 ;

            const response = await axios.post( api_url , { id : itemId , itemText : item , completed : false })
            setItems([...items , response.data])
        }
        catch( error ){
            setError(`There is sluggish errors adding Todo Items ${error.message}`)
        }
    }

    const deleteItems = async(id) => {
        try{
             await axios.delete(`${api_url}/${id}`)
            const itemsToDelete = items.filter((item) => item.id !== id );
            setTimeout(() => {
                setItems(itemsToDelete)
            } , 500)    
            showAlertMessage( "Items Deleted Successfully " , "danger")
        }
        catch(error){
            setError('Error deleting todo:', error)
        }
    }
    
    const completedItem = async(id) => {
        try{
         const item = items.find( item => item.id === id );
         
         const response = await axios.put(`${api_url}/${id}` , {
          ...item ,
          completed : !item.completed
         })
 
         const listItems = items.map( item => 
          item.id === id ? response.data : item
         )
 
          setItems(listItems);
        }
        catch(error){
         setError(`Error updating Todo Item: ${error.message}`);
        }
     }

    const edit = async(id , newInputItem ) => {
      try{
        const item = items.find(item => item.id === id );
        const response = await axios.put(`${api_url}/${id}` , {
            ...item , 
            itemText : newInputItem 
        })
      const updatedItem = items.map( (item) => {
            return item.id === id ? response.data : item;
        })
        showAlertMessage( "Items Updated Successfully " , "success")
        setItems(updatedItem)
      }
      catch(error) {
        setError(`Error updating Todo Item: ${error.message}`);
      }
    }

    return(
        <article className="App" >
            <div className="todolist">
            <Header title = "Mesmerizing ToDoList"/>
            <AddForm handleSubmit = {handleSubmit} newItem = {newItem} setNewItem = {setNewItem}/>
            <SearchForm setSearchItem = {setSearchItem}/>
            
             <MainContent items = {items}
              completedItem = {completedItem} 
              deleteItems = {deleteItems}
              searchItem = {searchItem}
              error = {error}
              edit = {edit}/>
              
              <AlertDialog message = {alertMessage}
               variant = {alertVariant}/>

            <Footer length = {items.length}/>

            </div>
        </article>
    )
}
export default App;