import { RouterProvider } from "react-router-dom"
import MoviesList from "./components/MoviesList"
import Navbar from "./components/Navbar"
import Search from "./components/SearchSec"
import { router } from "./router"

function App() {

  return (
    <>
      {/* <Navbar />
      <div className="container mx-auto">
        <Search />
        <MoviesList />
      </div> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
