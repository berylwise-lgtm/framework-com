import ProductCard from "./ProductCard";

function Market() {
  const products = [
    {
      id: 1,
      name: "Framework Laptop 12 (Intel® Core™ Series 3)",
      image: "https://static.frame.work/vnhapdfuirbckad88ctfkwlb0hjg",
      description:
        "13-inch modular laptop with customizable expansion cards, bezels, and keyboard layouts.",
      price: 699,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Framework Laptop 12 DIY Edition (Intel® Core™ Series 3)",
      image: "https://static.frame.work/dmgr8ou5tmk5podprsmlm0wlq9vw",
      description:
        "16-inch performance laptop with upgradeable GPU, memory, and storage for years to come.",
      price: 549,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Framework Laptop 13 Pro DIY Edition (AMD Ryzen™ AI 300 Series)",
      image: "https://static.frame.work/u2h7dlre8cgys5k97odeo4gqjd0v",
      description:
        "12-inch compact laptop — every part is replaceable with just the one tool in the box.",
      price: 1399,
      isAvailable: false,
    },
    {
      id: 4,
      name: "Framework Laptop 13 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
      image: "https://static.frame.work/p4pbvfiu128s84oplq2jjhtf7n0i",
      description:
        "13-inch modular laptop with customizable expansion cards, bezels, and keyboard layouts.",
      price: 1199,
      isAvailable: false,
    },
    {
      id: 5,
      name: "Framework Laptop 16",
      image: "https://static.frame.work/vhz9cwchzrgaz4le82wlqv6ca87a",
      description:
        "16-inch performance laptop with upgradeable GPU, memory, and storage for years to come.",
      price: 1699,
      isAvailable: true,
    },
    {
      id: 6,
      name: "Framework Laptop 12",
      image: "https://static.frame.work/nv9uvkh89deoqihnlnu8vs28agt4",
      description:
        "12-inch compact laptop — every part is replaceable with just the one tool in the box.",
      price: 849,
      isAvailable: false,
    },
    {
      id: 7,
      name: "Framework Laptop 13",
      image: "https://static.frame.work/v1d1q33fcehes9p3ujfj6atumc75",
      description:
        "13-inch modular laptop with customizable expansion cards, bezels, and keyboard layouts.",
      price: 1099,
      isAvailable: true,
    },
    {
      id: 8,
      name: "Framework Laptop 16",
      image: "https://static.frame.work/3tn9i090bln2ml3aowtzoj381jy5",
      description:
        "16-inch performance laptop with upgradeable GPU, memory, and storage for years to come.",
      price: 1699,
      isAvailable: true,
    },
    {
      id: 9,
      name: "Framework Laptop 12",
      image: "https://static.frame.work/5k5bmp0edunqm861pn6sidt7tbwo",
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
            className="col-12 col-sm-6 col-lg-4 product-card mb-5"
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
