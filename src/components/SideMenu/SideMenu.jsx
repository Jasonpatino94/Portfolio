import React from "react";
import "./sidemenu.scss";

const SideMenu = ({openMenu, setOpenMenu}) => {
	return (
		<div className={"sidemenu " + (openMenu && "active")}>
			<ul>
				<li>
					{" "}
					<a href="#aboutme" onClick={() => setOpenMenu(!openMenu)}>
						About Me
					</a>{" "}
				</li>
				<li>
					{" "}
					<a href="#projects" onClick={() => setOpenMenu(!openMenu)}>
						Projects
					</a>
				</li>
				<li>
					{" "}
					<a href="#skills" onClick={() => setOpenMenu(!openMenu)}>
						Skills
					</a>{" "}
				</li>
				<li>
					{" "}
					<a href="#contact" onClick={() => setOpenMenu(!openMenu)}>
						Contact
					</a>{" "}
				</li>
			</ul>
		</div>
	);
};

export default SideMenu;
