import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "./cartSlice";
import "./styles.css"
const RestCard = (props) => {
    const items = useSelector(store=>store.items)
    const dispatch = useDispatch()
    const handleClick = (data)=>{
        dispatch(addItem(data))
    }
    const handleRemove = (data)=>{
        dispatch(removeItem(data))
    }
    return ( 
        // onClick={<ResPage data={props.data}/>}
        <div className="card-container">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.data?.cloudinaryImageId!==undefined?props.data?.cloudinaryImageId:props.data?.imageId}`}/>
            <div className="card-c">
            <h3>{props?.data?.name.length>20?props?.data?.name.slice(0,20)+" ...":props?.data?.name}</h3>
            <h5 className="h5">{props?.data?.costForTwoString!==undefined?props?.data?.costForTwoString:"$ "+props?.data?.price/100}</h5>
            <div className="v">{props?.data?.veg||props.data.isVeg?<div className="g">Veg</div>:"Non-Veg"}</div>
            <p>{props.data?.area}</p>
            <p>Rating : {props?.data?.avgRating=="--"?"4.1":props?.data?.avgRating}</p>
            <div className="menu"style={{margin:"20px 0",padding:"10px 30px",backgroundColor:"lightgrey",alignSelf:"center"}}>{"Menu ->"}</div>
            <div className="addCartButton" onClick={()=>handleClick(props.data)} style={{padding:"10px 30px",backgroundColor:"lightgreen",alignSelf:"center"}}>Add to cart</div>
            <div className="cartIncDec">
                {/* <button style={{width:'40px'}}>-</button> */}
                <div className="removeCartButton" onClick={()=>handleRemove(props.data)} style={{padding:"10px 30px",backgroundColor:"lightgreen",alignSelf:"center"}}>Remove from cart</div>
                {/* <button style={{width:'40px'}}>+</button> */}
            </div>
            
            
            {/* <p>{props?.data.description}</p> */}
            </div>
        </div>
     );
}
 
export default RestCard;