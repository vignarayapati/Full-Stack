import Card from "./card"

function Ass1() {
    const names=["name1","name1","name1","name1"]
    return (
        <div>
            <ul>
                {
                    names.map((name,index)=>
                    <li key={index}>{name}</li>
                )
                }
            </ul>
            <Card/>
        </div>
        
    );
}
export default Ass1;