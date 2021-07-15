import React from "react";
import "./projects.scss";
import {AiFillGithub} from "react-icons/ai";
import {FaVimeoSquare} from "react-icons/fa";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="left">
				<ul className="projectlist">
					<li className={"dogbreed, active"}>
						Dog Breed Info
						<br />
						<a
							href="https://github.com/Jasonpatino94/My-Cli-Project"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://vimeo.com/manage/videos/444956672"
							rel="noreferrer"
							target="_blank"
						>
							<FaVimeoSquare />
						</a>
					</li>
					<li className="vehicleinventory">
						Vehicle Inventory
						<br />
						<a
							href="https://github.com/Jasonpatino94/Sinatra_project_inventories"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://vimeo.com/manage/videos/464845300"
							rel="noreferrer"
							target="_blank"
						>
							<FaVimeoSquare />
						</a>
					</li>
					<li className="vehiclesearch">
						Vehicle Seach app
						<br />
						<a
							href="https://github.com/Jasonpatino94/Vehicle-search"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://vimeo.com/488309006"
							rel="noreferrer"
							target="_blank"
						>
							<FaVimeoSquare />
						</a>
					</li>
					<li className="hangman">
						Hangman <br />
						<a
							href="https://github.com/Jasonpatino94/Hangman"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://vimeo.com/509313071"
							rel="noreferrer"
							target="_blank"
						>
							<FaVimeoSquare />
						</a>
					</li>
					<li className="workoutapp">
						Workout App
						<br />
						<a
							href="https://github.com/Jasonpatino94/My_workout_app"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillGithub className="icon" />
						</a>
						<a
							href="https://vimeo.com/575056140"
							rel="noreferrer"
							target="_blank"
						>
							<FaVimeoSquare className="icon" />
						</a>
					</li>
				</ul>
			</div>
			<div className="right"></div>
		</div>
	);
};

export default Projects;
