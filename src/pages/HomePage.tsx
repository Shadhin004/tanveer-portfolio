import React from 'react'
import Resume from './Resume'
import Contact from './Contact'
import { Link } from 'react-scroll'

const HomePage = () => {
    return (
        <div className="main-wrapper">
            <section className="about-me-section p-3 p-lg-5 theme-bg-light" id='about-section'>
                <div className="container">
                    <div className="profile-teaser media flex-column flex-lg-row">

                        <div className="media-body">
                            <h2 className="name font-weight-bold mb-1">Tanveer Khan</h2>
                            <div className="tagline mb-3">Software Engineer</div>

                            <div className="bio mb-4">I have more than 4 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my  <Link className="link-on-bg" to="resume-section" smooth={true} duration={500}>online resume</Link>.
                            </div>
                            <div className="mb-4">
                                <Link className="btn btn-secondary mb-3" to="resume-section" smooth={true} duration={500}><i className="fas fa-file-alt mr-2"></i><span className="d-none d-md-inline">View</span> Resume</Link>
                            </div>
                            <a href="https://github.com/Shadhin004" target='_blank'>
                                <img id="placeholder3" src="public/empty.svg" className="gh-chart" style={{ display: "none" }} />
                                <img id="actual3" className="gh-chart" src="https://ghchart.rshah.org/Shadhin004.svg" />
                            </a>
                        </div>
                        <img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src="assets/images/tanveer_1.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className="overview-section p-3 p-lg-5">
                <div className="container">
                    <h2 className="section-title font-weight-bold mb-3">What I do</h2>
                    <div className="section-intro mb-5">Since earning my Bachelor’s in Computer Science and Engineering in 2020, I’ve immersed myself in coding and technology. My academic years laid a strong foundation in programming, driven by curiosity and a passion for innovation. After graduation, I quickly transitioned into an internship, applying my skills and evolving into an accomplished software developer. Known for my rapid learning, adaptability, and ability to deliver high-quality code, my dedication and collaborative spirit have earned me recognition from peers and mentors.</div>
                    <div className="row">
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-js-square"></i></div>
                                <h3 className="item-title">JavaScript &amp; Typescript</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-react mr-2"></i><i className="fas fa-code"></i></div>
                                <h3 className="item-title">React &amp;  Next</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>

                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-node-js"></i></div>
                                <h3 className="item-title">Node.js</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>

                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-python"></i></div>
                                <h3 className="item-title">Python &amp; Django</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-php mr-2"></i><i className="fab fa-laravel mr-2"></i></div>
                                <h3 className="item-title">PHP &amp; Laravel</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-github mr-2"></i><i className="fab fa-docker mr-2"></i></div>
                                <h3 className="item-title">Git &amp; Docker</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-html5 mr-2"></i><i className="fab fa-css3-alt"></i></div>
                                <h3 className="item-title">HTML &amp; CSS</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                        <div className="item col-6 col-lg-3">
                            <div className="item-inner">
                                <div className="item-icon"><i className="fab fa-wordpress mr-2"></i></div>
                                <h3 className="item-title">Wordpress</h3>
                                {/* <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container"><hr /></div>

            {/* <section className="testimonials-section p-3 p-lg-5">
                <div className="container">
                    <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>

                    <div className="testiomonial-carousel-container">
                        <div className="testimonial-carousel  tiny-slider">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-1.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">Brandon James</div>
                                            <div className="info">Project Manager, Google</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-2.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">Kate Sanders</div>
                                            <div className="info">Project Manager, Uber</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-3.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">James Lee</div>
                                            <div className="info">Product Manager, Amazon</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-4.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">James Lee</div>
                                            <div className="info">Product Manager, Amazon</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-5.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">Olivia White</div>
                                            <div className="info">Product Manager, Dropbox</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="quote-holder">
                                        <blockquote className="quote-content">
                                            Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                        </blockquote>
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="source-holder">
                                        <div className="source-profile">
                                            <img src="assets/images/clients/profile-6.png" alt="image" />
                                        </div>
                                        <div className="meta">
                                            <div className="name">Samuel Reyes</div>
                                            <div className="info">CTO, StartupHub</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="overview-section p-3 p-lg-5">
                <Resume />
            </section>

            <div className="container"><hr /></div>

            <section className="overview-section p-3 p-lg-5">
                <Contact />
            </section>
        </div>
    )
}

export default HomePage