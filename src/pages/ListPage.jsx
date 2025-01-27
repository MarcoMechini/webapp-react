import axios from "axios"
import { useEffect, useState } from "react"

function ListPage() {

    const apiUrl = import.meta.env.VITE_API_URL
    const [movieList, setMovieList] = useState(0)

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => {
        console.log(apiUrl);

        axios.get(`${apiUrl}/movies`).then(resp => {
            setMovieList(resp.data)
            console.log(resp.data)
        }
        )
    }

    return (
        <>
            <ul>
                {/* to do creare il componente card dei film */}
                <MovieCard value={movieList}></MovieCard>
                {movieList && movieList.map((curMovie) => (
                    <li key={curMovie.id}>
                        <div>{curMovie.title}</div>
                        <img src={`/images/${curMovie.image}`} alt={curMovie.image} />
                        <p>{curMovie.abstract}</p>
                        <span>Genre: {curMovie.genre}</span>
                        <span>Last Update: {curMovie.updated_at}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListPage
