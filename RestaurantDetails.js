import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { MENU_URL } from "./utils";
import Search from "./Search";
const RestaurantDetails = () => {
    const {id} = useParams()
    const [resd,setResd] = useState([]);
    const [rest,setRest] = useState(true);
    const [r,setR] = useState([]);
    const [filtered,setFiltered] = useState(resd)
    const onSearchActivated = ()=>{
        setRest(false)
    }
    const onEmpty = ()=>{
        setRest(true)
    }
    useEffect(()=>{
        getRestuarantDetails()
    },[])
    const getRestuarantDetails = async()=>{
        const rawdata = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`);
        const data = await rawdata.json()
        setR(data?.data?.cards[0]?.card?.card?.info)
        console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards)
        setResd(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards)
        // console.log((data?.data?.cards[0]?.card?.card?.info))
        setFiltered(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards)

    }
    const onSearchCompleted = (filteredRestaurants) => {
        setFiltered(filteredRestaurants)
    }
    return (
        <div className="resd-container">
            {console.log("restauntant details : rendered")}
            {/* <Link to={'/'}><div className="backButton">🔙</div></Link> */}
            <div className="backButton"><Link to="/">← back to restauntants</Link></div>
            {/* {!resd?<div className="resd-image"><div className="resdes"></div><div className="resim"></div></div>: */}
            <div className={`resd-image ${!rest&&"hide"}`}>
                <div className="ri">
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${r?.cloudinaryImageId}`} />
                </div>
                <div className="rd">
                <h1>{r.name}</h1>
                <h3>{r.areaName}</h3>
                <h3>{r.city}</h3>
                </div>
                </div>
                <Search data={resd} onSearchCompleted={onSearchCompleted} onSearchActivated={()=>onSearchActivated()} onEmpty={onEmpty} />
            {filtered?.length===0?<Shimmer />:
            <div className="card-cc">
                {filtered===undefined&&<h1>Sorry! We are Currently Not Available...</h1>}
                {filtered?.length===0?<h1>OOps we dot have that currently...</h1>:filtered?.map((e)=><RestCard data ={e.card?.info} key={e.card?.info?.id}/>)}
                </div>}
        </div>
     );
}
 
export default RestaurantDetails;