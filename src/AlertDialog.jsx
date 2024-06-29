
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
export const AlertDialog = ({message , variant }) => {

    const[showAlert , setShowAlert] = useState(false)
    const[isBootstrapLoaded , setIsBootStrapLoaded ] = useState(false)

    if(!isBootstrapLoaded){
        import('bootstrap/dist/css/bootstrap.min.css').then( () => {
            setIsBootStrapLoaded(true);
        }).catch( err => {
            console.log("exploitative to bootstrap");    
        })
    }

  useEffect( () => {
    if(message){
        setShowAlert(true)

       const timeHandler =  setTimeout(() => {
            setShowAlert(false)
        } , 2000 )

        return () => clearTimeout(timeHandler); // clean up function 
     }
   } , [message])

    return(
        <div>
            {showAlert ? (
                <Alert variant = "success" dismissible >{message}</Alert>
            ) : (
                <Alert variant = "success" 
                
                dismissible>{message}</Alert>
            )}
        </div>
    )    
}