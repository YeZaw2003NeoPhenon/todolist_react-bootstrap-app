
export const Footer = ({length}) => {
    const currentDate = new Date().getFullYear();
    return(
        <footer className="Footer">
           <p>Items yet to be addressed : {length} {length === 1 ? 'Item' : 'Items'} <br></br>&copy{currentDate}</p>
        </footer>
    )
}