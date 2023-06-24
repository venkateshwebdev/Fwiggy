import "./styles.css"

const  Shimmer= () => {
    const ShimmerDiv = () => {
        return ( 
            <>
                <div className="shimdiv">
                    <div className="image q"></div>
                    <div className="res-name q"></div>
                    <div className="area q"></div>
                    <div className="area q"></div>
                </div>
            </>
         );
    }
    return (
        <div className="shim">
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        <ShimmerDiv />
        </div>
     );
}
 
 
export default Shimmer;