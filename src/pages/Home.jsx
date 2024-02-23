import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg from '../assets/images/hero-img01.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
  return (<>
  
    {/* =======hero section start============== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Travelling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum delectus cum officia ratione voluptate velit. Ratione, ut eius facilis esse omnis molestiae? Saepe enim sint, laborum doloribus debitis explicabo?</p>

            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls autoPlay/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* =======hero section end============== */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">Where we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>


    {/*==================featured tour section start=====================*/}

    <section>
      <Container>
        <Row>
          <Col>
          <Subtitle subtitle={"Explore"}/>
          <h2 className="featured__tour-title">Our Featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>


    {/*=================featured tour section end===============*/}
    {/* ==============Experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>Lorem ipsum dolor sit
                <br/>  illum saepe id tempore reiciendis distinctio laboriosam, deleniti tenetur
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box"><span>12k+</span>
              <h6>Successful Trip</h6></div>
              <div className="counter__box"><span>2k+</span>
              <h6>Regular Clients </h6></div>
              <div className="counter__box"><span>15+</span>
              <h6>Years experience</h6></div>
            </div>
            
          </Col>
          <Col lg="6">
            <img src={experienceImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ==============Experience section end */}
    {/* ==============gallery section start */}
    <section>
      <Container>
        <Row>
          <Col>
          <Subtitle subtitle={`Gallery`}/>
          <h2 className="gallery__title">Visit Our customer tour gallery
          </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ==============gallery section end */}
    {/* ==================Testimonial Section start============== */}
    <section>
      <Container>
        <Row>
          <Col>
          <Subtitle subtitle={`Fans Love`}/>
          <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ==================Testimonial Section end============== */}
    <Newsletter/>
    </>)
}

export default Home