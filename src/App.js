import React, { Component } from 'react';
import './App.css';

const Reactangle = () => (
  <svg width="800" height="600" id="svg">
    <rect style={{fill: "blue"}} width="100" height="200" x="50" y="20" />  
  </svg>
);

const User = (props) => {
  const name = props.name;
  const pic = props.pic;

  return(
  <div>
    <img src={pic} />
    {name}
  </div>
  )
};

const UserList = (props) => {
  if(!props.users) {
    return(null)
  }

  const users = props.users;
  const userList = users.map((user, index) => {
    return <User key={index} name={user.name.first + ' ' + user.name.last} pic={user.picture.thumbnail} />    
  })

  return(
    userList
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {fullUserList: [], renderUserList: [], nameIndex: 1, buttonText: "Load Random User Names!"}
  }
  
  componentDidMount = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(results => {
      return results.json();      
    }).then(data => {
      this.setState({fullUserList: data.results, renderUserList: null});
    })
  }

  displayUsers =() => {
    if(this.state.nameIndex < this.state.fullUserList.length && !this.timerID) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      this.stopLoadingNames()
    }
  }
  
  tick = () => {
    if(this.state.nameIndex < this.state.fullUserList.length) {
      let nameIndex = this.state.nameIndex;
      this.setState({
        renderUserList: this.state.fullUserList.slice(0, nameIndex),
        nameIndex: ++nameIndex,
        buttonText: "Stop Loading Random User Names!"
      })
    } else {
      this.stopLoadingNames()
    }
  }

  stopLoadingNames = () => {
    clearInterval(this.timerID);
    this.timerID = false;
    this.setState({
      buttonText: "Load Random User Names!"
    })
  }

  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // }
  
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-center">
          <div>
            <button onClick={this.displayUsers}>
              {this.state.buttonText}
            </button>
          </div>
          <UserList users={this.state.renderUserList} />
        </header>
        {/* 
        <div
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        */}
      </div>
    );
  }
}

export default App;
