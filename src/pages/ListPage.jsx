import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function ListPage() {

    const apiUrl = import.meta.env.VITE_API_URL
    const [movieList, setMovieList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => {

        const params = {};
        if (search.length > 0) {
            params.search = search;
        }

        axios.get(`${apiUrl}/movies`, { params }).then(resp => {
            setMovieList(resp.data)
        }
        )
    }

    return (
        <>
            <section>
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
