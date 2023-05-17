import { Button } from 'react-bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={'100%'} height={600}
          className="d-block w-100"
          src="./img/kubez1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Узнать больше</h3>
          <p>Для получения подробной информации заполните форму обратной связи</p>
          <Link exact to={'/form'}>
            <Button variant="primary">Обратная связь</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={'100%'} height={600}
          className="d-block w-100"
          src="./img/kubez2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Невероятная природа</h3>
          <p>Посетите самые красивые уголки планеты</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} height={600}
          className="d-block w-100"
          src="./img/kubez3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Головокружительные приключения</h3>
          <p>Групповые и индивидуальные туры</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider