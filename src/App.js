import React, {Component} from 'react';
import './App.css';
import Login from './Login'
import Main from './Main';
import bgimg from './assets/imgs/bg-4.jpg';


import firebase from './firebase';

class  App extends Component  {
  constructor (props) {
    super (props);
    this.state = {
      user:{},
    }
   }
  
   componentDidMount(){
     this.authListener();
   }
    authListener() {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user) {
          this.setState({ user });
        }else {
          this.setState({ user: null });
        }
      });
    }
   
    render () {

   
  return (
    <div className="App">
  {this.state.user ? ( <Main styles={{ backgroundImage:`url(${bgimg})` }}/>) : (<Login />) }
  </div>
  );
}
}

export default App;
