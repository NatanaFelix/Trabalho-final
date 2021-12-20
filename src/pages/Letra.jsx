import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import api from '../services/api'
import '../css/Letra.css'
import { Link } from 'react-router-dom'

const Letra = (props) => {

    const [letras, setLetras] = useState([])

    useEffect(() => {
        const art = props.match.params.art
        const song = props.match.params.song.toLowerCase()
        
        api.get(`search.php?art=${art}&mus=${song}&apikey=51e6c3fedd78bab7deb2db15e3bfc0b0`).then(resultado => {
            setLetras(resultado.data.mus[0].text)
            console.log(resultado.data.mus[0].text)
        })

    }, [props]);

    return (
        <>
            <Row>
                <Col md={5}>
                    <div className="voltar">
                        <Link to="/Musicas" className=" btn">Voltar</Link>
                    </div>
                    <div className="Letra">
                        {letras}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Letra
