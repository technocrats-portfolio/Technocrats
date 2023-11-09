

import React from 'react'

import './Home.css'

import ProjectsApi from './Api/ProjectsApi'
import { useState } from 'react'
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
const uniqueList = [
  ...new Set(
    ProjectsApi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
]

const ProjectCards = (props) => {
  return (
    <>
      <div className="container mt-2">

        <div class="row pb-5 mb-4">
          {
            props.MenuData.map((curElem) => {
              const { id, logo, category, Date } = curElem;
              return (
                <div class="col-lg-3 col-md-6  mt-5 mb-lg-0" key={id}>
                  <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-3"><img src={logo} alt=""  class="w-100  card-img-top" style={{height:'10rem'}}/>
                      <div class="p-4">
                        <h7 className="fw-bold">{category}</h7><br />
                        <p class="">{Date}</p>
                        {/* <p class="small text-muted">{title}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              );

            }
            )
          }
        </div>
      </div>
    </>
  )
}
const Nav = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="container">
        <nav className="navbar-team">
          <div className="row">
            <div className="col-md-2 mt-2">
              <select className="form-select  form-select-lg " style={{width:'16rem'}}  onChange={(e) => filterItem(e.target.value)}>
                
                <option >Select Service</option>
                {menuList.map((curElem, index) => (
                  <option key={index} value={curElem}>{curElem}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

const Home = () => {
  const [counterOn, setCounterOn] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
emailjs.sendForm('service_j4qp323', 'template_1kitx3b', e.target, 'zbnOMBcyn0XAVvb5p')
    // e.target.reset();
  };

  const notify = () => toast("Succesfully submit the form!");
  const [MenuData, setMenuData] = useState(ProjectsApi);
  const [menuList] = useState(uniqueList);
  const filteritems = (category) => {
    if (category === "All") {
      setMenuData(ProjectsApi);
      return;
    }
    const updateList = ProjectsApi.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updateList);
  };
  return (
    <>


<section class="showcase">
   
    <video src="Videos/banner-video.mp4" muted="muted" loop="loop" autoplay="autoplay"></video>
    <div class="overlay"></div>

    <div className='banner-pro d-flex '>
    <div class="text">
      <h2>We CODE </h2> 
      <h3>Your Dreams</h3>
      <p> A Five Member & Growing Group Of Technical Elite At Your Service. Excelling in web development, DevOps, App Development and Graphics. We merge tech and creativity to bring digital visions to life, prioritizing quality, client satisfaction, and innovation.</p>
      <a class="btn btn-contact shadow btn-lg " style={{width:'fit-content'}} href='/#contact' role="button">Contact Us</a>
      </div>
      <img src="Images/banner.png"  style={{ maxWidth: '40%',position:'relative' }} alt="" />
    </div>
  
  </section>
   
      <section className="services-cards" id='services'>
        
        <div class="header">
          
          <h1 class="fw-bold text-center mb-5 mt-3 text-decoration-underline">Services</h1>
          {/* <h1>Powered by AUCIS</h1> */}
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>DevOps</h2>
            <p>Streamlining your operations for efficiency and reliability in the digital age.</p>
            <img src="https://www.svgrepo.com/show/362814/infinity-bold.svg" alt=""  width='80' height='80'/>
          </div>

          <div class="box red">
            <h2>Web Development</h2>
            <p>Crafting interactive and responsive websites tailored to your unique needs.</p>
            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
          </div>

          <div class="box box-down blue">
            <h2>App Development </h2>
            <p>Enhancing online shopping experiences and boosting sales.</p>
            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange">
            <h2>Graphics</h2>
            <p>Creating captivating visuals and dynamic content to engage your audience</p>
            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
          </div>
        </div>
      </section>
      


     
     

{/* 
      <section class="sec2 box1">
        <div class="container">
          <div class="row gy-3 justify-content-center">
            <div class="col-lg-4 col-md-6 ">
              <div class="cards">
                <div class="icons-sec2 ">
                  <i
                    class="fa-solid fa-3x fa-building-ngo text-secondary mb-4 fa-sec2"
                  ></i>
                </div>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                  tenetur aliquam eum.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="cards">
                <div class="icons-sec2">
                  <i
                    class="fa-solid fa-3x fa-circle-nodes text-secondary mb-4 fa-sec2"
                  ></i>
                </div>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                  tenetur aliquam eum.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="cards">
                <div class="icons-sec2">
                  <i
                    class="fa fa-3x fa-laptop-code text-secondary mb-4 fa-sec2"
                    aria-hidden="true"
                  ></i>
                </div>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                  tenetur aliquam eum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
   
   

      <section className="container text-center mt-5" id='projects'>
      
        <h1 class="fw-bold text-center mb-5 mt-3 text-decoration-underline">Recent Projects</h1>
        <Nav filterItem={filteritems} menuList={menuList} />
        <ProjectCards MenuData={MenuData} />
      </section>


        <div class="container-xxl py-5" id='team'>
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s" >
                   
                    <h1 class="fw-bold text-center mb-5 mt-3 text-decoration-underline">Our Team</h1>
                </div>
                <div class="row g-3 justify-content-center">
                 
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                        <div class="team-item bg-light rounded" style={{height:'28.5rem'}}>
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="Images/Awab.jpeg" 
                                style={{width:'100%',height:'100%'}}
                                    alt="Awab" />
                                <h5>Muhammad Awab</h5>
                                <span>DevOps Engineer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1"
                                    href="https://github.com/Muhammad-Awab"><i
                                        class="fab fa-github"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://twitter.com/MuhammadawabAh2"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/muhammadawab/"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4"  src="Images/huzaifa.jpg"
                                 style={{width:'100%',height:'100%'}}
                                    alt="Huzaifa" />
                                <h5>Huzaifa Azhar</h5>
                                <span>Web Developer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1"
                                    href="https://github.com/HuzaifaAzhar"><i
                                        class="fab fa-github"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="http://x.com/Chaos_Ahoy"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/huzaifa-azhar-tarar-bb4b6b99/"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="Images/ahad.jpg" alt="ahad" 
                                style={{width:'100%',height:'100%'}}
                                />
                                <h5>Abdul Ahad Ali</h5>
                                <span>App Developer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1"
                                    href="https://github.com/AbdulAhad210904"><i
                                        class="fab fa-github"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://twitter.com/AbdulAhad210904?t=EZE6ngIdV5V1vPPTd_PXLg&s=09"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/abdul-ahad-ali-215000250"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                  
                    
                </div>

                <div className='row justify-content-center mt-4 g-3 '>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="Images/taha.jpg"
                                style={{width:'100%',height:'100%'}}
                                    alt="taha" />
                                    <h5>Taha Shayan</h5>
                                <span>Data Analyst</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1"
                                    href="https://github.com/Tahashayan"><i
                                        class="fab fa-github"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://twitter.com/TAHASHAYAN2"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/muhammad-taha-shayan-837984260/"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="Images/sohaib.jpeg"
                                style={{width:'100%',height:'100%'}}
                                    alt="sohaib" />
                                    <h5>Sohaib Asif</h5>
                                <span>Web Developer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1"
                                    href="https://github.com/SohaibAsif-5602"><i
                                        class="fab fa-github"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://twitter.com/SohaibAsif5602"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/sohaib-asif-97a541292/"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      <section class="sec5 pt-5 pb-5">
        <div class="container sec5-container" style={{ flexDirection: 'column' }}>
          <div class="div1-sec5">
            <div class="span1"></div>
            <div class="span2"></div>
            <p class="sec5-top">OUR ACHIEVEMENTS</p>
            <div class="span2"></div>
            <div class="span1"></div>
          </div>
          <div class="div2-sec5">
            <h1 class="h1-sec5 text-center mb-5">We Help People Grow</h1>
          </div>
          <div class="div3-sec5">
            <div class="card-sec5">
              <i class="fa-solid fa-medal fa-3x mb-3"></i>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}+</h1>
              <p class="sec5-card-para">Years of Experience</p>
            </div>
            <div class="card-sec5">
              <i class="fa-solid fa-people-group fa-3x mb-3"></i>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}</h1>
              </ScrollTrigger>
              <p class="sec5-card-para">Members</p>
            </div>
            <div class="card-sec5">
              <i class="fa fa-address-book fa-3x mb-3" aria-hidden="true"></i>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={3} duration={2} delay={0} />}</h1>
              <p class="sec5-card-para">Clients</p>
            </div>
            <div class="card-sec5">
              <i class="fa-solid fa-magic-wand-sparkles fa-3x mb-3"></i>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
              <p class="sec5-card-para">Projects</p>
            </div>
          </div>
        </div>
      </section>

      <h1 class="fw-bold text-center mt-5 pb-3 text-decoration-underline">Get in Touch</h1>
      <section className="contact box1 pt-0" id='contact'>
        <div className='contactus-section'>
          <div className="contact-us  container">
            <div className="test1 shadow-lg ">
             
              <div className="col-lg-12 ">
                <div className="row">


                  {/* right side contact form  */}
                  <div className="col-md-12">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row">
                        <div className="contact-input-feild">
                          <label htmlFor="" className="ml-1">Name*</label>
                          <input
                            type="text"
                            name="name"
                            id="contact-input-height"
                            className="form-control  contact-input-feild-sub"
                            placeholder="Name"
                            required

                          />
                        </div>


                      </div>

                      <div className="row">
                        <div className="contact-input-feild">
                          <label htmlFor="" className="ml-1">Contact No</label>
                          <input type="tel" className="form-control  contact-input-feild-sub" id="contact-input-height" name="contactno" placeholder="Contact Number" maxLength={11} minLength={11} ></input>
                        </div>
                        <div className="contact-input-feild">
                          <label htmlFor="" className="ml-1">Email*</label>

                          <input
                            type="email"
                            name="email"
                            id="contact-input-height"
                            className="form-control  contact-input-feild-sub"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className=" ">
                          <label htmlFor="" className="ml-1">Select Service*</label>

                          <select name="service" class="form-select contact-input-feild-sub" aria-label="Default select example" required>
                          <option selected>Choose an option</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Graphics">Graphics</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="contact-input-feild">
                          <label htmlFor="" className="ml-1">Description*</label>
                          <textarea
                            type="text"
                            name="description"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            className="form-control contact-input-feild-sub"
                            placeholder="Please provide a concise description about the project."
                            required

                          />
                        </div>


                      </div>

                      <button
                          style={{"background-color":"#FF914E","font-weight":"400","width":"8rem"}}
                        type="submit"
                        className="btn btn-warning shadow btn-lg mt-2 mb-1 mx-auto d-flex justify-content-center"
                        onClick={notify}
                      >
                        Submit
                      </button>
                      <ToastContainer />

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
