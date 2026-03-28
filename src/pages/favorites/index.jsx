import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-[#f8f5ef] py-12">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h2 className="
          text-3xl lg:text-4xl font-extrabold text-center mb-10
          bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500
          bg-clip-text text-transparent
        ">
          ❤️ Your Favorite Recipes
        </h2>

        {favoritesList && favoritesList.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoritesList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[60vh] px-4">
            
            {/* Empty State Card */}
            <div className="
              flex flex-col items-center text-center
              rounded-3xl bg-white/80 backdrop-blur-md
              border border-[#eee3d2]
              shadow-[0_12px_40px_rgba(180,140,60,0.15)]
              px-10 py-12 max-w-md
            ">
              <div className="text-5xl mb-4 animate-bounce">💔</div>

              <h3 className="text-2xl font-bold text-gray-800">
                No favorites yet
              </h3>

              <p className="mt-3 text-gray-600 text-base">
                Start adding recipes you love ❤️  
                and they’ll appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}