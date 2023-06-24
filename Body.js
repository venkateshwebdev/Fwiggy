import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "./customHooks";
import FooterContext from "./footerContext";
import RestCard from "./RestCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { RES_URL } from "./utils";
const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [searchInput,setSearchInput] = useState("");
    const [filtered,setFiltered] = useState(restaurants);
    const cxt = useContext(FooterContext)
    const getData = async()=>{
        const rawData = await fetch(RES_URL)
        const data = await rawData.json()
        setRestaurants(data.data.cards[0].data.data.cards)
        setFiltered(data.data.cards[0].data.data.cards)
        console.log(data.data.cards[0].data.data.cards);
    }
    const onSearchActivated = ()=>{
        console.log("hello")
    }
    const onEmpty = ()=>{
        console.log("hi")
    }
    useEffect(()=>{
        getData()
        setSearchInput("")
        cxt.setIsFooter(true)
    },[])
    useEffect(()=>{
        const filter = restaurants.filter((e)=>e.data.name?.toLowerCase().includes(searchInput.toLowerCase()))
        setFiltered(filter)
    },[searchInput])
    const handleSearch = ()=>{
        const filter = restaurants.filter((e)=>e.data.name?.toLowerCase().includes(searchInput.toLowerCase()))
        setFiltered(filter)
    }

    const onSearchCompleted = (filteredRestaurants) => {
        setFiltered(filteredRestaurants)
    }

    if(restaurants.length===0){
        return(
            <Shimmer key={Math.random()} />
        )
    }
    return( 
        <div className="b-main">
        {console.log("redered")}
        <h1>{"Restaurants  -->"}</h1>
        <Search data={restaurants} onSearchCompleted={onSearchCompleted} onSearchActivated={()=>onSearchActivated()} onEmpty={()=>onEmpty()} />
        
        <div className="card-cc">
        {filtered.length===0?<h1 className="sf">Sorry! we Don't Have That Currently...!</h1>:filtered?.map((e)=><Link to={'restaurants/'+e?.data?.id}><RestCard data={e.data} key={e?.data?.id}/></Link>)}
        </div> 
        </div>
     );
}
 
export default Body;