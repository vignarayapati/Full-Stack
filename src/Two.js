import F1 from "./App"
function F2() {
    var b=15;
    var a=5;
    var c=a+b;
    return ( <div> <h1>This is from a component2!! {c} </h1> 
    <F1/> </div> );
}
export default F2;