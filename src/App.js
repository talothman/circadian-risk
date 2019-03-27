import React, { Component } from 'react';
import './App.css';

const usersSample = {
  "page": 1,
  "per_page": 3,
  "total": 12,
  "total_pages": 4,
  "data": [
      {
          "id": 1,
          "first_name": "George",
          "last_name": "Bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
          "id": 2,
          "first_name": "Janet",
          "last_name": "Weaver",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
          "id": 3,
          "first_name": "Emma",
          "last_name": "Wong",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      }
  ]
}

const Reactangle = () => (
  <rect style={{fill: "blue"}} width="100" height="200" x="50" y="20" />
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
