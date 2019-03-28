import React, { Component } from 'react';
import './App.css';

const Reactangle = () => (
  <svg width="800" height="600" id="svg">
    <rect style={{fill: "blue"}} width="100" height="200" x="50" y="20" />  
  </svg>
);

const User = (props) => {
  const name = props.name;
  return(
  <div>
    {name}
  </div>
  )
};

const UserList = (props) => {
  const users = props.users;
  const usersList = users.data.map((user) => {
    return <User name={user.first_name + ' ' + user.last_name} />    
  })

  return(
    usersList
  )
}

class App extends Component {
  displayUsers=() => {
    // fetch("https://reqres.in/api/users")
    // .then((response) => {return response.json()})
    // .then((data) => {

    // })
    usersSample.data.map((user) => {
      
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg width="800" height="600" id="svg">
            <Reactangle />
          </svg>        
          <button onClick={this.displayUsers}>
            Click Me!
          </button>
          <UserList users={usersSample} />
        </header>
      </div>
    );
  }
}

export default App;
