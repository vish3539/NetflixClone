import React, { useState, useContext } from 'react';
import HeaderContainer from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/route';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';

function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //check form input elements are valid emails
  // email and password..
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = event => {
    event.preventDefault();
    // firebase does its work here
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer signinTru>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix ?  
            <Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
