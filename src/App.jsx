import Topbar from "./components/Topbar/Topbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Aboutme from "./components/AboutMe/Aboutme";
import "./app.scss";

function App() {
	return (
		<div className="app">
			<Topbar />
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
