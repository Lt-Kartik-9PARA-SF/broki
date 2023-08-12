import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err,setErr] = useState(false);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if(email === 'agam@broki.in' && password === 'Broki@123456'){
      onLogin(true);
      //alert('login successful')
    }else{
      setErr(true);
      setEmail('');
      setPassword('');
    }
    
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '300px' ,height: '400px' }}>
        <Card.Body>
          <div className="text-center">
          </div>
          <Card.Title className="text-center">Get Started</Card.Title>
          <p>Fill the form and login</p>
          <Form onSubmit={handleLoginFormSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {setEmail(e.target.value);setErr(false)}}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href='/' className='register'> Register Now</a>
              <a href='/' className='forgot'> Forgot Password</a>
            </Form.Group>
            
            <Button variant="primary" type="submit" block>
              Login
            </Button>
            {err && <p className='err'>Login Failed!! please check username and password</p>}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;