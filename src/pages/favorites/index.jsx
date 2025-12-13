import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-8 text-center">
          ❤️ Your Favorite Recipes
        </h2>

        {favoritesList && favoritesList.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoritesList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-700">
              😕 No favorites yet
            </h3>
            <p className="mt-2 text-gray-500">
              Add recipes to your favorites to see them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
