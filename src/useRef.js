import { useEffect,useState,useRef } from "react";

function UseRef() {
    const Value=useRef(null);
    const Value1=useRef(null);
    const [loginMessage,setMessage] = useState('');

    //use useEffect to focus on input field
    useEffect(()=> {
        Value.current.focus();
    });

    const formSubmit = (event)=> {
        event.preventDefault(); 
        //console.log("Form Submitted");
        // console.log(Value.current.value);
        // console.log(Value1.current.value);
        if(Value.current.value === Value1.current.value) {
            //console.log("Correct");
            setMessage("Correct");
        } 
        else {
            //console.log("Incorrect");
            setMessage("Incorrect");
        }
    }
    

    return(
        <div className="container" align="center" >
        <div className="card"  style={{width:'300px',padding:'20px'}}  >
            
            <h1>Login</h1>
            <p>Provide your details to login</p>
            <form   onSubmit={formSubmit} 
            style={{width:'250px',display:'flex',flexDirection:'column'}}>

            <h6 align="left">College Id</h6>
            <input type="text" placeholder="College Id"  ref={Value}/><br/>
            <h6 align="left">Password</h6>
            <input type="password" placeholder="Password"  ref={Value1}/>
            <br/>
            <br/>
            <button align="right" >Login</button>
            <p>{loginMessage}</p>
            </form>
            
        </div>
        </div>
        
    );
}
export default UseRef