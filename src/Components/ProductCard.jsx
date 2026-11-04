function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;