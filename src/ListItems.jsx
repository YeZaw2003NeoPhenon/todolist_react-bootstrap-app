import { InputItems } from "./InputItems"

import "bootstrap/dist/css/bootstrap.min.css"


export const ListItems = ({items , completedItem ,deleteItems , searchItem , edit}) => {

    const rejuvanatedItems = items.filter((item) => {
        return item.itemText.toLowerCase().includes(searchItem.toLowerCase());
    })

    return(
        
        <div>
            {rejuvanatedItems.length === 0 ? (
                <p> Your List is Empty!</p>
            ) :
            <ul>
            {rejuvanatedItems.map((item) =>{
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
        </div>
    )

}