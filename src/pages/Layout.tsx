import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import { LayoutProps } from "../utils/ types.js";

const Layout: React.FC<LayoutProps> = ({
  mealType,
  maxCalories,
  selectedIngredients,
  onMealTypeChange,
  onMaxCaloriesChange,
  onIngredientToggle,
  onClear,
}) => {
  return (
    <div className="app">
      <Header
        mealType={mealType}
        maxCalories={maxCalories}
        selectedIngredients={selectedIngredients}
        onMealTypeChange={onMealTypeChange}
        onMaxCaloriesChange={onMaxCaloriesChange}
        onIngredientToggle={onIngredientToggle}
        onClear={onClear}
      />

      <Outlet />
    </div>
  );
};

export default Layout;
