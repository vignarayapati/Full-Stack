function Card(props) {
//const width=150;
    return (
        <div className = "col-md-4" >
        <div className="card" >
        <img className="card-img-top" src="mikki_mouse.jpg" alt = "card image cap" style={{border:'10px solid black',borderRadius:'2px'}} />
        <div className="card-body"> 
              
            <h1>Name:{props.userFromArray}</h1>
            <h2>Branch:{props.user.branch}</h2>        
            <h2>Year:{props.user.year}</h2> 
            <p>We are from CyberSecurity</p>
            <button type="button" class="btn btn-success" >Connect</button>
        </div>
        </div>
        </div> 
    );
}
export default Card;