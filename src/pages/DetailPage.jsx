import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        console.log(newData);

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
            <form onSubmit={handleSubmit}>
                <h4>Add your Review</h4>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input name="name" onChange={handleInputChange} type="text" className="form-control" id="nameInput" />
                </div>
                <div className="mb-3">
                    <label htmlFor="textInput" className="form-label">Text</label>
                    <textarea name="text" onChange={handleInputChange} className="form-control" id="textInput" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vote">Rating</label>
                    <select name="vote" onChange={handleInputChange} className="form-select" id="vote">
                        {votes.map(curVote => <option key={curVote} value={curVote}>{curVote}</option>)}
                    </select>
                </div>
                <button className="btn btn-primary mb-4" type="submit">Submit</button>
            </form>
            <section>
                {movie.reviews && movie.reviews.map((curRev, index) => <div key={index}>
                    {curRev.name}
                </div>)}
            </section>

        </>
    )

}

