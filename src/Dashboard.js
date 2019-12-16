import React, {Component} from 'react';
import './App.css';
// import './plugins.bundle.css';
import {Link} from 'react-router-dom';
import './style.bundle.css';

import firebase from './firebase';
import UserItem from './UserItem';



class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.onCreate = this.onCreate.bind(this);
    this.logout = this.logout.bind(this);
    this.adduser = this.adduser.bind(this);
    this.state = {
      users: [],
      newUserName: []
    }
   }
  componentDidMount() {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").get()
      this.setState({
        users: data.docs.map(doc => ({... doc.data(), id: doc.id}))
      })
    }
    fetchData()
  }

  


  onCreate() {
    const db = firebase.firestore()
    db.collection('userList').add({name: this.state.newUserName});
  }

 logout() {
    firebase.auth().signOut();
  }


  adduser(e){
   const db = firebase.firestore()
   db.collection('userList').add({name: this.refs.name.value, email: this.refs.email.value });
   this.props.history.push('/');
   // window.location.reload();
   e.preventDefault();
 }
  
render () {

  const userItems = this.state.users.map((user, i) => {
    console.log(user);
    return(
      <UserItem key={user.id} item={user} />
    )
  })
  return (
    <div>
      <div className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
         <div className="kt-content kt-content--fit-top  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
            <div className="kt-subheader   kt-grid__item" id="kt_subheader">
               <div className="kt-container ">
                  <div className="kt-subheader__main">
                     <h3 className="kt-subheader__title">
                        User List         
                     </h3>
                  </div>
                  <div className="kt-subheader__toolbar">
                     <div className="kt-subheader__wrapper">
                     <Link to="/users/add">
                     <a  className="btn btn-danger kt-subheader__btn-options" >
                        + Add User
                        </a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

           <Modal />

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
                             {userItems}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>  
            </div>
         </div>
      </div>
     </div>
  );
    }
}



class Modal extends React.Component {
   constructor(props) {
       super(props);
   }
   render() {
       return (
           <div>
              <div className="modal fade none" id="kt_modal_1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
               <div className="modal-dialog" role="document">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <i className="fa fa-times"></i>
                         </button>
                     </div>
                     <form onSubmit={this.adduser}>
                        <div className="modal-body">
                           <div className="col-md-12">
                              <div className="form-group row">
                                 <label>Name</label>
                                 <input className="form-control" type="text" name="name" ref="name" />
                              </div>
                              <div className="form-group row">
                                 <label>Email</label>
                                 <input className="form-control" type="email" name="email" ref="email"/>
                              </div>
                           </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-danger">Add</button>
                        </div>
                     </form>
                 </div>
               </div>
               </div>
            
           </div>
       );
   }
}


export default Dashboard;


