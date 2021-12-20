import React, { useEffect, useState } from 'react'
import '../css/DetalheArtista.css'
import { Col, Image, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DetalheArtista = (props) => {

    const [artista, setArtista] = useState({})
    const [rank, setRank] = useState({})
    const [topletras, setTopletras] = useState([])
    const [topalbuns, setTopalbuns] = useState([])

    useEffect(() => {
        const art = props.match.params.art.toLowerCase();

        fetch(`https://www.vagalume.com.br/${art.toLowerCase()}/index.js`)
            .then((resposta) => resposta.json())
            .then((json) => setArtista(json.artist))

        fetch(`https://www.vagalume.com.br/${art.toLowerCase()}/index.js`)
            .then((resposta) => resposta.json())
            .then((json) => setRank(json.artist.rank))

        fetch(`https://www.vagalume.com.br/${art.toLowerCase()}/index.js`)
            .then((resposta) => resposta.json())
            .then((json) => setTopletras(json.artist.toplyrics.item))

        fetch(`https://www.vagalume.com.br/${art.toLowerCase()}/index.js`)
            .then((resposta) => resposta.json())
            .then((json) => setTopalbuns(json.artist.albums.item))

        console.log(art)
    }, [props])

    console.log(artista)
    console.log(rank)
    console.log(topletras)
    console.log(topalbuns)

    return (
        <>
            <div className="info">
            <Link to="/Artista" className=" btn">Voltar</Link>
                <ListGroup className="info sm">
                    <ListGroupItem className="listaInfo">
                        <Row>
                            <Col md={2}>
                                <Image className="detalheInfo" src={"https://s2.vagalume.com/" + `${artista.pic_small}`} thumbnail />
                            </Col>
                            <Col>
                                <h2>{artista.desc}</h2>

                            </Col>
                            <Col>
                                <p> <label>Posição </label> {rank.pos}º</p>
                                <p> <label>Rank </label> {rank.views}</p>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
                <Row className="tops">
                    <Col md={4}>
                        <h4>Top Letras</h4>
                        {topletras.map(letra => (
                            <ListGroup className="topLetras">
                                <ListGroupItem className="itemLetra" key={letra.id}>
                                    <p>{letra.desc}</p>
                                </ListGroupItem>
                            </ListGroup>
                        ))}
                    </Col>
                    <Col md={8}>
                        <h4>Top Albuns</h4>
                        {topalbuns.map(album => (
                            <ListGroup className="topAlbuns">
                                <ListGroupItem className="itemAlbum" key={album.id}>
                                    <Row>
                                        <Col md={7}>
                                            <p>{album.desc}</p>
                                        </Col>
                                        <Col>
                                            <p> <label>Ano </label> {album.year}</p>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        ))}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DetalheArtista
