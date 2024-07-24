function Comp4() {
    const inputValueChange = (event) => {
        console.log("Input changed");
        console.log(event.target.value);
    }
    const addReview = () => 
    {
        console.log("Adding review...");
    }
    return(
        <div>
            <h1>Reveiws</h1>
            <input type="text" placeholder="Enter review" onChange={inputValueChange} />
            <button type="button" className="btn btn-success" onClick={addReview} >Add Review</button>
        </div>
    );
}
export default Comp4;