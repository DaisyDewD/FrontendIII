import { useReturnComponent } from "./Components/useReturnComponent.js";
import { ClassData } from "./FrontendIII";
import Topic from "./Components/Topic";

const MainApp = ()=>{
    const { AppComponent, handlingComponent } = useReturnComponent();
    const weeks = Object.keys(ClassData);
    return (
        <div>
            <h1 style={{color:'#311b92'}}>Prácticas - Deisy Garzón León</h1>    
                {
                    weeks.map((item, index)=>
                        <Topic 
                            key={index}
                            week={index + 1}
                            data={ClassData[item]}
                            handlingComponent={handlingComponent}
                        />
                    )
                }
                <div style={{width: "100%", height: "100%", border: "2px dotted purple", marginTop: "30px"}}>
                    {
                        AppComponent
                    }
                </div>
        </div>
    )
}

export default MainApp;