import React from 'react'

const Contact = () => {
    return (
        <div className="main-wrappers">
            <section className="cta-section theme-bg-light py-5">
                <div className="containers text-center single-col-max-width" style={{margin: "auto"}}>
                    <h2 className="heading">Contact</h2>
                    <div className="intro">
                        <p>Interested in hiring me or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:shadhin.abc@gmail.com">shadhin.abc@gmail.com</a></p>
                        <p>Want to get connected? Follow me on the social channels below.</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mb-3"><a className="twitter" href="https://x.com/ShadhinKhan004"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>

                            <li className="list-inline-item mb-3"><a className="linkedin" href="https://www.linkedin.com/in/md-tanveer-khan/"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="github" href="https://github.com/Shadhin004/"><i className="fab fa-github-alt fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item"><a className="instagram" href="https://www.instagram.com/shadhin._.khan/"><i className="fab fa-instagram fa-fw fa-lg"></i></a></li>
                            <li className="list-inline-item mb-3"><a className="facebook" href="https://www.facebook.com/shadhin004/"><i className="fab fa-facebook-f fa-fw fa-lg"></i></a></li>


                        </ul>

                    </div>
                </div>
            </section>
            <section className="contact-section px-3 py-5 p-md-5">
                <div className="container">
                    <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method="post" action="">
                        <h3 className="text-center mb-3">Get In Touch</h3>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="sr-only" htmlFor="cname">Name</label>
                                <input type="text" className="form-control" id="cname" name="name" placeholder="Name" aria-required="true" />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="sr-only" htmlFor="cemail">Email</label>
                                <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" aria-required="true" />
                            </div>
                            {/* <div className="form-group col-12">
                                <select id="services" className="custom-select" name="services">
                                    <option selected>Select a service package you're interested in...</option>
                                    <option value="basic">Basic</option>
                                    <option value="standard">Standard</option>
                                    <option value="premium">Premium</option>
                                    <option value="not sure">Not sure</option>
                                </select>
                                <small className="form-text text-muted pt-1"><i className="fas fa-info-circle mr-2 text-primary"></i>Want to know what's included in each package? Check the <a href="services.html" target="_blank">Services &amp; Pricing</a> page.</small>
                            </div> */}
                            <div className="form-group col-12">
                                <label className="sr-only" htmlFor="cmessage">Your message</label>
                                <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows={10} aria-required="true"></textarea>
                            </div>
                            <div className="form-group col-12">
                                <button type="submit" className="btn btn-block btn-primary py-2">Send Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <footer className="footer text-center py-4">
                <small className="copyright">Template Copyright &copy; <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
            </footer>

        </div>
    )
}

export default Contact