import React, {useState} from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import SignInModal from '../modals/SignInModal';
import './Header.css'

const Header = () => {
    const [SignInModalOn, SetSignInModalOn] = useState(false);
    return (
        <>
            <SignInModal 
                show={SignInModalOn} 
                onHide={()=>SetSignInModalOn(false)} 
            />

            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className='title_style'>FitPlace</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Search</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">FAQ</a>
                                </li>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link>
                                    <Button 
                                        variant='primary'
                                        onClick={()=>SetSignInModalOn(true)}
                                    >
                                        로그인
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
  );
};

export default Header;