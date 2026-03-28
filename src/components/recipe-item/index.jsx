import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div
      className="
        group flex flex-col w-full overflow-hidden rounded-3xl
        border border-[#eee3d2] bg-[#fffdf9]
        shadow-[0_10px_35px_rgba(180,140,60,0.12)]
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(180,140,60,0.18)]
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-wide text-amber-700">
          {item?.publisher}
        </span>

        <h3 className="line-clamp-2 min-h-[64px] text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
          {item?.title}
        </h3>

        {/* Button */}
        <div className="mt-6">
          <Link
            to={`/recipe-item/${item?.id}`}
            className="
              relative inline-flex items-center justify-center
              overflow-hidden rounded-full px-7 py-3
              text-sm font-semibold uppercase tracking-[0.15em]
              text-white
              bg-gradient-to-r from-pink-500 via-red-500 to-orange-500
              shadow-[0_8px_25px_rgba(255,100,100,0.35)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_14px_40px_rgba(255,80,80,0.45)]
              active:scale-95
            "
          >
            {/* Shine effect */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:translate-x-[100%]" />

            <span className="relative z-10">Recipe Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;