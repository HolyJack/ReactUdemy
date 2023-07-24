import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "first book",
    description: "The very first book",
    price: 10,
  },
  {
    id: "p2",
    title: "Second book",
    description: "The second of them all.",
    price: 9,
  },
  {
    id: "p3",
    title: "Third book",
    description: "Third book ever created.",
    price: 6,
  },
];

const Products = (props) => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
