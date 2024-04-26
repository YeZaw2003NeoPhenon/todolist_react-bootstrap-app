
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
export const AlertDialog = ({message , variant }) => {

    const[showAlert , setShowAlert ] = useState(false)

   useEffect( () => {
    if(message){
        setShowAlert(true)

       const timeHandle =  setTimeout(() => {
            setShowAlert(false)
        } , 2000 )

        return () => clearTimeout(timeHandle);
    }
   } , [message])

    return(
        <div>
            { showAlert && (
             <Alert  onClose={() => setShowAlert(false)}
                variant={variant}
             dismissible>
                {message}
            </Alert>
            )}
        </div>
    )    
}