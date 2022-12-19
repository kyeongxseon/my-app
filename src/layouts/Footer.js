import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container>
            <div>
                <p>
                    <a>개인정보 처리방침</a>
                    <a>이용약관</a>
                </p>
                <p class="copyright">© 2022 KT Corp. All rights reserved.</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer