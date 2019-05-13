import React, {
  Component
} from 'react';

// import {

//   Route,
//   Link,
//   BrowserRouter

// } from 'react-router-dom'
import './App.css';
// import Discovery from './components/Views/discovery';
// import Footer from './components/Footer/footer';
// import Getorders from './components/Views/getorders';
// import NavBar from './components/Views/navBar';
// import Main from './components/Views/main';
// import Topology from './components/Views/topology';
import Login from './components/Views/login';
import socketIOClient from "socket.io-client";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:1234"
      // messageNew: "",
      // message: "",
      // activeModeColor: "white"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  // componentWillMount() {
  //   this.setState({
  //     messageNew: < Login/ >
  //   })
  // }

  // componentWillReceiveProps(props) {
  //   console.log('rcv props', props)
  // }

  // fromSideBarChild(params) {

  //   console.log('fromSideBarChild', params);
  //   this.setState({
  //     messageNew: params

  //   })

  // }

  render() {
    const { response } = this.state;
    
     
   
    return ( < div >
    <Login/>
      {/* <
      NavBar callback = {
        this.fromSideBarChild.bind(this)
      }
      />


      <
      Main messageNew = {
        this.state.messageNew
      }
      /> */}
      <br/>
 <div style={{ textAlign: "center" }}>
        {response
          ? <p>
             {response} 
            </p>
          : <p>Loading...</p>}
      </div>
     
      <
      /div>
    );
  }
}
export default App;