import React from "react";

const Home = (props) => {
        setTimeout(function(){
            props.history.push("/about")
        },5000)
        return(
            <h1>Home Component</h1>
        )
}

export default Home;