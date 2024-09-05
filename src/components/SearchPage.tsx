import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import MovieCard from "./MovieCard"
import SearchSec from "./SearchSec"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IData, IMovie } from "../interfaces"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
function SearchPage() {
    const [searchWord,setSearchWord] = useState("")
    const navigator = useNavigate()
    const {state} = useLocation()
    
     const [page,setPage] = useState(1)
    const pagePlus =()=>{
        setPage((prev)=> prev+1)
        console.log(page)
    }
    const pageMinus =()=>{
        setPage((prev)=> prev-1)
        console.log(page)

    }

    const handlerSubmit =(e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        navigator("/search", { state: { searchWord } })
        
      }


    const {data,isLoading} =useQuery({
        queryKey: [`movieList-${searchWord}-${page}`],
        queryFn: async () =>
        
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79f56b7b036d8cef9f3ee927dc9117e3&query=${state.searchWord}&page=${page}`).then((res) =>{return res}),
    
        })
    if(isLoading) {
        <h3>Loading...</h3>
    }
    console.log(data)
    console.log(searchWord)
    console.log(state.searchWord)

    
    
  return (
     <>
     
     <div className="container mx-auto">
     <SearchSec  searchWord={searchWord} setSearchWord={setSearchWord} handlerSubmit={handlerSubmit}/>
    
        <h2>Search Results for :{state.searchWord}</h2>
            
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

export default SearchPage