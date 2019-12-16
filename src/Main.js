import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import EditUser from './EditUser';
import UserDetails from './UserDetails';
import firebase from './firebase';

class Main extends Component {


  constructor (props) {
    super (props);
    this.logout = this.logout.bind(this);
   }

  logout() {
    firebase.auth().signOut();
  }
render() {
 return (


  <div>
  <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed " >
         <div className="kt-header-mobile__logo">
            <img alt="Logo" src={require('./assets/imgs/logo-4.png')}/>
         </div>
         <div className="kt-header-mobile__toolbar">
            <button className="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span></span></button>
            <button className="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more-1"></i></button>
         </div>
      </div>

      <div style={{backgroundImage: 'url("http://www.wemakenice.org/media/GreenGradient.jpg")'}}>
<div className="kt-grid kt-grid--hor kt-grid--root">
<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
   <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
      <div id="kt_header" className="kt-header  kt-header--fixed "  data-ktheader-minimize="on" >
         <div className="kt-container ">
            <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
               <a className="kt-header__brand-logo" href="/metronic/preview/demo4/index.html">
               <img alt="Logo" src={require('./assets/imgs/logo-4.png')} className="kt-header__brand-logo-default"/>
               <img alt="Logo" src={require('./assets/imgs/logo-4.png')} className="kt-header__brand-logo-sticky"/>
               </a>        
            </div>
            <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
            <div className="kt-grid__item kt-grid__item--fluid" id="kt_header_menu_wrapper">
               <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile "  >
                  <ul className="kt-menu__nav ">
                     
                     <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"  data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                        <button onClick={this.logout}>
                        <a  className="kt-menu__link"><span className="kt-menu__link-text">Logout</span><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      
  <BrowserRouter>
   <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/users/add' component={AddUser} />
      <Route exact path='/users/edit/:id' component={EditUser} />
      <Route exact path='/users/:id' component={UserDetails} />
    </Switch>
  </BrowserRouter>
  <div className="kt-footer  kt-footer--extended  kt-grid__item" id="kt_footer">
         <div className="kt-footer__bottom">
            <div className="kt-container ">
               <div className="kt-footer__wrapper">
                  <div className="kt-footer__logo">
                     <a className="kt-header__brand-logo" href="?page=index&amp;demo=demo2">
                     <img alt="Logo" src={require('./assets/imgs/logo-4.png')} className="kt-header__brand-logo-sticky" />
                     </a>                   
                     <div className="kt-footer__copyright">
                        2019&nbsp;&copy;&nbsp;  
                        <a href="#">Prafful Indirala</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="kt_scrolltop" className="kt-scrolltop">
         <i class="fa fa-arrow-up"></i>
      </div>
</div>
  </div>
  </div>
)
 }
}


export default Main;