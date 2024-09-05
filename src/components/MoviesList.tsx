import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import MovieCard from "./MovieCard"
import SearchSec from "./SearchSec"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IData, IMovie, IQuery } from "../interfaces"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

function MoviesList() {
    const [searchWord,setSearchWord] = useState("")
    const navigator = useNavigate()

    const [page,setPage] = useState(1)
    const pagePlus =()=>{
        setPage((prev)=> prev+1)
        console.log(page)
    }
    const pageMinus =()=>{
        setPage((prev)=> prev-1)

    }
    const handlerSubmit =(e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        navigator("/search", { state: { searchWord } })
        console.log(searchWord)
      }
    const {data,error,isLoading} =useQuery<IQuery|null>({
        queryKey: [`movieList-${page}`],
        queryFn: async () =>
             await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=79f56b7b036d8cef9f3ee927dc9117e3&page=${page}`).then((res) =>{return res}),
    })
    if(isLoading) {
        <h3>Loading...</h3>
    }
    console.log(data?.data?.results)
    console.log(page)
  return (
     <>
     <div className="container mx-auto">
     <SearchSec  searchWord={searchWord} setSearchWord={setSearchWord} handlerSubmit={handlerSubmit}/>

        <h2>Popular Movies</h2>
            <div  className=" rounded-sm grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-10 gap-4 m-5 p-5">
            {
                data?.data?.results.length ? data?.data.results.map((movie:IMovie)=>{
                    return (
                        <MovieCard movieInfo={movie} key={movie.id}/>
                    )
                }) 
                
                :"there is no movies"
            }
              </div>
              {
                data?.data?.results.length ? <div className="flex justify-around">
                <button onClick={pageMinus} disabled={page === 1 && true}><ArrowLeft /></button>
                {
                    `${page} from ${data?.data?.total_pages} `
                    
                }
                <button onClick={pagePlus} disabled={page === data?.data?.total_pages && true}  ><ArrowRight /></button>

            </div>:null
              }
        </div>
     </>
    
  )
}

export default MoviesList