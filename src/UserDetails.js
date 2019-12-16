import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from './firebase';

class UserDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getUser();
  }
 

  getUser(){
    
    let userId = this.props.match.params.id;

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").doc(userId).get()
      this.setState({details: data.data()});
      console.log(this.state.details);
    }
    fetchData()
  }

  onDelete(){
    let userId = this.props.match.params.id;
    const db = firebase.firestore()
    db.collection('userList').doc(userId).delete()
    this.props.history.push('/');
  }

  render(){
    return (  <div>
        <div className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
           <div className="kt-content kt-content--fit-top  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
              <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                 <div className="kt-container ">
                    <div className="kt-subheader__main">
                       <h3 className="kt-subheader__title">
                         User Details Page     
                       </h3>
                    </div>
                   
                 </div>
              </div>
             
              <div className="kt-container  kt-grid__item kt-grid__item--fluid">
                 <div className="kt-portlet kt-portlet--mobile">
                    <div className="kt-portlet__body kt-portlet__body--fit">
                       <div className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded" id="kt_apps_user_list_datatable" >
                          <table className="kt-datatable__table none" >
                             <thead className="kt-datatable__head">
                                <tr className="kt-datatable__row leftopx" >
                                   <th data-field="AgentName" className="kt-datatable__cell kt-datatable__cell--sort width200"><span>Name</span></th>
                                   <th data-field="Country" className="kt-datatable__cell kt-datatable__cell--sort width_"><span >Email</span></th>
                                   <th data-field="Actions" data-autohide-disabled="false" className="kt-datatable__cell kt-datatable__cell--sort widtheighty"><span>Actions</span></th>
                                </tr>
                             </thead>
                             <tbody className="kt-datatable__body" >
                             <tr data-row="0" className="kt-datatable__row leftopx" >
      <td data-field="AgentName" className="kt-datatable__cell">
         <span className="width">
            <div className="kt-user-card-v2">
               <div className="kt-user-card-v2__pic">
                  <div className="kt-badge kt-badge--xl kt-badge--primary">N</div>
               </div>
               <div className="kt-user-card-v2__details">
                  <a className="kt-user-card-v2__name" href="#">{this.state.details.name}</a>
               </div>
            </div>
         </span>
      </td>
      <td data-field="Country" className="kt-datatable__cell "><span className="width_">{this.state.details.email}</span></td>
      <td data-field="Actions" data-autohide-disabled="false" className="kt-datatable__cell">
         <span className="over">
            <div className="dropdown">
            <Link className="btn" to={`/users/edit/${this.props.match.params.id}`}>
               <a title="Edit" className="btn btn-sm btn-clean btn-icon btn-icon-md">
                  <i className="fa fa-edit green" ></i>
               </a>
            </Link>
            <button onClick={this.onDelete.bind(this)} className="btn red right">
               <a  title="Delete" className="btn btn-sm btn-clean btn-icon btn-icon-md">
                  <i className="fa fa-trash tra" ></i>
               </a> 
            </button>
            </div>
         </span>
      </td>
   </tr>
                             </tbody>
                          </table>
                       </div>
                    </div>
                 </div>  
              </div>
           </div>
        </div>
       </div>
    
     
    )
  }
}

export default UserDetails;