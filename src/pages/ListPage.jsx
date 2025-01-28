import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

function ListPage() {

    const apiUrl = import.meta.env.VITE_API_URL
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => {
        console.log(apiUrl);

        axios.get(`${apiUrl}/movies`).then(resp => {
            setMovieList(resp.data)
        }
        )
    }

    return (
        <>
            <ul>
                <MovieCard movieList={movieList}></MovieCard>
            </ul>
        </>
    )
}

export default ListPage
