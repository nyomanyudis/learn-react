import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nama : "Atashi wa Nyoman desu",
      age : 23
    }
  }

  changename(){
    this.setState({nama:"Sudah terganti"})
  }

  render(){
    return(
      <div>
        <div>
          <h3>
            {this.state.nama} keren sekali bisa pake react
            <button onClick={() => this.changename()}>ganti namanya dong!</button>
          </h3>
        </div>
      </div>
    )
  }

}

export default App;
