import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {

    const [itemState, setitemState] = useState([]);

    useEffect(() => {

        const url = 'http://127.0.0.1:8000/api/v1/list-device/';

        axios.get(url).then((items) => {
            const allItems = items.data;
            setitemState(allItems);
            // console.log(items);
        });

    }, [setitemState]);

    // console.log(typeof(itemState));
    // console.log(itemState);

    return(
        <div className="container">
            {
                itemState.map(item => (
                    <div>
                        <h3>{item.id}</h3>
                        <h3>{item.device_type} - {item.device_name} - {item.price_hour}</h3>
                        <button className="btn btn-secondary"><Link to={`/update/${item.id}/`}>Update</Link></button>
                        <button className="btn btn-secondary"><Link to={`/delete/${item.id}/`}>Delete</Link></button>
                        <br/>
                    </div> 
                ))
            }
        </div>
    );

}

export default ItemList;







