import React, {
  Component
} from 'react';

// import {

//   Route,
//   Link,
//   BrowserRouter

// } from 'react-router-dom'
import './App.css';
import Discovery from './components/Views/discovery';
import Footer from './components/Footer/footer';
import Getorders from './components/Views/getorders';
import NavBar from './components/Views/navBar';
import Main from './components/Views/main';
import Topology from './components/Views/topology';
import Login from './components/Views/login';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // messageNew: "",
      // message: "",
      // activeModeColor: "white"
    };
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

     
      <
      /div>
    );
  }
}
export default App;