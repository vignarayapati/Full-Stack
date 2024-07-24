// import React from "react";

// class Eight extends React.Component {
//     name="ReactJS"
//     count=0;
//     constructor(){
//         super();
//         this.state = {
//             number : 1
//         }
//         console.log("Constructor is called!");
//     }
//     componentDidMount() {
//         console.log("Mounted");
//         this.count+=1;
//         console.log(this.count);
//         // console.log(this.count+1);
//     }
//     componentWillUnmount() {
//         console.log("will be unMounted");
//     }
//     funcEightBtnClick = () => {
//         console.log("Button Clicked");
//         this.count+=1;
        
//         console.log(this.count);
//         //update the state
//         this.setState({number: this.state.count+1});
//     }
//     render() {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <div className="col -md-4">
//             <div className="card">
//             <div className="card-title">This is Class Component {this.name}</div>
//             <div className="card-body"> {this.state.number+=1}</div>
//             <button
//              type="button" className="btn btn-success" onClick={this.funcEightBtnClick}>Click Me</button>
//             </div>
//             </div>
//             </div>
//             </div>
//         );
//     }
// }
// export default Eight;

import React from "react";

class Eight extends React.Component {
    count = 20;


    constructor() {
        super();
        this.state = {
             number: 1
        }
        console.log("Constructor called!");
    }
    componentDidMount() {
        console.log("Mounted");
        console.log(this.count+1);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("updated");
        
    }
    componentWillUnmount() {
        console.log("UnMounted");   
    }

    funBtnClick = () =>{
        console.log("clicked");
        console.log(this.count+1);
        this.setState({number : this.state.number+1})
        
    }
    render() {
        return (
            <div>
            <h1>This is class variable count = {this.count} , {this.state.number}</h1>
            <button className = "btn btn-primary" onClick={this.funBtnClick}>Click Me</button>
            </div>
        );
    }
}
export default Eight;