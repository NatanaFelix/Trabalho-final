import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Albuns from './pages/Albuns'
import Artista from './pages/Artista'
import DetalheArtista from './pages/DetalheArtista'
import Home from './pages/Home'
import Letra from './pages/Letra'
import Musicas from './pages/Musicas'
import DetalheAlbum from './pages/DetalheAlbum'


const Rotas = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Musicas" component={Musicas} />
                <Route exact path="/Letra/:art/:song" component={Letra} />
                <Route exact path="/Artista/" component={Artista} />
                <Route exact path="/DetalheArtista/:art" component={DetalheArtista} />
                <Route exact path="/Albuns" component={Albuns} />
                <Route exact path="/DetalheAlbum/:art/discografia/" component={DetalheAlbum} />
            </Switch>
    )
}

export default Rotas
