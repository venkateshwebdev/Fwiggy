import React from "react" 
import "./styles.css"
class About extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo :{
            }
        }
        console.log("constructor")
    }
    async componentDidMount(){
        const data = await fetch("https://randomuser.me/api/")
        const rdata = await data.json()
        console.log(rdata.results[0])
        console.log("component mounted");
        const da = rdata.results[0]
        this.setState({
            userInfo :{
                name : da.name.first + " " + da.name.last,
                photo : da.picture.large,
                email : da.email,
                phone : da.phone,
                country : da.location.country
            }
        })
    }
    render(){
        console.log("render")
        return(
            <div className="about-page" >
                <div><h1>Our Founders : </h1></div>
                {!this.state.userInfo.photo?<div className="m-shim"><div className="i-shim"></div><div><div className="c-shim"></div><div className="ct-shim"></div><div className="ct-shim"></div></div></div>:
                <div className="about-content">
                <div className="img-i"><img src={this.state.userInfo.photo} /></div>
                <div className="aaa">
                <h2>{this.state.userInfo.name}</h2>
                <h4>CEO , fOOd villA.</h4>
                <p>{this.state.userInfo.email}</p>
                <p>{this.state.userInfo.phone}</p>
                <p>{this.state.userInfo.country}</p>
                </div>
                </div>}
            </div>
        )
    }
}
export default About;