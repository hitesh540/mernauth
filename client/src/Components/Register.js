import React, { useState, useRef, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';
import {Link} from 'react-router-dom';
import banner from '../assets/Crypto.jpeg';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { useMediaQuery } from 'react-responsive';
import { useParams } from "react-router";


const Register = props => {
  
    const [user,setUser] = useState({parent_username: props.match.params.id, username: "", password : "", role : "", email: "", phone: ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({ ...user, [e.target.name]: e.target.value });
         
    }


    const resetForm = ()=>{
        setUser({parent_username: props.match.params.id, username: "", password : "", role : "", email: "", phone: ""});
    }


    const onSubmit = e =>{
        e.preventDefault();
        if (user.password !== user.role) {
            alert('Password and confirm password are not match');
          }
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/');
                },2000)
            }
        });
    }

    
     const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 }
  )
  const {pUser} = useParams();
    return (
        <>
            
            {isDesktopOrLaptop ?
            
                <ReactBootstrap.Row style={{ backgroundImage: `url(${require("../assets/123.jpeg")})`, height: "700%" }}>
                    <ReactBootstrap.Col sm={6} className="middle">
                    
                        <ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Register Here</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Form onSubmit={onSubmit}>

                                    <ReactBootstrap.Form.Group controlId="formBasicEmail">
                                        <ReactBootstrap.Form.Label>User Name</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="text"
                                            name="username"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Username" />
                                        <ReactBootstrap.Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
    </ReactBootstrap.Form.Text>
                                    </ReactBootstrap.Form.Group>

                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="password"
                                            name="password"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Password"
                                            
                                             />
                                    </ReactBootstrap.Form.Group>


                                     <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Confirm Password</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Confirm Your Password"
                      
                        />
                                    </ReactBootstrap.Form.Group>


                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="email"
                                            name="email"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                            />
                                    </ReactBootstrap.Form.Group>


                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Phone Number</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="phone"
                                            name="phone"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Your Number"
                                         />
                                    </ReactBootstrap.Form.Group>


                                    <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
                                        <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                        Register
  </ReactBootstrap.Button>
                                </ReactBootstrap.Form>
                                {message ? <Message message={message} /> : null}
                            </ReactBootstrap.Card.Body>
                
                        </ReactBootstrap.Card>
                    </ReactBootstrap.Col >
                    <ReactBootstrap.Col sm={6} >
                        <ReactBootstrap.ResponsiveEmbed a16by9>
                            <embed type="image/svg+xml" src={banner} />
                        </ReactBootstrap.ResponsiveEmbed>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>



                :   <div className="middle"><ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Register Here</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Form onSubmit={onSubmit}>

                               
                                   <ReactBootstrap.Form.Group controlId="formBasicEmail">
                                        <ReactBootstrap.Form.Label>User Name</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="text"
                                            name="username"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Username" 
                                            />
                                        <ReactBootstrap.Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
    </ReactBootstrap.Form.Text>
                                    </ReactBootstrap.Form.Group>

                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="password"
                                            name="password"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Password" />
                            </ReactBootstrap.Form.Group>
                             <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Confirm Password</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Confirm Your Password"/>
                                    </ReactBootstrap.Form.Group>



                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="email"
                                            name="email"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                            />
                                    </ReactBootstrap.Form.Group>


                                    <ReactBootstrap.Form.Group controlId="formBasicPassword">
                                        <ReactBootstrap.Form.Label>Phone Number</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="phone"
                                            name="phone"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Your Number"
                                         />
                                    </ReactBootstrap.Form.Group>


                                    <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
                                        <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                Register
  </ReactBootstrap.Button>
                             <Link to="/">
                        <li className="nav-item nav-link">
                            Have an account? Login
                        </li>
                    </Link>

                                </ReactBootstrap.Form>
                                {message ? <Message message={message} /> : null}
                            </ReactBootstrap.Card.Body>
                
                </ReactBootstrap.Card>
                
                </div>
                            
           }

            </>          
  
    )
   
}

export default Register;