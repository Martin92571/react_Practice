import React, { Component } from 'react';
import MovieContainer from './components/movies_container';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  state = { show: false,
            href:''
  };

  showModal = (event) => {
    console.log(event);
    this.setState({ show: true,
                     href:event
                    });
  }; 

  hideModal = () => {
    this.setState({ show: false,
      href:''
    });
  };
 
  render() {
    return (
      <div className="container">
       <Modal key={this.state.href} href={this.state.href} show={this.state.show} handleClose={this.hideModal}></Modal>
      <h1 className="text-center">Axios Demo</h1>
      <MovieContainer show={this.showModal}/>
    </div>
    );
  }
}

export default App;
