import React from "react";
import "./Navigation.css";


const Navigation =({pokemonHandler, type, idx})=>{
    const objBg = {
        fire: "red",
        water: "blue",
        rock:"gray",
        electric: "yellow"
    }
    return(
        
        <React.Fragment>
            <button onClick={()=>pokemonHandler(idx)}style={{backgroundColor: objBg[type]}}>Pokemon {type}</button>
        </React.Fragment>
    )
}

export default Navigation;