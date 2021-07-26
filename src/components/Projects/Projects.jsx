import React from "react";
import "./projects.scss";
import Projectlist from "../ProjectList/Projectlist";
import {useEffect, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";

const Projects = () => {
	const sidebarlist = [
		{
			id: 1,
			name: "Dog Breed",
			git: "https://github.com/Jasonpatino94/My-Cli-Project",
			video: "https://vimeo.com/manage/videos/444956672",
		},
		{
			id: 2,
			name: "Vehicle Inventory",
			git: "https://github.com/Jasonpatino94/Sinatra_project_inventories",
			video: "https://vimeo.com/manage/videos/464845300",
		},
		{
			id: 3,
			name: "Vehicle Search App",
			git: "https://github.com/Jasonpatino94/Vehicle-search",
			video: "https://vimeo.com/488309006",
		},
		{
			id: 4,
			name: "Hangman",
			git: "https://github.com/Jasonpatino94/Hangman",
			video: "https://vimeo.com/509313071",
		},
		{
			id: 5,
			name: "Workout App",
			git: "https://github.com/Jasonpatino94/My_workout_app",
			video: "https://vimeo.com/575056140",
		},
	];
	const [chosen, setChosen] = useState(1);
	const [img, setImg] = useState([]);

	useEffect(() => {
		switch (chosen) {
			case 1:
				setImg("Pictures/dogbreed.PNG");
				break;
			case 2:
				setImg("Pictures/inventory.PNG");
				break;
			case 3:
				setImg("Pictures/vehiclesearch.PNG");
				break;
			case 4:
				setImg("Pictures/hangman.PNG");
				break;
			case 5:
				setImg("Pictures/workout.PNG");
				break;
			default:
				setImg("Pictures/dogbreed.PNG");
		}
	}, [chosen]);

	return (
		<div className="projects" id="projects">
			<div className="left">
				<Projectlist
					list={sidebarlist}
					setChosen={setChosen}
					chosen={sidebarlist.id}
				/>
			</div>
			<div className="right">
				{/* <h1>Projects</h1> */}
				<div className="picture">
					<img src={img} alt="" />
				</div>
				<div className="skill">
					<h4>Skills</h4>
					<AiFillCaretDown />
				</div>
			</div>
		</div>
	);
};

export default Projects;
