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
  className="
    inline-flex
    items-center
    gap-2
    text-orange-600
    font-extrabold
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-orange-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  <span>FoodRecipe</span>
  <span className="leading-none">🍕</span>
</NavLink>


</h2>


  <form onSubmit={handleSubmit} className="w-full flex justify-center px-2">
  <div
    className="
      flex
      w-full
      max-w-[520px]
      bg-white/80
      rounded-full
      shadow-lg shadow-red-200
      overflow-hidden
      focus-within:ring-2
      focus-within:ring-red-300
    "
  >
    <input
      type="text"
      name="search"
      value={searchParam}
      onChange={(e) => setSearchParam(e.target.value)}
      placeholder="Enter items..."
      className="
        flex-1
        min-w-0
        px-4 sm:px-6
        py-3
        outline-none
        bg-transparent
        text-gray-700
      "
    />

    <button
      type="submit"
      className="
        px-4 sm:px-7
        py-3
        bg-gradient-to-r from-orange-500 to-red-500
        text-white
        font-semibold
        uppercase text-xs sm:text-sm
        tracking-wide
        transition-all duration-300
        hover:from-red-500 hover:to-orange-500
        active:scale-95
        whitespace-nowrap
      "
    >
      Search
    </button>
  </div>
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