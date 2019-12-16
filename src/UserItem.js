import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from './firebase';

class UserItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }


  render(){
    return ( 
      <tr data-row="0" className="kt-datatable__row leftopx" >
      <td data-field="AgentName" className="kt-datatable__cell">
         <span className="width">
            <div className="kt-user-card-v2">
               <div className="kt-user-card-v2__pic">
                  <div className="kt-badge kt-badge--xl kt-badge--primary">{this.state.item.name.split('')[0].toUpperCase()}</div>
               </div>
               <div className="kt-user-card-v2__details">
                  <a className="kt-user-card-v2__name" href="#">{this.state.item.name}</a>
               </div>
            </div>
         </span>
      </td>
      <td data-field="Country" className="kt-datatable__cell "><span className="width_">{this.state.item.email}</span></td>
      <td data-field="Actions" data-autohide-disabled="false" className="kt-datatable__cell">
         <span className="over">
            <div className="dropdown">
            <Link className="btn" to={`/users/${this.state.item.id}`}>
                  <a  className="btn">View</a>
            </Link>
                 
            </div>
         </span>
      </td>
   </tr>

    )
  }
}

export default UserItem;