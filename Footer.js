import "./styles.css"
const Footer = (props) => {
    return (
        <div className={`footer ${!props.isFooter&&"cartFooter"}`}>
            {/* <div className="head">Fwiggy</div> */}
        <div className="footer-cc">
            <div className="one">
                <p>🍹 Food & Beverages</p>
                <p>🥪 Veg & Non-veg</p>
                <p>❤️ Healthy</p>
                <p>🌎 International & Regional</p>
            </div>
            <div className="two">
                <p>🛵 Instant Delivery</p>
                <p>🚩 Continential Chefs</p>
                <p>🖤 Great Customer Response</p>
                <p>♾️ Endless Options</p>
            </div>
            <div className="three">
            <p>🤖 Instagram</p>
                <p>🤘 Facebook</p>
                <p>🐧 Twitter</p>
                <p>🧑‍🤝‍🧑Community</p>
            </div>
        </div>
        </div>
     );
}
 
export default Footer;