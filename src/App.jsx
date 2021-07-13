import Topbar from "./components/Topbar/Topbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Aboutme from "./components/AboutMe/Aboutme";
import "./app.scss";
import {useState} from "react";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<div className="app">
			<Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<div className="components">
				<Aboutme />
				<Projects />
				<Skills />
				<Contact />
			</div>
		</div>
	);
}

export default App;
