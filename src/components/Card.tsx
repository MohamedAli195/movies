import React from 'react'
import { IMovie } from '../interfaces'
import { useDispatch } from 'react-redux'
import { addMovieToCart } from '../app/featuers/cartSlice'
import { Heart } from 'lucide-react'
interface IProps {
    movie:IMovie
}
function Card({movie}:IProps) {
    const dispatch = useDispatch()
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Avatar of Jonathan Reinink" className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />

                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <h2 className="text-gray-900 font-bold text-xl mb-2">{movie.title}</h2>
                        <p className="text-gray-700 text-base">{movie.release_date}</p>
                          <p>{movie.vote_count}</p>  
                        <p className="text-gray-700 text-base">{movie.overview}</p>
                        <button onClick={()=>dispatch(addMovieToCart(movie))}>
                    <Heart className="" />
                </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card