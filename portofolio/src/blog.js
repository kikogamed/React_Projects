import "./blog.css";
import Heading from "./sectionHeading.tsx";
import blog1 from "./imgs/b1.png";
import blog2 from "./imgs/b2.png";
import blog3 from "./imgs/b3.png";

function Blog() {
    return (
        <div className="blog" id="blog">
            <Heading name={"Blog"} />

            <div className="blog-cards">

                <div className="blog-card">
                    <div className="wrap">
                        <div className="walker"></div>
                    </div>
                    <div className="blog-img">
                        <img src={blog1} alt="blogImg"></img>
                    </div>
                    <div className="card-txt">
                        <h3>Master These Awesome</h3>
                        <p className="title">By Ma3lem KIKO Jun 27, 2006</p>
                        <p>Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="wrap">
                        <div className="walker"></div>
                    </div>
                    <div className="blog-img">
                        <img src={blog2} alt="blogImg"></img>
                    </div>
                    <div className="card-txt">
                        <h3>Best Design Items to Appeal</h3>
                        <p className="title">By Bozza Jan 32, 2026</p>
                        <p>Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="wrap">
                        <div className="walker"></div>
                    </div>
                    <div className="blog-img">
                        <img src={blog3} alt="blogImg"></img>
                    </div>
                    <div className="card-txt">
                        <h3>The 20 Best Lightroom Presets</h3>
                        <p className="title">By Coach Hoba Feb 2, 2023</p>
                        <p>Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog;