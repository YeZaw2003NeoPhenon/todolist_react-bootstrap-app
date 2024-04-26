
export const Header = ({title}) => {
    return(
        <header className="Header">
            <h2>{title}</h2>
        </header>
    )
}
Header.defaultProps = {
    title : "Default Title"
}