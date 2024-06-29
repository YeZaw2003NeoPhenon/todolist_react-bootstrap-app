import { InputItems } from "./InputItems"

import "bootstrap/dist/css/bootstrap.min.css"
import { Alert } from "bootstrap"

export const ListItems = ({items , completedItem ,deleteItems , searchItem , edit,error }) => {

     items = items.filter((item) => {
        return item.itemText.toLowerCase().includes(searchItem.toLowerCase());
    })

    return(
        
        <div>
            {items.length === 0 ? (
                <p> Your List is Empty!</p>
            ) :
            <ul>
            {items.map((item) =>{
               return (
                   <InputItems item = {item} 
                   key = {item.id} 
                   completedItem = {completedItem} 
                   deleteItems = {deleteItems} 
                   edit = {edit} />
               )
            })}
       </ul>
            }
            {error && <Alert>{error}</Alert>}
        </div>
    )

}