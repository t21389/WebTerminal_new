import React, { Component } from "react";
import Modal from "./modal";
class AppNew extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>Open modal</button>
           <Modal 
             noBackdrop={true} 
             isOpen={this.state.isModalOpen} 
             onClose={() => this.closeModal()}
            >
            <h1>Content goes here.</h1>
          </Modal>
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }
  export default AppNew;