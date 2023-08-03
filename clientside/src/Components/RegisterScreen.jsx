import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import FormContainer from '../FormContainer';
import Header from './Header';
import { useRegisterUserMutation } from '../Redux/ApiSlice/registerUser';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, userState } from '../Redux/ApiSlice/createSlice';




const RegisterScreen = () => {

const[name, setName] = useState()
const[email, setEmail] = useState()
const[password, setPassword] = useState()
const[confirmPassword, setConfirmPassword] = useState()
const[registerUser, {isLoading}] = useRegisterUserMutation()

const userInfo = useSelector(userState);

const dispatch = useDispatch();

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const { search } = useLocation();
const sp = new URLSearchParams(search);
const redirect = sp.get('redirect') || '/';

const navigate = useNavigate()


useEffect(() => {
  if (userInfo) {
    navigate(redirect);
  }
}, [navigate, redirect, userInfo]);


const submitHandler = async(e) => {
  e.preventDefault()

  


  if(password !== confirmPassword){
    toast.error('Passwords do not match')
  }
  if(!email){
    toast.error('email field is blank')
  }
  if(!isValidEmail(email)){
    toast.error('Please enter a valid email address')
  }else{
    try{
      const res = await registerUser({name, email, password}).unwrap()

      console.log(res)

      dispatch(setCredentials({res}));

    

      navigate(redirect)

    }catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }


  
}

  return (
    <div>
    <ToastContainer />
    <Header />
    <FormContainer>
      <h1><strong>Welcome, enter your info to signup</strong></h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type='submit' variant='primary'>
          Register
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link to='/user'>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default RegisterScreen