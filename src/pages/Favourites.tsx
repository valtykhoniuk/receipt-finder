import RecipeCard from "../components/RecipeCard";
import { FavouritesProps } from "../utils/ types.js";

const Favourites: React.FC<FavouritesProps> = ({ recipes }) => {
  return (
    <div className="cards__container">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          calories={recipe.calories}
          desc={recipe.desc}
        />
      ))}
    </div>
  );
};

export default Favourites;
