import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';


class Navbar extends Component{

  logout() {
    firebase.auth().signOut();
  }


  render(){

    
    return (
      <div>
        <nav className="blue darken-3">
          <div>
            <a  className="brand-logo center">Admin Panel</a>
            <ul className="right hide-on-small-only">
              <li>
                 <button onClick={this.logout}>
                   <i className="fa fa-users"></i> LogOut
                   </button>        
                   </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;