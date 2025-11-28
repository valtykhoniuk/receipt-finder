import RecipeCard from "../components/RecipeCard";
import { HomeProps } from "../utils/ types.js";

const Home: React.FC<HomeProps> = ({ recipes }) => {
  return (
    <div className="cards__container">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          img={recipe.image}
          calories={recipe.calories}
          desc={recipe.desc}
        />
      ))}
    </div>
  );
};

export default Home;
