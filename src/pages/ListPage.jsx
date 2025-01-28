import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function ListPage() {

    const apiUrl = import.meta.env.VITE_API_URL
    const [movieList, setMovieList] = useState([])
    const [search, setSearch] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

    // fare chiamata api per prenderli
    const genres = ['Science Fiction', 'Crime'];

    useEffect(() => {
        getPost()
    }, [selectedGenre])

    const getPost = () => {

        const params = {};
        if (search.length > 0) {
            params.search = search;
        }

        if (selectedGenre !== "") {
            params.genre = selectedGenre
        }

        axios.get(`${apiUrl}/movies`, { params }).then(resp => {
            setMovieList(resp.data)
        }
        )
    }

    return (
        <>
            <section>
                <select name="" id="" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="">Tutti</option>
                    {genres.map((curGenre, index) => (
                        <option key={index} value={curGenre}>
                            {curGenre}
                        </option>))}
                </select>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Cerca libri" />
                <button onClick={getPost}>Cerca</button>
                <ul>
                    <MovieCard movieList={movieList}></MovieCard>
                </ul>
            </section>
        </>
    )
}

export default ListPage
