import React, { useEffect, useState } from 'react'
import { Card, Row, Carousel, CarouselItem } from 'react-bootstrap'
import api from '../services/api'
import '../css/Home.css'

const Home = () => {

    const [hotspots, setHotspots] = useState([])

    useEffect(() => {
        api.get(`hotspots.php?apikey=51e6c3fedd78bab7deb2db15e3bfc0b0`).then(resultado => {
            setHotspots(resultado.data.hotspots)
        })
    }, [])

    return (
        <>
            <h1>HotSpot</h1>
            <Row><Carousel>
                {hotspots.map(hotspot => (
                    <CarouselItem key={hotspot.id}>
                        <Card style={{ width: '18rem', aligncontent: 'center' }} className="card text-center d-block w-100" >
                            <Card.Img variant="top" src={hotspot.pic_src} />
                            <Card.Body>
                                <Carousel.Caption>
                                    <a className="link" href={`${hotspot.link}`}>
                                        <Card.Title><strong>{hotspot.title}</strong></Card.Title>
                                        {hotspot.descr}
                                    </a>
                                </Carousel.Caption>
                            </Card.Body>
                        </Card>
                    </CarouselItem>
                ))}</Carousel>
            </Row>
        </>
    )
}

export default Home
