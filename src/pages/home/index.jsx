import React from "react";
import Cover from "./cover";
import Library from "./library";
import Introduction from "./introduction";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <Introduction />
            <Library />
            <Footer />
        </div>
    )
}

export default Home
