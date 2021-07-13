import React from "react";
import "./topbar.scss";
import {AiFillMail, AiFillPhone} from "react-icons/ai";

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
					<div className="mainlogo">
						<a href="#aboutme"> Welcome </a>
					</div>
				</div>
				<div className="middle">
					<div className="icon">
						<AiFillMail />
						<span>Jason.patino94@gmail.com</span>
					</div>
					<div className="icon">
						<AiFillPhone id="icon" />
						<span>(609)433-7920</span>
					</div>
				</div>
				<div className="right">
					<div className="menu">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
