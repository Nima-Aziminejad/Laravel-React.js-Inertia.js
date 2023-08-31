import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {checkMinScreen, toggleHamburgerMenu} from "../Jquery/commonFunctions.js";
import { faDashboard, faXmark, faBarsStaggered, faAngleRight, faAngleLeft, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import {Link, router } from "@inertiajs/react";
class AuthenticatedLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarMin: false,
            showHamburgerMenu: false
        }

    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    updateDimensions = ()=>{
        if(checkMinScreen()){
            this.setState({
                sidebarMin: false,
                showHamburgerMenu: true
            })
        }else{
            this.setState({
                showHamburgerMenu: false
            })
        }
    }
    toggleSidebarMin = ()=>{
        this.setState({
            sidebarMin:  !this.state.sidebarMin
        })
    }
    toggleMenu = ()=>{
        this.setState({
            showHamburgerMenu: toggleHamburgerMenu()
        })
    }
    logout = (e)=>{
        e.preventDefault();
        router.post(route('logout'))
    }
    render() {
        return(
            <>
                <div id="wrapper" className={"wrapper " + (this.state.sidebarMin ? "sidebar-min" : "")}>
                    <div id="sidebar" className={"sidebar "+(this.state.showHamburgerMenu ? "navbar-show" : "")}>
                        <div className="sidebar-background">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="150"
                                 preserveAspectRatio="none"
                                 viewBox="0 0 250 150">
                                <g mask="url(&quot;#SvgjsMask1141&quot;)" fill="none">
                                    <path
                                        d="M -59.28598551195625,82 C -46.69,77.4 -21.49,59.2 3.7140144880437536,59 C 28.91,58.8 41.51,87.4 66.71401448804376,81 C 91.91,74.6 104.51,25.6 129.71401448804374,27 C 154.91,28.4 167.51,81.8 192.71401448804374,88 C 217.91,94.2 244.26,58 255.71401448804374,58 C 267.17,58 251.14,82 250,88"
                                        stroke="rgba(133, 206, 54, 1)" strokeWidth="2"></path>
                                    <path
                                        d="M -120.13506726712973,27 C -107.54,45.4 -82.34,115 -57.13506726712973,119 C -31.94,123 -19.34,49.4 5.8649327328702725,47 C 31.06,44.6 43.66,104.8 68.86493273287027,107 C 94.06,109.2 106.66,63.4 131.86493273287027,58 C 157.06,52.6 171.24,77.6 194.86493273287027,80 C 218.49,82.4 238.97,72 250,70"
                                        stroke="rgba(133, 206, 54, 1)" strokeWidth="2"></path>
                                    <path
                                        d="M -107.97587294288195,116 C -95.38,104.8 -70.18,65.8 -44.97587294288195,60 C -19.78,54.2 -7.18,84.6 18.02412705711805,87 C 43.22,89.4 55.82,64 81.02412705711805,72 C 106.22,80 118.82,132.6 144.02412705711805,127 C 169.22,121.4 185.83,48.2 207.02412705711805,44 C 228.22,39.8 241.4,93.6 250,106"
                                        stroke="rgba(133, 206, 54, 1)" strokeWidth="2"></path>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1141">
                                        <rect width="250" height="150" fill="#ffffff"></rect>
                                    </mask>
                                </defs>
                            </svg>
                        </div>
                        <div className="sidebar-logo">
                            <div className="sidebar-photo">
                                <img src={this.props.auth.avatar} className="img-fluid" alt="user photo"/>
                            </div>
                            <h3>NIMA</h3>
                        </div>
                        <div className="sidebar-wrapper">
                            <ul>
                                <li>
                                    <a href="" className={(route().current('dashboard') ? "active" : '')}>
                                        <FontAwesomeIcon icon={faDashboard} size="xl" />
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="n-navbar">
                        <div className="navbar-flex">
                            <div id="navbar-hamburger"
                                 className={"navbar-hamburger "+(this.state.showHamburgerMenu ? 'navbar-hamburger-move' : '')}>
                                {this.state.showHamburgerMenu ? (
                                    <FontAwesomeIcon icon={faXmark} size="xl" onClick={this.toggleMenu} />
                                ) : (
                                    <FontAwesomeIcon icon={faBarsStaggered} size="xl" onClick={this.toggleMenu} />
                                )}
                            </div>
                            <div className="navbar-max">
                                {this.state.sidebarMin ? (
                                    <FontAwesomeIcon icon={faAngleRight} size="xl" onClick={this.toggleSidebarMin} />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleLeft} size="xl" onClick={this.toggleSidebarMin} />
                                )}
                            </div>
                            <div className="navbar-title">
                                <h4>
                                    <slot name="navbarTitle"></slot>
                                </h4>
                            </div>
                        </div>
                        <ul className="navbar-flex">
                            <li className="navbar-notification">
                                <a href="">
                                    <FontAwesomeIcon icon={faBell} size="xl" />
                                    <div className="navbar-notification-number"><span>5</span></div>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href=""><i className="fa fa-user"></i>
                                    <p>Profile</p>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="" onClick={this.logout}>
                                    <FontAwesomeIcon icon={faPowerOff} size="xl" />
                                    <p>Logout</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <main className="content">
                        {this.props.children}
                    </main>
                </div>
            </>
        )
    }
}
export default AuthenticatedLayout
