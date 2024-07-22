function F5() {
    const val=false;
    return(
        <div>
            {val ? <h1>This is true</h1>:<div><h1>This is false</h1></div>}
        </div>
    );
}
export default F5;