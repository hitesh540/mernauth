import React,{useState,useContext} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';
import {Link} from 'react-router-dom';
import banner from '../assets/Crypto.jpeg';
import { useMediaQuery } from 'react-responsive'
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import {AuthContext} from '../Context/AuthContext';



const Home = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/profile/'+user.username);
            }
            else
                setMessage(message);
        });
    }
    const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 }
  )
    return (
        <>
            {isDesktopOrLaptop ?
                <ReactBootstrap.Row style={{ backgroundImage: `url(${require("../assets/123.jpeg")})`, height: "700%"   }}>
                    <ReactBootstrap.Col sm={6} className="middle">
                    
                        <ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Login Here</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body >
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
                                            placeholder="Enter Password" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
                                        <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                        Login
  </ReactBootstrap.Button>
                                </ReactBootstrap.Form>
                                {message ? <Message message={message} /> : null}
                            </ReactBootstrap.Card.Body>
                
                        </ReactBootstrap.Card>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col sm={6} >
                        <ReactBootstrap.ResponsiveEmbed a16by9>
                            <embed type="image/svg+xml" src={banner} />
                        </ReactBootstrap.ResponsiveEmbed>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                :   <div className="middle"><ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Login Here</ReactBootstrap.Card.Header>
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
                                            placeholder="Enter Password" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
                                        <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                Login
  </ReactBootstrap.Button>
                             <Link to="/Register">
                        <li className="nav-item nav-link">
                            Do not have an account? Register
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

export default Home;