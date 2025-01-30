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
            <section className="container py-4">
                {/* Filtri e barra di ricerca */}
                <div className="row mb-4">
                    {/* Dropdown per il genere */}
                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                        >
                            <option value="">Tutti</option>
                            {genres.map((curGenre, index) => (
                                <option key={index} value={curGenre}>
                                    {curGenre}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Input di ricerca */}
                    <div className="col-md-5">
                        <input
                            className="form-control"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder="Cerca libri..."
                        />
                    </div>

                    {/* Bottone di ricerca */}
                    <div className="col-md-3">
                        <button onClick={getPost} className="btn btn-primary w-100">
                            Cerca
                        </button>
                    </div>
                </div>

                {/* Lista dei film con layout Bootstrap */}
                <ul className="row list-unstyled g-3">
                    <MovieCard movieList={movieList} />
                </ul>
            </section>

        </>
    )
}

export default ListPage
