import React from "react";
import "./topbar.scss";
import {AiFillMail, AiFillPhone} from "react-icons/ai";

const Topbar = ({openMenu, setOpenMenu}) => {
	return (
		<div className={"topbar " + (openMenu && "active")}>
			<div className="wrapper">
				<div className="left">
					<div className="mainlogo">
						<a href="#aboutme"> Welcome </a>
					</div>
				</div>
				<div className="middle">
					<div className="icon">
						<AiFillMail className="picture" />
						<span className="email">Jason.patino94@gmail.com</span>
					</div>
					<div className="icon">
						<AiFillPhone className="picture" />
						<span className="number">(609) 433-7920</span>
					</div>
				</div>
				<div className="right">
					<button className="menu" onClick={() => setOpenMenu(!openMenu)}>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
