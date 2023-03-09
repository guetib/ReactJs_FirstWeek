const Movie = ({ film }) => {
    return (
        <div style={{
            border: '1px solid grey',
            padding: '10px',
            margin: '10px',
            width: '400px'
        }}>
            {film}
        </div>
    );
};
export default Movie;