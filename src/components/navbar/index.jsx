import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(255,140,66,0.12)]">
      <nav className="container mx-auto flex flex-col gap-5 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start">
          <NavLink
            to="/"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-orange-100/60 bg-gradient-to-r from-orange-50 via-amber-50 to-red-50 px-4 py-2 shadow-[0_10px_30px_rgba(255,140,66,0.16)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,99,71,0.22)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-pink-400/10 to-red-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-xl shadow-lg shadow-orange-300/50 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              🍕
            </span>

            <div className="relative flex flex-col leading-none">
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-lg font-extrabold tracking-wide text-transparent sm:text-xl">
                FoodRecipe
              </span>
              <span className="mt-1 text-[11px] font-medium text-orange-500 sm:text-xs">
                Tasty, colorful & quick finds
              </span>
            </div>
          </NavLink>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="order-3 w-full lg:order-2 lg:max-w-xl"
        >
          <div className="group flex w-full items-center overflow-hidden rounded-2xl border border-orange-200/70 bg-white/85 shadow-[0_10px_30px_rgba(255,140,66,0.12)] transition-all duration-500 focus-within:-translate-y-0.5 focus-within:border-orange-300 focus-within:shadow-[0_16px_40px_rgba(255,115,80,0.18)]">
            <div className="pl-4 text-lg sm:pl-5">🔎</div>

            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              placeholder="Search recipes like pizza, pasta, burger..."
              className="flex-1 bg-transparent px-3 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:px-4 sm:text-base"
            />

            <button
              type="submit"
              className="m-1.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-200/60 transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-95 sm:px-6 sm:text-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Nav Links */}
        <ul className="order-2 flex flex-wrap items-center justify-center gap-3 lg:order-3 lg:justify-end">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg shadow-orange-200/60"
                    : "border border-orange-100 bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 hover:text-orange-600 hover:shadow-md"
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
                `inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg shadow-orange-200/60"
                    : "border border-orange-100 bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 hover:text-orange-600 hover:shadow-md"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}