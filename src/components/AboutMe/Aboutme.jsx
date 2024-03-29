import React from "react";
import "./aboutme.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";

const Aboutme = () => {
	// const titleRef = useRef();
	const title2Ref = useRef();

	// useEffect(() => {
	// 	init(titleRef.current, {
	// 		showCursor: false,
	// 		strings: [" Frontend ", " Backend ", " FullStack "],
	// 	});
	// }, []);

	useEffect(() => {
		init(title2Ref.current, {
			showCursor: true,
			strings: ["Engineer", "Developer"],
		});
	}, []);
	return (
    <div className="aboutme" id="aboutme">
      <div className="picture">
        <div className="me">
          <img src="Pictures/me2.jpg" alt="Jason" />
        </div>
      </div>
      <div className="content">
        <div className="text">
          <h3>
            <span className="titlespin"></span> <br />
            <span className="title2" ref={title2Ref}></span>
          </h3>

          <h3 className="summary">
            Hello, my name is <span className="name">Jason Patino</span>. I am
            an aspiring developer. In my free time I love to watch videos and
            read more about coding and different softwares. I also enjoy working
            on car, traveling, and photography/videography. I have also been a volunteer firefighter for 8 years.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
