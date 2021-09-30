/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import Cookies from "js-cookie";


const deviceUpdate = () => {

    let history = useHistory();
    const {ids} = useParams();
    // console.log(typeof(ids))

    const [device_type, setType] = useState(null)
    const [device_name, setName] = useState(null)
    const [price_hour, setPrice] = useState(null)

    useEffect(() => {
        const loadItems = async () => {
            const result = await axios.get(`http://127.0.0.1:8000/api/v1/list-device/`);
            if (result.status === 200) {
                console.log(`${ids} - ok`);
            }
            let ids1 = Number(ids);
            for (let i = 0; i < result.data.length; i++) {
                // console.log(result.data[i]);
                const needId = result.data[i];
                // console.log(needId);
                if (ids1 === needId.id) {
                    // console.log(needId.device_type, needId.device_name, needId.price_hour);   
                    setType(needId.device_type);
                    setName(needId.device_name);
                    setPrice(needId.price_hour);
                }       
            } 
        }
        loadItems();
    }, [ids]);

    const UpdateItems = async () => {
        let formField = new FormData();
        formField.append('device_type', device_type)
        formField.append('device_name', device_name)
        formField.append('price_hour', price_hour)
        const url = `http://127.0.0.1:8000/api/v1/device-update/${ids}/`;
        const csrftoken = Cookies.get('csrftoken');
        await axios({
            method: 'PUT',
            url: url,
            headers: {
                'X-CSRFToken': csrftoken,
                'Media-Type': 'application/json',
            },
            data: formField,
        }).then(response => {
            console.log(response.data);
            history.push("/");
        }).catch(error => {
            console.log(error.response);
        });
    }

    return(
        <div className="container">
            <input type="text" name="device_type" value={device_type} onChange={(e) => setType(e.target.value)}/>
            <input type="text" name="device_name" value={device_name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" name="price_hour" value={price_hour} onChange={(e) => setPrice(e.target.value)}/>
            <button className="btn btn-success" onClick={UpdateItems}>send</button>
        </div>
    );
    

}

export default deviceUpdate;







