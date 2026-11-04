import ProductCard from "./ProductCard";

function Market() {
  const products = [
    {
      id: 1,
      name: "Framework Laptop 13",
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO651ZCF7ETVrh_fw13-family_overview_highlights_customize.jpg?auto=format%2Ccompress",
      description:
        "13-inch modular laptop with customizable expansion cards, bezels, and keyboard layouts.",
      price: 1099,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Framework Laptop 16",
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO7Z1ZCF7ETVrj_fw13-family_overview_highlights_upgrade.jpg?auto=format%2Ccompress",
      description:
        "16-inch performance laptop with upgradeable GPU, memory, and storage for years to come.",
      price: 1699,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Framework Laptop 12",
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO7J1ZCF7ETVri_fw13-family_overview_highlights_repair.jpg?auto=format%2Ccompress",
      description:
        "12-inch compact laptop — every part is replaceable with just the one tool in the box.",
      price: 849,
      isAvailable: false,
    },
  ];

  const handleAddToCart = (product) => {
    alert(`Added "${product.name}" to the cart for $${product.price}.`);
  };

  return (
    <section
      className="row g-3 align-items-stretch"
      aria-labelledby="products-heading"
    >
      <h2 id="products-heading" className="col-12 h2 mb-0">
        Laptops
      </h2>

      {products.length === 0 ? (
        <p className="col-12 bg-light text-center text-muted rounded py-4 mb-3 fw-bold">
          No laptops available right now.
        </p>
      ) : (
        products.map((product) => (
          <div
            className="col-12 col-sm-6 col-lg-4 product-card"
            key={product.id}
          >
            <ProductCard product={product} />
            <button
              type="button"
              className="btn btn-primary mt-2 w-100"
              onClick={() => handleAddToCart(product)}
              disabled={!product.isAvailable}
            >
              {product.isAvailable
                ? `Add to cart — $${product.price}`
                : "Out of stock"}
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default Market;
