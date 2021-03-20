import React, { useState, useRef, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';
import {Link} from 'react-router-dom';
import banner from '../assets/Crypto.jpeg';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { useMediaQuery } from 'react-responsive';
import Register from '../Components/Register';
export const MContext = React.createContext();

const Upline_verify = props=>{
    const [user,setUser] = useState({parent_username: ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = ()=>{
        setUser({parent_username : ""});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.upline_verify(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            console.log(data);
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/register_data/'+data.message.pUser);
                },2000)
            }
        });
    }
     const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 }
  )
    return (
        <>
            {isDesktopOrLaptop ?
                <ReactBootstrap.Row style={{ backgroundImage: `url(${require("../assets/123.jpeg")})`, height: "700%" }}>
                    <ReactBootstrap.Col sm={6} className="middle">
                    
                        <ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Verify Upline</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Form onSubmit={onSubmit}>
                                    <ReactBootstrap.Form.Group controlId="formBasicEmail">
                                        <ReactBootstrap.Form.Label>Upline User Name</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type="text"
                                            name="parent_username"
                                            onChange={onChange}
                                            className="form-control"
                                            placeholder="Enter Username"
                                            />
                                        <ReactBootstrap.Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
    </ReactBootstrap.Form.Text>
                                    </ReactBootstrap.Form.Group>

                                   
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                        Verify
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
                :   <div className="middle"> <ReactBootstrap.Card style={{ background: "#343a40", color: "white" }}>
                            <ReactBootstrap.Card.Header>Verify Upline</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Form onSubmit={onSubmit}>
                                    <ReactBootstrap.Form.Group controlId="formBasicEmail">
                                        <ReactBootstrap.Form.Label>Upline User Name</ReactBootstrap.Form.Label>
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

                                   
                                    <ReactBootstrap.Button variant="primary" type="submit" variant="warning">
                                        Verify
  </ReactBootstrap.Button>
                                </ReactBootstrap.Form>
                                {message ? <Message message={message} /> : null}
                            </ReactBootstrap.Card.Body>
                
                        </ReactBootstrap.Card>
                
                </div>
            
                   
                
            }
           
            </>
            
  
    )



   
}

export default Upline_verify;