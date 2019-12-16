import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase'

class EditMeetup extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getMeetupDetails();
  }

  getMeetupDetails(){
    let meetupId = this.props.match.params.id;

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").doc(meetupId).get()
      this.setState({name: data.data().name,email: data.data().email });
    }
    fetchData()
   
    }

  editMeetup(newMeetup){

    const db = firebase.firestore()
    db.collection('userList').doc(this.props.match.params.id).set({... newMeetup})
    this.props.history.push('/');
  }

  onSubmit(e){
    const newMeetup = {
      name: this.refs.name.value,
      email: this.refs.email.value,
    }
    this.editMeetup(newMeetup);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Edit User</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" ref="email" value={this.state.email} onChange={this.handleInputChange} />
            <label htmlFor="city">City</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditMeetup;