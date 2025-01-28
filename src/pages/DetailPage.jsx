import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function DetailPage() {

    const { id } = useParams()
    const apiUrl = import.meta.env.VITE_API_URL
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/movies/${id}`).then(resp => {
            setMovie(resp.data.data)
        })
    }, [])


    return (
        <>
            <div>{movie.title}</div>
            <img src={`${apiUrl}/images/${movie.image}`} alt={movie.image} />
            <p>{movie.abstract}</p>
            <span>Genre: {movie.genre}</span>
            <section>
                {movie.reviews && movie.reviews.map(curRev => <div key={curRev.name}>
                    {curRev.name}
                </div>)}
            </section>
        </>
    )

}

