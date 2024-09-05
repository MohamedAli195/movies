import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import RootLayOut from "../components/RootLayOut";
import MoviesList from "../components/MoviesList";
import SearchPage from "../components/SearchPage";
import WishListPage from "../components/WishListPage";
import Movie from "../components/Movie";

export  const router = createBrowserRouter(createRoutesFromChildren([

    <Route path="/" element={ <RootLayOut />}>
        <Route index element={<>
            <MoviesList />
            </>} />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="search" element = {<SearchPage />} />
            <Route path="movie/:id" element = {<Movie />} />
    </Route>
]))