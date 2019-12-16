import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MeetupItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <div>
      <Link to={`/meetups/${this.state.item.id}`}>
    <tr>
      <td>{this.state.item.name}</td>
      <td>{this.state.item.email}</td>
    </tr>
    </Link>
</div>
    )
  }
}

export default MeetupItem;