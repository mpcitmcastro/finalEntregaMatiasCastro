import RecipeReviewCard from "../RecipeReviewCard";

const ProductList = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
    </ul>
  );
};

export default ProductList;
