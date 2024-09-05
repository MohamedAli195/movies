import { useSelector } from "react-redux"
import { selectcart } from "../app/featuers/cartSlice"
import MovieCard from "./MovieCard"
import Card from "./Card"

function WishListPage() {
    const wish = useSelector(selectcart)

  return (
    <div>

<div  className=" rounded-sm grid grid-cols-1 md:grid-cols-2  gap-4 m-5 p-5">
            {
            wish.cart.length ? wish.cart.map((movie)=>{
                    return (
                        // <MovieCard movieInfo={movie} key={movie.id}/>
                        <Card movie={movie}  key={movie.id}/>
                    )
                }) 
                
                :"there is no movies"
            }
              </div>
    </div>
  )
}

export default WishListPage