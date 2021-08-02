import React from "react";
import "./aboutme.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";
import {AiFillCaretDown} from "react-icons/ai";

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
					<img src="Pictures/me.jpg" alt="Jason" />
				</div>
			</div>
			<div className="content">
				<div className="text">
					{/* <h3>Hello My name is</h3>
					<h1>Jason Patino</h1> */}
					<h3>
						<span className="titlespin"></span> <br />
						<span className="title2" ref={title2Ref}></span>
					</h3>

					<h3 className="summary">
						Hello my name is <span className="name">Jason Patino</span> and I am
						a recent graduate from Flatiron School. In my freetime I love to
						watch videos and read more about coding, and if I'm not doing that
						then I am most likely at the firehouse volunteering for the
						comumunity as a firefighter.{" "}
					</h3>
				</div>

				<div className="next">
					<div className="nexticon">
						<h4>Projects</h4>
						<AiFillCaretDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
