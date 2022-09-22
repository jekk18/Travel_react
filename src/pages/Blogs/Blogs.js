import React  from "react";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import './Blogs.css';
import Blog1 from '../../assets/img/Blog1.png'
import Blog2 from '../../assets/img/Blog2.png'
import Blog3 from '../../assets/img/Blog3.png'
import Blog4 from '../../assets/img/Blog4.png'
import BlogsItem from "./BlogsItem/BlogsItem";
 
 const arrr = [
    {
        image: Blog1,
        text: '10 Mistakes every first time traveller will make and how to avoid them!'
    },
    {
        image: Blog2,
        text: 'Whats it really like to move to a country where you don t speak the language?'
    },
    {
        image: Blog3,
        text: 'Exploring the quiet corners of Oslo | gallop around the globe.'
    },
    {
        image: Blog4,
        text: '11 things to know before you visit rainbow mountain in Peru.'
    },
    {
        image: Blog3,
        text: 'Exploring the quiet corners of Oslo | gallop around the globe.'
    },
    {
        image: Blog1,
        text: '10 Mistakes every first time traveller will make and how to avoid them!'
    },
 ];
 

const Blogs = () => {
    const settings = {
        dots: false, 
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
      };
      
  return (
     <section className='padding' style={{background: '#0A0D13'}}>
        <Container>
            <div className="important-title">
                <h1>Latest on the Blogs</h1>
                <div className="text">
                    We want to help you to travel better!
                </div>
            </div>
        </Container>
        <div className="blog-slider">
            <Slider {...settings}>
                  {arrr.map((item, index ) => (
                    <BlogsItem
                    img={item.image}
                    text={item.text}
                    key={index}
                    blogLink={'https://www.youtube.com/'}
                />
                  ))}
            </Slider>
        </div>
     </section>
  )
}

export default Blogs;