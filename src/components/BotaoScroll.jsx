import React from 'react'
import '../css/BotaoScroll.css'
import { animateScroll as scroll } from 'react-scroll'

const BotaoScroll = () => {
    return (
        <div className="botaoSobe" onClick={() => scroll.scrollToTop()} >
           <i className="sobe fas fa-arrow-circle-up"></i>
        </div>
    )
}

export default BotaoScroll
