import {useEffect,useState} from "react";
import axios from 'axios';


function DataFetching2() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchMyData = async ()=> {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
            //console.log(await res.json());
            const resData = await res.data;
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    },[]) // ",[]" loads only one time in console
    return(
            <div>Fetching Data
                
            {data.map((dataItem,index)=>
            <div key={index}>{dataItem.title}</div>
            )}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((dataItem,index)=>
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.userId}</td>
                                <td>{dataItem.title}</td>
                                <td>{dataItem.body}</td>
                            </tr>
                            )}
                    
                </tbody>
                </table>
            </div>
    );
}
export default DataFetching2;