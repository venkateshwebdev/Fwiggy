import { useEffect, useState } from "react";
const Search = (props) => {
    const [searchInput,setSearchInput] = useState("");
    useEffect(()=>{
        const filter = props.data?.filter((e)=>e.data?.name?e.data.name.toLowerCase().includes(searchInput.toLowerCase()):e.card?.info?.name.toLowerCase().includes(searchInput.toLowerCase()))
        props.onSearchCompleted(filter);
        !searchInput==""?props.onSearchActivated():props.onEmpty()

    },[searchInput])
    const handleSearch = ()=>{
        const filter = props.data?.filter((e)=>e.data?.name?e.data.name.toLowerCase().includes(searchInput.toLowerCase()):e.card?.info?.name.toLowerCase().includes(searchInput.toLowerCase()))
        props.onSearchCompleted(filter);
    }
    return ( 
        <div className="b-search">
            <input type={"text"} placeholder={"Search Restaurant"} value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
     );
}
 
export default Search;

