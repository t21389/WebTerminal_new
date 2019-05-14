import React, {
  Component
} from 'react';

import './App.css';
import Login from './components/Views/login';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:1234"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
  
  return ( < div >
    <Login/>
      <br/>
   <div style={{ textAlign: "center" }}>
        {response
          ? <p>
             {response} 
            </p>
          : <p>Loading...</p>}
      </div>
      </div>
    );
  }
}
export default App;