import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../FormContainer";
import { useState, useEffect } from "react";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import { useLoginUserMutation } from "../Redux/ApiSlice/loginUser";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials, userState } from "../Redux/ApiSlice/createSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const userInfo = useSelector(userState);

  const dispatch = useDispatch();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Invalid email address");
    }
    if (!email) {
      toast.error("Email field cannot be blank");
    }
    if (!password) {
      toast.error("Password field cannot be blank");
    } else {
      try {
        const res = await loginUser({ email, password }).unwrap();

        console.log(res);

        dispatch(setCredentials({ res }));

        navigate(redirect);
      } catch (err) {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <FormContainer className="mt-3">
        <h1>
          <strong>Welcome back, Sign in to your account</strong>
        </h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3" controlId="basicEmailForm">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please input your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="basicPasswordForm">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please input your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>

          {isLoading && <Loader />}
        </Form>
        <Row className="mt-3">
          <Col>
            Don't have an account? <Link to="/register">Sign up</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
