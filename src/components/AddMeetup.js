import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase';

class AddMeetup extends Component{
  addMeetup(){
      this.props.history.push('/');
  }

  onSubmit(e){
    const db = firebase.firestore()
    db.collection('userList').add({name: this.refs.name.value, email:  this.refs.email.value });
    this.addMeetup();
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add User</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" ref="email" />
            <label htmlFor="city">Email</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddMeetup;