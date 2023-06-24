import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import "./styles.css"
const Heading = () => {
    const d = useLocation();
    const t = d.pathname;
    console.log(t);
    const dispatch = useDispatch()
    const cartItems = useSelector(store=>store.items)
    return ( 
        <div className="nav">
            <h1>fOOd.er</h1>
            <div>
                <Link className={t==="/"&&"lr"} to="/">Home</Link>
                <Link className={t==="/order"&&"lr"} to="/">Order</Link>
                <Link className={t==="/about"&&"lr"} to="/about">About</Link>
                <Link className={t==="/cart"&&"lr"} to="/cart"><span style={{padding:"5px 10px",borderRadius:"30px",backgroundColor:"lightgreen",color:'black'}}>Cart {cartItems.length}</span></Link>
            </div>
        </div>
     );
}
 
export default Heading;