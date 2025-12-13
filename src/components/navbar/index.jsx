import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-3xl font-extrabold tracking-wide">
  <NavLink
    to="/"
    className="bg-gradient-to-r text-orange-600 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
  >
    FoodRecipe 🍕
  </NavLink>
</h2>


      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="search"
    value={searchParam}
    onChange={(event) => setSearchParam(event.target.value)}
    placeholder="Enter Items....."
    className="bg-white/80 p-3 px-10 rounded-full outline-none w-[400px] lg:w-[550px] shadow-lg shadow-red-200 focus:shadow-red-300 focus:ring-2 focus:ring-red-300 transition-all duration-300"
  />
</form>


      <ul className="flex gap-5">
  <li>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `px-5 py-2 rounded-full font-semibold transition-all duration-300
        ${
          isActive
            ? "bg-orange-500 text-white shadow-md"
            : "text-black hover:bg-orange-100"
        }`
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/favorites"
      className={({ isActive }) =>
        `px-5 py-2 rounded-full font-semibold transition-all duration-300
        ${
          isActive
            ? "bg-orange-500 text-white shadow-md"
            : "text-black hover:bg-orange-100"
        }`
      }
    >
      Favorites
    </NavLink>
  </li>
</ul>

    </nav>
  );
}