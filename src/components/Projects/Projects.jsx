import React from "react";
import "./projects.scss";
import Projectlist from "../ProjectList/Projectlist";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="left">
				<Projectlist />
			</div>
			<div className="right">
				<div className="picture">
					{/* <h1>Hangman</h1> */}
					<img src="Pictures/hangman.PNG" className="hangman" alt=""></img>
				</div>
			</div>
		</div>
	);
};

export default Projects;
