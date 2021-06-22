import React from "react";
//ovde smo uradili redirekciju. Kada kliknemo na Home za 5 sekundi predje na About.
//Zanimljivo je da se consol.log(props) i da se vidi u konzoli koje sve objekte sadrzi. Ima dosta korisnih stvari ovo je samo jedna od njih
const Home = (props) => {
        setTimeout(function(){
            props.history.push("/about")
        },5000)
        return(
            <h1>Home Component</h1>
        )
}

export default Home;