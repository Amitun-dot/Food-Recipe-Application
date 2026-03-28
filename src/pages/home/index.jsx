import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-[#faf7f2]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin"></div>
          <p className="text-lg font-semibold text-amber-600 tracking-wide">
            Preparing delicious recipes...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f2] py-12">
      
      {/* Soft luxury glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {recipeList && recipeList.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-8
            "
          >
            {recipeList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            
            {/* Premium Card */}
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg border border-amber-100 shadow-[0_10px_40px_rgba(180,140,60,0.15)] px-10 py-12 max-w-md">
              
              <div className="text-5xl mb-4 animate-bounce">🍽️</div>

              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800">
                No recipes found
              </h2>

              <p className="mt-3 text-gray-600 text-base sm:text-lg">
                Try searching something like{" "}
                <span className="text-amber-600 font-semibold">
                  pasta, pizza, desserts
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}