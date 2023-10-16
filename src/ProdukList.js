import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProdukList.css';

function ExampleCard() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <Card className="h-100">
          <Card.Img variant="top" src="/images/kuebalokori.JPG" alt="Gambar Produk" className="card-img-top" />
          <Card.Body>
            <Card.Title className="card-title">Card title</Card.Title>
            <Card.Text className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
      {/* Tambahkan lebih banyak kolom dengan komponen Card yang sama di sini */}
    </div>
  );
}

export default ExampleCard;
