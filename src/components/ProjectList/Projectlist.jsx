import React from "react";
import "./projectlist.scss";
import {AiFillGithub} from "react-icons/ai";
import {FaVimeoSquare} from "react-icons/fa";
import {useState} from "react";

const Projectlist = () => {
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

	return (
		<ul className="projectlist">
			{sidebarlist.map((item) => (
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
				</li>
			))}
		</ul>
	);
};

export default Projectlist;
