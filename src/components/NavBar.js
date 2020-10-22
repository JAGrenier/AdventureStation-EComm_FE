import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import Logo from '../images/logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" >
                <img src={Logo} className="logo" alt="adventure station logo and home link"/>
                </Link>
                <ul className="navbar-nav.align-items-center">  
                    <li className="nav-item ml-5">
                        <Link to="/Products" className="nav-link">
                            View Adventures
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto d">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />  
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
    background: var(--mainGreen);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    border-bottom-style: solid;
    border-color: var(--mainDark);
    .logo{
        height: 5rem;
    }
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform:capitalize;
        
    }
`