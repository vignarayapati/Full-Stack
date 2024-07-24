import {useState} from "react";
import Reg from "./reg"
import UseRef from "./useRef"

function Twel() {
    const [isLogin,setIsLogin] = useState(true);
    const showLogin = ()=>{
        setIsLogin(true);

    }
    const showRegister = ()=>{
        setIsLogin(false);
    }
        
    return(
        <div>
            <button onClick={showLogin}><h2>Login</h2></button>
            <button onClick={showRegister}><h2>Register</h2></button>

        {isLogin ?
            <UseRef/>
            :
            <Reg/>
        }
        </div>
    );
}
export default Twel;