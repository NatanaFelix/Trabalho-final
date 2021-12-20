import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        {/* <img alt="" src="" width="30" height="30" className="logo d-inline-block align-top" />{' '} */}
                        Top Musicas 
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="me-auto">
                            <Link className="link nav-link" to="/Musicas">Musicas</Link>
                            <Link className="link nav-link" to="/Artista">Artistas</Link>
                            <Link className="link nav-link" to="/Albuns">Albuns</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
