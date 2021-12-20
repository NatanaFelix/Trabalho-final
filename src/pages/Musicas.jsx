import React, { useEffect, useState } from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../services/api'
import '../css/Musica.css'

const Musicas = (props) => {

    const [musicas, setMusicas] = useState([])

    useEffect(() => {

        api.get(`rank.php?apikey=51e6c3fedd78bab7deb2db15e3bfc0b0&type=mus&period=week&scope=all&limit=10`).then(resultado => {
            setMusicas(resultado.data.mus.week.all)
        })

    }, [props])

    return (
        <>
            <h2>Top da 10 Musicas da Semana</h2>
            {musicas.map(musica => (
                <div key={musica.id} className="tabelaMusica" >
                    < ListGroup className="lista sm" >
                        <Link to={`/Letra/${musica.art.name}/${musica.name}`} style={{ textDecoration: 'none' }}  >
                            <ListGroup.Item className="listaItem ">
                                <Row>
                                    <Col className="d-flex justify-content-between align-items-start">
                                        <Image className="fotoPerfil" src={"https://s2.vagalume.com/" + musica.art.name.replace(/\s+/g, '-').replace('ç', 'c').replace('ã', 'a') + "/images/" + "profile.jpg"} thumbnail />
                                        <div className="ms-3 me-auto ">
                                            <p className="fw-bold"> {musica.name} </p>
                                            <p>{musica.art.name}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ms-9 me-auto">
                                            <p><strong>Views {musica.views}</strong></p>
                                            <p>Rank {musica.rank}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Link>
                    </ListGroup>
                </div>
            ))}
        </>
    )
}

export default Musicas

