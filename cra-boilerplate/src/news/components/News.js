import React from 'react';

const News = (props) => {
	return (
    <div className="row pb-4">
        <div className="col-md-5">
            <div className="fh5co_hover_news_img">
                <div className="fh5co_news_img"><img src="images/ryan-moreno-98837.jpg" alt=""/></div>
                <div></div>
            </div>
        </div>
        <div className="col-md-7">
            <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
            nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
            April 18,2016 </a>
            <div className="fh5co_consectetur"> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore.
            </div>
            <ul className="fh5co_gaming_topikk pt-3">
                <li> Why 2017 Might Just Be the Worst Year Ever for Gaming</li>
                <li> Ghost Racer Wants to Be the Most Ambitious Car Game</li>
            </ul>
        </div>
    </div>
	)
}

export default News;