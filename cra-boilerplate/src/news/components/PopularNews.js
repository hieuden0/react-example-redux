import React from 'react';
import tempImg from '../../images/thumnail.jpg';

const PopularNews = (props) => {
	return (
    <div className="col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
        <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
        </div>
        <div className="clearfix"></div>
        <div className="fh5co_tags_all">
            <a href="" className="fh5co_tagg">Business</a>
            <a href="" className="fh5co_tagg">Technology</a>
            <a href="" className="fh5co_tagg">Sport</a>
            <a href="" className="fh5co_tagg">Art</a>
            <a href="" className="fh5co_tagg">Lifestyle</a>
            <a href="" className="fh5co_tagg">Three</a>
            <a href="" className="fh5co_tagg">Photography</a>
            <a href="" className="fh5co_tagg">Lifestyle</a>
            <a href="" className="fh5co_tagg">Art</a>
            <a href="" className="fh5co_tagg">Education</a>
            <a href="" className="fh5co_tagg">Social</a>
            <a href="" className="fh5co_tagg">Three</a>
        </div>
        <div>
            <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
        </div>
        <div className="row pb-3">
            <div className="col-5 align-self-center">
                <img src= {tempImg} alt="img" className="fh5co_most_trading"/>
            </div>
            <div className="col-7 paddding">
                <div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
                <div className="most_fh5co_treding_font_123"> April 18, 2016</div>
            </div>
        </div>
        <div className="row pb-3">
            <div className="col-5 align-self-center">
                <img src={tempImg} alt="img" className="fh5co_most_trading"/>
            </div>
            <div className="col-7 paddding">
                <div className="most_fh5co_treding_font"> Enim ad minim veniam nostrud xercitation ullamco.</div>
                <div className="most_fh5co_treding_font_123"> April 18, 2016</div>
            </div>
        </div>
        <div className="row pb-3">
            <div className="col-5 align-self-center">
                <img src={tempImg} alt="img" className="fh5co_most_trading"/>
            </div>
            <div className="col-7 paddding">
                <div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
                <div className="most_fh5co_treding_font_123"> April 18, 2016</div>
            </div>
        </div>
        <div className="row pb-3">
            <div className="col-5 align-self-center">
                <img src={tempImg} alt="img" className="fh5co_most_trading"/>
            </div>
            <div className="col-7 paddding">
                <div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
                <div className="most_fh5co_treding_font_123"> April 18, 2016</div>
            </div>
        </div>
    </div>
	)
}

export default PopularNews;