import React from 'react';
import '../css/projects.css'
function Projects(props) {
    return(
        <div className="blog ">
            <div className="blog-post">
                <div className="blog-post_img">
                    <img src="https://source.unsplash.com/random"/>
                </div>
        <div className="blog-post_info">
            
            <h1 className="blog-post_title">Project Name</h1>
            <p className="blog-post_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum necessitatibus maiores maxime impedit qui aliquid libero soluta a? Beatae nobis porro blanditiis totam laboriosam at dolorum ipsum voluptatem unde
            </p>
            <a href="#" className="blog-post_cta">Read more</a>
        </div>
    </div>
        </div>
    )
}
export default Projects;