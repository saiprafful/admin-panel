import React, { Component } from 'react';
import MeetupItem from './MeetupItem';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class Meetups extends Component{
  constructor(){
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount(){
    this.getMeetups();
  }

  getMeetups(){
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").get()
      this.setState({meetups: data.docs.map(doc => ({... doc.data(), id: doc.id}))}, () => {
        //console.log(this.state);
      })
    }
    fetchData()
  }

  render(){
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return(
        <MeetupItem key={meetup.id} item={meetup} />
      )
    })
    return (
      <div>
      <div>
        <h1>User List</h1>
        {/* <ul className="collection">
          {meetupItems}
        </ul> */}
        <table class="table">
  
  <tbody>
        <thead class="thead-inverse">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th></th>
    </tr>
    {meetupItems}
  </thead>
  
  </tbody>
</table>
      </div>
       <div className="fixed-action-btn">
       <Link to="/meetups/add" className="btn-floating btn-large red">
         <i className="fa fa-plus"></i>
       </Link>
     </div>
     </div>
    )
  }
}

export default Meetups;