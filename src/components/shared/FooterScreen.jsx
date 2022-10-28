import React from 'react'
import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className='footer'>
        <p className='footer__text'>&copy; Adrian Hernandez</p>
        <ul className='redes'>
            <li className='redes__items'>
                <a href="" className='redes__links'>
                    Instagram
                </a>
            </li>
            <li className='redes__items'>
                <a href="" className='redes__links'>
                    Linkdin
                </a>
            </li>
            <li className='redes__items'>
                <a href="" className='redes__links'>
                    portafolio
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default FooterScreen