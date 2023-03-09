import { useState } from "react";
import Movie from "../components/Movies/Movie";
const Movies = () => {

    const [films, setFilms] = useState([
        'preason break',
        'jungo',
        'roi lion'
    ]);
    const [inputMovie, setInputMovie] = useState('');

    const handleChange = e => {
        setInputMovie(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        // const MoviesTemp = [...films]
        // MoviesTemp.push(inputMovie)
        // setFilms(MoviesTemp)

        setFilms([...films, inputMovie])
        setInputMovie('')
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Movies</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputMovie} onChange={handleChange} />
                <button type="submit" >Ajouter Movie</button>
            </form>
            {
                films.map((vfilm, index) => (
                    < Movie key={index} film={vfilm} />
                ))

            }


        </div>
    );
};

export default Movies;