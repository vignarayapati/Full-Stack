import {useEffect,useState} from "react";
import axios from 'axios';


function DataFetching3() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchMyData = async ()=> {
            const res = await axios.get('https://fakestoreapi.com/users');
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
                    <th scope="col">USERNAME</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">FIRSTNAME</th>
                    <th scope="col">LASTNAME</th>
                    <th scope="col">E-MAIL</th>
                    <th scope="col">PASSWORD</th>
                    <th scope="col">CITY</th>
                    <th scope="col">STREET</th>
                    <th scope="col">NUMBER</th>
                    <th scope="col">ZIPCODE</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((dataItem,index)=>
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.phone}</td>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.name.lastname}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.password}</td>
                                <td>{dataItem.address.city}</td>
                                <td>{dataItem.address.street}</td>
                                <td>{dataItem.address.number}</td>
                                <td>{dataItem.address.zipcode}</td>
                            </tr>
                            )}
                    
                </tbody>
                </table>
            </div>
    );
}
export default DataFetching3;