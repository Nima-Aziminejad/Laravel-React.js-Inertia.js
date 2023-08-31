import React from "react";
import {Link} from '@inertiajs/react';
import {showNavbarMenu} from "../Jquery/commonFunctions.js";

export default function GuestLayout(props) {
    const navbarToggle = () => {
        showNavbarMenu();
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" onClick={navbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link " + (route().current('home') ? "active" : '')}
                                      href={route('home')}>Home</Link>
                            </li>
                            {props.auth ? (
                                <div>dd</div>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (route().current('login') ? 'active' : '')}
                                              href={route('login')}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (route().current('register') ? 'active' : '')}
                                              href={route('register')}>Register</Link></li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </>
    )
}
