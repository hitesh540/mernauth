import React from 'react';
import Navbar1 from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Upline_verify from './Components/Upline_verify';
// import Footer from './Components/Footer';
import Admin  from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar1/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Upline_verify} />
       <UnPrivateRoute path="/register_data" component={Register}/>
      <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
      <PrivateRoute path="/profile/:id" roles={["user","admin"]} component={Profile}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      
    </Router>
  );
}

export default App;






































// import React from 'react';
// import Navbar1 from './Components/Navbar';
// import Login from './Components/Login';
// import Home from './Components/Home';
// import Todos from './Components/Todos';
// import Register from './Components/Register';
// import Upline_verify from './Components/Upline_verify';
// import RegisterScreenTwo from './Components/RegisterScreenTwo';
// import RegisterScreenThree from './Components/RegisterScreeThree';
// import Footer from './Components/Footer';
// import Admin  from './Components/Admin';
// import PrivateRoute from './hocs/PrivateRoute';
// import UnPrivateRoute from './hocs/UnPrivateRoute';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <Navbar1/>
//       <Route exact path="/" component={Home}/>
//       <UnPrivateRoute path="/login" component={Login}/>
//       <UnPrivateRoute path="/register" component={Upline_verify} />
//        <UnPrivateRoute path="/register_data" component={Register}/>
//        <UnPrivateRoute path="/registerscreentwo" component={RegisterScreenTwo}/>
//        <UnPrivateRoute path="/registerscreenthree" component={RegisterScreenThree}/>
//       <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
//       <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
//       <Footer/>
//     </Router>
//   );
// }

// export default App;
