import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading recipes... 🍳
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {recipeList && recipeList.length > 0 ? (
          <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6
  px-4
">
            {recipeList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800">
              🍔 No recipes found
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Search for your favorite food and start cooking!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
