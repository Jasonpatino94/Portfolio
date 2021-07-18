import React from "react";
import "./projectlist.scss";
import {AiFillGithub} from "react-icons/ai";
import {FaVimeoSquare} from "react-icons/fa";
// import {useState} from "react";

const Projectlist = ({list, setChosen, chosen}) => {
	return (
		<ul className="projectlist">
			{list.map((item) => (
				<li
					className={chosen === item.id ? "active" : "nonactive"}
					key={item.id}
					onClick={() => setChosen(item.id)}
				>
					{item.name}
					<br />
					<a href={item.git} rel="noreferrer" target="_blank" className="link">
						<AiFillGithub />
					</a>
					<a
						href={item.video}
						rel="noreferrer"
						target="_blank"
						className="link"
					>
						<FaVimeoSquare />
					</a>
					{console.log()}
				</li>
			))}
		</ul>
	);
};

export default Projectlist;
