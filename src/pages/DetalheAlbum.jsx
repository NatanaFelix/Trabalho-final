import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DetalheAlbum = (props) => {

    const [album, setAlbum] = useState([])
    const [artista, setArtista] = useState([])

    useEffect(() => {
        const art = props.match.params.art.toLowerCase();

        fetch(`https://www.vagalume.com.br/${art}/discografia`)
        .then((resposta) => resposta.text())
        .then((text) => setArtista(text))

        
        
        fetch(`https://www.vagalume.com.br/${art}/discografia`)
        .then((resposta) => resposta.text())
        .then((text) => setAlbum(text))
   
    }, [props])

    console.log(artista)
    console.log(album)

    return (
        <div style={{paddingTop: '20px'}}>
            <Link to="/Albuns" className=" btn" >Voltar</Link>
        </div>
    )
}

export default DetalheAlbum
