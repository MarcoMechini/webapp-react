import { Link } from "react-router-dom";

export default function MovieCard({ movieList }) {
    const movie = movieList.data;
    const apiUrl = import.meta.env.VITE_API_URL;

    return (
        <>
            {movie && movie.map((curMovie) => (
                <li key={curMovie.id} className="col-md-4 d-flex">
                    <div className="card p-3 shadow-sm rounded w-100">
                        <div className="fw-bold fs-5">{curMovie.title}</div>
                        <img
                            src={`${apiUrl}/images/${curMovie.image}`}
                            alt={curMovie.image}
                            className="img-fluid rounded mb-2"
                            style={{ height: "200px", objectFit: "cover", width: "100%" }}
                        />
                        <p className="text-muted">{curMovie.abstract}</p>
                        <span className="badge bg-primary me-2">Genre: {curMovie.genre}</span>
                        <span className="text-muted d-block mb-2">Last Update: {curMovie.updated_at}</span>
                        <Link to={`/ListPage/${curMovie.id}`} className="btn btn-sm btn-outline-primary">
                            Dettagli
                        </Link>
                    </div>
                </li>
            ))}
        </>
    );
}
