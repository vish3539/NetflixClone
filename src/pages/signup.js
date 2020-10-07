import React, { useState, useContext } from 'react';
import HeaderContainer from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/route';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '' || firstName === '';

  const handleSignUp = event => {
    event.preventDefault();
    // do firebase stuff
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          }),
      )
      .catch(error => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer signinTru>
        <Form>
          <Form.Title>Sign Up Now</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already have an account ?
            <Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
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

export default Signup;
