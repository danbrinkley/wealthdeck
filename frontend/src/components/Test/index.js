import React from 'react';
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
      <div className="test">
        <h1 className="test-header">This is a test</h1>
        <header className="App-header">
          <div>
              {
                  this.state.show? <div><LoginForm /></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}> </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Test;
