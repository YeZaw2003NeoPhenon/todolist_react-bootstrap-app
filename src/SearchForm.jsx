import "bootstrap/dist/css/bootstrap.min.css"

export const SearchForm = ({setSearchItem}) => {

    return(
        <form action="put" className="searchForm">
             <input type="text" 
            onChange={(e) => setSearchItem(e.target.value)} 
            placeholder="Search Items..."/>
       </form>
        
    )
}