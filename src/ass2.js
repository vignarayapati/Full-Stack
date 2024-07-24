import React, { useState } from 'react';

function Ass2() {
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplay]=useState('');
    const inputValueChange = (event) => {
        console.log("Input changed");
        console.log(event.target.value);
        setReview(event.target.value);
    }
    const addReview = () => 
    {
        console.log("Adding review...");
        setDisplay(review);
    }
    return(
        <div>
            <h1>Reveiws</h1>
            <input type="text" placeholder="Enter review" onChange={inputValueChange} />
            <button type="button" className="btn btn-success" onClick={addReview} >Add Review</button>
            <br/>
            <p>{reviewToDisplay}</p>
        </div>
    );

}
export default Ass2;