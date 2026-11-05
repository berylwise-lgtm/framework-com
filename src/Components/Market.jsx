import ProductCard from "./ProductCard";

// Accept cart and addToCart as props from App
function Market({ cart, addToCart }) {
  const products = [
    // ... (Keep all your product data here exactly the same)
    {
      id: 1,
      name: "Framework Laptop 12 (Intel® Core™ Series 3)",
      image: "https://static.frame.work/vnhapdfuirbckad88ctfkwlb0hjg",
      description: "13-inch modular laptop...",
      price: 699,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Framework Laptop 12 DIY Edition (Intel® Core™ Series 3)",
      image: "https://static.frame.work/dmgr8ou5tmk5podprsmlm0wlq9vw",
      description: "16-inch performance laptop...",
      price: 549,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Framework Laptop 13 Pro DIY Edition (AMD Ryzen™ AI 300 Series)",
      image: "https://static.frame.work/u2h7dlre8cgys5k97odeo4gqjd0v",
      description: "12-inch compact laptop...",
      price: 1399,
      isAvailable: false,
    },
    {
      id: 4,
      name: "Framework Laptop 13 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
      image: "https://static.frame.work/p4pbvfiu128s84oplq2jjhtf7n0i",
      description: "13-inch modular laptop...",
      price: 1199,
      isAvailable: false,
    },
    {
      id: 5,
      name: "Framework Laptop 16",
      image: "https://static.frame.work/vhz9cwchzrgaz4le82wlqv6ca87a",
      description: "16-inch performance laptop...",
      price: 1699,
      isAvailable: true,
    },
  ];

  // Calculate total from the cart passed down from App
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
            // Use the addToCart function passed from App
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
