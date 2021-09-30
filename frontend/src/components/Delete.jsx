import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Delete = () => {

    let history = useHistory();
    const {ids} = useParams();
    const [itemState, setitemState] = useState([]);

    useEffect(() => {
        const deviceOnload = async () => {
            const result = await axios.get(`http://127.0.0.1:8000/api/v1/list-device/`);
            if (result.status === 200) {
                console.log(`${ids} - ok`);
            }
            // console.log(result.data);
            let ids1 = Number(ids);
            for(let i = 0; i < result.data.length; i++) {
                const needId = result.data[i]
                // console.log(needId);
                if(ids1 === needId.id) {
                    setitemState(needId);
                    // console.log(typeof(needId));
                }
            }
        }
        deviceOnload();
    }, [ids]);

    
    
    const deviceDelete = async () => {
        const url = `http://127.0.0.1:8000/api/v1/device-delete/${ids}/`;
        const csrftoken = Cookies.get('csrftoken');
        await axios({
            method: "DELETE",
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        }).then(response => {
            history.push("/");
        }).catch(error => {
            console.log(error.response)
        })

        console.log(url);
    }


    // console.log(typeof(itemState));
    // console.log(itemState);

    

    // const res1 = Object.keys(itemState)
    const res2 = Object.values(itemState);
    // console.log(res2[1]);

    return (
        <div className="container">
            {
                <div>
                    <p>{res2[1]}</p>
                    <p>{res2[2]}</p>
                    <p>{res2[3]}</p>
                </div>
            }
            <button className="btn btn-danger" onClick={deviceDelete}>delete</button>
        </div>
    );

}

export default Delete;









