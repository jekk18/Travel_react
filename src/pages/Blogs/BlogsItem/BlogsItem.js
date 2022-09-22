import React from 'react'; 
import '../Blogs.css';

const BlogsItem = (props) => {
    const onLinkMouseDown = (e) => {  // slick slider   draggable   work func
        e.preventDefault();
    }
  return (
     <div className='blog-item'>
        <a href={props.blogLink} className="blog-relative"  onMouseDown={onLinkMouseDown}>
            <div className="blog-img">
                <img src={props.img} alt="blog1" />
            </div>
            <div className="text-background-rgb">
                <h3>
                    {props.text}
                </h3>
            </div>
        </a>
     </div>
  )
}

export default BlogsItem