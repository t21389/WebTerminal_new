import React, {
  Component
} from 'react';

import './App.css';
import Discovery from './components/Views/discovery';
import Footer from './components/Footer/footer';
import Getorders from './components/Views/getorders';
import NavBar from './components/Views/navBar';
import Main from './components/Views/main';
import Topology from './components/Views/topology';
import Login from './components/Views/login';
import Theme from './components/Views/theme';




class AfterLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageNew: "",
      message: "",
      backgroundColor:"black",
      activeModeColor: "white"
    };
  }


  componentWillMount() {
    this.setState({
      messageNew: < Topology / >
    })
  }

  componentWillReceiveProps(props) {
    console.log('rcv props', props)
  }

  fromSideBarChild(params) {

    console.log('fromSideBarChild', params);
    this.setState({
      messageNew: params

    })

  }

activateMode = mode => {
   console.log("mode clicked ",mode)
 
   this.setState({
     activeModeColor:mode
   })
 
 };
  handleBkgColor= color =>{
   console.log('selected color=>', color);

   this.setState({
     backgroundColor:color
   })
 };
 
  render() {
    console.log("Inside New Comp")
    return ( < div >

      <
      NavBar  color={this.state.backgroundColor}  callback = {
        this.fromSideBarChild.bind(this)
      }
      />
      <Theme  activateModeHandler = {this.activateMode} handleBgClick={this.handleBkgColor}/>

      <
      Main mainThemeColor={this.state.activeModeColor} messageNew = { 
        this.state.messageNew
      }
      />

      <
      Footer / >
      <
      /div>
    );
  }
}
export default AfterLogin;