import React, {Component} from "react";


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          activeItem:{
            id:null,
            device_type: '',
            device_name: '',
            price_hour: '',
          },
          editing:false,
        };
    
        this.deviceCreate = this.deviceCreate.bind(this);
        this.deviceDelete = this.deviceDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getCookie = this.getCookie.bind(this);
    
    
    
    };
    
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    
    
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log("Name", name);
        console.log("Value", value);
    
        this.setState({
          activeItem:{...this.state.activeItem, [name]: value}});
    }
    
    deviceCreate(e){
        e.preventDefault()
        const csrftoken = this.getCookie('csrftoken')
        const url = 'http://127.0.0.1:8000/api/v1/device-create/'
    
        fetch(url, {
          method:'POST',
          headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
          },
          body:JSON.stringify(this.state.activeItem)
        }).then(result => console.log('success====:', result))
          .catch(error => console.log('error============:', error));
    
        console.log("create");
    
    }
    
    
    
    deviceDelete(e){
        e.preventDefault()
    
    }
    
    
      // ======================================================
    
    render() {
        return (
          <div className="container">
    
            {/* Device Created */}
            <form onSubmit={this.deviceCreate} id="form">
              <input name="device_type" id="device_type" type="text" 
              value={this.state.activeItem.device_type} 
              onChange={this.handleChange} />
              <input name="device_name" id="device_name" type="text" 
              value={this.state.activeItem.device_name} 
              onChange={this.handleChange} />
              <input name="price_hour" id="price_hour" type="number" 
              value={this.state.activeItem.price_hour} 
              onChange={this.handleChange} />
              <input type="submit" value="submit" id="submit" name="Add" />
            </form>
           
          </div>
        );
    }
    
}


export default Create


