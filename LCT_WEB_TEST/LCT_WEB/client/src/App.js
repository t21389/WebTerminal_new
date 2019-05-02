import React, {
  Component
} from 'react';


import './App.css';
import Discovery from './components/Views/discovery';
import Footer from './components/Footer/footer';






class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messgae: ""
    };
  }

  CallForInterface = async (params) => {
    const response = await this.callApi(1);
    console.log("response " + response)
    return response;
  };
  DisplayInterfaceData = (params) => {
    console.log("CallForInterface", params.props);
    this.setState({
      message: params
    });
  }

  callApi = async (event) => {
    console.log('call api' + event);
    switch (event) {
      case 1:
        {
          const response = await fetch('/api/getInterfaceData');
          console.log("@@@@@@" + response);
          const body = await response.text();
          console.log("body ==>", body);
          return body;
        }
        break;
    }
  }
  render() {

    return ( < div >

      <
      Discovery callback = {
        this.CallForInterface.bind(this)
      }


      / > <
      Footer / >
      <
      /div>
    );
  }
}

export default App;