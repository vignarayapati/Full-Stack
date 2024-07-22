

function Array(){
    let a = [1,2,3,4,5];
    return ( 
    <>   {a.map((i)=>( // for array we use map
        <h1>{i}</h1>
        ))}
    </>  
);
}
export default Array;