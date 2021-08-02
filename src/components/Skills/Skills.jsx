import React from "react";
import "./skills.scss";
import {frontend, backend} from "./languages";

const Skills = () => {
	// eslint-disable-next-line

	return (
		<div className="skills" id="skills">
			<div className="left">
				<h1>Frontend</h1>
				<div className="languages">
					{frontend.map((skill) => (
						<div className="language" key={skill.id}>
							<h2>{skill.name}</h2>
							<img src={skill.img} alt="" />
						</div>
					))}
				</div>
			</div>
			<div className="right">
				<h1>Backend</h1>
				<div className="languages">
					{backend.map((skill) => (
						<div className="language" key={skill.id}>
							<h2>{skill.name}</h2>
							<img src={skill.img} alt="" className={skill.id} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
