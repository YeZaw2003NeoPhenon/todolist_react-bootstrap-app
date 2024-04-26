import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AddForm } from "./AddForm";
import { SearchForm } from "./SearchForm";
import { MainContent } from "./MainContent";
import { AlertDialog } from "./AlertDialog";

function App() {

    const[items , setItems] = useState([
        {
            id : 1 ,
            completed : false,
            itemText : "IPhone-XR"
        },
        {
            id : 2 ,
            completed : false,
            itemText : "Harry Porter Book"
        },
        {
            id : 3 ,
            completed : false,
            itemText : "E-Books"
        }
    ]);

    const[ newItem , setNewItem ] = useState("")
    const[searchItem , setSearchItem ] = useState("")

    const[alertMessage , setAlertMessage ] = useState("")
    const[alertVariant , setALertVariant] = useState("success")

    const showAlertMessage = ( message , variant) => {
        setAlertMessage(message)
        setALertVariant(variant)

      const clearTimer =  setTimeout(() => {
            setAlertMessage("")
        } , 2000 )

        clearTimeout(clearTimer);

    }

    const completedItem = (id) => {
      const itemList =  items.map((item) => {
            if( item.id === id ){
                return {...item , completed : !item.completed }
            }
            else{
                return item;
            }
        })
        setItems(itemList);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if( !newItem.trim() ){
            return;
        }

        addItem(newItem);
        setNewItem("");

        showAlertMessage( "Items Added Successfully " , "success")

    }

    const addItem = (item) => {
        const id =  items.length ? items[items.length - 1].id + 1 : 1; 
        const newItem = {
            id , // id  : Math.random()
            completed : false,
            itemText : item
        }

        const listItems = [...items , newItem ]
        setItems(listItems)
    }

    const deleteItems = (id) => {
        
        const itemsToDelete = items.filter((item) => item.id !== id );

        setTimeout(() => {
            setItems(itemsToDelete)
        } , 500)

        showAlertMessage( "Items Deleted Successfully " , "danger")
    }

    const edit = (id , newInputItem ) => {
        const updatedItem = items.map( (item) => {
             return item.id === id ? {...item , itemText : newInputItem } : item ; 
        });
        setItems(updatedItem)
        showAlertMessage( "Items Updated Successfully " , "success")

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
              edit = {edit}/>

              <AlertDialog message = {alertMessage}
               variant = {alertVariant}/>
                <Footer length = {items.length}/>

            </div>
        </article>
    )
}
export default App;