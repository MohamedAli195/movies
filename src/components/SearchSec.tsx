import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
interface IProps {
  searchWord:string,
  setSearchWord:(val:string)=>void,
  handlerSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}
function SearchSec( {searchWord,setSearchWord,handlerSubmit}:IProps) {
  const navigator = useNavigate()
  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setSearchWord(e.target.value)
  }
  
  
  return (
    <div className="bg-[#F3F1F1] p-10 my-5">
        <h2 className="my-5" >
        Welcome to our movie app
        </h2>
        <p className="my-5">Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form className="my-5" onSubmit={handlerSubmit} >
        <input placeholder="Search and explorer" name="searchWord" id="searchWord" value={searchWord} className="p-2" onChange={handlerChange}/>
        <button className="bg-[#FFE353] p-2">search</button>
        </form>
         
    </div>
  )
}

export default SearchSec