import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import footerContext from "./footerContext";
import RestCard from "./RestCard";

const Cart = () => {
    const cartItems = useSelector(store=>store.items)
    const [totalPrice,setTotalPrice] = useState(0)
    const [cartFiltered,setCartFiltered]  = useState()
    const cnxt = useContext(footerContext);
    useEffect(()=>{
        setTotalPrice(0)
        cnxt.setIsFooter(false)
        cartItems?.map((e)=>setTotalPrice((prev)=>+(prev) + +(e.price)))
        console.log("useEffcet called")
        const filtered = cartItems?.reduce((acc,crr)=>{
            if(acc[crr.id]){
                acc[crr.id].count = ++acc[crr.id].count;
            }
            else{
                acc[crr.id] = {count:1,details:crr};
            }
            return acc;
        },{})
        setCartFiltered(Object.values(filtered))
        console.log(filtered)
    },[cartItems])
    console.log(cartFiltered)
    return(
        cartItems.length===0?<><h1 style={{padding:"170px 50px",width:"60%"}}>Nothing Here...! Checkout the best Dishes from the best Restaurants out there.</h1><Link to={"/"} style={{padding:"50px",color:"blue"}}>⬅ Back to Main Page</Link></>:
        <div className="checkcc">
            <div className="dummycheck"></div>
        <div className="checkoutDetails">
        <h1>Grand Total : </h1>
        <div className="cart-it" style={{margin:"10px"}}>
            {cartFiltered?.map((e)=>
                (<div className="cartcheck">
                    <div>
                <span style={{fontWeight:"900"}}>{e.count} {" "+"X"}</span></div>
                <div className="cartItemName"><p>{e.details.name.length>21?e.details.name.slice(0,20)+" . . . ":e.details.name}</p></div>
                <div><p style={{fontWeight:"900"}}> {e.details.price*e.count/100}.00</p></div>
                </div>))}
                </div>
                {/* {cartFiltered.map((e)=>setTotalPrice((prev)=>prev+e.price))} */}
                <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"10px",paddingTop:"20px"}}><h3>total : </h3><h2>{cartItems?.reduce((acc,curr)=>+(acc)+ +(curr.price),0)/100}.00</h2></div>
        <div className="checkOutButton" style={{padding:"10px",textAlign:"center",fontWeight:"900"}}>Proceed to Checkout</div>
        </div>
        </div>
        <div className="hr"></div>
        <div className="cart">
        <div className="cart-page">
            {cartFiltered?.map((e)=><RestCard key={e.details.id} data={e.details}/>)}
        </div>
        </div>
        </div>
     );

}
 
export default Cart;