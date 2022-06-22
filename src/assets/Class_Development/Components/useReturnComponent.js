import {useState} from "react";
import Space from "./Space/Space.js";
export const useReturnComponent = ()=>{
    const [AppComponent, setAppComponent ] = useState(null);
    const handlingComponent = ({ type, number })=>{
        const isAppFound = type.filter(item => item.id === number);
        const Component = isAppFound[0]?.component
        setAppComponent(Component ? <Component/> : <Space/>);
    }

    return {
        AppComponent,
        handlingComponent
    }
};





/*export const useReturnComponent = ()=>{
    const [ AppComponent, setAppComponent ] = useState(null);
    const handlingComponent = ( number )=>{
        if(number === 5){
            setAppComponent(<PokemonApp/>)
        }
    }

    return {
        AppComponent,
        handlingComponent
    }

}
*/