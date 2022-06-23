const Education = ({info, title})=>{

    return(
        <article>
            <h3>{title}</h3>
            <ul>                
                {info.map( props =>
                    <li key ={props.id}>
                        {props.institute}                 
                    </li>
                ) }
            </ul>
        <br/>
        </article>
    )
}

export default Education;