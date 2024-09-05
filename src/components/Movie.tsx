import { ArrowLeft, ArrowRight, Heart } from "lucide-react"
import { addMovieToCart } from "../app/featuers/cartSlice"
import { IMovie, IQuery } from "../interfaces"
import { useDispatch } from "react-redux"
import { Link, useLocation, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

function Movie() {
    const dispatch = useDispatch()
    const [apiRes,setApiRes] = useState<AxiosResponse | null>(null)
    

    console.log(apiRes)
    const [recommendations,setRecommedations] = useState<IMovie[]>([])
    const {id} = useParams()
    const {data,error,isLoading} =useQuery({
      queryKey: [`movieList-${id}`],
      queryFn: async () =>
           await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=79f56b7b036d8cef9f3ee927dc9117e3`).then((res) =>{return res}),
  })
  const [page,setPage] = useState(1)
  const pagePlus =()=>{
      setPage((prev)=> prev+1)
  }
  const pageMinus =()=>{
      setPage((prev)=> prev-1)

  }
//   const {data,error2,isLoading2} =useQuery({
//     queryKey: [`movieList-${id}`],
//     queryFn: async () =>
//          await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=79f56b7b036d8cef9f3ee927dc9117e3`).then((res) =>{return res}),
// })
useEffect(()=>{
  axios
  .get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=79f56b7b036d8cef9f3ee927dc9117e3&page=${page}`)
  .then((res) => {
    setApiRes(res)
    setRecommedations(res.data.results)
  })
        
         },[page])
    console.log(recommendations)
  return (
    <>
    <div className="container mx-auto">
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <img src={`https://image.tmdb.org/t/p/w500/${data?.data.poster_path}`} alt="Avatar of Jonathan Reinink" className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />

                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <h2 className="text-gray-900 font-bold text-xl mb-2">{data?.data.title}</h2>
                        <p className="text-gray-700 text-base">{data?.data.release_date}</p>
                          <p>{data?.data.vote_count}</p>  
                        <p className="text-gray-700 text-base">{data?.data.overview}</p>
                        <button onClick={()=>dispatch(addMovieToCart(data?.data))}>
                    <Heart className="" />
                </button>
                    </div>
                </div>
            </div>
            <div>
              <h3>Recommendations</h3>
              
              <div  className=" rounded-sm grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-10 gap-4 m-5 p-5">
            {
                recommendations.length ? recommendations.map((movie:IMovie)=>{
                    return (
                        <MovieCard movieInfo={movie} key={movie.id}/>
                    )
                }) 
                
                :"there is no movies"
            }
              </div>
              {
                recommendations.length ? <div className="flex justify-around">
                <button onClick={pageMinus} disabled={page === 1 && true}><ArrowLeft /></button>
                {
                    
                     `${page} from ${apiRes?.data?.total_pages} `
                    
                }
                <button onClick={pagePlus} disabled={page === apiRes?.data?.total_pages && true}  ><ArrowRight /></button>

            </div>:null
              }

            </div>
    </div>
    
    </>
   
    
    

  )
}

export default Movie