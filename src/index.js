import  ReactDOM  from "react-dom/client";
import Comp1 from "./comp1"


const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<Comp1/>);