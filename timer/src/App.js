import React, { Component } from 'react';
import SGT from './studentGradeTable/StudetnGradeTable';
import './App.css';

class App extends Component {
  state={
    table:[
      {name:"bill",course:"intro to Syce",grade:10},
      {name:"john",course:"money skills",grade:20},
      {name:"james",course:"im getting fat skills",grade:55}
    ]
    
  
}
  render() {
    return (
      <div className="App">
      <SGT tables={this.state.table}/>
      </div>
    );
  }
}

export default App;
