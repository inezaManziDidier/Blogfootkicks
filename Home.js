import { Component } from "react";
import Cards from "../component/cards";
import Carousel from "../component/carousel";
import Footer from "../component/footer";
import Navigation from "../component/navigation";



class Home extends Component{
    render(){
        return(
            <div className="home">
            <Navigation/>
            <Cards/>
            <Footer/>
            </div>
        )
    }
}

export default Home