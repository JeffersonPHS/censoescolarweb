import Carousel from 'react-bootstrap/Carousel';
import { Container, Image } from 'react-bootstrap';
import './Carrossel.css';

function Carrossel() {
return (
   <Container>
    
    
    
     <Carousel data-bs-theme="dark">
      <Carousel.Item className='carousel-img'>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/250px-A_small_cup_of_coffee.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='carousel-img'>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/250px-A_small_cup_of_coffee.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-img'>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/250px-A_small_cup_of_coffee.JPG"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
    </Carousel> 
    
    
     </Container>
    
  );

};

export default Carrossel;


