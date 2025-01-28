export default function MovieCard({ movieList }) {

    const movie = movieList.data
    const apiUrl = import.meta.env.VITE_API_URL
    return (
        <>
            {movie && movie.map((curMovie) => (
                <li key={curMovie.id}>
                    <div>{curMovie.title}</div>
                    <img src={`${apiUrl}/images/${curMovie.image}`} alt={curMovie.image} />
                    <p>{curMovie.abstract}</p>
                    <span>Genre: {curMovie.genre}</span>
                    <span>Last Update: {curMovie.updated_at}</span>
                </li>
            ))}
        </>
    )
}