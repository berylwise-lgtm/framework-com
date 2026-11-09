import ProductCard from "./ProductCard";

function Market({ products, cart, addToCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section
      className="row g-3 align-items-stretch"
      aria-labelledby="products-heading"
    >
      <div className="col-12 d-flex justify-content-between align-items-center mb-3">
        <h2 id="products-heading" className="h2 mb-0">
          Laptops
        </h2>
        {cart.length > 0 && (
          <div className="badge bg-success fs-6 p-2">
            Cart: {cart.length} item(s) — Total: ${cartTotal}
          </div>
        )}
      </div>

      {products.map((product) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-5" key={product.id}>
          <ProductCard product={product} />
          <button
            type="button"
            className="btn btn-primary mt-2 w-100"
            onClick={() => addToCart(product)}
            disabled={!product.isAvailable}
          >
            {product.isAvailable
              ? `Add to cart — $${product.price}`
              : "Out of stock"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Market;
