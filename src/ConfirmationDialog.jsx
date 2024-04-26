
import { useState } from "react"
import { Modal  , ModalTitle , ModalBody , ModalHeader , ModalFooter , Button } from "react-bootstrap"

export const ConfirmationDialog = ({showConfirmation , onConfirm , onHide}) => {
    const[isBootstrapLoaded , setIsBootstrapLoaded ] = useState(false)

    if( !isBootstrapLoaded ){
        import('bootstrap/dist/css/bootstrap.min.css').then( () => {
            setIsBootstrapLoaded(true)
        })
    }

    return(
        <Modal aria-label = "modal" show = {showConfirmation} onHide={onHide} centered >
            <ModalHeader className = "fw-bold fs-5">
            <ModalTitle>Confirmation</ModalTitle>
            </ModalHeader>
            <ModalBody>
            Are You unambiguously sure you want to delete?
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={onHide} > Cancel </Button>
                <Button variant="danger" onClick={onConfirm}> Confirm </Button>
            </ModalFooter>
        </Modal>
    )
}
