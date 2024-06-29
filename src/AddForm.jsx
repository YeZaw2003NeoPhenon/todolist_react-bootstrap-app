import { useRef } from "react"
import { FaPlus } from "react-icons/fa"

export const AddForm = ({handleSubmit , newItem , setNewItem }) => {
   const reqRef =  useRef()
    return(
        <form onSubmit={handleSubmit} >
            <input type="text"
             placeholder="Enter your Item name"
             value={newItem}
             required
             autoFocus
            //  ref={reqRef}
             onChange={(e) => setNewItem(e.target.value)} />
             <button type = "submit" aria-label="submitBtn" className="addBtn">
             <FaPlus className="plus" onClick={ () => reqRef.current.focus()}/>
             </button>
        </form>
    )
}