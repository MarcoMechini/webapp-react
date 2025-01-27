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
        }
        )
    }

    return (
        <>
            <h1>post</h1>
            <ul>
                {movieList && movieList.map((curMovie) => (
                    <li key={curMovie.id}>
                        <span>{curMovie.title}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListPage
