import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../services/api'
import '../css/Artista.css';

const Artista = () => {

    const [artistas, setArtistas] = useState([])

    useEffect(() => {
        api.get(`rank.php?apikey=51e6c3fedd78bab7deb2db15e3bfc0b0&type=art&period=week&scope=all&limit=10`).then(resultado => {
            setArtistas(resultado.data.art.week.all)
        })

    }, [])

    return (
        <>
            <h2>Top 10 Artistas da Semana</h2>
            {artistas.map(artista => (
                <div key={artista.id}>
                    < ListGroup className="tabelaArtista sm" >
                        <Link to={`/DetalheArtista/${artista.name.replace(/\s+/g, '-').replace('é', 'e').replace('ã', 'a').replace('í', 'i').replace('ç', 'c')}`} style={{ textDecoration: 'none' }} >
                            <ListGroupItem className="listaItem" >
                                <Row>
                                    <Col className="d-flex justify-content-between align-items-start">
                                        <Image className="fotoDisco" src={artista.pic_small} thumbnail />
                                        <div className="ms-3 me-auto fw-bold">
                                            {artista.name}
                                        </div>
                                    </Col>
                                    <Col>
                                        <p>Viwes {artista.views}</p>
                                        <p>Rank {artista.rank}</p>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </Link>
                    </ListGroup>
                </div>
            ))}
        </>
    )
}

export default Artista
