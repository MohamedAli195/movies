import { Heart } from "lucide-react"
import { IMovie } from "../interfaces"
import { useDispatch } from "react-redux"
import { addMovieToCart } from "../app/featuers/cartSlice"
import { Link } from "react-router-dom"
interface IProps {
    movieInfo:IMovie
}

function MovieCard({movieInfo}:IProps) {
    const dispatch = useDispatch()

    return (
        <div>
            <div className="mb-10 static " >
                <div className="rounded-md"  ><img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title} /></div>
                <span className="p-2 text-white rounded-full bg-gray-800 Absolute bottom-0 left-0 w-15 h-15">85%</span>
            </div>
            <h3> <Link to={`/movie/${movieInfo.id}`} state={movieInfo}>{movieInfo.title}</Link></h3>
            <div className="flex justify-between">
                <p>{movieInfo.release_date}</p>
                <button onClick={()=>dispatch(addMovieToCart(movieInfo))}>
                    <Heart className="" />
                </button>
            </div>

        </div>
    )
}

export default MovieCard