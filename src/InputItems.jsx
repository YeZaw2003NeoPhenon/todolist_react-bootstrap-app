import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"

import "bootstrap/dist/css/bootstrap.min.css"

    export const InputItems = ({edit , deleteItems , item , completedItem}) => {

    const[isEditing , setIsEditing ] = useState(false)

    const[editItem , setEditItem] = useState(item.textItem)
    
    const[showConfirmation , setShowConfirmation ] = useState(false)

    const handleDelete = () => {
        setShowConfirmation(true)
    }

    const handleDeleteConfirmation = () => {
        if( item.completed ){
            const timeHandler = setTimeout( () => {
                deleteItems(item.id)
                setShowConfirmation(false)
            } , 1000 )
            clearTimeout(timeHandler)
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSaveItems = () => {
        edit(item.id , editItem)
        setIsEditing(false)
    }

    return(

        <li className = "mt-3">
            <input type="checkbox"
             id = {`checkbox-${item.id}`}
              onChange={() => completedItem(item.id)} 
            checked = {item.completed}
            />
             <button type = "button" aria-label="trashBtn" className="trashBtn" onClick={() => setShowConfirmation(true)}>
                <FaTrashAlt className="trash"  aria-label={` Delete ${item.itemText}`} onClick={handleDelete} />
            </button>

            <ConfirmationDialog
             showConfirmation = {showConfirmation} 
             onHide = { () => setShowConfirmation(false) }
             onConfirm = {handleDeleteConfirmation}
            />

            {!isEditing ? (
               <label
                htmlFor={`checkbox-${item.id}`}
                onDoubleClick={handleEdit}
                style={ (item.completed) ? {textDecoration : "line-through"} : null}
                >
                    {item.itemText}
                </label>
            ) : (
                <input type="text" 
                value={editItem}
                className = "editInput"
                onChange={(e) => setEditItem(e.target.value)}
                onBlur={handleSaveItems}
                />
            )}

            {/* <label htmlFor="ScatteredItem" aria-label="ScatteredItem"
            style={ (item.completed) ? { textDecoration : "line-through"} : null} 
            onDoubleClick={() => completedItem(item.id)}>
                {item.itemText}
            </label> */}
        </li>
    )
}