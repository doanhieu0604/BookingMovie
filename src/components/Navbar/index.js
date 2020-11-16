import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="movieNavbar navbar navbar-expand-lg navbar-dark py-0">
                <a className="navbar-brand" href="#">
                    <img className="imgLogo" src="./logo/logo.png"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="movieNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                exact
                                activeClassName="active"
                                className="nav-link"
                                to="/">
                                Trang chủ
                             </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                activeClassName="active"
                                className="nav-link"
                                to="/list-movie">
                                Phim
                             </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                activeClassName="active"
                                className="nav-link"
                                to="/new">
                                Tin Tức
                             </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
