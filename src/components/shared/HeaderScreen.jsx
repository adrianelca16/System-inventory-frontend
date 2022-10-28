import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/headerScreen.css'

const HeaderScreen = () => {
    const navbar = useRef()
    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
      }
    return (
        <header className='header'>
            <h1 className='header__title'>
                <Link to={'/'}>Sistema de inventario</Link>
            </h1>
            <div onClick={clickMenuHam} className='header__menuham'>
                <div className='header__menham-items'></div>
                <div className='header__menham-items'></div>
                <div className='header__menham-items'></div>
            </div>
            <nav ref={navbar} className='navbar'>
                <ul className='navbar__list'>
                    <li >
                        <NavLink to={'/login'} className={({isActive}) => isActive? 'navbar__link-active navbar__links': 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p>Iniciar Sesion</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/inventory'} className={({isActive}) => isActive? 'navbar__link-active navbar__links': 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p>Inventario</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/invoice'} className={({isActive}) => isActive? 'navbar__link-active navbar__links': 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p>Factura</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/color'} className={({isActive}) => isActive? 'navbar__link-active navbar__links': 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p>Color</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/closing'} className={({isActive}) => isActive? 'navbar__link-active navbar__links': 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p>Cierre</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderScreen