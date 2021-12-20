import React, { useEffect, useState } from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../services/api'

const Albuns = () => {

    const [albuns, setAlbuns] = useState([])

    useEffect(() => {
        api.get(`rank.php?apikey=51e6c3fedd78bab7deb2db15e3bfc0b0&type=alb&period=week&scope=all&limit=10`).then(resultado => {
            setAlbuns(resultado.data.alb.week.all);
        })
    }, [])

    return (
        <>
            <h2>Top da 10 Albuns da Semana</h2>
            {albuns.map(album => (
                <div key={album.id} className="tabelaMusica" >
                    < ListGroup className="lista sm">
                        <Link to={`/DetalheAlbum/${album.art.name}/discografia/`} style={{textDecoration: 'none'}} >
                            <ListGroup.Item className="listaItem ">
                                <Row>
                                    <Col className="d-flex justify-content-between align-items-start">
                                        <Image className="fotoDisco" src={album.art.pic_small} thumbnail />
                                        <div className="ms-3 me-auto ">
                                            <p className="fw-bold"> {album.name} </p>
                                            <p>{album.art.name}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ms-9 me-auto">
                                            <p><strong>Views {album.views}</strong></p>
                                            <p>Publicação {album.published}</p>
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

export default Albuns
