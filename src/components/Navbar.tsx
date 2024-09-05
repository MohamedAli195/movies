import { useSelector } from "react-redux"
import { selectcart } from "../app/featuers/cartSlice"
import { NavLink } from "react-router-dom"

function Navbar() {
    const wish = useSelector(selectcart)
    console.log(wish)
    return (
        <div className="bg-[#FFE353] text-black p-5">
            <ul className="flex justify-between">
                <li className="mr-6">
                    <NavLink className="" to="/">Movie App</NavLink>
                </li>
                
                <div className="flex">
                <li className="mr-6">
                    <NavLink className="" to="#">EN</NavLink>
                </li>
                <li className="mr-6">
                    <NavLink className="" to="/wishlist">WatchList ( {wish.cart.length} )</NavLink>
                </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar