import React, { Component } from 'react';
import firebase from './firebase';

class EditUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getUserDetails();
  }

  getUserDetails(){
    let userId = this.props.match.params.id;

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userList").doc(userId).get()
      console.log(data.data())
      this.setState({name: data.data().name, email: data.data().email});
    }
    fetchData()
   
    }

  editMeetup(newUser){
    const db = firebase.firestore()
    db.collection('userList').doc(this.props.match.params.id).set({... newUser})
    this.props.history.push('/');
  }

  onSubmit(e){
    const newUser = {
      name: this.refs.name.value,
      email: this.refs.email.value,
    }
    this.editMeetup(newUser);
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
              <div class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
                 <div class="kt-content kt-content--fit-top  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
         
                    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
                       <div class="kt-container ">
                          <div class="kt-subheader__main">
                             <h3 class="kt-subheader__title">
                                Edit User Info
                             </h3>
                          </div>
                       </div>
                    </div>
                    <div class="kt-container  kt-grid__item kt-grid__item--fluid">
                       <div class="kt-portlet kt-portlet--mobile edit_div">
                          <div class="kt-portlet__body kt-portlet__body--fit">
                             <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded" id="kt_apps_user_list_datatable">
                                <div class="col-md-12">
                                   <form onSubmit={this.onSubmit.bind(this)}>                                       
                                      <div class="col-md-12">
                                         <div class="col-md-6 fleft">
                                            <div class="form-group">
                                               <label>Name</label>
                                               <input class="form-control" type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} required/>
                                            </div>
                                         </div>
                                         <div class="col-md-6 fleft">
                                            <div class="form-group">
                                               <label>Email</label>
                                               <input class="form-control" type="text" name="email" ref="email" value={this.state.email} onChange={this.handleInputChange} required/>
                                            </div>
                                         </div>
                                         <div className="clearfix"></div>
                                         <div class="col-md-12">
                                            <button type="submit" class="btn btn-danger">Save Changes</button>
                                         </div>
                                      </div>
                                   </form>
                                </div>
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

export default EditUser;