import React, {Component} from 'react';
import firebase from './firebase';



class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }

    }

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
         <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
               <div className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside " style={{ backgroundImage : 'url("https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&w=1000&q=80")'}} >
                  <div className="kt-grid__item">
                     <a  className="kt-login__logo">
                     <img src={require('./assets/imgs/logo-4.png')} />
                     </a>
                  </div>
                  <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                     <div className="kt-grid__item kt-grid__item--middle">
                        <h3 className="kt-login__title">Welcome to Dashbord!</h3>
                     </div>
                  </div>
               </div>
               <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                  <div className="kt-login__body">
                     <div className="kt-login__form">
                        <div className="kt-login__title">
                           <h3>Sign In</h3>
                        </div>
                        <form className="kt-form" onSubmit={this.login} id="kt_login_form">
                           <div className="form-group">
                              <input className="form-control" value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email"  />
                           </div>
                           <div className="form-group">
                              <input className="form-control" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password"   />
                           </div>
                           <div className="kt-login__actions">
                              <a href="#" className="kt-link kt-login__link-forgot">
                              Forgot Password ?
                              </a>
                              <button type="submit" id="kt_login_signin_submit" className="btn btn-primary btn-elevate kt-login__btn-primary" >Sign In</button>
                           </div>
                        </form>
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

export default Login;
