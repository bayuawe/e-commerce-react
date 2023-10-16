import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Header.css'; // Mengimpor file CSS

function Header() {
  return (
    <Navbar className="header" bg="light" expand="lg">
      <Navbar.Brand href="#">Toko Roti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Beranda</Nav.Link>
          <Nav.Link href="#">Produk</Nav.Link>
          <Nav.Link href="#">Tentang Kami</Nav.Link>
          {/* Tambahkan menu lain jika diperlukan */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cari produk..." className="mr-sm-2" />
          <Button variant="outline-success">Cari</Button>
        </Form>
        <Nav className="ml-2">
          <Nav.Item>
            <Nav.Link href="#">Keranjang Belanja</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
