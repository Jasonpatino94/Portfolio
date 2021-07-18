import React from "react";
import "./skills.scss";

const Skills = () => {
	// eslint-disable-next-line
	const languages = [
		"ruby",
		"ruby on rails",
		"javascript",
		"SQLite",
		"React",
		"Redux",
		"HTML",
		"CSS",
		"SCSS",
	];
	return (
		<div className="skills" id="skills">
			<div className="left">
				<h1>Frontend</h1>
			</div>
			<div className="right">
				<h1>Backend</h1>
			</div>
		</div>
	);
};

export default Skills;
