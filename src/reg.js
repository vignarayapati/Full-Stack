import { useState } from "react";

function Reg() {
    //const clgid=useRef(null);
    // const pass=useRef(null);
    const [clgid,setclgid] = useState('');
    const [pass,setpass] = useState('');
    const [emailid,setgmailid] = useState('');
    const [branch,setbranch] = useState('');
    const [year,setyear] = useState('');
    const [gender,setgender] = useState('');
    const [user,setuser] = useState({});
    //user object

    //use useEffect to focus on input field
    // useEffect(()=> {
    //     Value.current.focus();
    // });
    const getclgid =(event)=>{
        setclgid(event.target.value)
        console.log(event.target.value);
    }

    const getpass =(event)=>{
        setpass(event.target.value)
        console.log(event.target.value);
    }

    const getgmailid =(event)=>{
        setgmailid(event.target.value)
        console.log(event.target.value);
    }

    const getbranch =(event)=>{
        
        console.log(event.target.value);
        setbranch(event.target.value)
    }

    const getyear=(event)=>{
        
        console.log(event.target.value);
        setyear(event.target.value)
    }

    const getgender=(event)=>{
        
        console.log(event.target.value);
        setgender(event.target.value)
    }

    const formSubmit = (event)=> {
        event.preventDefault();
        const obj = {
            clgid,pass,emailid,branch,year,gender
        }
        setuser(obj)
        console.log(obj);
        console.log(user);
        // event.preventDefault(); 
        // console.log("Form Submitted");
        // console.log(clgid.current.value);
        // console.log(pass.current.value);
        // console.log(emailid.current.value);
        // if(Value.current.value === Value1.current.value) {
        //     //console.log("Correct");
        //     setMessage("Correct");
        // } 
        // else {
        //     //console.log("Incorrect");
        //     setMessage("Incorrect");
        // }
    }
    

    return(
        <div className="container" align="center" >
        <div className="card"  style={{width:'300px',padding:'20px'}}  >
            
            <h1>Register</h1>
            <p>Provide your details to login</p>
            <form   onSubmit={formSubmit} 
            style={{width:'250px',display:'flex',flexDirection:'column'}}>

            <h6 align="left">College Id</h6>
            <input type="text" placeholder="College Id"  onChange={getclgid}/><br/>
            <h6 align="left">Password</h6>
            <input type="password" placeholder="Password" onChange={getpass} /> <br/>
            <h6 align="left">Email address</h6>
            <input type="text" placeholder="Email address" onChange={getgmailid} /><br/>
            <h6 align="left">Branch</h6>
                <select  className="form-select" value={branch} onChange={getbranch}>
                    <option value="">select a branch</option>
                    <option value="CSE">CSE</option>
                    <option value="CSE-CS">CSE-CS</option>
                    <option value="AIDS">AIDS</option>
                </select>
            <h6 align="left">Year</h6>
                <select className="form-select" value={year} onChange={getyear}>
                    <option value="">select a year</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                </select>
            <h6 align="left">Gender</h6>
                <div style={{display:'flex'}}>
            
                    <input type="radio" value="Female" checked={gender==="Female"} onChange={getgender}></input>female
                    <input type="radio" value="Male" checked={gender==="Male"} onChange={getgender}></input>male
                </div>
            
            <br/>
            <br/>
            <button type="submit" className="btn btn-dark" align="right" onClick={formSubmit}>Register</button>
            
            </form>
            
        </div>
        </div>
        
    );
}
export default Reg;