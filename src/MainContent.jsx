import { ListItems } from "./ListItems"
import { Alert } from "bootstrap"
export const MainContent = ({items , completedItem , deleteItems , searchItem , edit , error}) => {
    return(
        <div>
            {items.length ? (
            <ListItems items = {items} completedItem = {completedItem} deleteItems = {deleteItems} searchItem = {searchItem} edit = {edit} error = {error}/>
          ) : (
           <p style={{marginTop : "2rem" , color: "red" , fontSize : "1.5rem" , fontWeight :"bold"}}>Your List is Preposeterously empty</p>
          )}
        </div>

    )
}