import {BrowserRouter,Routes,Route} from "react";
import CardList from "./cardList";
import Nine from "./nine";

function App1() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nine/>}/>
                <Route path="/products" element={<CardList/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App1;