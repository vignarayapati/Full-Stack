import {Link} from "react";
import Reg from "./reg";

function Navigation() {
    return(
        <div>
            <Link to ="/Login">Login</Link>
            <Link to ="/Reg">Register</Link>
        </div>
    );
}
export default Navigation;