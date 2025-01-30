import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

export default function DetailPage() {

    // Initial formData
    const initialFormData = {
        name: "",
        vote: 0,
        text: ""
    }

    const { id } = useParams()
    const apiUrl = import.meta.env.VITE_API_URL
    const [movie, setMovie] = useState([])
    const [formData, setFormData] = useState(initialFormData);

    const getMovie = () => {
        axios.get(`${apiUrl}/movies/${id}`).then(resp => {
            setMovie(resp.data.data)
        })
    }

    useEffect(() => {
        getMovie()
    }, [])

    // Send newData to DB on form submit
    const storeReview = (formData) => {
        axios.post(`${apiUrl}/movies/${id}/reviews`, formData).then(resp => {
            getMovie()
            setFormData(initialFormData)
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        const newData = { ...formData }
        newData[name] = value
        setFormData(newData)
    }

    // Function that handles form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        storeReview(formData)
    }

    const votes = Array.from(Array(6).keys());

    return (
        <>
            <div>
                <div>{movie.title}</div>
                <img src={`${apiUrl}/images/${movie.image}`} alt={movie.image} />
                <p>{movie.abstract}</p>
                <span>Genre: {movie.genre}</span>
            </div>
            <ReviewCard
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                formData={formData}
                votes={votes} />
            <section>
                {movie.reviews && movie.reviews.map((curRev, index) => <div key={index}>
                    {curRev.name}
                </div>)}
            </section>

        </>
    )

}

