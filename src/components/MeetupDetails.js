import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase';

class MeetupDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getMeetup();
  }

  getMeetup(){
    
    let meetupId = this.props.match.params.id;

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").doc(meetupId).get()
      this.setState({details: data.data()});
      console.log(this.state.details);
    }
    fetchData()
  }

  onDelete(){
    let meetupId = this.props.match.params.id;
    const db = firebase.firestore()
    db.collection('userList').doc(meetupId).delete()
    this.props.history.push('/');
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>{this.state.details.name}</h1>
       <ul className="collection">
        <li className="collection-item">Name: {this.state.details.name}</li>
        <li className="collection-item">Email: {this.state.details.email}</li>
        </ul>
        <Link className="btn" to={`/meetups/edit/${this.props.match.params.id}`}> Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;