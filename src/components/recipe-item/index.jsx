import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="
      flex flex-col
      w-full
      sm:max-w-[320px]
      overflow-hidden
      p-5
      bg-white/75
      shadow-xl
      gap-5
      border-2
      rounded-2xl
      border-white
      transition-transform duration-300
      hover:scale-[1.02]
    ">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full h-full object-cover"
        />
      </div>

      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>

        <h3 className="font-bold text-xl sm:text-2xl truncate text-black">
          {item?.title}
        </h3>

        <Link
          to={`/recipe-item/${item?.id}`}
          className="
            inline-block
            mt-5
            px-6 sm:px-8
            py-3
            rounded-full
            bg-gradient-to-r from-orange-500 to-red-500
            text-white text-sm font-semibold uppercase tracking-wider
            shadow-lg transition-all duration-300
            hover:from-red-500 hover:to-orange-500
            hover:scale-105 hover:shadow-xl
          "
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
