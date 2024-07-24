import { useEffect, useState } from "react";

function Ten(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setCount(0);    
        console.log("Use effect is called");
    },[]);

    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }


    return(
        <div >
            { count > 0 ? 
            <div style = {{display: 'flex'}}>
            <button class = "btn btn-primary" onClick = {increment}>+</button>
            <h1 style = {{marginRight : '10px', marginLeft : '10px'}}> Count {count}</h1>
            <button class = "btn btn-primary" onClick = {decrement}>-</button></div>:
            <button type="button" class="btn btn-success" style = {{borderRadius: '10px'}}  onClick = {increment}>Add to cart</button>

            } 



        </div>
    )
}
export default Ten;