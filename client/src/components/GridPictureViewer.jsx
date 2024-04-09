import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mockImages = [
  {
    src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    title: 'Image 1',
    description: 'This is the description for Image 1'
  },
  {
    src: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg',
    title: 'Image 2',
    description: 'This is the description for Image 2'
  },
  {
    src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
    title: 'Image 3',
    description: 'This is the description for Image 3'
  },
  {
    src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
    title: 'Image 3',
    description: 'This is the description for Image 3'
  }
];

export function GridPictureViewer() {

    useEffect(() => {
        console.log("hey")
    }, []);


  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {mockImages.map((image, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={image.src} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
