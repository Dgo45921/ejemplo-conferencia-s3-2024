import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function GridPictureViewer() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/get-pictures')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            });
    }, []);


  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {images.map((image, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={image.Url} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{image.Key}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
