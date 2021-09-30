import React, {Component} from "react";
import { Link } from "react-router-dom";

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    };

    componentDidMount() {
        console.log("Fetching")
        
        fetch("http://127.0.0.1:8000/api/v1/list-device/")
        .then(response => response.json())
        .then(data => this.setState({data: data}))

        
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.data.map(items => {
                        return (
                        <li key={items.id}>
                            {items.id} - {items.device_type} - {items.device_name}
                            <button ><Link to={`/update/${items.id}/`}>Update</Link></button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default List