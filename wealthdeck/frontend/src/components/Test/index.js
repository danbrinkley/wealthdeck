import React from 'react';
import './test.css';
import LoginForm from '../Landing/LoginForm'

class Test extends React.Component{
  constructor(){
      super();
      this.state={
          show:false
      }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
              {
                  this.state.show? <div><LoginForm /></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}> Login</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Test;
