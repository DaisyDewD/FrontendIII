import React from "react";
import "./Navigation.css";
const Navigation = ({pokemonHandler, type, idx})=>{
    const objBg ={
        fire: "#f44336",
        water: "#0288d1",
        rock: "#4b5a63",
        electric: "#fbc02d"
    }
    return (
        <React.Fragment>
            <button onClick={()=> pokemonHandler(idx)} style={{backgroundColor: objBg[type]}}><span style={{color: type === "electric" ? "black": "white"}}>Pokemon {type}</span></button>
        </React.Fragment>
    )
}

export default Navigation;