import Card from "./card"
function CardList() {
    const name="ReactJS"
    const college="SVECW"
    const userObj={branch:"CSC",year:"3"}
    const users=["Name 1","Name 2","Name 3","Name 4","Name 5"]
    return(
       <div className="container"> 
       <div className="row">
       {
        users.map((user,index)=>
        (<Card key={index}
        program={name} 
        col={college} 
        user={userObj}
        userFromArray={user} />)
        )
    }
       </div> 
       </div>
    );
}
export default CardList;