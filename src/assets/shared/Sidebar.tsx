import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {Link} from 'react-scroll'

const Sidebar = () => {
    return (
        <div>
            <header className="header text-center">
                <div className="force-overflow">
                    <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Tanveer Khan</a></h1>

                    <nav className="navbar navbar-expand-lg navbar-dark" >

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="navigation" className="collapse navbar-collapse flex-column" >
                            <div className="profile-section pt-3 pt-lg-0">
                                <img className="profile-image mb-3 rounded-circle mx-auto" src="assets/images/tanveer_2.jpg" alt="image" />

                                <div className="bio mb-3">Hi, my name is Tanveer and I'm a software engineer. Welcome to my personal website!</div>
                                <ul className="social-list list-inline py-2 mx-auto">
                                    <li className="list-inline-item"><a href="https://x.com/ShadhinKhan004"><i className="fab fa-twitter fa-fw"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/md-tanveer-khan/"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                                    <li className="list-inline-item"><a href="https://github.com/Shadhin004/"><i className="fab fa-github-alt fa-fw"></i></a></li>
                                    {/* <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li> */}
                                    {/* <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li> */}
                                </ul>
                                <hr />
                            </div>

                            <ul className="navbar-nav flex-column text-left">
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} duration={500} to="about-section"><i className="fas fa-user fa-fw mr-2"></i>About Me<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} duration={500} to="resume-section"><i className="fas fa-file-alt fa-fw mr-2"></i>Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact-section" smooth={true} duration={500} ><i className="fas fa-envelope-open-text fa-fw mr-2"></i>Contact</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-cogs fa-fw mr-2"></i>More Pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="project.html">Project Page</a>
                                        <a className="dropdown-item" href="blog-home.html">Blog Home 1</a>
                                        <a className="dropdown-item" href="blog-home-alt.html">Blog Home 2</a>
                                        <a className="dropdown-item" href="blog-post.html">Blog Post</a>
                                    </div>
                                </li> */}
                            </ul>

                            <div className="my-2">
                                <Link className="btn btn-primary" to="contact-section" smooth={true} duration={500} target="_blank"><i className="fas fa-paper-plane mr-2"></i>Hire Me</Link>
                            </div>


                            <div className="dark-mode-toggle text-center w-100">
                                <hr className="mb-4" />
                                <h4 className="toggle-name mb-3 "><i className="fas fa-adjust mr-1"></i>Dark Mode</h4>

                                <input className="toggle" id="darkmode" type="checkbox" />
                                <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>

                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            {/* <div className="main-wrapper"> */}
                <Outlet />
            {/* </div> */}
            <div id="config-panel" className="config-panel d-none d-lg-block">
                <div className="panel-inner">
                    <a id="config-trigger" className="config-trigger config-panel-hide text-center" href="#"><i className="fas fa-cog mx-auto" data-fa-transform="down-6" ></i></a>
                    <h5 className="panel-title">Choose Colour</h5>
                    <ul id="color-options" className="list-inline mb-0">
                        <li className="theme-1 active list-inline-item"><a data-style="src/assets/css/theme-1.css" href="#"></a></li>
                        <li className="theme-2  list-inline-item"><a data-style="src/assets/css/theme-2.css" href="#"></a></li>
                        <li className="theme-3  list-inline-item"><a data-style="src/assets/css/theme-3.css" href="#"></a></li>
                        <li className="theme-4  list-inline-item"><a data-style="src/assets/css/theme-4.css" href="#"></a></li>
                        <li className="theme-5  list-inline-item"><a data-style="src/assets/css/theme-5.css" href="#"></a></li>
                        <li className="theme-6  list-inline-item"><a data-style="src/assets/css/theme-6.css" href="#"></a></li>
                        <li className="theme-7  list-inline-item"><a data-style="src/assets/css/theme-7.css" href="#"></a></li>
                        <li className="theme-8  list-inline-item"><a data-style="src/assets/css/theme-8.css" href="#"></a></li>
                        <li className="theme-9  list-inline-item"><a data-style="src/assets/css/theme-9.css" href="#"></a></li>
                        <li className="theme-10  list-inline-item"><a data-style="src/assets/css/theme-10.css" href="#"></a></li>
                    </ul>
                    <a id="config-close" className="close" href="#"><i className="fa fa-times-circle"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar