import React from 'react'
import Navbar from './NavBar/Navbar'
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
      <div className="container mt-5">

        <div class="row pb-5 mb-4">
          {
            props.MenuData.map((curElem) => {
              const { id, logo, title, category, Date } = curElem;
              return (
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" key={id}>
                  <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0"><img src={logo} alt="" class="w-100 card-img-top" />
                      <div class="p-4">
                        <h7 className="fw-bold">{category}</h7><br />
                        <p class="">{Date}</p>
                        <p class="small text-muted">{title}</p>
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
        <nav className="navbar-team" >
          <div className="row">
            {
              menuList.map((curElem) => {
                return (
                  <div className="col-md-2 mt-2">
                    <button className="btn " style={{ background: 'var(--buttons)', width: '10rem' }} onClick={() => filterItem(curElem)}>{curElem}</button>
                  </div>
                )
              })
            }

          </div>
        </nav>
      </div>
    </>
  )
}
const Home = () => {
  const [counterOn, setCounterOn] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wruolwk', 'template_zg5u38k', e.target, 'u-XYTvIbVtz2HVSiT')
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

      <section class="sec1  justify-content-middle" style={{ color: 'white',marginTop:'4rem' }}>

        <div class="container-fluid p-5" >

          <div class="row">
            <div className="col-md-6 ">
              <h1 class="display-1 height-cyberoide fw-bold">
                TECHNOCRATS
              </h1>

              <p className='lead pt-4 pb-4 hide text-align ' style={{ textAlign: 'justify' }}> <span className='text-light fw-bold' >Technocrats</span> is a dynamic collective of five freelance experts dedicated to elevating digital experiences. Specializing in web development, DevOps, graphic design, video editing, and app development, we merge cutting-edge technology with creative prowess to bring your digital visions to life. Our unwavering commitment to quality, client satisfaction, and innovation drives us to craft responsive websites, streamline operations, create captivating visuals, and develop feature-rich applications, empowering businesses and individuals in an ever-evolving digital landscape.</p>
              <a class="btn btn-contact shadow btn-lg " href='#contact' role="button">Contact Us</a>
            </div>
            <div className="col-md-6">
              <img src="Images/header.png" style={{ maxWidth: '100%' }} alt="" />
            </div>
          </div>




        </div>

      </section>
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
      </section>


      <section class="4 box1">
        <div class="container">
          <div class="row gy-3">
            <div class="col-lg-3 col-sm-6">
              <div class="card-sec4">
                <i class="fa-solid fa-3x fa-handshake mb-4"></i>
                <p class="para-sec4">Commitment</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card-sec4">
                <i class="fa-solid fa-3x fa-lightbulb mb-4"></i>
                <p class="para-sec4">Innovation</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card-sec4">
                <i class="fa-solid fa-3x fa-people-group mb-4"></i>
                <p class="para-sec4">Team Work</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card-sec4">
                <i class="fa-solid fa-3x fa-bolt mb-4"></i>
                <p class="para-sec4">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={3} duration={2} delay={0} />}</h1>
              <p class="sec5-card-para">Experience</p>
            </div>
            <div class="card-sec5">
              <i class="fa-solid fa-people-group fa-3x mb-3"></i>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}</h1>
              </ScrollTrigger>
              <p class="sec5-card-para">Members</p>
            </div>
            <div class="card-sec5">
              <i class="fa fa-address-book fa-3x mb-3" aria-hidden="true"></i>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}</h1>
              <p class="sec5-card-para">Clients</p>
            </div>
            <div class="card-sec5">
              <i class="fa-solid fa-magic-wand-sparkles fa-3x mb-3"></i>
              <h1 class="h1-sec5-card">{counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}</h1>
              <p class="sec5-card-para">Events</p>
            </div>
          </div>
        </div>
      </section>


   
      <section className="services-cards" id='services'>
        <div class="header">
          <h1>Services</h1>
          {/* <h1>Powered by AUCIS</h1> */}
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>DevOps</h2>
            <p>Streamlining your operations for efficiency and reliability in the digital age.</p>
            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
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
            <h2>Graphic Designer</h2>
            <p>Creating captivating visuals and dynamic content to engage your audience</p>
            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="container text-center mt-5" id='projects'>
        <p class="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
        <h1 class="text-center mb-5">Recently Completed Projects</h1>
        <Nav filterItem={filteritems} menuList={menuList} />
        <ProjectCards MenuData={MenuData} />
      </section>

      <section className="contact box1" id='contact'>
        <div className='contactus-section'>
          <div className="contact-us container">
            <div className="test1">
              <div className="text-center">
                <h2 className="main-heading fw-bold">
                  Contact Us
                </h2>
              </div>
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
                          <label htmlFor="" className="ml-1">Contact No.*</label>
                          <input type="tel" className="form-control  contact-input-feild-sub" id="contact-input-height" name="contactno" placeholder="Contact Number" maxLength={11} minLength={11} required></input>
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
                          <label htmlFor="" className="ml-1">Select Society*</label>

                          <select name="service" class="form-select contact-input-feild-sub" aria-label="Default select example" required>
                            <option selected>Open this select menu</option>
                            <option value="Technical Recruitment">Bits&Bytes</option>
                            <option value="DevSecOps">Shaoor Society</option>
                            <option value="Content Writing"> Islamic Society</option>
                            <option value="Software Quality Assurance"> Blood Donor</option>
                          </select>
                        </div>
                      </div>


                      <button
                        type="submit"
                        className="btn btn-warning shadow btn-lg mt-4 mb-5"
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