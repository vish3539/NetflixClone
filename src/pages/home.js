import React from 'react';
import JumbotronContainer from '../container/jumbotron';
import { FooterContainer } from '../container/footer';
import FaqsContainer from '../container/faq';
import HeaderContainer from '../container/header';
import { OptForm, Feature } from '../components';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
