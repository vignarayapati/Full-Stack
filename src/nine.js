// import { useEffect } from "react";

// function Nine() {
//     const count=0;
//     useEffect(()=>{
//         console.log("Use Effect is called");
//     });
//     return(
//         <div>
//             <h1>count {count}</h1>
//             <button className="btn btn-dark">Click Me</button>
//         </div>
//     );
// }
// export default Nine;

import { useEffect , useState} from "react";

function Nine() {
    // const count=0;
    const[count, setCount] = useState(0);
    //useState
    useEffect(()=>{
        setCount(5);
        console.log("Use Effect is called");
    });
    // useEffect(()=>{
    //     setCount(5);
    //     console.log("Use Effect is called");
    // },[]); // (,[]) count 2 times increment avuthunndhi
    const btnUpdateCount=()=>{
        setCount(count+2);
    }
    return(
        <div>
            <h1>count {count}</h1>
            <button className="btn btn-dark" onClick={btnUpdateCount}>Click Me</button>
        </div>
    );
}
export default Nine;