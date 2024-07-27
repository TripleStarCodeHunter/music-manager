import styles from './Bubbles.module.css'
import React from "react";
import './Bubbles2.css'
class Bubbles extends React.Component {
    // componentDidMount() {
    //   document.documentElement.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    //   this.refs.main.scrollTop = 0;
    // }
    render() {
      const { userName, phoneNo, password, email } = this.props;

      return (
        <>
          {/* <DemoNavbar /> */}
          
          <main ref="main" style={{width:"100vw",height:"100vh",overflow:"auto"}}>
            <section className={`${styles.section} ${styles['section-shaped']} ${styles['section-lg']}`}>
              <div className={`${styles.shape} ${styles['shape-style-1']} ${styles['bg-gradient-default']}`} >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                
              </div>
              
              <div className={styles.content} style={{width:"100vw",height:"100vh"}}>
              <div className='body-container' style={{backgroundColor:"transparent"}}>
                <div className="main-content" style={{backgroundColor:"transparent"}}>
                {/* <!-- Top navbar --> */}
              {/* <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main" >
                <div className="container-fluid" > */}
                  {/* <!-- Brand --> */}
                  {/* <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank" rel="noopener noreferrer">
                    User profile
                  </a> */}
                  {/* <!-- Form --> */}
                  {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div className="form-group mb-0">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                        <input className="form-control" placeholder="Search" type="text" />
                      </div>
                    </div>
                  </form> */}
                  {/* <!-- User --> */}
                  {/* <ul className="navbar-nav align-items-center d-none d-md-flex">
                    <li className="nav-item dropdown">
                      <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-center">
                          <span className="avatar avatar-sm rounded-circle"> */}
                            {/* <img alt="User" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" /> */}
                          {/* </span>
                          <div className="media-body ml-2 d-none d-lg-block">
                            <span className="mb-0 text-sm font-weight-bold">Jessica Jones</span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                        <div className="dropdown-header noti-title">
                          <h6 className="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="../examples/profile.html" className="dropdown-item">
                          <i className="ni ni-single-02"></i>
                          <span>My profile</span>
                        </a>
                        <a href="../examples/profile.html" className="dropdown-item">
                          <i className="ni ni-settings-gear-65"></i>
                          <span>Settings</span>
                        </a>
                        <a href="../examples/profile.html" className="dropdown-item">
                          <i className="ni ni-calendar-grid-58"></i>
                          <span>Activity</span>
                        </a>
                        <a href="../examples/profile.html" className="dropdown-item">
                          <i className="ni ni-support-16"></i>
                          <span>Support</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-user-run"></i>
                          <span>Logout</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav> */}
              
              {/* <!-- Header --> */}
              <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
                {/* <!-- Mask --> */}
                {/* <span className='mask'></span> */}
                {/* <!-- Header container --> */}
                <div className="container-fluid d-flex align-items-center" >
                  {/* <div className="row">
                    <div className="col-lg-7 col-md-10" >
                      <h1 className="display-2 text-white">Hello Jesse</h1>
                      <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                      <a href="#!" className="btn btn-info">Edit profile</a>
                    </div>
                  </div> */}
                </div>
              </div>
              
              {/* <!-- Page content --> */}
              <div className="container-fluid mt--7" style={{backgroundColor:"transparent"}}>
                <div className="row" >
                  <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0" style={{backgroundColor:"transparent"}}>
                    <div className="card card-profile shadow">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                          <div className="card-profile-image">
                            <a href="#">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&s" className="rounded-circle" alt="Profile" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        {/* <div className="d-flex justify-content-between">
                          <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                          <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                        </div> */}
                      </div>
                      <div className="card-body pt-0 pt-md-4">
                        <div className="row">
                          <div className="col">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                              <div>
                                <span className="heading">22</span>
                                <span className="description">Playlist</span>
                              </div>
                              <div>
                                <span className="heading">10</span>
                                <span className="description">Liked Artists</span>
                              </div>
                              <div>
                                <span className="heading">Coldplay</span>
                                <span className="description">Favourite Artist</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className='h-3 heading'>
                            Phani Aditya<span className="font-weight-light">, 21</span>
                          </h3>
                          {/* <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2"></i>Bucharest, Romania
                          </div> */}
                          {/* <div className="h5 mt-4">
                            <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                          </div>
                          <div>
                            <i className="ni education_hat mr-2"></i>University of Computer Science
                          </div> */}
                          <hr className="my-4" />
                          <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                          {/* <a href="#">Show more</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 order-xl-1">
                    <div className="card bg-secondary shadow">
                      <div className="card-header  border-0">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h3 className="mb-0 heading">My account</h3>
                          </div>
                          <div className="col-4 text-right">
                            <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <form>
                          <h6 className="h-6 heading heading-small text-muted mb-4">User information</h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-username">Username</label>
                                  <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={userName} />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="form-control-label" htmlFor="input-email">Password</label>
                                  <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="password" value={password} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              {/* <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-first-name">First name</label>
                                  <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value="Lucky" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                                  <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value="Jesse" />
                                </div>
                              </div> */}
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-first-name">Email</label>
                                  <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={email} />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-last-name">Phone Number</label>
                                  <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={phoneNo} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />
                          {/* <!-- Address --> */}
                          {/* <h6 className="heading-small text-muted mb-4">Contact information</h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-address">Address</label>
                                  <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-city">City</label>
                                  <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group focused">
                                  <label className="form-control-label" htmlFor="input-country">Country</label>
                                  <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label className="form-control-label" htmlFor="input-postal-code">Postal code</label>
                                  <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" /> */}
                          {/* <!-- Description --> */}
                          <h6 className="h-6 heading heading-small text-muted mb-4">About me</h6>
                          <div className="pl-lg-4">
                            <div className="form-group focused">
                              <label>About Me</label>
                              <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">I love listening to songs and this web app is my favourite.</textarea>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <footer className="footer">
                <div className="row align-items-center justify-content-xl-between">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="copyright">
                      <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank" rel="noopener noreferrer">Argon Dashboard</a> by Creative Tim</p>
                    </div>
                  </div>
                </div>
              </footer> */}
              </div>
              </div>
              </div>
            </section>
         </main>
          {/* <SimpleFooter /> */}
        </>
      );
    }
  }
  
  export default Bubbles;
  