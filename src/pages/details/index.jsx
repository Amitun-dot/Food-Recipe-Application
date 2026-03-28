import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  return (
    <div className="min-h-screen bg-[#f8f5ef] py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image Section */}
          <div className="row-start-2 lg:row-start-auto">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#eee3d2] bg-white p-3 shadow-[0_12px_40px_rgba(180,140,60,0.14)]">
              <div className="h-[280px] overflow-hidden rounded-[22px] sm:h-[380px] lg:h-[500px]">
                <img
                  src={recipeDetailsData?.recipe?.image_url}
                  alt={recipeDetailsData?.recipe?.title || "recipe item"}
                  className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-[#eee3d2] bg-white/90 p-6 shadow-[0_12px_40px_rgba(180,140,60,0.12)] backdrop-blur-md sm:p-8">
              <span className="inline-flex rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-700">
                {recipeDetailsData?.recipe?.publisher}
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                {recipeDetailsData?.recipe?.title}
              </h1>

              <div className="mt-6">
                <button
                  onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                  className="
                    relative inline-flex items-center justify-center overflow-hidden
                    rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em]
                    text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500
                    shadow-[0_10px_30px_rgba(255,100,100,0.35)]
                    transition-all duration-300 hover:scale-105
                    hover:shadow-[0_16px_40px_rgba(255,90,90,0.45)]
                    active:scale-95
                  "
                >
                  <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 hover:translate-x-[100%]" />
                  <span className="relative z-10">
                    {favoritesList &&
                    favoritesList.length > 0 &&
                    favoritesList.findIndex(
                      (item) => item.id === recipeDetailsData?.recipe?.id
                    ) !== -1
                      ? "Remove from favorites"
                      : "Add to favorites"}
                  </span>
                </button>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="rounded-[28px] border border-[#eee3d2] bg-white/90 p-6 shadow-[0_12px_40px_rgba(180,140,60,0.12)] backdrop-blur-md sm:p-8">
              <h2 className="mb-6 text-2xl font-extrabold tracking-wide text-amber-600 sm:text-3xl">
                Ingredients
              </h2>

              <ul className="grid gap-4">
                {recipeDetailsData?.recipe?.ingredients?.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-[#fffaf2] px-4 py-4 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm text-white shadow">
                      ✓
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {(ingredient.quantity || ingredient.unit) && (
                        <span className="text-base font-bold text-gray-800 sm:text-lg">
                          {ingredient.quantity ? ingredient.quantity : ""}{" "}
                          {ingredient.unit ? ingredient.unit : ""}
                        </span>
                      )}
                      <span className="text-base font-medium text-gray-700 sm:text-lg">
                        {ingredient.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}