import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">Accueil</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/squares">Squartes</Link>
			<Link to="/formulaires">Formulaires</Link>
			<Link to="/computer">Computer</Link>
			<Link to="/background">Background</Link>
			<Link to="/arrays">Arrays</Link>
			<Link to="/movies">Movies</Link>
			<Link to="/stateup">StateUp</Link>
			<Link to="/converter">Converter</Link>
			<Link to="/todolist">TodoList</Link>
		</div>
	)
}



export default Navbar