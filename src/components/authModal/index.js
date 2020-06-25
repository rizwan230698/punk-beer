import React, { useContext } from 'react';
import { Modal } from 'antd';

import logo from '../../asests/logo.jpg';
import { signInWithGoogle } from '../../firebase';
import { AuthContext } from '../../context/authProvider';
import { Container, InnerContainer, Title, Logo, GoogleButton } from './style';

const AuthModal = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Modal visible={!currentUser} closable={false} footer={null}>
      <Container>
        <InnerContainer>
          <Logo src={logo} />
          <Title>Punk Beer</Title>
        </InnerContainer>
        <GoogleButton onClick={signInWithGoogle}>
          Sign in with Google
        </GoogleButton>
      </Container>
    </Modal>
  );
};

export default AuthModal;
