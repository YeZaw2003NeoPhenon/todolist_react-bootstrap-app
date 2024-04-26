import { ListItems } from "./ListItems"

export const MainContent = ({items , completedItem , deleteItems , searchItem , edit}) => {
    return(
        <div>
            {items.length ? (
            <ListItems items = {items} completedItem = {completedItem} deleteItems = {deleteItems} searchItem = {searchItem} edit = {edit}/>
          ) : (
           <p style={{marginTop : "2rem" , color: "red" , fontSize : "1.5rem" , fontWeight :"bold"}}>Your List is Preposeterously empty</p>
          )}
        </div>
    )
}