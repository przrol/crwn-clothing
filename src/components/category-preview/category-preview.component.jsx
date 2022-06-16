import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {CategoryPreviewView,CategoryPreviewTitle,CategoryPreviewContainer} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewView>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewView>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
