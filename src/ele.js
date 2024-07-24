import { useRef } from "react";

function Ele() {
    const firstRef = useRef(null) // reference

    const formSubmitted = (event)=> {
        event.preventDefault();  //to prevent the browser refresh every time
        console.log("Form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value=''; //clear
    }

    
    

    return(
        <div>
            <form onSubmit={formSubmitted}>
            <input type="text" ref={firstRef}/>
            <button >Submit</button>
            </form>
        </div>

    );
}
export default Ele;