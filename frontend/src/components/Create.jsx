/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

const deviceCreate = () => {

    let history = useHistory();

    const [device_type, setType] = useState(null)
    const [device_name, setName] = useState(null)
    const [price_hour, setPrice] = useState(null)


    const addDevice = async () => {
        let formField = new FormData();

        formField.append('device_type', device_type)
        formField.append('device_name', device_name)
        formField.append('price_hour', price_hour)

        const url = 'http://127.0.0.1:8000/api/v1/device-create/';
        const csrftoken = Cookies.get('csrftoken') // Cookies from Django Domain

        axios({
            method: 'POST',
            url: url,
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json',
            },
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }

    return(
        <div>
            <input type="text" name="device_type" value={device_type} onChange={(e) => setType(e.target.value)} />
            <input type="text" name="device_name" value={device_name} onChange={(e) => setName(e.target.value)} />
            <input type="number" name="price_hour" value={price_hour} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={addDevice}>send</button>
        </div>
    );


};

export default deviceCreate;



